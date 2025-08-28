"use client";

import React, { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import menuItems from "../lib/menuItems";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import {
  MdOutlineShoppingCartCheckout,
  MdRemoveShoppingCart,
} from "react-icons/md";
import Img from "../../../public/3.png";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import emailjs from "@emailjs/browser";

function CartPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [cart, setCart] = useState([]);
  const [ready, setReady] = useState(false);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);

  useEffect(() => {
    // Load cart from localStorage ONLY on mount
    try {
      const raw = localStorage.getItem("bk_menu_cart");
      const parsed = raw ? JSON.parse(raw) : [];
      console.log(parsed, "parsed");
      setCart(parsed);
    } catch (e) {
      setCart([]);
    } finally {
      setReady(true);
    }
  }, []);

  // Check for successful payment and send confirmation email
  useEffect(() => {
    const success = searchParams.get("success");
    const sessionId = searchParams.get("session_id");

    if (success === "true" && sessionId) {
      console.log(success, "success");
      console.log(sessionId, "sessionId");

      // Get the order data from localStorage (stored before checkout)
      const orderData = localStorage.getItem("checkout_order_data");
      console.log(orderData, "orderData");
      if (orderData) {
        const parsedOrderData = JSON.parse(orderData);
        sendOrderConfirmationEmail(parsedOrderData);

        // Clear the stored order data and cart
        localStorage.removeItem("checkout_order_data");
        localStorage.removeItem("bk_menu_cart");
        setCart([]);
      }
    }
  }, [searchParams]);

  const sendOrderConfirmationEmail = async (orderData) => {
    try {
      // EmailJS configuration - replace with your actual credentials
      const serviceId = "service_paetrdp";
      const templateId = "template_rieg2wv"; // Different template for order confirmation
      const publicKey = "SX_qc7I7aoXuZ2rte";

      // Format order items for email
      const orderItemsText = orderData.items.map(
        (item) =>
          `${item.name} ${
            item.selectedOption ? `(${item.selectedOption})` : ""
          } - Qty: ${item.qty} - $${(item.price * item.qty).toFixed(2)}`
      ).join("\n");

      const emailData = {
        to_email: "restaurant@example.com", // Restaurant email
        customer_email: "customer@example.com", // You might want to collect this during checkout
        order_id: orderData.sessionId || "N/A",
        order_date: new Date().toLocaleString(),
        order_items: orderItemsText,
        total_amount: `$${orderData.total.toFixed(2)}`,
        total_items: orderData.totalItems,
        payment_status: "Completed",
      };

      await emailjs.send(serviceId, templateId, emailData, publicKey);
      console.log("Order confirmation email sent successfully");

      // Show success message to user
      alert("Order confirmed! Confirmation email has been sent.");
    } catch (error) {
      console.error("Failed to send order confirmation email:", error);
      // Don't show error to user as the payment was successful
    }
  };

  // Helper function to update localStorage
  const updateLocalStorage = (newCart) => {
    try {
      localStorage.setItem("bk_menu_cart", JSON.stringify(newCart));
    } catch (e) {
      console.warn("Could not update localStorage", e);
    }
  };

  const updateQty = (cartItemId, qty) => {
    const newCart = cart
      .map((c) =>
        c.cartItemId === cartItemId ? { ...c, qty: Math.max(0, qty) } : c
      )
      .filter((c) => c.qty > 0);

    setCart(newCart);
    updateLocalStorage(newCart);
  };

  const removeItem = (cartItemId) => {
    const newCart = cart.filter((c) => c.cartItemId !== cartItemId);
    setCart(newCart);
    updateLocalStorage(newCart);
  };

  const updateOption = (cartItemId, newOption, newPrice) => {
    const newCart = cart.map((c) =>
      c.cartItemId === cartItemId
        ? { ...c, selectedOption: newOption, price: newPrice }
        : c
    );
    setCart(newCart);
    updateLocalStorage(newCart);
  };

  const clearCart = () => {
    setCart([]);
    updateLocalStorage([]);
  };

  // Helper to find menu item by id
  const findItemById = (id) => {
    return menuItems.find((item) => String(item.id) === String(id));
  };

  // Helper to get available options for an item
  const getItemOptions = (item) => {
    const options = [];

    if (item.category === "Sandwiches" && item.pitaPrice && item.wrapPrice) {
      options.push(
        { label: "Pita", price: item.price },
        { label: "Wrap", price: item.pitaPrice },
        { label: "Hero", price: item.wrapPrice }
      );
    } else if (item.lambPrice) {
      options.push(
        { label: "Chicken", price: item.price },
        { label: "Beef/Lamb", price: item.lambPrice }
      );
    } else if (item.largePrice) {
      options.push(
        { label: "Small", price: item.price },
        { label: "Large", price: item.largePrice }
      );
    } else if (item.wholePrice) {
      options.push(
        { label: "Half", price: item.price },
        { label: "Whole", price: item.wholePrice }
      );
    } else if (item.singlePrice) {
      options.push(
        { label: "Single", price: item.singlePrice },
        { label: "Double", price: item.doublePrice }
      );
    } else if (item.madara) {
      options.push(
        { label: "Regular", price: item.price },
        { label: "Madara", price: item.madara }
      );
    }

    return options;
  };

  const subtotal = cart.reduce((sum, entry) => {
    const price = Number(entry.price ?? 0);
    return sum + price * entry.qty;
  }, 0);

  if (!ready) return null;

  const handleCheckout = async () => {
    if (!cart || cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    try {
      setIsCheckoutLoading(true);

      // Prepare order data for email (store before checkout)
      const orderData = {
        items: cart.map((entry) => {
          const item = findItemById(entry.id);
          return {
            id: entry.id,
            name: item?.name || "Unknown Item",
            selectedOption: entry.selectedOption,
            qty: entry.qty,
            price: entry.price,
            category: item?.category,
          };
        }),
        total: subtotal,
        totalItems: cart.reduce((sum, entry) => sum + entry.qty, 0),
        orderDate: new Date().toISOString(),
      };

      // Store order data in localStorage for after payment success
      localStorage.setItem("checkout_order_data", JSON.stringify(orderData));

      // POST cart to server using axios
      const response = await axios.post(
        "/api/create-checkout-session",
        {
          cart: cart,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { sessionId } = response.data;

      if (!sessionId) {
        alert("Missing session id from server.");
        setIsCheckoutLoading(false);
        return;
      }

      // Add session ID to order data
      const updatedOrderData = { ...orderData, sessionId };
      localStorage.setItem("checkout_order_data", JSON.stringify(updatedOrderData));

      // Load Stripe.js and redirect
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
      );
      if (!stripe) {
        alert("Stripe failed to load.");
        setIsCheckoutLoading(false);
        return;
      }

      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) {
        console.error("redirectToCheckout error:", error);
        alert(error.message || "Failed to redirect to checkout");
      }
    } catch (err) {
      console.error("handleCheckout error:", err);

      // Handle axios error responses
      if (err.response) {
        // Server responded with error status
        const errorMessage =
          err.response.data?.error || "Server error occurred";
        alert(`Error: ${errorMessage}`);
      } else if (err.request) {
        // Request was made but no response received
        alert("Network error - please check your connection");
      } else {
        // Something else happened
        alert("An error occurred while starting checkout");
      }
    } finally {
      setIsCheckoutLoading(false);
    }
  };

  console.log(cart, "cart");

  return (
    <div
      className="min-h-screen bg-center bg-cover bg-no-repeat p-6"
      style={{
        backgroundImage: `url(${Img.src})`,
        fontFamily: "unbounded",
      }}
    >
      <div className="max-w-4xl min-h-[700px] mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-[#C98D45]/10 p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-sm font-bold flex gap-3 items-center text-[#C98D45] drop-shadow-sm">
            <FaShoppingCart className="text-[#C98D45] text-sm drop-shadow-sm" />
            Your Cart
          </h1>
          <div className="flex gap-3">
            <button
              onClick={() => router.push("/menu")}
              className="px-4 py-2 text-xs cursor-pointer border-2 border-[#C98D45] hover:text-white text-[#C98D45] bg-white/90 hover:bg-[#C98D45] flex gap-2 items-center rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
            >
              <IoMdArrowBack className="text-lg" />
              Back to Menu
            </button>
            <button
              onClick={clearCart}
              className="px-4 py-2 text-xs cursor-pointer border-2 border-[#C98D45] hover:text-white text-[#C98D45] bg-white/90 hover:bg-[#C98D45] flex gap-2 items-center rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
            >
              <MdRemoveShoppingCart className="text-lg" />
              Clear Cart
            </button>
          </div>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-16 text-gray-600">
            <div className="mb-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#C98D45]/20 to-[#C98D45]/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-12 h-12 text-[#C98D45]/50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 10-4 0v4.01"
                  />
                </svg>
              </div>
            </div>
            <p className="text-xs mb-6 font-medium text-gray-500">
              Your cart is empty.
            </p>
            <button
              onClick={() => router.push("/menu")}
              className="cursor-pointer text-xs px-8 py-3 bg-gradient-to-r from-[#C98D45] to-[#B8935A] text-white rounded-xl hover:from-[#B8935A] hover:to-[#A67B47] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-medium"
            >
              Browse Menu
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="max-h-[500px] overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-[#C98D45]/30 scrollbar-track-gray-100">
              {cart.map((entry) => {
                const item = findItemById(entry.id);

                if (!item) {
                  return (
                    <div
                      key={entry.cartItemId}
                      className="flex items-center gap-4 border-2 border-red-200 rounded-xl p-4 bg-red-50/80 backdrop-blur-sm"
                    >
                      <div className="flex-1 text-red-600 font-medium text-xs">
                        Item not found (ID: {entry.id})
                      </div>
                      <button
                        onClick={() => removeItem(entry.cartItemId)}
                        className="cursor-pointer text-xs text-red-500 hover:text-red-700 hover:underline font-medium transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  );
                }

                const options = getItemOptions(item);

                return (
                  <div
                    key={entry.cartItemId}
                    className="flex items-start gap-5 border border-[#C98D45]/20 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-[#C98D45]/40 group"
                  >
                    <div className="w-24 h-24 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src={item.img}
                        alt={item.name}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        width="96"
                        height="96"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="font-bold text-sm text-gray-800 mb-1">
                            {item.name}
                          </div>
                          <div className="text-sm text-[#C98D45]/80 font-medium bg-[#C98D45]/10 px-3 py-1 rounded-full inline-block mb-2">
                            {item.category}
                          </div>
                          {entry.selectedOption && (
                            <div className="text-xs text-[#C98D45] font-semibold bg-[#C98D45]/20 px-3 py-1 rounded-lg inline-block">
                              {entry.selectedOption}
                            </div>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-[#C98D45] text-xs drop-shadow-sm">
                            ${(Number(entry.price ?? 0) * entry.qty).toFixed(2)}
                          </div>
                          <div className="text-xs text-gray-500 font-medium">
                            ${Number(entry.price ?? 0).toFixed(2)} each
                          </div>
                        </div>
                      </div>

                      {/* Options Selection */}
                      {options.length > 0 && (
                        <div className="mb-4">
                          <label className="text-xs font-semibold text-gray-700 block mb-2">
                            Options:
                          </label>
                          <select
                            value={entry.selectedOption || options[0].label}
                            onChange={(e) => {
                              const selectedOption = options.find(
                                (opt) => opt.label === e.target.value
                              );
                              updateOption(
                                entry.cartItemId,
                                selectedOption.label,
                                selectedOption.price
                              );
                            }}
                            className="border-2 border-[#C98D45]/30 rounded-xl px-4 py-2 text-xs bg-white/90 min-w-[140px] focus:border-[#C98D45] focus:outline-none transition-colors shadow-sm hover:shadow-md font-medium"
                          >
                            {options.map((option) => (
                              <option key={option.label} value={option.label}>
                                {option.label} - ${option.price.toFixed(2)}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                          <button
                            className="cursor-pointer w-10 h-10 bg-gradient-to-br from-[#C98D45]/20 to-[#C98D45]/10 rounded-full flex items-center justify-center hover:from-[#C98D45]/30 hover:to-[#C98D45]/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-bold text-[#C98D45] text-lg"
                            onClick={() =>
                              updateQty(entry.cartItemId, entry.qty - 1)
                            }
                          >
                            -
                          </button>
                          <div className="text-xs px-4 py-2 border-2 border-[#C98D45]/30 rounded-xl min-w-[60px] text-center font-bold text-[#C98D45] bg-white/90 shadow-sm">
                            {entry.qty}
                          </div>
                          <button
                            className="cursor-pointer w-10 h-10 bg-gradient-to-br from-[#C98D45]/20 to-[#C98D45]/10 rounded-full flex items-center justify-center hover:from-[#C98D45]/30 hover:to-[#C98D45]/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-bold text-[#C98D45] text-lg"
                            onClick={() =>
                              updateQty(entry.cartItemId, entry.qty + 1)
                            }
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(entry.cartItemId)}
                          className="cursor-pointer text-sm text-red-500 hover:text-red-700 hover:underline transition-colors bg-red-50 hover:bg-red-100 px-3 py-1 rounded-lg"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-8 border-t-2 border-gradient-to-r from-[#C98D45]/20 via-[#C98D45]/40 to-[#C98D45]/20 bg-gradient-to-r from-[#C98D45]/5 via-white to-[#C98D45]/5 p-6 rounded-2xl shadow-lg">
              <div>
                <div className="text-sm text-gray-600 font-medium mb-1">
                  Total Items: {cart.reduce((sum, entry) => sum + entry.qty, 0)}
                </div>
                <div className="text-lg font-bold text-[#C98D45] drop-shadow-sm">
                  ${subtotal.toFixed(2)}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => router.push("/menu")}
                  className="text-xs cursor-pointer px-6 py-3 bg-gray-100/90 hover:bg-gray-200 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-medium text-gray-700"
                >
                  Continue Shopping
                </button>
                <button
                  onClick={handleCheckout}
                  disabled={isCheckoutLoading}
                  className="text-xs cursor-pointer flex gap-3 items-center px-8 py-3 bg-gradient-to-r from-[#C98D45] to-[#B8935A] text-white rounded-xl hover:from-[#B8935A] hover:to-[#A67B47] transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <MdOutlineShoppingCartCheckout className="text-xl" />
                  {isCheckoutLoading ? "Processing..." : "Proceed to Checkout"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CartPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CartPageContent />
    </Suspense>
  );
}