'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, User, Building, Briefcase, CheckCircle, AlertCircle, ExternalLink, Navigation, Globe, Download, PhoneIcon,} from 'lucide-react'
import { motion } from 'framer-motion'
import Layout from '@/components/layout/layout'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const result = await response.json()
        console.log('Form submitted successfully:', result)
        setIsSubmitted(true)
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            service: '',
            message: ''
          })
        }, 3000)
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      // Handle error (show error message to user)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      content: "Jl. KH. Guru Amin No.18, RT.1/RW.1, East Pejaten, Pasar Minggu, South Jakarta City, Jakarta 12510",
      action: "Open in Maps",
      link: "https://share.google/Rx6l3dgCwb7EahLhE"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+62 21 27842429",
      action: "Contact Now",
      link: "tel:+622127842429"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@akcon.co.id",
      action: "Send Email",
      link: "mailto:info@akcon.co.id"
    },
    {
      icon: Clock,
      title: "Operating Hours",
      content: "Monday - Friday: 08:00 - 17:00 WIB",
      action: null,
      link: null
    }
  ]

  const services = [
    "Site Acquisition (SITAC)",
    "Civil Mechanical Electrical (CME)",
    "Project Management",
    "Enterprise System & IT Solutions",
    "General Consultation"
  ]

  const faqs = [
    {
      question: "How long does the site acquisition process usually take?",
      answer: "The site acquisition process depends heavily on field conditions, including the complexity of the location and required permits."
    },
    {
      question: "Does AKCON handle projects outside Jakarta?",
      answer: "Yes, we serve projects across Indonesia with teams located in various regions."
    },
    {
      question: "How can I get a project quotation?",
      answer: "You can contact us through the available channels. Our team will respond within 1x24 hours."
    },
    {
      question: "Is AKCON ISO certified?,",
      answer: "Yes, we are certified with ISO 9001:2015, ISO 45001:2018, and ISO 14001:2015."
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white bg-no-repeat bg-cover" style={{ backgroundImage: "url('/media/meja2.png')" }}>
        <div className="relative h-60 lg:h-full min-h-[350px] overflow-hidden shadow-6x2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge className="mb-6 bg-blue-100 text-blue-900 border-blue-200">Contact Us</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Let’s Collaborate
              <span className="text-green-950"> for a Digital Future</span>
            </h1>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed">
             Our professional team is ready to support your telecommunications and IT infrastructure needs with the best solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-6 h-6 text-blue-900" />
                    </div>
                    <CardTitle className="text-lg text-gray-900">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-4">{info.content}</p>
                    {info.action && info.link && (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-900 hover:text-blue-800 text-sm font-medium"
                      >
                        {info.action}
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 mb-2">Send a Message</CardTitle>
                  <CardDescription className="text-gray-600">
                    Fill in your details and our team will contact you within 1x24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                      <p className="text-gray-600">Thank you for contacting us. Our team will respond to your message shortly.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                              placeholder=""
                              value={formData.name}
                              onChange={(e) => handleInputChange('name', e.target.value)}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                              type="email"
                              placeholder=""
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                              placeholder=""
                              value={formData.phone}
                              onChange={(e) => handleInputChange('phone', e.target.value)}
                              className="pl-10"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company
                          </label>
                          <div className="relative">
                            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                              placeholder=""
                              value={formData.company}
                              onChange={(e) => handleInputChange('company', e.target.value)}
                              className="pl-10"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Service Needed (Choose Service)
                        </label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose Service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Send Message
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                          <Textarea
                            placeholder="Message (Describe your needs in detail…)"
                            value={formData.message}
                            onChange={(e) => handleInputChange('message', e.target.value)}
                            className="pl-10 min-h-[120px]"
                            required
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-green-950 hover:bg-green-800 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Send...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Map */}
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <Navigation className="w-5 h-5 mr-2 text-blue-900" />
                    Office Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative h-64 bg-gray-100">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0018911457473!2d106.8439494!3d-6.263479600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3003ad1a051%3A0x2bc627c896bee45b!2sPT.%20AKSES%20CONNECTING%20NUSARAYA%20(AKCON)!5e0!3m2!1sid!2sid!4v1762241736874!5m2!1sid!2sid%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade%22"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Alamat:</strong> ITS Tower 9th Floor, Jl. Raya Pasar Minggu No.18, Jakarta 12510
                    </p>
                    <a
                      href="https://maps.google.com/?q=ITS+Tower+Jakarta"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-900 hover:text-blue-800 text-sm font-medium"
                    >
                      <Globe className="w-4 h-4 mr-1" />
                      Open in Google Maps
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a
                        href="https://wa.me/622127842429"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-900 hover:text-blue-800 text-sm"
                      >
                        +62 21 27842429
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a
                        href="mailto:conection@akcon.co.id"
                        className="text-blue-900 hover:text-blue-800 text-sm"
                      >
                        conection@akcon.co.id
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common questions about our services</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <AlertCircle className="w-4 h-4 text-blue-900" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-gray-900 mb-2">{faq.question}</CardTitle>
                        <CardDescription className="text-gray-600">{faq.answer}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white mb-8">
              Get a free consultation with our expert team to discover the best solutions for your telecommunications and IT infrastructure needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
  href="/contact"
    className="flex items-center justify-center px-4 py-2 bg-[#0F3C27] text-white px-4 py-2
    rounded-lg hover:bg-[#4BAE4F] transition duration-300 ease-in-out"
  >
    <Phone className="w-5 h-5 mr-2" />
    Free Consultation
  </a>
             
             <a
  href="/media/COMPRO-PT.AKCON.pdf"
  download
    className="flex items-center justify-center px-4 py-2 bg-[#0F3C27] text-white px-4 py-2
    rounded-lg hover:bg-[#4BAE4F] transition duration-300 ease-in-out"
  >
    <Download className="w-5 h-5 mr-2" />
    Download Company Profile
  </a>
</div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}