"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import menuItems from "../../lib/menuItems"; // adjust path if needed
import { FaShoppingCart } from "react-icons/fa";

const categories = [
  "All",
  "Espresso",
  "Tea",
  "Soft Drink",
  "Sandwiches",
  "Appetizers",
  "Pizza",
  "Entrees",
  "Grilled",
  "Rotisserie",
  "Family Meal",
  "Salads",
  "Sides",
  "Beverages",
  "Desserts",
  "Breakfast",
  "Soups",
];

export default function MenuSection2() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedOptions, setSelectedOptions] = useState({}); // { [itemId]: optionLabel }

  const PREVIEW_CHARS = 300;

  // localStorage helpers
  const readCart = () => {
    try {
      const raw = localStorage.getItem("bk_menu_cart");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.warn("readCart error", e);
      return [];
    }
  };

  const writeCart = (cart) => {
    try {
      localStorage.setItem("bk_menu_cart", JSON.stringify(cart));
    } catch (e) {
      console.warn("writeCart error", e);
    }
  };

  // determine price options for an item
  const getItemOptions = (item) => {
    const options = [];

    if (item.category === "Sandwiches" && item.pitaPrice != null && item.wrapPrice != null) {
      options.push({ label: "Pita", price: item.price });
      options.push({ label: "Wrap", price: item.pitaPrice });
      options.push({ label: "Hero", price: item.wrapPrice });
    } else if (item.lambPrice != null) {
      options.push({ label: "Chicken", price: item.price });
      options.push({ label: "Beef/Lamb", price: item.lambPrice });
    } else if (item.largePrice != null) {
      options.push({ label: "Small", price: item.price });
      options.push({ label: "Large", price: item.largePrice });
    } else if (item.wholePrice != null) {
      options.push({ label: "Half", price: item.price });
      options.push({ label: "Whole", price: item.wholePrice });
    } else if (item.singlePrice != null && item.doublePrice != null) {
      options.push({ label: "Single", price: item.singlePrice });
      options.push({ label: "Double", price: item.doublePrice });
    } else if (item.madara != null) {
      options.push({ label: "Regular", price: item.price });
      options.push({ label: "Madara", price: item.madara });
    }

    return options;
  };

  // Add to cart: creates cartItemId combining id + option (if any)
  const addToCart = (item) => {
    if (!item?.id) {
      console.warn("Item missing id", item);
      return;
    }

    const options = getItemOptions(item);
    let selectedOptionLabel = null;
    let selectedPrice = Number(item.price ?? 0);

    if (options.length > 0) {
      const chosen = selectedOptions[item.id] ?? options[0].label;
      const optionData = options.find((o) => o.label === chosen) ?? options[0];
      selectedOptionLabel = optionData.label;
      selectedPrice = Number(optionData.price ?? selectedPrice);
    }

    const cart = readCart();

    // create unique cart item id to allow same item with different options
    const cartItemId = selectedOptionLabel
      ? `${item.id}-${selectedOptionLabel.toString().toLowerCase().replace(/\s+/g, "-")}`
      : String(item.id);

    const existing = cart.find((c) => c.cartItemId === cartItemId);

    let next;
    if (existing) {
      next = cart.map((c) =>
        c.cartItemId === cartItemId ? { ...c, qty: c.qty + 1 } : c
      );
    } else {
      next = [
        ...cart,
        {
          id: String(item.id),
          cartItemId,
          selectedOption: selectedOptionLabel,
          price: selectedPrice,
          qty: 1,
          name: item.name,
        },
      ];
    }

    writeCart(next);
    router.push("/cart");
  };

  // format price display (returns JSX) — use div not p to avoid invalid nesting
  const formatPrice = (item) => {
    if (!item) return null;

    if (item.category === "Sandwiches" && item.pitaPrice != null && item.wrapPrice != null) {
      return (
        <div className="space-y-1 text-xs">
          <div className="flex justify-between"><span>Pita</span><span>${Number(item.price).toFixed(2)}</span></div>
          <div className="flex justify-between"><span>Wrap</span><span>${Number(item.pitaPrice).toFixed(2)}</span></div>
          <div className="flex justify-between"><span>Hero</span><span>${Number(item.wrapPrice).toFixed(2)}</span></div>
        </div>
      );
    } else if (item.lambPrice != null) {
      return (
        <div className="space-y-1 text-xs">
          <div className="flex justify-between"><span>Chicken</span><span>${Number(item.price).toFixed(2)}</span></div>
          <div className="flex justify-between"><span>Beef/Lamb</span><span>${Number(item.lambPrice).toFixed(2)}</span></div>
        </div>
      );
    } else if (item.largePrice != null) {
      return (
        <div className="space-y-1 text-xs">
          <div className="flex justify-between"><span>Small</span><span>${Number(item.price).toFixed(2)}</span></div>
          <div className="flex justify-between"><span>Large</span><span>${Number(item.largePrice).toFixed(2)}</span></div>
        </div>
      );
    } else if (item.wholePrice != null) {
      return (
        <div className="space-y-1 text-xs">
          <div className="flex justify-between"><span>Half</span><span>${Number(item.price).toFixed(2)}</span></div>
          <div className="flex justify-between"><span>Whole</span><span>${Number(item.wholePrice).toFixed(2)}</span></div>
        </div>
      );
    } else if (item.singlePrice != null && item.doublePrice != null) {
      return (
        <div className="space-y-1 text-xs">
          <div className="flex justify-between"><span>Single</span><span>${Number(item.singlePrice).toFixed(2)}</span></div>
          <div className="flex justify-between"><span>Double</span><span>${Number(item.doublePrice).toFixed(2)}</span></div>
        </div>
      );
    } else if (item.madara != null) {
      return (
        <div className="space-y-1 text-xs">
          <div className="flex justify-between"><span>Regular</span><span>${Number(item.price).toFixed(2)}</span></div>
          <div className="flex justify-between"><span>Madara</span><span>${Number(item.madara).toFixed(2)}</span></div>
        </div>
      );
    }

    return <div className="text-xs">${Number(item.price ?? 0).toFixed(2)}</div>;
  };

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.description || "").toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#f5eadc] relative overflow-hidden" style={{ fontFamily: "unbounded" }}>
      <div className="relative z-10 max-w-6xl mx-auto px-8 py-8">
        <div className="text-center mb-8 rounded-lg p-6 mx-4">
          <h1 className="text-2xl md:text-[32px] font-normal text-black mb-3">Our Menu</h1>
          <p className="text-sm md:text-[32px] text-black mx-auto font-normal leading-relaxed">
            Explore Our Selection Of Authentic Yemeni And Turkish Dishes, Crafted To Offer You The Best Of Both Rich Traditions.
          </p>

          <div className="flex flex-wrap justify-start gap-3 mt-6 items-center">
            <div className="flex items-center bg-white rounded-full px-4 py-2 min-w-[200px]">
              <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="outline-none flex-1 py-2 text-sm bg-white w-[400px]"
              />
            </div>

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedCategory === category
                    ? "bg-[#C98D45] text-white"
                    : "bg-transparent border border-[#C98D45] cursor-pointer text-[#C98D45] hover:bg-[#B8935A] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="text-center mb-4">
          <p className="text-gray-600">
            Showing {filteredItems.length} item{filteredItems.length !== 1 ? "s" : ""}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-4 gap-8 px-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white/95 md:h-[500px] h-[480px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 justify-center h-48">
                <div className="text-center">
                  <div className="rounded-full flex items-center justify-center mb-2">
                    <Image
                      className="w-full h-[200px] object-cover"
                      src={item.img}
                      alt={item.name}
                      width={400}
                      height={200}
                    />
                  </div>
                </div>
              </div>

              <div className="p-4 flex flex-col h-[300px]">
                <span className="inline-block bg-[#C98D45] text-white text-xs px-2 py-1 rounded-full mb-2 self-start">
                  {item.category}
                </span>

                <h3 className="font-semibold text-sm mb-2 text-gray-800 uppercase">{item.name}</h3>

                {item.description && (
                  <div className="mb-3 flex-grow text-sm text-gray-600">
                    {item.description.length > PREVIEW_CHARS
                      ? `${item.description.substring(0, PREVIEW_CHARS)}...`
                      : item.description}

                    {item.description.length > PREVIEW_CHARS && (
                      <button
                        onClick={() => alert(item.description)}
                        className="ml-2 text-[#C98D45] underline text-xs"
                      >
                        Read more
                      </button>
                    )}
                  </div>
                )}

                <div className="mt-auto space-y-3">
                  <div className="text-[#C98D45] font-normal text-xs">
                    {formatPrice(item)}
                  </div>

                  {/* Option chips (if item has options) */}
                  {(() => {
                    const options = getItemOptions(item);
                    if (options.length > 0) {
                      const current = selectedOptions[item.id] ?? options[0].label;
                      return (
                        <div className="mb-3">
                          <div className="text-xs text-gray-600 mb-2 font-medium">Choose option:</div>
                          <div className="flex flex-wrap gap-2">
                            {options.map((opt) => (
                              <button
                                key={opt.label}
                                onClick={() =>
                                  setSelectedOptions((prev) => ({ ...prev, [item.id]: opt.label }))
                                }
                                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 border ${
                                  current === opt.label
                                    ? "bg-[#C98D45] text-white border-[#C98D45] shadow-md"
                                    : "bg-white text-[#C98D45] border-[#C98D45] hover:bg-[#C98D45] hover:text-white"
                                }`}
                              >
                                {opt.label}
                                {/* <span className="ml-1 text-xs opacity-90">
                                  ${Number(opt.price).toFixed(2)}
                                </span> */}
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })()}

                  <button
                    onClick={() => addToCart(item)}
                    className="w-full cursor-pointer bg-[#C98D45] text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-[#B8935A] transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                <FaShoppingCart />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No items found matching your search criteria.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="mt-4 bg-[#C98D45] text-white px-6 py-2 rounded-full hover:bg-[#B8935A] transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        <div className="h-8"></div>
      </div>
    </div>
  );
}