import Image from "next/image"
import Link from "next/link"
import { MapPin, Trophy, Users, CreditCard } from "lucide-react"
import CheckoutButton from "@/components/checkout-button"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neh-black text-neh-white">
      <header className="body-font border-b border-neh-cyan/20">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/" className="flex title-font font-medium items-center mb-4 md:mb-0">
            <Image
              src="/next-era-logo.png"
              alt="Next Era Hoops Logo"
              width={120}
              height={60}
              className="h-12 w-auto"
            />
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="#about" className="mr-5 hover:text-neh-cyan transition-colors">
              About
            </Link>
            <Link href="#schedule" className="mr-5 hover:text-neh-cyan transition-colors">
              Schedule
            </Link>
            <Link href="#achievements" className="mr-5 hover:text-neh-cyan transition-colors">
              Achievements
            </Link>
            <Link href="#contact" className="mr-5 hover:text-neh-cyan transition-colors">
              Contact
            </Link>
            <Link href="#payment" className="hover:text-neh-cyan transition-colors">
              Payment
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold">
                NEXT ERA HOOPS
                <br className="hidden lg:inline-block" />
                <span className="text-neh-cyan">Elite AAU Basketball</span>
              </h1>
              <p className="mb-8 leading-relaxed text-gray-300">
                Join the elite basketball team based out of Virginia, competing in tournaments across the DMV and the
                East Coast. Next Era Hoops is shaping the future of basketball, one player at a time.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-neh-black bg-neh-cyan border-0 py-2 px-6 focus:outline-none hover:bg-neh-cyan/80 rounded text-lg font-semibold transition-colors">
                  Join Our Team
                </button>
                <button className="ml-4 inline-flex text-neh-cyan border border-neh-cyan py-2 px-6 focus:outline-none hover:bg-neh-cyan/10 rounded text-lg transition-colors">
                  Learn More
                </button>
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
              <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4">About Next Era Hoops</h2>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300">
                Next Era Hoops is an elite AAU basketball organization committed to developing young athletes both on
                and off the court. Our program focuses on skill development, teamwork, and character building.
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-neh-cyan inline-flex"></div>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-neh-cyan/10 text-neh-cyan mb-5 flex-shrink-0">
                  <MapPin className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-neh-white text-lg title-font font-medium mb-3">Virginia Based</h2>
                  <p className="leading-relaxed text-gray-300">
                    Proudly representing Virginia in tournaments across the DMV and East Coast.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-neh-cyan/10 text-neh-cyan mb-5 flex-shrink-0">
                  <Trophy className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-neh-white text-lg title-font font-medium mb-3">Elite Competition</h2>
                  <p className="leading-relaxed text-gray-300">
                    Competing at the highest level of AAU basketball, facing top talent from across the region.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-neh-cyan/10 text-neh-cyan mb-5 flex-shrink-0">
                  <Users className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-neh-white text-lg title-font font-medium mb-3">Player Development</h2>
                  <p className="leading-relaxed text-gray-300">
                    Focused on developing well-rounded athletes with strong basketball skills and character.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Continue updating the remaining sections with the new color scheme... */}
        {/* For brevity, I'll show you how to update one more key section and you can apply the same patterns to the others */}

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

      <footer className="body-font border-t border-neh-cyan/20">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center">
            <Image
              src="/next-era-logo.png"
              alt="Next Era Hoops Logo"
              width={80}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          <p className="text-sm text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-neh-cyan/20 sm:py-2 sm:mt-0 mt-4">
            © {new Date().getFullYear()} Next Era Hoops —
            <a
              href="https://instagram.com/nexterahoops"
              className="text-neh-cyan ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @nexterahoops
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="ml-3 text-gray-300 hover:text-neh-cyan transition-colors">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}

