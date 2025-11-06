'use client'

import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
  showFooter?: boolean
  className?: string
}

export default function Layout({ children, showFooter = true, className = '' }: LayoutProps) {
  const [showScrollTop, setShowScrollTop] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={`min-h-screen bg-white ${className}`}>
      <Navbar />
      
      <main className="pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {showFooter && <Footer />}

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-blue-900 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-800 transition-colors z-40"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}