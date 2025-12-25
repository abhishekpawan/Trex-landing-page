'use client'

import { useEffect } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { motion } from 'framer-motion'

export default function TermsOfService() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-[#F1F5F9] font-sans selection:bg-[#6FAF9E] selection:text-[#0B0F1A]">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#F1F5F9] tracking-tighter mb-4">
              Terms of Service
            </h1>
            <p className="text-[#F1F5F9]/70 text-sm mb-12">
              Effective Date: 25 December 2025
            </p>

            <div className="prose prose-invert max-w-none space-y-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[#F1F5F9]/80 leading-relaxed text-lg"
              >
                These Terms of Service (&quot;Terms&quot;) govern your use of the TREX Android application operated by Novarex Studios.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[#F1F5F9]/80 leading-relaxed"
              >
                By using the App, you agree to these Terms.
              </motion.p>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#F1F5F9] mt-12 mb-6">
                  1. Description of the App
                </h2>
                <p className="text-[#F1F5F9]/80 leading-relaxed">
                  TREX is a personal portfolio tracking app that allows users to manually record and view investment information.
                </p>
                <p className="text-[#F1F5F9]/80 leading-relaxed">
                  The App:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#F1F5F9]/80 ml-4">
                  <li>Does not provide financial advice</li>
                  <li>Does not execute trades</li>
                  <li>Does not connect to banks or financial institutions</li>
                </ul>
                <p className="text-[#F1F5F9]/80 leading-relaxed mt-4">
                  All calculations are informational only.
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#F1F5F9] mt-12 mb-6">
                  2. User Responsibilities
                </h2>
                <p className="text-[#F1F5F9]/80 leading-relaxed">
                  You are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#F1F5F9]/80 ml-4 mt-3">
                  <li>The accuracy of data you enter</li>
                  <li>Keeping your account secure</li>
                  <li>Using the App lawfully</li>
                </ul>
                <p className="text-[#F1F5F9]/80 leading-relaxed mt-4">
                  We are not responsible for incorrect data entered by users.
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#F1F5F9] mt-12 mb-6">
                  3. No Financial Advice
                </h2>
                <p className="text-[#F1F5F9]/80 leading-relaxed">
                  TREX provides portfolio visualization and calculations based solely on
                  user-entered data.
                </p>
                <p className="text-[#F1F5F9]/80 leading-relaxed mt-4">
                  It does not provide &quot;investment advice&quot; as defined under SEBI regulations
                  or any other regulatory framework.
                </p>
                <p className="text-[#F1F5F9]/80 leading-relaxed mt-4">
                  All profit, loss, or return calculations are informational estimates only
                  and may not account for taxes, fees, charges, or real-time market conditions.
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#F1F5F9] mt-12 mb-6">
                  4. Account Access & Termination
                </h2>
                <ul className="list-disc list-inside space-y-2 text-[#F1F5F9]/80 ml-4">
                  <li>You may delete your account at any time.</li>
                  <li>We reserve the right to suspend or terminate access if these Terms are violated.</li>
                  <li>Upon account deletion, data handling follows our Privacy Policy.</li>
                </ul>
                <p className="text-[#F1F5F9]/80 leading-relaxed mt-4">
                  Users may delete their account and associated data directly within the App.
                  Users may also request account deletion by contacting us via the email
                  listed in this document, in accordance with Google Play&apos;s User Data
                  Deletion policy.
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#F1F5F9] mt-12 mb-6">
                  5. Data & Content Ownership
                </h2>
                <p className="text-[#F1F5F9]/80 leading-relaxed">
                  You retain ownership of all data you enter.
                </p>
                <p className="text-[#F1F5F9]/80 leading-relaxed mt-4">
                  By using the App, you grant us permission to store and process your data solely to provide the App&apos;s functionality.
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#F1F5F9] mt-12 mb-6">
                  6. Availability & Changes
                </h2>
                <p className="text-[#F1F5F9]/80 leading-relaxed">
                  We may:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#F1F5F9]/80 ml-4 mt-3">
                  <li>Modify or discontinue features</li>
                  <li>Update the App</li>
                  <li>Temporarily suspend access for maintenance</li>
                </ul>
                <p className="text-[#F1F5F9]/80 leading-relaxed mt-4">
                  We are not liable for service interruptions.
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#F1F5F9] mt-12 mb-6">
                  7. Limitation of Liability
                </h2>
                <p className="text-[#F1F5F9]/80 leading-relaxed">
                  To the maximum extent permitted by law:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#F1F5F9]/80 ml-4 mt-3">
                  <li>The App is provided &quot;as is&quot;</li>
                  <li>We are not liable for financial losses, data inaccuracies, or indirect damages arising from use of the App</li>
                </ul>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#F1F5F9] mt-12 mb-6">
                  8. Governing Law
                </h2>
                <p className="text-[#F1F5F9]/80 leading-relaxed">
                  These Terms are governed by the laws of India.
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#F1F5F9] mt-12 mb-6">
                  9. Changes to These Terms
                </h2>
                <p className="text-[#F1F5F9]/80 leading-relaxed">
                  We may update these Terms occasionally.
                  Continued use of the App constitutes acceptance of the updated Terms.
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#F1F5F9] mt-12 mb-6">
                  10. Contact
                </h2>
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-2">
                  <p className="text-[#F1F5F9]/90">
                    <span className="font-semibold">Operator:</span> Novarex Studios
                  </p>
                  <p className="text-[#F1F5F9]/90">
                    <span className="font-semibold">Email:</span>{' '}
                    <a 
                      href="mailto:novarexstudios@gmail.com" 
                      className="text-[#6FAF9E] hover:underline transition-colors"
                    >
                      novarexstudios@gmail.com
                    </a>
                  </p>
                  <p className="text-[#F1F5F9]/90">
                    <span className="font-semibold">Country:</span> India
                  </p>
                </div>
              </motion.section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

