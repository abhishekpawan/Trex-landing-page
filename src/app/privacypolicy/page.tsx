'use client'

import { useEffect } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { motion } from 'framer-motion'

export default function PrivacyPolicy() {
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
              Privacy Policy
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
                Novarex Studios (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the TREX Android application (the &quot;App&quot;).
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[#F1F5F9]/80 leading-relaxed"
              >
                Your privacy matters to us. This Privacy Policy explains what data we collect, how we use it, and the choices you have when using the App.
              </motion.p>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#F1F5F9] mt-12 mb-6">
                  1. Information We Collect
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-[#6FAF9E] mb-3">
                      a) Information You Provide
                    </h3>
                    <p className="text-[#F1F5F9]/80 leading-relaxed">
                      When you use the App, you may manually enter personal and financial information, including:
                    </p>
                    <ul className="list-disc list-inside mt-3 space-y-2 text-[#F1F5F9]/80 ml-4">
                      <li>Investment details such as asset names, amounts, dates, quantities, and notes</li>
                      <li>Any optional information you choose to add inside the app</li>
                    </ul>
                    <p className="text-[#F1F5F9]/80 leading-relaxed mt-3">
                      This data is entered by you and stored only to provide the App&apos;s functionality.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#6FAF9E] mb-3">
                      b) Account Information
                    </h3>
                    <p className="text-[#F1F5F9]/80 leading-relaxed">
                      When you sign in using Google, we collect your name and email address solely to:
                    </p>
                    <ul className="list-disc list-inside mt-3 space-y-2 text-[#F1F5F9]/80 ml-4">
                      <li>create and manage your account</li>
                      <li>authenticate access</li>
                      <li>prevent unauthorized access</li>
                    </ul>
                    <p className="text-[#F1F5F9]/80 leading-relaxed mt-3">
                      We do not use this information for marketing, advertising, or profiling.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#6FAF9E] mb-3">
                      c) Permissions
                    </h3>
                    <p className="text-[#F1F5F9]/80 leading-relaxed">
                      The App may request notification permission solely to send app-related notifications.
                      No other device permissions (such as contacts, location, storage, or phone state) are accessed.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#6FAF9E] mb-3">
                      d) Financial Functionality Disclosure
                    </h3>
                    <p className="text-[#F1F5F9]/80 leading-relaxed">
                      The App is a manual-entry portfolio tracking and visualization tool.
                      It does not provide lending, credit, brokerage, trading, or advisory services,
                      and does not facilitate financial transactions of any kind.
                    </p>
                  </div>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#F1F5F9] mt-12 mb-6">
                  2. Information We Do NOT Collect
                </h2>
                <p className="text-[#F1F5F9]/80 leading-relaxed">
                  We do not collect:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#F1F5F9]/80 ml-4">
                  <li>Bank account details</li>
                  <li>PAN, Aadhaar, or other government IDs</li>
                  <li>Payment or card information</li>
                  <li>Contacts, call logs, or messages</li>
                  <li>Location data</li>
                  <li>Device tracking or advertising identifiers</li>
                </ul>
                <p className="text-[#F1F5F9]/80 leading-relaxed mt-4">
                  The App does not link to banks or initiate financial transactions.
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#F1F5F9] mt-12 mb-6">
                  3. How We Use Your Information
                </h2>
                <p className="text-[#F1F5F9]/80 leading-relaxed">
                  Your data is used only to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#F1F5F9]/80 ml-4">
                  <li>Display and calculate your portfolio information</li>
                  <li>Maintain your user account</li>
                  <li>Improve app reliability and performance</li>
                </ul>
                <p className="text-[#F1F5F9]/80 leading-relaxed mt-4">
                  We do not sell, rent, or share your personal data for advertising or marketing purposes.
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#F1F5F9] mt-12 mb-6">
                  4. Data Storage & Security
                </h2>
                <p className="text-[#F1F5F9]/80 leading-relaxed">
                  We store user data using Supabase, a managed backend service.
                </p>
                <p className="text-[#F1F5F9]/80 leading-relaxed mt-4">
                  Data is encrypted in transit using HTTPS. We implement reasonable
                  administrative and technical safeguards to protect user data.
                </p>
                <p className="text-[#F1F5F9]/80 leading-relaxed mt-4">
                  The App is designed for non-sensitive, manually entered information.
                  Users are strictly advised not to store sensitive personal data such as
                  government-issued IDs, bank credentials, or payment information, which
                  the App does not request or require.
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#F1F5F9] mt-12 mb-6">
                  5. Data Retention & Account Deletion
                </h2>
                <ul className="list-disc list-inside space-y-2 text-[#F1F5F9]/80 ml-4">
                  <li>You can delete your account at any time from within the App.</li>
                  <li>Upon deletion, your data is removed from active systems.</li>
                  <li>Some data may remain in secure backups for up to 12 months, after which it is permanently deleted.</li>
                  <li>This retention is solely for operational, security, and recovery purposes.</li>
                </ul>
                <p className="text-[#F1F5F9]/80 leading-relaxed mt-4">
                  Users who no longer have access to the App may request account and data
                  deletion through our web-based request form at:{' '}
                  <a 
                    href="https://forms.gle/2eZfKNBf4abce14GA" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6FAF9E] hover:underline transition-colors"
                  >
                    https://forms.gle/2eZfKNBf4abce14GA
                  </a>.
                </p>
                <p className="text-[#F1F5F9]/80 leading-relaxed mt-4">
                  Requests submitted through this form will be processed in accordance
                  with this Privacy Policy.
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#F1F5F9] mt-12 mb-6">
                  6. Third-Party Services
                </h2>
                <p className="text-[#F1F5F9]/80 leading-relaxed">
                  The App uses:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#F1F5F9]/80 ml-4 mt-3">
                  <li>Google Sign-In for authentication</li>
                  <li>Supabase for backend services</li>
                </ul>
                <p className="text-[#F1F5F9]/80 leading-relaxed mt-4">
                  These services process data according to their own privacy policies.
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#F1F5F9] mt-12 mb-6">
                  7. Children&apos;s Privacy
                </h2>
                <p className="text-[#F1F5F9]/80 leading-relaxed">
                  The App is not intended for children under the age of 13.
                  We do not knowingly collect personal data from children.
                  If such data is identified, it will be deleted.
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#F1F5F9] mt-12 mb-6">
                  8. Your Rights
                </h2>
                <p className="text-[#F1F5F9]/80 leading-relaxed">
                  You may:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#F1F5F9]/80 ml-4 mt-3">
                  <li>Access your data</li>
                  <li>Correct your data</li>
                  <li>Delete your account and associated data</li>
                </ul>
                <p className="text-[#F1F5F9]/80 leading-relaxed mt-4">
                  All of this can be done directly within the App.
                </p>
                <p className="text-[#F1F5F9]/80 leading-relaxed mt-4">
                  You have the right to withdraw your consent for the processing of your
                  personal data at any time.
                </p>
                <p className="text-[#F1F5F9]/80 leading-relaxed mt-4">
                  Because the App&apos;s core functionality depends on processing your data,
                  withdrawal of consent will result in the deletion of your account and all
                  associated data. Withdrawal of consent can be initiated by deleting your
                  account within the App or by contacting us at{' '}
                  <a 
                    href="mailto:novarexstudios@gmail.com" 
                    className="text-[#6FAF9E] hover:underline transition-colors"
                  >
                    novarexstudios@gmail.com
                  </a>.
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#F1F5F9] mt-12 mb-6">
                  9. Changes to This Policy
                </h2>
                <p className="text-[#F1F5F9]/80 leading-relaxed">
                  We may update this Privacy Policy from time to time.
                  Changes will be reflected in the App with an updated effective date.
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#F1F5F9] mt-12 mb-6">
                  10. Contact Us
                </h2>
                <p className="text-[#F1F5F9]/80 leading-relaxed mb-4">
                  If you have questions about this Privacy Policy:
                </p>
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-2">
                  <p className="text-[#F1F5F9]/90">
                    <span className="font-semibold">Operator:</span> Novarex Studios
                  </p>
                  <p className="text-[#F1F5F9]/90">
                    <span className="font-semibold">Country:</span> India
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

