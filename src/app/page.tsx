import Image from "next/image"
import Link from "next/link"
import { Trophy, CreditCard, GraduationCap, PersonStanding } from "lucide-react"
import CheckoutButton from "@/components/checkout-button"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-neh-black text-neh-white font-eurostile">
      <main className="flex-grow">
        <section className="body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-3xl text-2xl mb-4 font-bold">
                The Future of Hoops Starts Now.
                <br className="hidden lg:inline-block" />
                <span className="sm:text-4xl text-3xl text-neh-cyan">Welcome to the NEXT ΞRA.</span>
              </h1>
              <p className="mb-8 leading-relaxed text-gray-300">
                NEXT ΞRA Hoops is an elite AAU travel basketball program proudly serving Northern Virginia, Washington,
                D.C., and Maryland. Our mission is to develop the next generation of athletes by instilling a mindset of
                excellence, resilience, and relentless work ethic—on and off the court.
              </p>
              <div className="flex justify-center">
                <Link
                  href="#contact"
                  className="inline-flex text-neh-black bg-neh-cyan border-0 py-2 px-6 focus:outline-none hover:bg-neh-cyan/80 rounded text-lg font-semibold transition-colors"
                >
                  Join Our Team
                </Link>
                <Link
                  href="#about"
                  className="ml-4 inline-flex text-neh-cyan border border-neh-cyan py-2 px-6 focus:outline-none hover:bg-neh-cyan/10 rounded text-lg transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image
                className="object-cover object-center rounded"
                alt="Next Era Hoops Team"
                src="/next-era-logo-horizontal.png"
                width={720}
                height={600}
              />
            </div>
          </div>
        </section>

        <section id="about" className="body-font bg-neh-black/50">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4">About NEXT ΞRA Hoops</h2>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300">
                NEXT ΞRA Hoops is an elite AAU travel basketball program proudly serving Northern Virginia, Washington,
                D.C., and Maryland. We believe in pushing limits, embracing the grind, and preparing players to compete
                at the highest level.
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-neh-cyan inline-flex"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="purpose" className="body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4">Our Purpose</h2>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300">
                NEXT ΞRA Hoops was founded for players who aspire to compete at the highest levels of youth basketball.
                We don't just teach the game; we inspire growth on and off the court. Our goal is to develop not only
                exceptional athletes but also outstanding individuals. We emphasize intensity, teamwork, discipline,
                dedication, and, most importantly, the love of the game. These core values are critical for success in
                basketball and life beyond the court.
              </p>
            </div>
          </div>
        </section>

        <section id="philosophy" className="body-font bg-neh-black/50">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4">Player Development Philosophy</h2>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300">
                At NEXT ΞRA, we focus on holistic development. Our coaching staff is committed to refining each player's
                skills, basketball IQ, and physical fitness while nurturing character, leadership, and sportsmanship.
              </p>
            </div>
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div className="border-2 border-neh-cyan px-4 py-6 rounded-lg">
                  <Trophy className="text-neh-cyan w-12 h-12 mb-3 inline-block" />
                  <h2 className="title-font font-medium text-3xl text-neh-white">High-Level Competition</h2>
                  <p className="leading-relaxed">Preparing athletes to excel in competitive environments.</p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div className="border-2 border-neh-cyan px-4 py-6 rounded-lg">
                  <GraduationCap className="text-neh-cyan w-12 h-12 mb-3 inline-block" />
                  <h2 className="title-font font-medium text-3xl text-neh-white">Academic Excellence</h2>
                  <p className="leading-relaxed">Players are expected to maintain strong academic performance.</p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div className="border-2 border-neh-cyan px-4 py-10 rounded-lg">
                  <PersonStanding className="text-neh-cyan w-12 h-12 mb-3 inline-block" />
                  <h2 className="title-font font-medium text-3xl text-neh-white">Life Skills</h2>
                  <p className="leading-relaxed">Instilling values that translate beyond basketball.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-neh-white">Get in Touch</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">
                Interested in joining or supporting NEXT ΞRA Hoops? Contact us at Contact@NextEraHoops.org. Let's build
                the NEXT ΞRA together.
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-neh-black bg-neh-cyan border-0 py-2 px-8 focus:outline-none hover:bg-neh-cyan/80 rounded text-lg">
                    <Link href="mailto:contact@nexterahoops.org">
                      Email Us
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="payment" className="body-font border-t border-neh-cyan/20">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4">Payment Portal</h2>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-300">
                Securely pay for team fees, tournament registrations, or equipment using our online payment system.
              </p>
            </div>
            <div className="flex flex-wrap -m-4 text-center justify-center">
              <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div className="border-2 border-neh-cyan/20 px-4 py-6 rounded-lg bg-neh-black/50 hover:border-neh-cyan transition-colors">
                  <CreditCard className="text-neh-cyan w-12 h-12 mb-3 inline-block" />
                  <h2 className="title-font font-medium text-3xl mb-3">Secure Payments</h2>
                  <p className="leading-relaxed mb-3 text-gray-300">Pay securely using Stripe</p>
                  <CheckoutButton />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

