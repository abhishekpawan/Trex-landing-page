import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage, { Section, Sub, List } from '@/components/layout/LegalPage'
import { CONTACT_EMAIL, PRIVACY_UPDATED } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy | Trex',
  description: 'What Trex keeps on your phone, what leaves it, who sees it, and how to delete it.',
  alternates: { canonical: '/privacypolicy' },
}

const a = 'text-accent underline underline-offset-4 hover:text-accent/80'

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated={`For Trex 2.0 · Last updated ${PRIVACY_UPDATED}`}
      intro={
        <>
          <p>
            Trex is an app by Novarex Studios, India (“we”, “us”). It helps you see your investments in one place. This policy
            says what Trex keeps on your phone, what leaves it, who can see it and how to delete it.
          </p>
          <p>
            The app has the same list in plain words: <strong>Settings → What leaves your phone</strong>. If the two ever differ, tell us.
          </p>
        </>
      }
    >
      <Section title="The short version">
        <List
          items={[
            'Your portfolio lives on your phone, in an encrypted database. We can’t see what you own.',
            'You can use Trex with no account. Signing in with Google is only for backup.',
            'A backup is encrypted on your phone with a key only you hold. We store the encrypted copy and can’t read it.',
            'Prices come to your phone straight from AMFI and BSE. They don’t learn what you hold.',
            'Anonymous usage stats are on by default and one tap turns them off. They never carry amounts, names or banks.',
            'We don’t sell your data, share it for advertising, or show ads.',
          ]}
        />
      </Section>

      <Section title="1. What stays on your phone">
        <p>These are never sent to us in a form we can read. With backup on, they travel only inside your encrypted backup (section 2):</p>
        <List
          items={[
            'Your holdings, transactions, amounts, net worth and history. They are stored in an encrypted database on your phone. The key to that database is kept by Android’s secure storage and never leaves the phone.',
            'Your statements (CAS). A statement PDF is opened and read on your phone and is not uploaded. Its password, often your PAN, is typed on your phone, and Trex keeps it only if you ask it to remember it, and then only inside the phone’s encrypted storage. It is never part of a backup.',
            'Your tax slab, your rough income, the notes on tax a bank deducted and savings rates you add. They are used on the phone to estimate tax. They leave the phone only inside your encrypted backup, if you turn backup on.',
            'Your reminders. They are worked out and set on your phone, with Android’s own alarms.',
          ]}
        />
      </Section>

      <Section title="2. What leaves your phone, and when">
        <Sub title="Backup and sign-in (only if you turn backup on)">
          <List
            items={[
              'Google sign-in. You choose to sign in with Google. Our server stores your email address and an account ID. We don’t store your name or photo.',
              'Your encrypted backup. Trex encrypts a copy of your portfolio on your phone and uploads it. We keep the last few versions. The size is padded so it doesn’t show how many holdings you have. We can see that an account exists, its email address, when it last backed up and roughly how large the backup is.',
              'Your backup key, locked with your recovery key. The server holds the backup key only in this locked form. Without your recovery key it is useless.',
              'A copy of your recovery key at Google. If your phone has a screen lock, Trex saves your recovery key in Google’s Block Store, which Google encrypts end to end. Google can’t read it, and neither can we. Without a screen lock, nothing is saved there.',
              'A sign-in audit log on our server, which records that a sign-in happened.',
            ]}
          />
          <p>
            You can also save an encrypted backup file yourself. It leaves your phone only if you share it or save it somewhere. If you
            lose your phone and every copy of your recovery key, nobody can open your backup, including us. We will never add a way to.
          </p>
        </Sub>

        <Sub title="Prices and settings (by themselves)">
          <List
            items={[
              'Prices. Your phone downloads the whole-market price files straight from AMFI (mutual fund NAVs) and BSE (stocks). They are the same files for everyone. AMFI and BSE see an internet address and a time, and the request looks like an ordinary browser’s. Nothing about you or what you hold is in it.',
              'After you import a statement, the phone may download month-end price files from the same sources, on Wi-Fi, to rebuild past values.',
              'A small settings file from our server, at most once a day: where the price files are, and limits such as the insurance and tax-deduction limits. The same file for everyone.',
            ]}
          />
        </Sub>

        <Sub title="Anonymous usage (on by default, one tap to turn off)">
          <p>
            While you use Trex it sends anonymous usage stats to PostHog, in the EU. They carry a random install ID made on your phone,
            the names of screens and buttons, a rough size of your portfolio (1–5, 6–20 or 21+ holdings), the app version, your phone
            model and Android version. They never carry amounts, names of holdings, banks, exact counts, your email or your tax details.
            PostHog is set not to store the IP address with the stats (the address is still seen when your phone connects, as at any server). Switch them off in <strong>Settings</strong> and nothing is sent.
          </p>
        </Sub>

        <Sub title="Error reports and feedback">
          <List
            items={[
              'Error reports, when something fails: an error code, the app version, the phone model and the install ID. Never what you typed or own. We keep them for 30 days.',
              'Feedback, when you send it: what you typed, the app version and the phone model, and your account ID if you are signed in. A diagnostic file goes only if you attach it, and you can read it first. We keep feedback for up to a year.',
            ]}
          />
        </Sub>

        <Sub title="Buying Trex Plus">
          <p>
            Google Play takes the payment and we never see your card. RevenueCat, a service that keeps track of purchases, receives a
            random ID (its own if you are a guest, or your account ID once you sign in) and what you bought: the plan, the dates and
            the renewal. Never your portfolio, names or holdings. When you delete your account, we ask RevenueCat to delete your
            customer record.
          </p>
        </Sub>

        <Sub title="The big-move alert (only if you switch it on)">
          <p>
            If you switch on <strong>Big moves</strong>, your phone registers with Google’s push service (Firebase Cloud Messaging) and
            subscribes to one topic that is the same for every phone. Google sees a Firebase installation ID and push token for your
            phone and that it subscribed. We see nothing: there is no list of phones. Each trading day we send one identical message;
            your phone then fetches the public prices, works out the move on the phone and shows a notification only if your chosen
            percentage was crossed. The move and your choice never leave the phone. Before you switch it on, none of this happens.
            Switching it off, deleting your data or deleting your account unsubscribes the phone.
          </p>
        </Sub>

        <Sub title="An earlier waiting list">
          <p>
            Before November 2026 a few people left their email address on this website to get the app. Those addresses are kept on our own
            server, for that one purpose only. We delete yours if you ask: write to the address at the end of this page.
          </p>
        </Sub>

        <Sub title="Websites you open, and files you share">
          <p>
            “Get your statement” opens other companies’ sites (MF Central, CAMS, CDSL, NSDL) in your browser. What you type there goes
            to them, not to us. A file you export, such as an Excel sheet, is a plain copy of your portfolio. It leaves your phone only
            if you share it, and then it is out of our hands.
          </p>
        </Sub>

        <Sub title="Server logs">
          <p>
            Our server and the services in front of it (Cloudflare handles web traffic to our server) see your internet address when
            your phone connects. We keep access logs for a short time to run the service and stop abuse. We use a one-way, daily-changing
            fingerprint of the address, not the address itself, to limit repeated requests.
          </p>
        </Sub>
      </Section>

      <Section title="3. What we do not collect">
        <List
          items={[
            'Your PAN, Aadhaar, phone number or bank account details. Trex never asks for them. There is no bank link, no Account Aggregator, and no reading of SMS or email.',
            'Your card or payment details. Google Play handles them.',
            'Your contacts, call logs, messages or location.',
            'Advertising IDs or hardware IDs such as the Android ID or IMEI. The only ID Trex makes is a random install ID.',
          ]}
        />
        <p>Trex asks to show notifications so it can show your reminders. It does not use your contacts, messages or location.</p>
      </Section>

      <Section title="4. How we use it, and who else is involved">
        <p>
          We use what we receive to run backup, restore, purchases and the optional alert, to keep the app working and fix errors, and
          to see which parts of the app are used. We don’t sell, rent or share your data for advertising or marketing, and Trex has no ads.
        </p>
        <p>These services handle data for us, each under its own privacy policy:</p>
        <List
          items={[
            'Google: sign-in, Block Store, Google Play (purchases) and Firebase Cloud Messaging (only if you switch on Big moves).',
            'PostHog (EU): anonymous usage stats.',
            'RevenueCat: purchases.',
            'Our own server, a virtual machine at a cloud hosting provider, with Cloudflare in front of it, holds your encrypted backup, feedback and error reports. This website is hosted by Netlify.',
          ]}
        />
      </Section>

      <Section title="5. Keeping and deleting your data">
        <List
          items={[
            <>
              <strong>On your phone:</strong> <strong>Settings → Delete all data</strong> erases your holdings, settings and keys on the phone, and keeps only your choice about usage stats and the public price files. Uninstalling
              the app removes everything.
            </>,
            <>
              <strong>Your account:</strong> <strong>Settings → Backup &amp; key → Delete account and backup</strong>, or see{' '}
              <Link href="/delete-account" className={a}>
                Delete your account
              </Link>
              , deletes your sign-in account, your encrypted backup and all its versions, the locked backup key, feedback you sent while
              signed in, and the sign-in audit log. We also ask RevenueCat to delete your customer record.
            </>,
            'Our server keeps its own backup copies: daily ones for 30 days and weekly ones for 8 weeks. A deleted backup is still in them, in its encrypted form, until they expire, so within 8 weeks it is gone from all of them.',
            'Anonymous usage stats stay. They carry a random install ID, never your email or anything about your portfolio, and carry no email or account ID.',
            'Google Play keeps its own record of any purchase, under Google’s rules.',
            'Error reports are deleted after 30 days and feedback after a year.',
          ]}
        />
        <Sub title="If you used Trex 1.x">
          <p>
            Trex 1.x kept your holdings on our server in a form we could read. That data is deleted as Trex 2.0 replaces it, together with old
            accounts that have not signed in to Trex 2.0. Our server’s older backup copies may still hold it for up to 8 weeks, and then it rolls off. Trex 2.0 doesn’t use
            any of it. If you want a copy first, write to us before then.
          </p>
        </Sub>
      </Section>

      <Section title="6. Your choices">
        <List
          items={[
            'Use Trex without an account and without backup.',
            'Switch anonymous usage stats off in Settings, at any time.',
            'Export everything to Excel, or to an encrypted backup file.',
            'Delete your data on the phone, or your account, from the app.',
            <>
              Ask us to access, correct or delete your data, or withdraw your consent, by writing to{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className={a}>
                {CONTACT_EMAIL}
              </a>
              . Since the portfolio is on your phone, most of this you can do in the app yourself. Withdrawing consent for backup means
              deleting your account.
            </>,
          ]}
        />
      </Section>

      <Section title="7. How we protect it, and what we can’t">
        <p>
          Your portfolio is encrypted on your phone, your backup is encrypted before it leaves, and connections to our server use HTTPS.
          We can’t protect you from malware or a rooted phone, from someone who has your phone unlocked or knows its PIN, from someone who
          has both your Google account and your phone’s screen lock, or who has your recovery key, or from files you export and share.
          A screenshot of the recovery key screen is blocked on Android, but a photo of the screen is not.
        </p>
      </Section>

      <Section title="8. Children">
        <p>Trex is not meant for anyone under 18. We don’t knowingly collect data from children, and will delete it if we find it.</p>
      </Section>

      <Section title="9. Changes to this policy">
        <p>
          We may update this policy. The date at the top changes when we do, and if a change affects what leaves your phone, the app’s{' '}
          <strong>What leaves your phone</strong> screen changes with it.
        </p>
      </Section>

      <Section title="10. Contact">
        <p>Operator: Novarex Studios, India</p>
        <p>
          Email:{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className={a}>
            {CONTACT_EMAIL}
          </a>
        </p>
      </Section>
    </LegalPage>
  )
}
