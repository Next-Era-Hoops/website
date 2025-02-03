"use client"

import { motion } from "framer-motion"
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
      <motion.section
          className="body-font"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
            <motion.div
              className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.h1
                className="title-font sm:text-3xl text-2xl mb-4 font-bold"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                The Future of Hoops Starts Now.
                <br className="hidden lg:inline-block" />
                <motion.span
                  className="sm:text-4xl text-3xl text-neh-cyan"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Welcome to the NEXT ΞRA.
                </motion.span>
              </motion.h1>
              <motion.p
                className="mb-8 leading-relaxed text-gray-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                NEXT ΞRA Hoops is an elite AAU travel basketball program proudly serving Northern Virginia, Washington,
                D.C., and Maryland. Our mission is to develop the next generation of athletes by instilling a mindset of
                excellence, resilience, and relentless work ethic—on and off the court.
              </motion.p>
              <motion.div
                className="flex justify-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
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
              </motion.div>
            </motion.div>
            <motion.div
              className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                className="object-cover object-center rounded"
                alt="Next Era Hoops Team"
                src="/next-era-logo-horizontal.png"
                width={720}
                height={600}
              />
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="about"
          className="body-font bg-neh-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="container px-5 py-16 mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.h2
                className="text-5xl font-bold tracking-wider mb-4 text-neh-white"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                About NEXT ΞRA Hoops
              </motion.h2>
              <motion.p
                className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                NEXT ΞRA Hoops is an elite AAU travel basketball program proudly serving Northern Virginia, Washington,
                D.C., and Maryland. We believe in pushing limits, embracing the grind, and preparing players to compete
                at the highest level.
                <br />
                We are more than just a basketball program; we are a community committed to fostering growth,
                leadership, and excellence. Our athletes are challenged to reach their full potential through structured
                training, competitive play, and mentorship. With a focus on both individual and team development, NEXT
                ΞRA Hoops provides a comprehensive basketball experience that prepares players for success at the middle
                school, high school, and collegiate levels.
              </motion.p>
              <motion.div
                className="flex mt-6 justify-center"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <div className="w-16 h-1 rounded-full bg-neh-cyan inline-flex"></div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          id="purpose" 
          className="body-font bg-neh-black/50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container px-5 py-24 mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2 
                className="text-5xl font-bold tracking-wider mb-4 text-neh-white"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Our Purpose
              </motion.h2>
              <motion.p 
                className="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300 mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                NEXT ΞRA Hoops was founded for players who aspire to compete at the highest levels of youth basketball. We don't
                just teach the game; we inspire growth on and off the court. Our goal is to develop not only exceptional
                athletes but also outstanding individuals.
              </motion.p>
              <motion.div 
                className="w-24 h-1 bg-neh-cyan mx-auto rounded mb-16"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                { icon: Star, title: "Character Development", desc: "Build character and leadership qualities in every athlete through intensive training and mentorship." },
                { icon: Shield, title: "Culture of Excellence", desc: "Foster a culture of respect, integrity, and accountability throughout our program." },
                { icon: Users, title: "Lasting Connections", desc: "Create lifelong memories and friendships through the game of basketball." },
                { icon: Trophy, title: "Future Success", desc: "Prepare athletes for success at the next level, both academically and athletically." }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-neh-black/50 border border-neh-cyan/20 hover:border-neh-cyan transition-colors">
                    <CardHeader>
                      <item.icon className="w-12 h-12 text-neh-cyan mb-4" />
                      <CardTitle className="text-2xl font-bold text-neh-white">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-gray-300">{item.desc}</CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="philosophy" 
          className="body-font bg-neh-black/50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container px-5 py-16 mx-auto">
            <motion.div 
              className="text-center mb-20"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2 
                className="text-5xl font-bold tracking-wider mb-4 text-neh-white"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Player Development Philosophy
              </motion.h2>
              <motion.p 
                className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                At NEXT ΞRA, we focus on holistic development. Our coaching staff is committed to refining each player&apos;s
                skills, basketball IQ, and physical fitness while nurturing character, leadership, and sportsmanship.
              </motion.p>
              <motion.div 
                className="w-24 h-1 mt-6 bg-neh-cyan mx-auto rounded"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.div>

            <div className="flex flex-wrap -m-4">
              {[
                { icon: Trophy, title: "High-Level Competition", desc: "Preparing athletes to excel in competitive environments." },
                { icon: GraduationCap, title: "Academic Excellence", desc: "Players are expected to maintain strong academic performance." },
                { icon: PersonStanding, title: "Life Skills", desc: "Instilling values that translate beyond basketball." },
                { icon: Brain, title: "Mental Toughness", desc: "Teaching athletes how to handle pressure, overcome adversity, and maintain a competitive mindset." }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="p-4 md:w-1/2 w-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="border-2 border-neh-cyan px-4 py-6 rounded-lg h-full flex flex-col">
                    <item.icon className="text-neh-cyan w-12 h-12 mb-3 inline-block" />
                    <h2 className="title-font font-medium text-3xl text-neh-white">{item.title}</h2>
                    <p className="leading-relaxed flex-grow">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="who-we-serve" 
          className="body-font bg-neh-black/50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container px-5 py-24 mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2 
                className="text-5xl font-bold tracking-wider mb-4 text-neh-white"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Who We Serve
              </motion.h2>
              <motion.p 
                className="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300 mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We work with dedicated athletes from 6U to 18U, offering opportunities to compete in top-tier
                tournaments across the East Coast.
              </motion.p>
              <motion.div 
                className="w-24 h-1 bg-neh-cyan mx-auto rounded"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.div>

            <div className="flex flex-wrap -m-4">
              {[
                { icon: Trophy, title: "Development Teams", age: "6U-10U", desc: "Focused on fundamental skill development, learning the basics of team play, and understanding the pace of competitive basketball." },
                { icon: Award, title: "Regional Teams", age: "11U-14U", desc: "Competing in local and regional tournaments, these teams focus on advanced skill development and strategic play." },
                { icon: Star, title: "Premier Circuit Teams", age: "13U-18U", desc: "For athletes with prior travel basketball experience, competing at the highest level in national showcases and exposure events. These teams are designed to help players gain visibility for college recruitment." }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="p-4 md:w-1/3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="h-full bg-neh-black/50 border border-neh-cyan/20 hover:border-neh-cyan transition-colors">
                    <CardHeader>
                      <item.icon className="w-12 h-12 text-neh-cyan mb-4" />
                      <CardTitle className="text-2xl font-bold text-neh-white">{item.title}</CardTitle>
                      <div className="text-neh-cyan font-semibold">{item.age}</div>
                    </CardHeader>
                    <CardContent className="text-gray-300">{item.desc}</CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="coaching" 
          className="body-font"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container px-5 py-24 mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2 
                className="text-5xl font-bold tracking-wider mb-4 text-neh-white"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Coaching and Player Safety
              </motion.h2>
              <motion.p 
                className="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300 mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Player safety is one of our top priorities. NEXT ΞRA continually reviews and updates policies, programs,
                and training to ensure the safety of our players.
              </motion.p>
              <motion.div 
                className="w-24 h-1 bg-neh-cyan mx-auto rounded"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: Shield, title: "Background Screening", desc: "Comprehensive screenings through national, state, and local criminal databases and sex offender registries." },
                { icon: CheckCircle, title: "Safety Certifications", desc: "Concussion Awareness and Prevention training and certification for all staff members." },
                { icon: Shield, title: "Abuse Prevention", desc: "Sexual Abuse Awareness and Prevention training and certification for all personnel." },
                { icon: CheckCircle, title: "Emergency Response", desc: "Adult and pediatric first aid, CPR, and AED training and certification for coaches and staff." },
                { icon: Trophy, title: "USA Basketball Certified", desc: "Our coaches are USA Basketball Gold Certified, ensuring they meet the highest standards." }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  viewport={{ once: true }}
                >
                  <item.icon className="w-8 h-8 text-neh-cyan flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-neh-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="join" 
          className="body-font"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container px-5 py-16 mx-auto">
            <motion.div 
              className="text-center mb-20"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2 
                className="text-5xl font-bold tracking-wider mb-4 text-neh-white"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Join the NEXT ΞRA
              </motion.h2>
              <motion.p 
                className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                NEXT ΞRA Hoops, Inc. is a 501(c)(3) Virginia-based non-profit organization, primarily funded through tax-deductible contributions. Whether you&apos;re a player, coach, trainer, or supporter, there are many ways to get involved. Help us shape the future of basketball.
              </motion.p>
              <motion.div 
                className="w-24 h-1 mt-6 bg-neh-cyan mx-auto rounded"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.div>
          </div>
        </motion.section>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-neh-cyan/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Contact Section */}
          <motion.section 
            id="contact" 
            className="body-font relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="container px-5 py-16 mx-auto">
              <motion.div 
                className="flex flex-col text-center w-full mb-12"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-5xl font-bold tracking-wider mb-4 text-neh-white">Get in Touch</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-xl text-gray-300">
                  Interested in joining or supporting NEXT ΞRA Hoops? Contact us at Contact@NextEraHoops.org. Let&apos;s build
                  the NEXT ΞRA together.
                </p>
              </motion.div>
              <motion.div 
                className="flex flex-wrap -m-4 text-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
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
              </motion.div>
            </div>
          </motion.section>

          {/* Payment Section */}
          <motion.section 
            id="payment" 
            className="body-font"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="container px-5 py-16 mx-auto">
              <motion.div 
                className="flex flex-col text-center w-full mb-12"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-5xl font-bold tracking-wider mb-4 text-neh-white">Payment Portal</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-xl text-gray-300">
                  Securely pay for team fees, tournament registrations, or equipment using our online payment system.
                </p>
              </motion.div>
              <motion.div 
                className="flex flex-wrap -m-4 text-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="p-4 w-full max-w-md">
                  <div className="border-2 border-neh-cyan/20 px-4 py-6 rounded-lg bg-neh-black/50 hover:border-neh-cyan transition-colors">
                    <CreditCard className="text-neh-cyan w-12 h-12 mb-3 inline-block" />
                    <h2 className="title-font font-medium text-3xl mb-3">Secure Payments</h2>
                    <p className="leading-relaxed mb-3 text-gray-300">Pay securely using Stripe.</p>
                    <CheckoutButton />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  )
}

