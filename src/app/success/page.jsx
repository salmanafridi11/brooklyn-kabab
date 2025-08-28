"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const [sessionId, setSessionId] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    const id = searchParams.get("session_id");
    if (id) {
      setSessionId(id);
      // Send email when sessionId is received
      sendOrderConfirmationEmail(id);
    }
  }, [searchParams]);

  const sendOrderConfirmationEmail = async (sessionId) => {
    try {
      // EmailJS configuration - replace with your actual credentials
      const serviceId = 'service_72ihri8';
      const templateId = 'template_5z0o5ce';
      const publicKey = 'KqCvksIHGFFtlqAry';

      // Get the order data from localStorage (stored before checkout)
      const orderData = localStorage.getItem('checkout_order_data');
      
      if (orderData) {
        const parsedOrderData = JSON.parse(orderData);
        
        // Format order items for email
        const orderItemsText = parsedOrderData.items.map(item => 
          `${item.name} ${item.selectedOption ? `(${item.selectedOption})` : ''} - Qty: ${item.qty} - $${(item.price * item.qty).toFixed(2)}`
        ).join('\n');

        const emailData = {
          to_email: 'restaurant@example.com', // Restaurant email
          customer_email: 'customer@example.com', // You might want to collect this during checkout
          order_id: sessionId || 'N/A',
          order_date: new Date().toLocaleString(),
          order_items: orderItemsText,
          total_amount: `$${parsedOrderData.total.toFixed(2)}`,
          total_items: parsedOrderData.totalItems,
          payment_status: 'Completed'
        };

        await emailjs.send(serviceId, templateId, emailData, publicKey);
        console.log('Order confirmation email sent successfully');
        setEmailSent(true);
        
        // Clear the stored order data and cart
        localStorage.removeItem('checkout_order_data');
        localStorage.removeItem('bk_menu_cart');
      }
    } catch (error) {
      console.error('Failed to send order confirmation email:', error);
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Payment Successful!
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          Your order at <span className="font-semibold">Brooklyn Kabab</span> is
          being prepared.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          {emailSent 
            ? "An email with your order details has been sent to the restaurant." 
            : "Processing your order details..."}
        </p>
     
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}