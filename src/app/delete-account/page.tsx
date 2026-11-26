import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { SUPPORT_EMAIL } from '@/lib/site'

// Google Play's "account deletion" web page for the Trex app (com.novarex.trex). Server side: Trex app repo,
// docs/backend/api.md (account_delete) and ops/server/delete-account.sh (requests that arrive by email).
export const metadata: Metadata = {
  title: 'Delete your Trex account',
  description: 'How to delete your Trex account and the data our server holds for it.',
}

const SUPPORT = SUPPORT_EMAIL
const MAILTO = `mailto:${SUPPORT}?subject=${encodeURIComponent('Delete my Trex account')}&body=${encodeURIComponent(
  'Please delete my Trex account and everything stored for it.\n\n(Send this from the Google address you use to sign in to Trex.)'
)}`

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-bold text-[#F1F5F9] mt-12 mb-2">{title}</h2>
      <div className="text-[#F1F5F9]/80 leading-relaxed space-y-3">{children}</div>
    </section>
  )
}

export default function DeleteAccount() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-[#F1F5F9] font-sans selection:bg-[#6FAF9E] selection:text-[#0B0F1A]">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#F1F5F9] tracking-tighter mb-4">Delete your Trex account</h1>
            <p className="text-[#F1F5F9]/70 text-lg">
              Trex is a portfolio tracker by Novarex Studios (Android app <span className="font-mono">com.novarex.trex</span>).
              You can delete your account and everything our server holds for it at any time.
            </p>

            <Section title="In the app">
              <p>
                Open Trex, go to <strong>Settings → Backup &amp; key → Delete account and backup</strong>, and type <strong>DELETE</strong> to
                confirm. Your account and backup are deleted at once; our server&apos;s own older copies roll off within 8 weeks (see below). A switch there lets you also remove the portfolio from the phone, or keep it on
                the phone without a backup.
              </p>
              <p className="text-[#F1F5F9]/60 text-sm">
                Still on Trex 1.x? <strong>Profile → Delete account</strong> closes the account; its data is removed for good when
                Trex 2.0 is released, or straight away if you email us as below.
              </p>
            </Section>

            <Section title="Without the app">
              <p>If you no longer have the app, email us from the Google address you signed in to Trex with:</p>
              <p>
                <a href={MAILTO} className="inline-block rounded-lg bg-[#6FAF9E] px-5 py-3 font-semibold text-[#0B0F1A] hover:opacity-90">
                  Email {SUPPORT}
                </a>
              </p>
              <p>
                Subject: &quot;Delete my Trex account&quot;. We delete the account and reply when it is done. If you
                write from a different address, we&apos;ll ask you to confirm from the account&apos;s address first, so nobody
                can delete someone else&apos;s account.
              </p>
            </Section>

            <Section title="What is deleted">
              <ul className="list-disc pl-6 space-y-2">
                <li>Your sign-in account (your email address) and the sign-in audit log for it.</li>
                <li>Your encrypted backup, every saved version, and its locked backup key. We could never read these.</li>
                <li>Feedback you sent while signed in.</li>
                <li>Your purchase record at RevenueCat (the service that tracks Trex Plus purchases). We ask RevenueCat to delete it.</li>
                <li>Any portfolio data saved on our server by Trex 1.x.</li>
              </ul>
            </Section>

            <Section title="What is kept, and for how long">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Our server&apos;s own backup copies (daily ones for 30 days, weekly ones for 8 weeks) still contain the deleted data,
                  in its encrypted form for a 2.0 backup, until they expire: within 8 weeks it is gone from all of them.
                </li>
                <li>
                  Anonymous usage statistics stay. They carry a random install number and no email, name, account ID or anything about
                  your portfolio.
                </li>
                <li>Google Play keeps its own record of any purchase, under Google&apos;s rules. If you pay for Trex Plus with a subscription, deleting your account does not cancel it: cancel it in Google Play.</li>
              </ul>
            </Section>

            <Section title="Data on your phone">
              <p>
                Your portfolio itself lives on your phone. Uninstalling Trex removes it, or use <strong>Settings → Delete all
                data</strong> to wipe it and keep the app.
              </p>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
