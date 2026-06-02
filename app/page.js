import styles from './page.module.css'

const STRIPE_LINK = 'https://buy.stripe.com/4gMdR144J6KYcmi7XWg7e05'

export default function Home() {
  return (
    <main>
      {/* NAV */}
      <nav className={styles.nav}>
        <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>📲</span>
            <span>Missed Call AI</span>
          </div>
          <a href={STRIPE_LINK} className={styles.navCta} target="_blank" rel="noopener noreferrer">
            Start Free Trial
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.badge}>🔥 $300–$2,000 per missed call — stop leaving money on the table</div>
          <h1 className={styles.heroH1}>
            Never Lose Another Customer<br/>
            <span className={styles.heroAccent}>to a Missed Call</span>
          </h1>
          <p className={styles.heroSubhead}>
            We text your missed calls back in <strong>60 seconds</strong>. They book. You get paid.
            <br/>No extra work. No lost jobs. Just revenue you were already missing.
          </p>
          <div className={styles.heroCtas}>
            <a href={STRIPE_LINK} className={styles.ctaPrimary} target="_blank" rel="noopener noreferrer">
              Start Free Trial — $400/mo
            </a>
            <a href="#how-it-works" className={styles.ctaSecondary}>
              See How It Works ↓
            </a>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>62%</span>
              <span className={styles.statLabel}>of calls go unanswered</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>85%</span>
              <span className={styles.statLabel}>won't call back again</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>$1,200</span>
              <span className={styles.statLabel}>avg job value lost</span>
            </div>
          </div>
        </div>
      </section>

      {/* DEMO MOCKUP */}
      <section className={styles.demoSection}>
        <div className="container">
          <div className={styles.demoGrid}>
            <div className={styles.demoLeft}>
              <h2>What Your Customer Sees</h2>
              <p className={styles.demoSubtext}>Within 60 seconds of a missed call, they get a real SMS — not a robot, not a voicemail. A personal message that starts a conversation.</p>
              <ul className={styles.demoPoints}>
                <li>✅ Texts from your own phone number</li>
                <li>✅ Personalized to their name</li>
                <li>✅ Booking link included automatically</li>
                <li>✅ 3-message follow-up sequence</li>
                <li>✅ Books appointments 24/7</li>
              </ul>
            </div>
            <div className={styles.demoRight}>
              <div className={styles.phoneMockup}>
                <div className={styles.phoneScreen}>
                  <div className={styles.phoneHeader}>
                    <div className={styles.phoneAvatar}>AC</div>
                    <div>
                      <div className={styles.phoneName}>ABC Plumbing</div>
                      <div className={styles.phoneStatus}>text message</div>
                    </div>
                  </div>
                  <div className={styles.messages}>
                    <div className={styles.msgIncoming}>
                      <div className={styles.msgBubbleIn}>📞 Missed Call</div>
                      <div className={styles.msgTime}>2:14 PM</div>
                    </div>
                    <div className={styles.msgOutgoing}>
                      <div className={styles.msgBubbleOut}>
                        Hi Sarah! Sorry I missed your call — this is ABC Plumbing. How can I help you today?
                      </div>
                      <div className={styles.msgTime}>2:14 PM ✓✓</div>
                    </div>
                    <div className={styles.msgIncoming}>
                      <div className={styles.msgBubbleIn}>
                        Hi! My water heater is leaking, need someone ASAP
                      </div>
                      <div className={styles.msgTime}>2:16 PM</div>
                    </div>
                    <div className={styles.msgOutgoing}>
                      <div className={styles.msgBubbleOut}>
                        Got it! I have openings today at 4pm and tomorrow at 9am. Click to book: aceplumbing.com/book
                      </div>
                      <div className={styles.msgTime}>2:16 PM ✓✓</div>
                    </div>
                    <div className={styles.msgIncoming}>
                      <div className={styles.msgBubbleIn}>✅ Appointment Booked: Today 4pm</div>
                      <div className={styles.msgTime}>2:17 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className={styles.howItWorks}>
        <div className="container">
          <div className={styles.sectionLabel}>HOW IT WORKS</div>
          <h2 className={styles.sectionH2}>Set it and forget it.<br/>Your AI works while you work.</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNum}>01</div>
              <div className={styles.stepIcon}>📞</div>
              <h3>You Miss a Call</h3>
              <p>Customer calls. You're on a job, driving, or just busy. It happens — that's why you hired us.</p>
            </div>
            <div className={styles.stepArrow}>→</div>
            <div className={styles.step}>
              <div className={styles.stepNum}>02</div>
              <div className={styles.stepIcon}>💬</div>
              <h3>AI Texts Back Instantly</h3>
              <p>Within 60 seconds, we send a friendly SMS from your number. "Hi [Name], sorry I missed you — how can I help?"</p>
            </div>
            <div className={styles.stepArrow}>→</div>
            <div className={styles.step}>
              <div className={styles.stepNum}>03</div>
              <div className={styles.stepIcon}>📅</div>
              <h3>They Book the Job</h3>
              <p>Customer replies, conversation happens, booking link goes out. Appointment lands on your calendar automatically.</p>
            </div>
            <div className={styles.stepArrow}>→</div>
            <div className={styles.step}>
              <div className={styles.stepNum}>04</div>
              <div className={styles.stepIcon}>💰</div>
              <h3>You Get Paid</h3>
              <p>Show up, do the work, get paid. A missed call that would have cost you $1,200 just turned into a booked job.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className={styles.forSection}>
        <div className="container">
          <div className={styles.sectionLabel}>BUILT FOR TRADES</div>
          <h2 className={styles.sectionH2}>If you miss calls, you need this.</h2>
          <div className={styles.tradeGrid}>
            {[
              { icon: '🔧', name: 'Plumbers', avg: '$850 avg job' },
              { icon: '❄️', name: 'HVAC', avg: '$1,200 avg job' },
              { icon: '🏠', name: 'Roofers', avg: '$6,000 avg job' },
              { icon: '⚡', name: 'Electricians', avg: '$650 avg job' },
              { icon: '🚿', name: 'Remodelers', avg: '$4,500 avg job' },
              { icon: '🌿', name: 'Landscapers', avg: '$400 avg job' },
            ].map(t => (
              <div key={t.name} className={styles.tradeCard}>
                <div className={styles.tradeIcon}>{t.icon}</div>
                <div className={styles.tradeName}>{t.name}</div>
                <div className={styles.tradeAvg}>{t.avg}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className={styles.pricing}>
        <div className="container">
          <div className={styles.sectionLabel}>PRICING</div>
          <h2 className={styles.sectionH2}>One job pays for a year.</h2>
          <div className={styles.pricingCard}>
            <div className={styles.pricingBadge}>Most Popular</div>
            <div className={styles.pricingAmount}>
              <span className={styles.pricingDollar}>$</span>
              <span className={styles.pricingNum}>400</span>
              <span className={styles.pricingPer}>/mo</span>
            </div>
            <div className={styles.pricingName}>Missed Call AI — Full Service</div>
            <ul className={styles.pricingFeatures}>
              <li>✅ Unlimited missed call follow-ups</li>
              <li>✅ AI-powered SMS conversations</li>
              <li>✅ Automatic appointment booking</li>
              <li>✅ 3-message follow-up sequence</li>
              <li>✅ Texts from YOUR phone number</li>
              <li>✅ Works with your existing calendar</li>
              <li>✅ Monthly performance report</li>
              <li>✅ Cancel anytime — no contracts</li>
            </ul>
            <a href={STRIPE_LINK} className={styles.pricingCta} target="_blank" rel="noopener noreferrer">
              Start Free Trial
            </a>
            <p className={styles.pricingNote}>14-day free trial. No credit card required to start.</p>
            <div className={styles.roiCalc}>
              <strong>ROI Calculator:</strong> Miss just 1 job/week at $800 avg = $3,200/mo lost.
              Our system pays for itself 8× over.
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF / OBJECTION HANDLING */}
      <section className={styles.objections}>
        <div className="container">
          <h2 className={styles.sectionH2}>Common Questions</h2>
          <div className={styles.faqGrid}>
            {[
              {
                q: "Will it sound like a robot?",
                a: "No. The messages are personalized, conversational, and sent from your own number. Customers think they're texting you directly."
              },
              {
                q: "What if I already have a booking system?",
                a: "We integrate with your existing calendar and booking link. We drive the conversation — your system captures the appointment."
              },
              {
                q: "How fast does the text go out?",
                a: "Under 60 seconds from the missed call. Speed is everything — studies show response time is the #1 factor in booking rate."
              },
              {
                q: "Do I need to do anything technical?",
                a: "We handle the entire setup. You give us your number and booking link. We do everything else. Takes 20 minutes to go live."
              },
              {
                q: "What if the customer already found someone else?",
                a: "That's exactly why we're fast. 78% of customers hire the first business that responds. Being first = winning the job."
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes. No contracts, no cancellation fees. Cancel from your dashboard or email us. We're confident you'll stay once you see the results."
              },
            ].map(item => (
              <div key={item.q} className={styles.faqItem}>
                <h4>{item.q}</h4>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <div className="container">
          <h2>Stop losing jobs to your voicemail.</h2>
          <p>Every missed call is a job someone else is booking right now. Let's fix that.</p>
          <a href={STRIPE_LINK} className={styles.ctaPrimary} target="_blank" rel="noopener noreferrer">
            Start Free Trial — $400/mo
          </a>
          <p className={styles.finalNote}>14-day free trial • No contracts • Setup in 20 minutes</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerInner}>
            <div className={styles.footerBrand}>
              <span className={styles.logoIcon}>📲</span>
              <span>Missed Call AI</span>
            </div>
            <div className={styles.footerText}>
              © 2026 Missed Call AI. Built for contractors who are too busy to lose business.
            </div>
            <div className={styles.footerLinks}>
              <a href={STRIPE_LINK} target="_blank" rel="noopener noreferrer">Start Trial</a>
              <a href="mailto:hello@micro-titan.com">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
