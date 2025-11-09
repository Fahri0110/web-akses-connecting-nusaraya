'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Network, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowUp,
  Building,
  Users,
  FileText,
  Briefcase
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from "next/image";


export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Services",
      items: [
        { label: "Site Acquisition", href: "/services#sitac", icon: Building },
        { label: "CME", href: "/services#cme", icon: Building },
        { label: "Project Management", href: "/services#pm", icon: Users },
        { label: "IT Solutions", href: "/services#enterprise", icon: Briefcase },
      ]
    },
    {
      title: "Company",
      items: [
        { label: "About Us", href: "/about", icon: FileText },
        { label: "Media & News", href: "/media", icon: FileText },
        { label: "Contact", href: "/contact", icon: Phone },
      ]
    },
    {
      title: "Contact Us",
      items: [
        { 
          label: "ITS Tower 9th Floor, Jl. KH. Guru Amin No.18 Pasar Minggu Jakarta 12510", 
          href: "https://maps.google.com/?q=ITS+Tower+Jakarta",
          icon: MapPin,
          external: true
        },
        { 
          label: "+62 21 27842429", 
          href: "tel:+622127842429",
          icon: Phone,
          external: true
        },
        { 
          label: "info@akcon.co.id", 
          href: "mailto:info@akcon.co.id",
          icon: Mail,
          external: true
        },
      ]
    }
  ]

  const socialLinks = [
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
  
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center space-x-2 group">
               <Image
                  src="/logo/logo.warna.kecil.png"
                  alt="AKCON Logo"
                  width={110}
                  height={110}
                  className="object-contain"
                  priority
                />
                </Link>
            
            
            <div className="flex items-center space-x-2 mb-4">
              
              
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              PT Akses Connecting Nusaraya - Connecting Innovation for the Future. 
              Driving Indonesia’s Digital Future with Unified Telecom & IT Infrastructure
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-900 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
            >
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: sectionIndex * 0.1 + itemIndex * 0.05 }}
                  >
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
                      >
                        <item.icon className="w-4 h-4 flex-shrink-0 group-hover:text-blue-400" />
                        <span className="text-sm leading-relaxed">{item.label}</span>
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
                      >
                        <item.icon className="w-4 h-4 flex-shrink-0 group-hover:text-blue-400" />
                        <span className="text-sm">{item.label}</span>
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-gray-400 text-sm"
            >
              © {currentYear} PT Akses Connecting Nusaraya. All rights reserved.
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onClick={scrollToTop}
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-900 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}