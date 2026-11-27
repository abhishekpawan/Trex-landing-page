// Questions and answers for the home page and for its FAQ structured data (search results). Keep answers plain and true to
// app/docs/marketing/claims.md; the full detail lives in the privacy policy and the Help page.
export interface FAQItem {
  question: string
  answer: string
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What is Trex?',
    answer:
      'Trex is a free Android app for keeping track of your money in India. It starts with your fixed deposits: every FD from every bank in one place, with maturity dates, interest, tax and the ₹5 lakh deposit-insurance limit. You can add your RD, PPF, EPF, NPS, gold, mutual funds and stocks too, and see your net worth.',
  },
  {
    question: 'How do I track all my FDs in one place?',
    answer:
      'Add each FD in Trex with the bank, the amount, the interest rate and the dates. Trex then lists them together, by bank and by maturity date. The next FD at the same bank takes only a few taps.',
  },
  {
    question: 'How do I know if my deposits are above the ₹5 lakh insurance limit?',
    answer:
      'Banks insure deposits up to ₹5 lakh per person per bank (DICGC). Trex adds up your FDs bank by bank and shows a bar toward that limit, with an “Over the limit” tag when a bank holds more.',
  },
  {
    question: 'Will Trex remind me when an FD matures?',
    answer:
      'Yes. Trex sends a reminder before each FD ends. When one has matured, it asks whether you renewed it or were paid out, so your list stays right.',
  },
  {
    question: 'Does Trex work out the tax on FD interest?',
    answer:
      'It gives an estimate. Pick your tax slab and Trex shows the interest your FDs have earned this financial year, the tax on it, the tax your banks have already cut (TDS) and what is left to pay. It is an estimate, not tax advice.',
  },
  {
    question: 'Do I need to link my bank account or give my PAN?',
    answer:
      'No. Trex has no bank login, and it never asks for your PAN, Aadhaar, phone number or name. You also do not need an account to start. One small note: a statement you import is often locked with your PAN as its password. You type it on your phone to open the file, and it stays there.',
  },
  {
    question: 'Can Trex see my money?',
    answer:
      'No. Your portfolio lives on your phone, in an encrypted database, and what you own is never sent to us in a form we can read. Some small things do leave your phone, like anonymous usage stats and prices being fetched. The privacy policy lists all of them.',
  },
  {
    question: 'What if I lose my phone?',
    answer:
      'If you turned on backup, sign in on your new phone and enter your recovery key, and your portfolio comes back. Trex often finds the key for you, if your old phone had a screen lock. If you lose the phone and every copy of the key, nobody can open the backup, not even us. Without backup, a lost phone means a lost portfolio.',
  },
  {
    question: 'Can I track mutual funds, stocks, PPF, EPF and NPS too?',
    answer:
      'Yes. Add FDs, RDs, PPF, EPF, NPS, gold, Post Office schemes, bonds, property and cash by hand. Mutual funds and stocks come in from a statement (CAS), with your returns per year (XIRR) and a net-worth chart.',
  },
  {
    question: 'How do I get my mutual fund or demat statement?',
    answer:
      'From CAMS or MF Central for mutual funds, and from CDSL for shares. Trex has been tried with real statements from these three. NSDL and KFintech statements may work but have not been tested with a real file. The Help page shows each one, step by step, with pictures.',
  },
  {
    question: 'How are prices updated?',
    answer:
      'Your phone downloads the day’s public prices from AMFI (fund NAVs) and BSE (stock prices) when you open Trex. They are end-of-day prices, not live ones. FDs, RDs, PPF and EPF are worked out from the rates you enter.',
  },
  {
    question: 'Is Trex free? What does Plus cost?',
    answer:
      'Trex is free, with no ads. Plus adds a portfolio for each family member, more colour themes and app icons, at ₹130 a month or ₹1,000 a year (with a 1-week free trial for new subscribers), or ₹3,000 once. Plus is sold in India through Google Play. If Plus ends, nothing is deleted.',
  },
  {
    question: 'Can I take my data out, or delete it?',
    answer:
      'Yes, both. Export everything to an Excel file for free, any time. In Settings, Delete all data clears your phone, and if you signed in for backup you can also delete your account and backup from our server. There is a page about it too: trexfolio.com/delete-account.',
  },
  {
    question: 'Does Trex collect usage data?',
    answer:
      'Yes, anonymous usage stats, on by default, with one tap in Settings to turn them off. They carry a random ID made on your phone and the names of screens and buttons. They never carry amounts, names or banks.',
  },
  {
    question: 'Who makes Trex, and is it on iPhone?',
    answer: 'Novarex Studios, in India. Trex is for Android phones and for people in India for now.',
  },
]
