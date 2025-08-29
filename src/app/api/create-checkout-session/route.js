import Stripe from "stripe";
import { NextResponse } from "next/server";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export async function POST(req) {
  try {
    const { cart } = await req.json();
    
    if (!cart || !Array.isArray(cart) || cart.length === 0) {
      return NextResponse.json({ error: "Cart is empty or invalid" }, { status: 400 });
    }

    const line_items = cart.map((entry) => {
      const unit_amount = Math.round((Number(entry.price) || 0) * 100);
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: entry.name || `Item ${entry.id || entry.cartItemId}`,
            description: entry.selectedOption || undefined,
          },
          unit_amount,
        },
        quantity: Number(entry.qty) || 1,
      };
    });

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cart`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (err) {
    console.error("create-checkout-session error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}