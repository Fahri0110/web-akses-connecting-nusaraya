'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Target, Award, Calendar, MapPin, Briefcase, Heart, Lightbulb, Shield, CheckCircle, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import Layout from '@/components/layout/layout'
import Link from 'next/link'
import Image from 'next/image'
import { Video } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously innovating to deliver the best and most up-to-date solutions in telecommunications and IT infrastructure.",
      color: "bg-blue-100 text-blue-900"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building strategic partnerships with stakeholders to achieve shared success.",
      color: "bg-green-100 text-green-900"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Upholding honesty, transparency, and business ethics in every aspect of our operations.",
      color: "bg-purple-100 text-purple-900"
    },
    {
      icon: Heart,
      title: "Social Responsibility",
      description: "Committed to sustainable development and creating a positive impact on society.",
      color: "bg-red-100 text-red-900"
    }
  ]

  const milestones = [
    {
      year: "2024",
      title: "Founding of AKCON",
      description: "PT Akses Connecting Nusantara was officially established in January 2024, focusing on telecommunications and IT infrastructure solutions.",
      icon: Calendar
    },
    {
      year: "2024",
      title: "First Project Delivered",
      description: "Completed 25+ site acquisition and CME projects for leading telecommunications operators in Indonesia.",
      icon: Briefcase
    },
    {
      year: "2024",
      title: "Service Expansion",
      description: "Launched Enterprise System & IT Solutions to accelerate digital transformation for businesses nationwide.",
      icon: Target
    }
  ]

  const team = [
    {
      name: "Deddy Amiruddin",
      role: "CEO",
      description: "Leading the company’s vision with over 24 years of experience across various industries such as Construction, Mining, Logistics, and Telecommunications.",
      avatar: "/Copilot_20251103_145031.png"
    },
    {
      name: "Arli Halvian Hakim",
      role: "Operation Director",
      description: "Managing project execution to achieve top quality standards and optimized efficiency.",
      avatar: "/Copilot_20251103_145031.png"
    },
    {
      name: "R Yudanur",
      role: "Head Of Operation & Finance",
      description: "Promoting technological innovation and digital solutions for clients’ continuously growing needs.",
      avatar: "/Copilot_20251103_145031.png"
    },
  ]

  const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management System" },
    { name: "ISO 45001:2018", description: "Occupational Health and Safety Management System" },
    { name: "ISO 14001:2015", description: "Environmental Management System" },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      
        
      <section className="relative h-[65vh] overflow-hidden">
  <video
        src="/media/semanggi-2.mp4" // ganti dengan nama video kamu
        autoPlay
        loop
        muted
        playsInline
    className="absolute top-0 left-0 w-full h-[65vh]  object-cover z-0"
  />
  <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-white text-center px-4 bg-black/40">

  <Badge className="mb-6 bg-blue-100 text-blue-900 border-blue-200">About Us</Badge>
    <h1 className="text-4xl md:text-5xl font-bold">
      PT Akses Connecting Nusaraya
    </h1>
    <p className="mt-4 text-lg md:text-xl max-w-2xl">
      Connecting Innovation to Indonesia’s Digital Future Delivering integrated telecom and IT infrastructure solutions with purpose and impact.
    </p>
  </div>
</section>


      {/* Company Profile */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Our History</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  PT AKSES CONNECTING NUSARAYA (AKCON), was established in January 2024. Starting from high trust in partnering with telecommunications service providers, both national and multinational, in developing their networks in Indonesia so that they are ready to welcome rapid dynamics and technological innovation. </p>
                <p>
                 AKCON is a company that specializes in telecommunications industry services, especially Site Acquisition (SITAC) services, CME (civil, mechanical and electrical),Project Management and Maintenance as well services of Enterprise System. We have gathered professionals in their respective fields into one strong, solid and experienced. AKCON Team who are ready to drive the company’s business wheels.</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-900">27+</div>
                  <div className="text-sm text-gray-600">Project Finished</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-900">100%</div>
                  <div className="text-sm text-gray-600">Customer Satisfaction</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-96 lg:h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="media/its.jpeg"
                  alt="AKCON Office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex items-center mb-2">
                      <MapPin className="w-5 h-5 text-blue-900 mr-2" />
                      <span className="font-semibold text-gray-900">Our Office</span>
                    </div>
                    <p className="text-gray-600">
                      ITS Tower 9th Floor, Jl. KH. Guru Amin No.18 Pasar Minggu Jakarta 12510
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission / OUR CEO */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="max-w-4xl mx-auto px-4 text-justify text-gray-800 leading-relaxed">
            <h2 className="text-2xl font-bold mb-4 text-center">Our CEO Says</h2>
            <br></br>
              <p>I am proud to present our business profile to you, our valued service users. In this profile, we would like to share the strategic steps we are taking in building partnerships with all of you, as well as convey the vision and mission that we uphold in order to achieve long-term success. Our vision is to become a dynamic and innovative company that leads in telecommunications industry services—especially in Site Acquisition (SITAC), civil, mechanical, and electrical construction, as well as project and maintenance management—while providing high satisfaction and sustainable added value for our stakeholders. We are committed to creating high-quality solutions that truly meet customer needs.</p>
            <br></br>
              <p>Our mission involves a sustainable approach to business development and operations. We prioritize continuous innovation, superior quality, and customer satisfaction as the cornerstones of our strategy. In addition, we strive to maintain strong, long-term partnerships with business partners and remain committed to fulfilling our social and environmental responsibilities. Through these strategic efforts and our strong commitment to our vision and mission, we aim to achieve sustainable growth and make a positive contribution to the communities in which we operate.</p>
            <br></br>
              <p>We thank you for the trust and support you have given to our company. Together, we believe we can build a successful future and deliver long-term value for all our stakeholders.</p>
          </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">

            
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4"> Core Values </h2>
            <p className="text-xl text-gray-600">Principles that guide every action we take</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 ${value.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <value.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Milestones in AKCON’s Growth</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <Card className="border-0 shadow-md">
                    <CardHeader>
                      <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'} mb-2`}>
                        <Badge className="bg-blue-100 text-blue-900 border-blue-200">
                          {milestone.year}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-gray-900">{milestone.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-900 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="text-center mb-12"></div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals leading the success of AKCON</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md text-center">
                  <CardHeader>
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{member.name}</CardTitle>
                    <CardDescription className="text-blue-900 font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-green-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col align-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Certification & Quality Standards</h2>
            <p className="text-xl text-blue-100">Our commitment to international quality standards</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                  <p className="text-blue-100 text-sm">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Join Us in Building a Digital Future
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let’s realize Indonesia’s digital transformation together with the professional team at AKCON.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#0F3C27] text-white border border-white px-4 py-2 rounded-lg hover:bg-[#4BAE4F] transition duration-300 ease-in-out">
                  Contact Us
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="bg-[#0F3C27] text-white border border-white px-4 py-2 rounded-lg hover:bg-[#4BAE4F] transition duration-300 ease-in-out">
                  View Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}