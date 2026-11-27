import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-bold text-ink mt-12 mb-2">{title}</h2>
      <div className="text-ink/80 leading-relaxed space-y-3">{children}</div>
    </section>
  )
}

export function Sub({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-accent mt-6">{title}</h3>
      {children}
    </div>
  )
}

export function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc pl-6 space-y-2 marker:text-accent">
      {items.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  )
}

export default function LegalPage({ title, updated, intro, children }: { title: string; updated: string; intro?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-page text-ink font-sans selection:bg-accent selection:text-page">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-ink tracking-tighter mb-4">{title}</h1>
            <p className="text-ink/70 text-sm mb-8">{updated}</p>
            {intro && <div className="text-ink/80 leading-relaxed text-lg space-y-3">{intro}</div>}
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
