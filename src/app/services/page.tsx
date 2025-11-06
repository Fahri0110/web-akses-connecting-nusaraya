'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Building, Settings, Users, Network, Shield, Cloud, BarChart3, Smartphone, Radio, HardHat, ClipboardList, Server, Lock, Database, Cpu, Wifi, Globe, Headphones, Wrench, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import Layout from '@/components/layout/layout'
import Link from 'next/link'
import Image from 'next/image'

export default function Services() {
  const [activeTab, setActiveTab] = useState("sitac")

  const services = {
    sitac: {
      title: "Site Acquisition (SITAC)",
      description: "Comprehensive services for site preparation and acquisition of telecommunications infrastructure with the highest quality standards.",
      icon: Building,
      color: "blue",
      overview: "We provide end-to-end site acquisition services to support the development of 4G and 5G networks. Our professional team has extensive experience in handling acquisition processes, negotiations, and documentation for various types of locations.",
      features: [
        "Survey and identification of strategic locations",
        "Complete permitting (PBB, IMB, etc)",
        "Lease negotiations and cooperation agreements",
        "Documentation and legal compliance",
        "Community engagement and socialization",
        "Due diligence and feasibility study"
      ],
      process: [
        { step: "1", title: "Needs Identification", description: "Client needs analysis based on coverage and capacity planning" },
        { step: "2", title: "Site Survey", description: "Technical and non-technical surveys to assess site feasibility" },
        { step: "3", title: "Licensing", description: "On-site testing and limited installation of client equipment" },
        { step: "4", title: "Negotiation", description: "Price negotiation and cooperation agreement process" },
        { step: "5", title: "Documentation", description: "Completion of all required documents and legal compliance" }
      ],
      benefits: [
        "Fast and efficient licensing process",
        "Optimal operational costs",
        "Compliance with the latest regulations",
        "Minimization of legal and commercial risks",
        "Strategic location portfolio"
      ]
    },
    cme: {
      title: "Civil Mechanical Electrical (CME)",
      description: "Telecommunications infrastructure construction services with the highest quality standards.",
      icon: Settings,
      color: "green",
      overview: "We provide comprehensive services covering all aspects of telecommunications infrastructure construction—from foundation work to full equipment installation. Using high-quality materials and skilled labor, we ensure reliable and long-lasting results.",
      features: [
        "Construction of tower foundations and structures",
        "Installation of grounding and lightning protection systems",
        "Electrical and mechanical work",
        "Installation and commissioning of equipment",
        "Quality control and testing",
        "Maintenance and troubleshooting"
      ],
      process: [
        { step: "1", title: "Design Engineering", description: "Technical planning and detailed construction design" },
        { step: "2", title: "Preparation", description: "Material, equipment, and workforce preparation" },
        { step: "3", title: "Construction", description: "Construction execution according to standards and specifications" },
        { step: "4", title: "Installation", description: "Installation of equipment and supporting systems" },
        { step: "5", title: "Testing & Commissioning", description: "Project testing and handover" }
      ],
      benefits: [
        "Guaranteed construction quality",
        "Work safety and security",
        "Time and cost efficiency",
        "Compliant with telecommunications industry standards",
        "Warranty and after-sales service"
      ]
    },
    pm: {
      title: "Project Management",
      description: "Project management for telecommunications infrastructure development with the highest quality standards.",
      icon: Users,
      color: "purple",
      overview: "Our project management team is experienced in handling telecommunications and IT infrastructure projects from planning to implementation. We apply the best methodologies to ensure projects are completed on time, within budget, and with the expected quality.",
      features: [
        "Project planning and scheduling",
        "Resource and vendor management",
        "Risk management and mitigation",
        "Quality assurance and control",
        "Progress reporting and communication",
        "Stakeholder management"
      ],
      process: [
        { step: "1", title: "Initiation", description: "Define scope, objectives, and stakeholders" },
        { step: "2", title: "Planning", description: "Detailed planning, estimation, and resource allocation" },
        { step: "3", title: "Execution", description: "Project implementation with regular monitoring" },
        { step: "4", title: "Monitoring", description: "Tracking progress, quality, and budget" },
        { step: "5", title: "Closing", description: "Evaluation, documentation, and project handover" }
      ],
      benefits: [
        "Projects completed on time",
        "Effective cost control",
        "Consistent quality of results",
        "Minimized project risks",
        "Transparency and accountability"
      ]
    },
    enterprise: {
      title: "Enterprise System & IT Solutions",
      description: "Enterprise system and information technology solutions for your company’s digital transformation.",
      icon: Network,
      color: "orange",
      overview: "We provide end-to-end IT solutions to support your company’s digital transformation. From infrastructure to business applications, we deliver integrated and scalable solutions tailored for modern business needs.",
      features: [
        "Network infrastructure and connectivity",
        "Cybersecurity and data protection",
        "Cloud computing and data center",
        "IoT solutions and digital analytics",
        "Business applications development",
        "IT consulting and advisory"
      ],
      process: [
        { step: "1", title: "Assessment", description: "Needs analysis and evaluation of existing systems" },
        { step: "2", title: "Solution Design", description: "Designing technology solutions based on business requirements" },
        { step: "3", title: "Implementation", description: "Solution deployment and system integration" },
        { step: "4", title: "Integration", description: "System integration and testing" },
        { step: "5", title: "Support", description: "Maintenance, support, training, and reporting" }
      ],
      benefits: [
        "Business operational efficiency",
        "Guaranteed data security",
        "Scalability for growth",
        "Access to the latest technology",
        "Optimal ROI"
      ]
    }
  }

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      Building: <Building className="w-6 h-6" />,
      Settings: <Settings className="w-6 h-6" />,
      Users: <Users className="w-6 h-6" />,
      Network: <Network className="w-6 h-6" />,
      Shield: <Shield className="w-6 h-6" />,
      Cloud: <Cloud className="w-6 h-6" />,
      BarChart3: <BarChart3 className="w-6 h-6" />,
      Smartphone: <Smartphone className="w-6 h-6" />,
      Radio: <Radio className="w-6 h-6" />,
      HardHat: <HardHat className="w-6 h-6" />,
      ClipboardList: <ClipboardList className="w-6 h-6" />,
      Server: <Server className="w-6 h-6" />,
      Lock: <Lock className="w-6 h-6" />,
      Database: <Database className="w-6 h-6" />,
      Cpu: <Cpu className="w-6 h-6" />,
      Wifi: <Wifi className="w-6 h-6" />,
      Globe: <Globe className="w-6 h-6" />,
      Headphones: <Headphones className="w-6 h-6" />,
      Wrench: <Wrench className="w-6 h-6" />
    }
    return icons[iconName] || <Network className="w-6 h-6" />
  }

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string, text: string, border: string } } = {
      blue: { bg: "bg-blue-100", text: "text-blue-900", border: "border-blue-200" },
      green: { bg: "bg-green-100", text: "text-green-900", border: "border-green-200" },
      purple: { bg: "bg-purple-100", text: "text-purple-900", border: "border-purple-200" },
      orange: { bg: "bg-orange-100", text: "text-orange-900", border: "border-orange-200" }
    }
    return colors[color] || colors.blue
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white bg-no-repeat bg-cover" style={{ backgroundImage: "url('/media/bingkai-kantor.jpeg')" }}>
        <div className="relative h-60 lg:h-full min-h-[350px] rounded-2xl overflow-hidden shadow-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge className="mb-6 bg-blue-100 text-blue-900 border-blue-200">Our Service

            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Integrated Digital 
              <span className="text-green-900"> Infrastructure Solution

              </span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive services to support your digital transformation and telecommunications infrastructure with the highest quality standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {Object.entries(services).map(([key, service], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className={`h-full hover:shadow-lg transition-all duration-300 border-2 cursor-pointer ${
                    activeTab === key ? 'border-blue-900 shadow-lg' : 'border-transparent shadow-md'
                  }`}
                  onClick={() => setActiveTab(key)}
                >
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 ${getColorClasses(service.color).bg} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <service.icon className={`w-8 h-8 ${getColorClasses(service.color).text}`} />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Detailed Service Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {(() => {
              const service = services[activeTab as keyof typeof services]
              const colors = getColorClasses(service.color)
              
              return (
                <div className="space-y-12">
                  {/* Service Header */}
                  <div className="text-center">
                    <div className={`w-20 h-20 ${colors.bg} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                      <service.icon className={`w-10 h-10 ${colors.text}`} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{service.overview}</p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Service Features

                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {service.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0`} />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Process */}
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Work Process</h3>
                    <div className="grid md:grid-cols-5 gap-6">
                      {service.process.map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="text-center"
                        >
                          <div className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-4 ${colors.text} font-bold`}>
                            {step.step}
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                          <p className="text-sm text-gray-600">{step.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Advantages</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {service.benefits.map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow">
                            <CardContent className="p-6 text-center">
                              <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                                <ArrowRight className={`w-6 h-6 ${colors.text}`} />
                              </div>
                              <p className="text-gray-700">{benefit}</p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })()}
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tech & Standards</h2>
            <p className="text-xl text-gray-600">We use the latest technology and the best industry standards.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Radio, title: "4G/5G Network", desc: "Latest network technology" },
              { icon: Shield, title: "ISO 27001", desc: "Information security standard" },
              { icon: Server, title: "Cloud Solutions", desc: "Scalable cloud infrastructure" },
              { icon: Globe, title: "Global Standards", desc: "International compliance" }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-0 shadow-md text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <tech.icon className="w-8 h-8 text-blue-900" />
                    </div>
                    <CardTitle className="text-lg text-gray-900">{tech.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{tech.desc}</p>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Consult your telecommunications and IT infrastructure needs with our professional team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#0F3C27] text-white  px-4 py-2 rounded-lg hover:bg-[#4BAE4F] transition duration-300 ease-in-out">
                  <Phone className="mr-2 w-5 h-5" />
                  Free Consultation
                </Button>
              </Link>
              <Button size="lg" className="bg-[#0F3C27] text-white  px-4 py-2 rounded-lg hover:bg-[#4BAE4F] transition duration-300 ease-in-out">
                <Mail className="mr-2 w-5 h-5" />
                  Request Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}