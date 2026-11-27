import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage, { Section, List } from '@/components/layout/LegalPage'
import { CONTACT_EMAIL, PRIVACY_UPDATED } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms of Service | Trex',
  description: 'The terms for using Trex, including Trex Plus and how renewals work.',
  alternates: { canonical: '/termsofservice' },
}

const a = 'text-accent underline underline-offset-4 hover:text-accent/80'

export default function TermsOfService() {
  return (
    <LegalPage
      title="Terms of Service"
      updated={`For Trex 2.0 · Last updated ${PRIVACY_UPDATED}`}
      intro={
        <p>
          These terms cover your use of the Trex app (“the App”), run by Novarex Studios, India (“we”, “us”). By using the App
          you agree to them. Our{' '}
          <Link href="/privacypolicy" className={a}>
            Privacy Policy
          </Link>{' '}
          says what happens to your data.
        </p>
      }
    >
      <Section title="1. What Trex is">
        <p>
          Trex is a tool to record and view your own investments in one place: fixed deposits, recurring deposits, PPF, EPF, NPS, gold,
          post office schemes, bonds, property, funds, stocks and other holdings. You add holdings yourself or import a statement. The
          App works out values, interest and returns on your phone. It does not connect to your bank or broker, and it does not buy,
          sell or move money.
        </p>
      </Section>

      <Section title="2. No advice">
        <List
          items={[
            'Trex gives no investment, tax or legal advice, and makes no recommendations. Trex is not a SEBI-registered investment adviser or research analyst.',
            'Every figure is an estimate worked out from what you entered or imported and from public prices. That includes interest, returns per year (XIRR), the tax estimate, advance-tax dates and the insurance-limit bar. Banks round and calculate differently, so a figure can differ from your bank’s or your tax return. Check anything that matters with your bank, the source or a qualified professional.',
            'Tax rules and limits change. Trex takes them from official sources and keeps them in a settings file that we can update, but we can’t promise they are current or right for your situation.',
          ]}
        />
      </Section>

      <Section title="3. Prices">
        <p>
          Prices and NAVs come from the public files of AMFI and BSE. They are end-of-day figures, can be late, missing or wrong, and are
          not live. Don’t use Trex for trading decisions. We have no licence from, and no partnership with, AMFI or BSE.
        </p>
      </Section>

      <Section title="4. Your data and your responsibilities">
        <List
          items={[
            'You own your data. Your portfolio is on your phone, and we don’t hold it. If you turn on backup, you let us store an encrypted copy that we can’t read, for as long as you keep the account.',
            'You are responsible for what you enter, for keeping your phone and Google account secure, and for keeping your recovery key. We can’t recover a backup without it, and nobody can. If you lose the phone and every copy of the key, the backup can’t be opened.',
            'Use Trex lawfully. Don’t try to break it, overload our servers or get into other people’s backups.',
          ]}
        />
      </Section>

      <Section title="5. Trex Plus and payments">
        <List
          items={[
            'Trex is free to use. Trex Plus is optional and adds family portfolios, colour themes and app icons.',
            'Plus is sold in India only, through Google Play, which takes the payment and sets the final price and tax. The plans are ₹130 a month, ₹1,000 a year (with a 1-week free trial for new subscribers) and a one-time founder plan of ₹3,000. The price shown in Google Play when you buy is the one that applies.',
            'A monthly or yearly subscription renews by itself at the end of each period until you cancel it. If you start with the free trial, it turns into a paid subscription at the end of the week unless you cancel before then. Cancel any time in Google Play (Payments and subscriptions → Subscriptions). Cancelling stops the next renewal, and you keep Plus until the end of the period you paid for.',
            'The founder plan is a single payment with no renewal.',
            'Refunds follow Google Play’s refund policy and the law. We don’t take your card details and can’t refund through the App.',
            'If Plus ends, nothing is deleted and export stays free. Portfolios you added for family stay on your phone and stay visible and exportable, but you can’t add to or change them until you have Plus again.',
          ]}
        />
      </Section>

      <Section title="6. Your account">
        <p>
          You don’t need an account to use Trex. An account exists only for backup. You can delete it any time in the App (
          <strong>Settings → Backup &amp; key → Delete account and backup</strong>) or as described on our{' '}
          <Link href="/delete-account" className={a}>
            delete-account page
          </Link>
          . We may suspend or close an account that breaks these terms. What happens to data on deletion is in the Privacy Policy.
        </p>
      </Section>

      <Section title="7. Changes and availability">
        <p>
          We may change, add or remove features, update the App or pause the service for maintenance. Statement websites, price sources
          and Google’s services are outside our control, and if one changes or stops, part of Trex may stop working until we adapt.
        </p>
      </Section>

      <Section title="8. Liability">
        <p>
          To the extent the law allows, the App is provided “as is”. We are not liable for financial losses, wrong, late or missing
          figures, a lost backup or indirect damages arising from using the App. Nothing in these terms limits a right you have under
          law that can’t be limited.
        </p>
      </Section>

      <Section title="9. Governing law">
        <p>These terms are governed by the laws of India.</p>
      </Section>

      <Section title="10. Changes to these terms">
        <p>We may update these terms. The date at the top changes when we do. If you keep using the App after a change, you accept it.</p>
      </Section>

      <Section title="11. Contact">
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
