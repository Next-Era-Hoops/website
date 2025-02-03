import Image from "next/image"
import Link from "next/link"
import { Trophy, CreditCard, GraduationCap, PersonStanding, Brain, Award, Star, Shield, CheckCircle, Users, Send } from "lucide-react"
import CheckoutButton from "@/components/checkout-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-neh-black text-neh-white font-eurostile">
      <main className="flex-grow">
        <section className="body-font">
          <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
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
          <div className="container px-5 py-16 mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold tracking-wider mb-4 text-neh-whit">About NEXT ΞRA Hoops</h2>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300">
                NEXT ΞRA Hoops is an elite AAU travel basketball program proudly serving Northern Virginia, Washington,
                D.C., and Maryland. We believe in pushing limits, embracing the grind, and preparing players to compete
                at the highest level.
                <br />
                We are more than just a basketball program; we are a community committed to fostering growth, leadership, and excellence. Our athletes are challenged to reach their full potential through structured training, competitive play, and mentorship. With a focus on both individual and team development, NEXT ΞRA Hoops provides a comprehensive basketball experience that prepares players for success at the middle school, high school, and collegiate levels.
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-neh-cyan inline-flex"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="purpose" className="body-font bg-neh-black/50">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold tracking-wider mb-4 text-neh-white">Our Purpose</h2>
              <p className="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300 mb-8">
                NEXT ΞRA Hoops was founded for players who aspire to compete at the highest levels of youth basketball. We don't
                just teach the game; we inspire growth on and off the court. Our goal is to develop not only exceptional
                athletes but also outstanding individuals.
              </p>
              <div className="w-24 h-1 bg-neh-cyan mx-auto rounded mb-16"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card className="bg-neh-black/50 border border-neh-cyan/20 hover:border-neh-cyan transition-colors">
                  <CardHeader>
                    <Star className="w-12 h-12 text-neh-cyan mb-4" />
                    <CardTitle className="text-2xl font-bold text-neh-white">Character Development</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    Build character and leadership qualities in every athlete through intensive training and mentorship.
                  </CardContent>
                </Card>

                <Card className="bg-neh-black/50 border border-neh-cyan/20 hover:border-neh-cyan transition-colors">
                  <CardHeader>
                    <Shield className="w-12 h-12 text-neh-cyan mb-4" />
                    <CardTitle className="text-2xl font-bold text-neh-white">Culture of Excellence</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    Foster a culture of respect, integrity, and accountability throughout our program.
                  </CardContent>
                </Card>

                <Card className="bg-neh-black/50 border border-neh-cyan/20 hover:border-neh-cyan transition-colors">
                  <CardHeader>
                    <Users className="w-12 h-12 text-neh-cyan mb-4" />
                    <CardTitle className="text-2xl font-bold text-neh-white">Lasting Connections</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    Create lifelong memories and friendships through the game of basketball.
                  </CardContent>
                </Card>

                <Card className="bg-neh-black/50 border border-neh-cyan/20 hover:border-neh-cyan transition-colors">
                  <CardHeader>
                    <Trophy className="w-12 h-12 text-neh-cyan mb-4" />
                    <CardTitle className="text-2xl font-bold text-neh-white">Future Success</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    Prepare athletes for success at the next level, both academically and athletically.
                  </CardContent>
                </Card>
              </div>

              <div className="mt-16 max-w-2xl mx-auto">
                <p className="text-lg text-gray-300">
                  We emphasize intensity, teamwork, discipline, dedication, and, most importantly, the love of the game. These
                  core values are critical for success in basketball and life beyond the court.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="philosophy" className="body-font bg-neh-black/50">
          <div className="container px-5 py-16 mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold tracking-wider mb-4 text-neh-white">Player Development Philosophy</h2>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300">
                  At NEXT ΞRA, we focus on holistic development. Our coaching staff is committed to refining each player&apos;s
                  skills, basketball IQ, and physical fitness while nurturing character, leadership, and sportsmanship.
                </p>
                <div className="w-24 h-1 mt-6 bg-neh-cyan mx-auto rounded"></div>
              </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/2 w-full">
                <div className="border-2 border-neh-cyan px-4 py-6 rounded-lg h-full flex flex-col">
                  <Trophy className="text-neh-cyan w-12 h-12 mb-3 inline-block" />
                  <h2 className="title-font font-medium text-3xl text-neh-white">High-Level Competition</h2>
                  <p className="leading-relaxed flex-grow">Preparing athletes to excel in competitive environments.</p>
                </div>
              </div>
              <div className="p-4 md:w-1/2 w-full">
                <div className="border-2 border-neh-cyan px-4 py-6 rounded-lg h-full flex flex-col">
                  <GraduationCap className="text-neh-cyan w-12 h-12 mb-3 inline-block" />
                  <h2 className="title-font font-medium text-3xl text-neh-white">Academic Excellence</h2>
                  <p className="leading-relaxed flex-grow">Players are expected to maintain strong academic performance.</p>
                </div>
              </div>
              <div className="p-4 md:w-1/2 w-full">
                <div className="border-2 border-neh-cyan px-4 py-6 rounded-lg h-full flex flex-col">
                  <PersonStanding className="text-neh-cyan w-12 h-12 mb-3 inline-block" />
                  <h2 className="title-font font-medium text-3xl text-neh-white">Life Skills</h2>
                  <p className="leading-relaxed flex-grow">Instilling values that translate beyond basketball.</p>
                </div>
              </div>
              <div className="p-4 md:w-1/2 w-full">
                <div className="border-2 border-neh-cyan px-4 py-6 rounded-lg h-full flex flex-col">
                  <Brain className="text-neh-cyan w-12 h-12 mb-3 inline-block" />
                  <h2 className="title-font font-medium text-3xl text-neh-white">Mental Toughness</h2>
                  <p className="leading-relaxed flex-grow">Teaching athletes how to handle pressure, overcome adversity, and maintain a competitive mindset.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="who-we-serve" className="body-font bg-neh-black/50">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold tracking-wider mb-4 text-neh-white">Who We Serve</h2>
              <p className="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300 mb-8">
                We work with dedicated athletes from 6U to 18U, offering opportunities to compete in top-tier
                tournaments across the East Coast.
              </p>
              <div className="w-24 h-1 bg-neh-cyan mx-auto rounded"></div>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <Card className="h-full bg-neh-black/50 border border-neh-cyan/20 hover:border-neh-cyan transition-colors">
                  <CardHeader>
                    <Trophy className="w-12 h-12 text-neh-cyan mb-4" />
                    <CardTitle className="text-2xl font-bold text-neh-white">Development Teams</CardTitle>
                    <div className="text-neh-cyan font-semibold">6U-10U</div>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    Focused on fundamental skill development, learning the basics of team play, and understanding the
                    pace of competitive basketball.
                  </CardContent>
                </Card>
              </div>
              <div className="p-4 md:w-1/3">
                <Card className="h-full bg-neh-black/50 border border-neh-cyan/20 hover:border-neh-cyan transition-colors">
                  <CardHeader>
                    <Award className="w-12 h-12 text-neh-cyan mb-4" />
                    <CardTitle className="text-2xl font-bold text-neh-white">Regional Teams</CardTitle>
                    <div className="text-neh-cyan font-semibold">11U-14U</div>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    Competing in local and regional tournaments, these teams focus on advanced skill development and
                    strategic play.
                  </CardContent>
                </Card>
              </div>
              <div className="p-4 md:w-1/3">
                <Card className="h-full bg-neh-black/50 border border-neh-cyan/20 hover:border-neh-cyan transition-colors">
                  <CardHeader>
                    <Star className="w-12 h-12 text-neh-cyan mb-4" />
                    <CardTitle className="text-2xl font-bold text-neh-white">Premier Circuit Teams</CardTitle>
                    <div className="text-neh-cyan font-semibold">13U-18U</div>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    For athletes with prior travel basketball experience, competing at the highest level in national
                    showcases and exposure events. These teams are designed to help players gain visibility for college
                    recruitment.
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="coaching" className="body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold tracking-wider mb-4 text-neh-white">Coaching and Player Safety</h2>
              <p className="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300 mb-8">
                Player safety is one of our top priorities. NEXT ΞRA continually reviews and updates policies, programs,
                and training to ensure the safety of our players.
              </p>
              <div className="w-24 h-1 bg-neh-cyan mx-auto rounded"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="flex items-start space-x-4">
                <Shield className="w-8 h-8 text-neh-cyan flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-neh-white mb-2">Background Screening</h3>
                  <p className="text-gray-300">
                    Comprehensive screenings through national, state, and local criminal databases and sex offender
                    registries.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-8 h-8 text-neh-cyan flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-neh-white mb-2">Safety Certifications</h3>
                  <p className="text-gray-300">
                    Concussion Awareness and Prevention training and certification for all staff members.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Shield className="w-8 h-8 text-neh-cyan flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-neh-white mb-2">Abuse Prevention</h3>
                  <p className="text-gray-300">
                    Sexual Abuse Awareness and Prevention training and certification for all personnel.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-8 h-8 text-neh-cyan flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-neh-white mb-2">Emergency Response</h3>
                  <p className="text-gray-300">
                    Adult and pediatric first aid, CPR, and AED training and certification for coaches and staff.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Trophy className="w-8 h-8 text-neh-cyan flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-neh-white mb-2">USA Basketball Certified</h3>
                  <p className="text-gray-300">
                    Our coaches are USA Basketball Gold Certified, ensuring they meet the highest standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="join" className="body-font">
          <div className="container px-5 py-16 mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold tracking-wider mb-4 text-neh-white">Join the NEXT ΞRA</h2>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300">
                NEXT ΞRA Hoops, Inc. is a 501(c)(3) Virginia-based non-profit organization, primarily funded through tax-deductible contributions. Whether you&apos;re a player, coach, trainer, or supporter, there are many ways to get involved. Help us shape the future of basketball.
              </p>
              <div className="w-24 h-1 mt-6 bg-neh-cyan mx-auto rounded"></div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-neh-cyan/20">
          {/* Contact Section */}
          <section id="contact" className="body-font relative">
            <div className="container px-5 py-16 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="text-5xl font-bold tracking-wider mb-4 text-neh-white">Get in Touch</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-xl text-gray-300">
                  Interested in joining or supporting NEXT ΞRA Hoops? Contact us at Contact@NextEraHoops.org. Let&apos;s build
                  the NEXT ΞRA together.
                </p>
              </div>
              <div className="flex flex-wrap -m-4 text-center justify-center">
                <div className="p-4 w-full max-w-md">
                  <div className="border-2 border-neh-cyan/20 px-4 py-6 rounded-lg bg-neh-black/50 hover:border-neh-cyan transition-colors">
                    <Send className="text-neh-cyan w-12 h-12 mb-3 inline-block" />
                    <h2 className="title-font font-medium text-3xl mb-3">Shoot Us An Email</h2>
                    <p className="leading-relaxed mb-3 text-gray-300">Reach us directly.</p>
                    <Button className="text-neh-black bg-neh-cyan border-0 py-2 focus:outline-none hover:bg-neh-cyan/80 rounded">
                      <Link href="mailto:contact@nexterahoops.org">
                        Email Us
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Section */}
          <section id="payment" className="body-font">
            <div className="container px-5 py-16 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="text-5xl font-bold tracking-wider mb-4 text-neh-white">Payment Portal</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-xl text-gray-300">
                  Securely pay for team fees, tournament registrations, or equipment using our online payment system.
                </p>
              </div>
              <div className="flex flex-wrap -m-4 text-center justify-center">
                <div className="p-4 w-full max-w-md">
                  <div className="border-2 border-neh-cyan/20 px-4 py-6 rounded-lg bg-neh-black/50 hover:border-neh-cyan transition-colors">
                    <CreditCard className="text-neh-cyan w-12 h-12 mb-3 inline-block" />
                    <h2 className="title-font font-medium text-3xl mb-3">Secure Payments</h2>
                    <p className="leading-relaxed mb-3 text-gray-300">Pay securely using Stripe.</p>
                    <CheckoutButton />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
{/* 
        <section id="contact" className="body-font relative">
          <div className="container px-5 py-16 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-neh-white">Get in Touch</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">
                Interested in joining or supporting NEXT ΞRA Hoops? Contact us at Contact@NextEraHoops.org. Let&apos;s build
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
          <div className="container px-5 py-16 mx-auto">
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
        </section> */}
      </main>
    </div>
  )
}

