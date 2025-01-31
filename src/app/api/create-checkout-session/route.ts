import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-01-27.acacia", // Use the latest API version
})

export async function POST(req: Request) {
  if (req.method === "POST") {
    try {
      const { items } = await req.json()

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: items,
        mode: "payment",
        success_url: `${req.headers.get("origin")}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.get("origin")}/canceled`,
      })

      return NextResponse.json({ sessionId: session.id })
    } catch (err: any) {
      return NextResponse.json({ statusCode: 500, message: err.message })
    }
  } else {
    return NextResponse.json({ statusCode: 405, message: "Method Not Allowed" })
  }
}

