"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import getStripe from "../utils/get-stripejs"

export default function CheckoutButton() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleCheckout = async () => {
    setLoading(true)

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: [{ price: "price_1234", quantity: 1 }] }),
      })

      if (!response.ok) throw new Error("Network response was not ok")

      const { sessionId } = await response.json()
      const stripe = await getStripe()
      const { error } = await stripe!.redirectToCheckout({ sessionId })

      if (error) {
        console.error("Stripe checkout error:", error)
        setLoading(false)
      }
    } catch (error) {
      console.error("Error in handleCheckout:", error)
      setLoading(false)
    }
  }

  return (
    <Button
      onClick={handleCheckout}
      disabled={loading}
      className="bg-neh-cyan text-neh-black hover:bg-neh-cyan/80 font-semibold"
    >
      {loading ? "Processing..." : "Pay Now"}
    </Button>
  )
}

