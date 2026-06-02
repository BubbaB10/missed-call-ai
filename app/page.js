import styles from './page.module.css'

const STRIPE_LINK = 'https://buy.stripe.com/4gMdR144J6KYcmi7XWg7e05'

function LogoSVG({ size = 32 }) {
  return (
    <svg width={size * 3.5} height={size} viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Missed Call AI">
      <rect width="36" height="36" rx="8" y="2" fill="#ff5a1f"/>
      <text x="18" y="25" textAnchor="middle" fill="white" fontSize="18" fontWeight="800" fontFamily="-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif">M</text>
      <text x="46" y="27" fill="#f0f2f5" fontSize="15" fontWeight="700" fontFamily="-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif">Missed Call</text>
      <text x="46" y="38" fill="#ff5a1f" fontSize="10" fontWeight="800" letterSpacing="2" fontFamily="-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif">AI</text>
    </svg>
  )
}

export default function Home() {
  return (
    <main>
      {/* NAV */}
      <nav className={styles.nav}>
        <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div className={styles.logo}>
            <LogoSVG size={32} />
          </div>
          <a href={STRIPE_LINK} className={styles.navCta} target="_blank" rel="noopener noreferrer">
            Start Free Trial
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.socialProofBanner}>
            <span className={styles.socialProofDot} />
            HVAC and plumbing businesses lose 35% of after-hours calls to competitors. Not anymore.
          </div>
          <h1 className={styles.heroH1}>
            Stop Losing Jobs<br/>
            <span className={styles.heroAccent}>to Voicemail.</span>
          </h1>
          <p className={styles.heroSubhead}>
            Missed Call AI texts back your customers in <strong>60 seconds</strong> — books the job, answers questions, keeps the lead warm.
            <br/>While you&apos;re on another call.
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
              <span className={styles.statLabel}>won&apos;t call back again</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>$1,200</span>
              <span className={styles.statLabel}>avg job value lost</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className={styles.trustStrip}>
        <div className="container">
          <p className={styles.trustLabel}>BUILT FOR TRADES WHO ARE TIRED OF TECH PROMISES</p>
          <div className={styles.trustItems}>
            <div className={styles.trustItem}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 1L12.39 6.26L18 7.27L14 11.14L14.76 17L10 14.27L5.24 17L6 11.14L2 7.27L7.61 6.26L10 1Z" fill="#ff5a1f"/></svg>
              <span>No tech skills required</span>
            </div>
            <div className={styles.trustItem}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 1L12.39 6.26L18 7.27L14 11.14L14.76 17L10 14.27L5.24 17L6 11.14L2 7.27L7.61 6.26L10 1Z" fill="#ff5a1f"/></svg>
              <span>Setup in 20 minutes</span>
            </div>
            <div className={styles.trustItem}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 1L12.39 6.26L18 7.27L14 11.14L14.76 17L10 14.27L5.24 17L6 11.14L2 7.27L7.61 6.26L10 1Z" fill="#ff5a1f"/></svg>
              <span>Works with your existing number</span>
            </div>
            <div className={styles.trustItem}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 1L12.39 6.26L18 7.27L14 11.14L14.76 17L10 14.27L5.24 17L6 11.14L2 7.27L7.61 6.26L10 1Z" fill="#ff5a1f"/></svg>
              <span>No contracts — cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* DEMO MOCKUP */}
      <section className={styles.demoSection}>
        <div className="container">
          <div className={styles.demoGrid}>
            <div className={styles.demoLeft}>
              <div className={styles.sectionLabel}>WHAT YOUR CUSTOMER SEES</div>
              <h2>A Real Conversation.<br/>In Under 60 Seconds.</h2>
              <p className={styles.demoSubtext}>The moment you miss a call, your customer gets a personal SMS — not a robot, not a voicemail prompt. A real message that starts a conversation and closes the job.</p>
              <ul className={styles.demoPoints}>
                <li>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="9" fill="#ff5a1f"/><path d="M5 9L7.5 11.5L13 6.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Texts from your own phone number
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="9" fill="#ff5a1f"/><path d="M5 9L7.5 11.5L13 6.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Personalized to their name
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="9" fill="#ff5a1f"/><path d="M5 9L7.5 11.5L13 6.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Booking link included automatically
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="9" fill="#ff5a1f"/><path d="M5 9L7.5 11.5L13 6.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  3-message follow-up sequence
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="9" fill="#ff5a1f"/><path d="M5 9L7.5 11.5L13 6.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Books appointments 24/7
                </li>
              </ul>
            </div>
            <div className={styles.demoRight}>
              <div className={styles.phoneMockup}>
                <div className={styles.phoneNotch} />
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
                      <div className={styles.msgBubbleIn}>Appointment Booked: Today 4pm ✅</div>
                      <div className={styles.msgTime}>2:17 PM</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.demoCaption}>
                <span className={styles.demoCaptionDot} />
                Avg response time: 47 seconds
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
              <p>Customer calls. You&apos;re on a job, driving, or just busy. It happens — that&apos;s why you hired us.</p>
            </div>
            <div className={styles.stepArrow}>→</div>
            <div className={styles.step}>
              <div className={styles.stepNum}>02</div>
              <div className={styles.stepIcon}>💬</div>
              <h3>AI Texts Back Instantly</h3>
              <p>Within 60 seconds, we send a friendly SMS from your number. &quot;Hi [Name], sorry I missed you — how can I help?&quot;</p>
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
              <li>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#ff5a1f"/><path d="M4.5 8L6.5 10L11.5 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Unlimited missed call follow-ups
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#ff5a1f"/><path d="M4.5 8L6.5 10L11.5 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                AI-powered SMS conversations
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#ff5a1f"/><path d="M4.5 8L6.5 10L11.5 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Automatic appointment booking
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#ff5a1f"/><path d="M4.5 8L6.5 10L11.5 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                3-message follow-up sequence
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#ff5a1f"/><path d="M4.5 8L6.5 10L11.5 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Texts from YOUR phone number
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#ff5a1f"/><path d="M4.5 8L6.5 10L11.5 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Works with your existing calendar
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#ff5a1f"/><path d="M4.5 8L6.5 10L11.5 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Monthly performance report
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#ff5a1f"/><path d="M4.5 8L6.5 10L11.5 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Cancel anytime — no contracts
              </li>
            </ul>
            <a href={STRIPE_LINK} className={styles.pricingCta} target="_blank" rel="noopener noreferrer">
              Start Free Trial
            </a>
            <p className={styles.pricingNote}>14-day free trial. No credit card required to start.</p>
            <div className={styles.roiCalc}>
              <strong>ROI in plain math:</strong> Miss just 1 job/week at $800 avg = $3,200/mo lost.
              This pays for itself 8× over.
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
          <p>Every missed call is a job someone else is booking right now. Let&apos;s fix that.</p>
          <a href={STRIPE_LINK} className={styles.ctaPrimary} target="_blank" rel="noopener noreferrer">
            Start Free Trial — $400/mo
          </a>
          <p className={styles.finalNote}>14-day free trial &bull; No contracts &bull; Setup in 20 minutes</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerInner}>
            <div className={styles.footerBrand}>
              <div className={styles.footerLogoMark}>M</div>
              <div>
                <div className={styles.footerBrandName}>Missed Call AI</div>
                <div className={styles.footerTagline}>A Micro Titan LLC platform</div>
              </div>
            </div>
            <div className={styles.footerText}>
              &copy; 2026 Micro Titan LLC. Built for contractors who are too busy to lose business.
            </div>
            <div className={styles.footerLinks}>
              <a href={STRIPE_LINK} target="_blank" rel="noopener noreferrer">Start Trial</a>
              <a href="mailto:greg@micro-titan.com">greg@micro-titan.com</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
