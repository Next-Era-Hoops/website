import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CheckoutButton() {

  return (
    <Button
      className="bg-neh-cyan text-neh-black hover:bg-neh-cyan/80 font-semibold"
    >
      <Link href="https://buy.stripe.com/28o29j0Z9c140yQ3cd">
        Pay Now
      </Link>
    </Button>
  )
}