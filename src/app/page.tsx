'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Phone, Mail, MapPin, ChevronRight, Building, Radio, Settings, Network, Shield, Cloud, BarChart3, Smartphone, Users, Target, Award, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Layout from '@/components/layout/layout'
import Link from 'next/link'
import Image from "next/image";


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Site Acquisition (SITAC)",
      description: "Mendukung pengembangan jaringan 4G & 5G dengan solusi site acquisition yang komprehensif",
      image: "/api/placeholder/1200/600"
    },
    {
      title: "Civil Mechanical Electrical (CME)",
      description: "Pembangunan menara telekomunikasi dengan standar kualitas tertinggi",
      image: "/api/placeholder/1200/600"
    },
    {
      title: "Enterprise System & IT Solutions",
      description: "Solusi digital terintegrasi untuk transformasi bisnis Anda",
      image: "/api/placeholder/1200/600"
    }
  ]

  const services = [
    {
      icon: Building,
      title: "Site Acquisition (SITAC)",
      description: "Supporting the development of 4G & 5G networks through comprehensive site acquisition services.",
      features: ["Site planning", "Survey dan analisis", "Negotiation services", "Complate documantation"]
    },
    {
      icon: Settings,
      title: "Civil Mechanical Electrical (CME)",
      description: "Building telecommunications infrastructure with standardized technology and quality assurance.",
      features: ["Civil construction", "Telecommunications installation", "Mechanical and electrical systems", "Maintenance"]
    },
    {
      icon: Users,
      title: "Project Management",
      description: "End-to-end project management for telecommunications and structured education initiatives.",
      features: ["Project planning", "Execution and monitoring", "Quality control", "Reporting"]
    },
    {
      icon: Network,
      title: "Enterprise System & IT Solutions",
      description: "Integrated IT solutions to drive your digital transformation.",
      features: ["Software development", "Cyber security", "Cloud & data center", "IoT & analytics"]
    }
  ]

  const stats = [
    { label: "Established year", value: "2024" },
    { label: "April 2025", value: "ISO 45001" },
    { label: "Project Complited", value: "27+" },
    { label: "Active Clients", value: "10+" }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative flex items-center justify-end h-screen overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        src="/media/panjat123.mp4" // ganti dengan nama video kamu
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* 🔲 Overlay agar teks tetap terbaca */}
      <div className="absolute inset-0 bg-black/40" />

      {/* ✨ Konten utama */}
      <motion.div
      
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 text-left text-white px-6 max-w-4xl"
    >

<h2 className="text-3xl md:text-5xl font-extrabold mb-6 pr-25 text-left">
  Connecting Innovation <br />
  for the Future
</h2>

       
        <div className="flex flex-col sm:flex-row items-center px-3 py-1 justify-start gap-4">
          <Link href="/services">
            <button  className="bg-[#0F3C27] hover:bg-[#49A942] text-white px-3 py-1 rounded-md transition-colors"
  >
              Our Services
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-transparent text-white hover:bg-[#49A942] hover:text-white px-3 py-1 rounded-md transition-colors"
  >
              Contact Us
            </button>
          </Link>
        </div>
      </motion.div>
    </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-900 border-blue-200">Our Services</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Empowering Your 
              <span className="text-green-950"> Digital Future</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, we deliver seamless end-to-end solutions that accelerate your digital transformation and strengthen your telecom infrastructure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-blue-900" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <ChevronRight className="w-4 h-4 text-blue-900 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Digital Future?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let’s talk about your telecommunications and IT infrastructure needs with our professional team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#0F3C27] text-white  px-4 py-2 rounded-lg hover:bg-[#4BAE4F] transition duration-300 ease-in-out">
                  <Phone className="mr-2 w-5 h-5" />
                  Contact Us
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" className="bg-[#0F3C27] text-white  px-4 py-2 rounded-lg hover:bg-[#4BAE4F] transition duration-300 ease-in-out">
                  <Mail className="mr-2 w-5 h-5" />
                  Email 
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}