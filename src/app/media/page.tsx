'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Calendar, Clock, User, Search, Filter, TrendingUp, Award, Building, Radio, Settings, ChevronRight, Eye, Share2, Heart, MessageCircle, Tag } from 'lucide-react'
import { motion } from 'framer-motion'
import Layout from '@/components/layout/layout'
import Link from 'next/link'
import { link } from 'fs'

export default function Media() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All", icon: TrendingUp },
    { id: "news", name: "News", icon: Building },
    { id: "projects", name: "Project", icon: Settings },
    { id: "innovation", name: "Innovation", icon: Radio },
    { id: "awards", name: "Awards", icon: Award }
  ]

  const articles = [
    {
      
      id: 1,
      title: "BPOLBF Lakukan Mou bersama Investor semesta Indo Resort dan PT AKCON",
      excerpt: "LABUAN BAJO KOMPAS.com - Kawasan Parapuar di Labuan Bajo, Kabupaten Manggarai Barat, Nusa Tenggara Timur (NTT), terus diminati para investor untuk berinvestasi.",
      category: "news",
      date: "8 Agustus 2024",
      author: "Nansianus Taris",
      image: "/media/kompas2.png",
      views: 1250,
      likes: 45,
      comments: 12,
      tags: ["SITAC", "4G", "5G", "Telekomunikasi"],
      Link: "https://travel.kompas.com/read/2024/08/08/190700327/investasi-di-parapuar-labuan-bajo-didorong-dukung-pariwisata-berkelanjutan",
      
    },
    {
      id: 2,
      title: "Perusahaan Bidang Tambang, Komunikasi dan Properti Bangun Kemitraan Strategis ",
      excerpt: "Jakarta, Gatra.com - PT Akses Connecting Nusaraya (AKCON), PT Edotco Infrastruktur Indonesia, dan PT PAM Aneka Mineral meneken kerjasama bisnis pada Jumat, (23/02) lalu, berupa penandatanganan Lease Agreement yang menjadi kesepakatan bersejarah, karena melibatkan kerjasama tiga pelaku usaha di sektor industri berbeda, yaitu sektor telekomunikasi dan pertambangan juga properti.",
      category: "news",
      author: "Ms Widodo",
      date: "24 Februari 2024",
      readTime: "",
      image: "/media/pam.png",
      views: 1560,
      likes: 92,
      comments: 15,
      tags: ["News", "Achievement", "Technology", "Recognition"],
      Link: "https://www.gatra.com/news-593400-ekonomi-perusahaan-bidang-tambang-komunikasi-dan-properti-bangun-kemitraan-strategis.html",
    },
    {
      id: 3,
      title: "Indosat Oreedo Hutchison dan PT Akses Connecting Nusaraya Tanda Tangani Perjanjian Berjasama di Bidang Enterprise",
      excerpt: "Jakarta, JurnalPost.com – Indosat Ooredoo Hutchison (IOH) dan PT Akses Connecting Nusaraya (AKCON) hari ini secara resmi melaksanakan penandatanganan perjanjian kerjasama strategis di bidang enterprise dalam sebuah acara yang di gelar di Midori Japanese Jakarta. Kerjasama ini bertujuan untuk memperkuat layanan solusi teknologi dan komunikasi bagi sektor bisnis di Indonesia.",
      category: "news",
      author: "Nadia",
      date: "15 Agustus 2024",
      image: "/media/ioh.png",
      views: 2100,
      likes: 78,
      comments: 23,
      tags: ["Partnership", "5G", "Telekomunikasi", "Nasional"],
      Link: "https://jurnalpost.com/indosat-ooredoo-hutchison-dan-pt-akses-connecting-nusaraya-tandatangani-perjanjian-kerjasama-di-bidang-enterprise/71493/",
    },
    {
      id: 4,
      title: "Kolaborasi PT AKCON dan SKYLINK",
      excerpt: "Jakarta, JurnalPost.com – PT Akses Connecting Nusaraya (AKCON) dan PT Sinergi Innovate Pratama (SKYLINK) baru saja melangkah ke fase baru kolaborasi teknologi dengan menandatangani perjanjian kerjasama strategis pada Jumat, 20 September 2024. Dalam momen ini, kedua perusahaan sepakat untuk memajukan konektivitas di Indonesia melalui pemasaran layanan internet satelit Starlink, sebuah inovasi dari SpaceX yang didirikan oleh Elon Musk.",
      category: "news",
      author: "Annisa",
      date: "21 September 2024",
      image: "/media/skylink.png",
      views: 890,
      likes: 32,
      comments: 8,
      tags: ["IoT", "Smart City", "Inovasi", "Digital"],
      Link: "https://jurnalpost.com/akcon-dan-skylink-jalin-kerjasama-strategis-digitalisasi-seluruh-negeri-dengan-starlink/72456/",
    }
  ]

  const featuredArticles = articles.slice(0, 4)

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      news: "bg-blue-100 text-blue-900 border-blue-200",
      projects: "bg-green-100 text-green-900 border-green-200",
      innovation: "bg-purple-100 text-purple-900 border-purple-200",
      awards: "bg-yellow-100 text-yellow-900 border-yellow-200"
    }
    return colors[category] || "bg-gray-100 text-gray-900 border-gray-200"
  }

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      news: <Building className="w-4 h-4" />,
      projects: <Settings className="w-4 h-4" />,
      innovation: <Radio className="w-4 h-4" />,
      awards: <Award className="w-4 h-4" />
    }
    return icons[category] || <TrendingUp className="w-4 h-4" />
  }

  return (
    <Layout>
      {/* Hero Section */}
<section
  className="relative pt-24 pb-16 bg-no-repeat bg-cover bg-center"
  style={{ backgroundImage: "url('/media/koran.jpg')" }}
>
  {/* Overlay putih transparan */}
  <div className="absolute inset-0 bg-white opacity-60"></div>

        <div className="relative h-60 lg:h-full min-h-[350px] overflow-hidden shadow-6x2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge className="mb-6 bg-blue-100 text-blue-900 border-blue-200">Media & Updates</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Latest News &
              <span className="text-green-950"> Articles</span>
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Get the latest updates on AKCON’s projects, innovations, and achievements in the telecommunications and IT industry
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-600">The most important news and updates from AKCON</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.a
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                href={article.Link}
                target="_blank"
              >
                
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md overflow-hidden group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={getCategoryColor(article.category)}>
                        <div className="flex items-center space-x-1">
                          {getCategoryIcon(article.category)}
                          <span>{categories.find(c => c.id === article.category)?.name}</span>
                        </div>
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 line-clamp-2 group-hover:text-blue-900 transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                      </div>
                     
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{article.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{article.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{article.comments}</span>
                        </div>
                        
                      </div>
                       <Button size="sm" variant="ghost" className="text-blue-900 hover:bg-blue-50 p-0 h-auto">
                        Read more
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button> </div>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles with Filters */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">All Articles</h2>
            
            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={selectedCategory === category.id ? "bg-blue-900 hover:bg-blue-800" : "border-blue-900 text-blue-900 hover:bg-blue-50"}
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.a
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                href={article.Link}
                target="_blank"
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md overflow-hidden group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className={`text-xs ${getCategoryColor(article.category)}`}>
                        {categories.find(c => c.id === article.category)?.name}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-gray-900 line-clamp-2 group-hover:text-blue-900 transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 text-sm">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <div className="flex items-center space-x-3">
                        <span>{article.date}</span>
                        
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Eye className="w-3 h-3" />
                        <span>{article.views}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {article.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-3 h-3" />
                          <span>{article.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-3 h-3" />
                          <span>{article.comments}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost" className="text-blue-900 hover:bg-blue-50 p-0 h-auto">
                        Read more
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found for search "{searchTerm}"</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-green-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest updates on projects, innovations, and industry news delivered straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Your Email"
                className="bg-white/20 border-white/20 text-white placeholder-white/60"
              />
              <Button size="lg" className="bg-[#0F3C27] text-white  px-4 py-2 rounded-lg hover:bg-[#4BAE4F] transition duration-300 ease-in-out">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}