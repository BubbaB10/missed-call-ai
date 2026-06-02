# Missed Call AI — Launch Summary
**Date:** 2026-06-01  
**Built by:** Greg (AI Operator)  
**Status:** 🟢 LIVE

---

## What's Live

### 1. Landing Page ✅
- **Live URL:** https://missed-call-ai-orpin.vercel.app
- **Preview URL:** https://missed-call-128md6q92-billywbelljr-4327s-projects.vercel.app
- **GitHub Repo:** https://github.com/BubbaB10/missed-call-ai
- **Vercel Project ID:** prj_6IkUWceiQf6jFm3jaKeLbStfIkG1
- **Deployment ID:** dpl_FcEUWo5qHHdAPu3GevXpYvsjPJcy

**Features:**
- Dark, high-conversion design targeting local trade businesses
- Hero: "Never Lose Another Customer to a Missed Call"
- Phone SMS mockup showing the conversation flow
- 4-step "How It Works" section
- Trade category cards (HVAC, Plumbing, Roofing, Electrical, Remodelers, Landscapers)
- $400/mo pricing card with ROI calculator
- FAQ / Objection handling section
- CTA → Stripe payment link throughout

### 2. Stripe Product ✅
- **Product:** Missed Call AI
- **Product ID:** prod_UcywiGbZBCPxCO
- **Price ID:** price_1TdiyZ0WIc6TWTSyVauMS8p9
- **Amount:** $400/month recurring
- **Payment Link:** https://buy.stripe.com/4gMdR144J6KYcmi7XWg7e05
- **Account:** Micro Titan LLC (acct_1TZXvx0WIc6TWTSy)

### 3. GHL Workflow (Manual Setup Required) ⚠️
- **Location:** Billy Bell (BJscUZZrDwXGRiUcwZYH)
- **API Status:** PIT token has limited scope — workflow:write not available
- **Setup Guide:** `GHL_WORKFLOW_SETUP.md` in this directory
- **Time to implement:** ~15 minutes in GHL UI
- **Templates:** 3-message sequence fully written and documented

---

## What Needs to Happen Next

### Immediate (Do These Today)
1. **Set up GHL workflow** — Follow `GHL_WORKFLOW_SETUP.md`, takes 15 min
2. **Custom domain** — Point a real domain (missed-call.ai or similar) at the Vercel project
3. **Expand GHL API scope** — Settings → API Keys → Add workflow:write scope so Greg can automate this for future clients

### Week 1 Growth Actions
1. **Cold outreach** — Find 20 HVAC/plumbing/roofing businesses on Google Maps in DFW
2. **Lead magnet** — "What's your missed call costing you?" calculator (already hinted on the page)
3. **Proof of concept** — Onboard Bubba's own GHL location as demo client
4. **Loom video** — Record a 2-min demo of the SMS flow, embed on landing page

### Pricing Strategy
- $400/mo is the anchor (positioned well)
- Consider: "First 5 clients get lifetime $299/mo lock-in" to build urgency
- Upsell: AI chat bot + Google Reviews automation = $600/mo package

---

## Revenue Math

| Clients | MRR | ARR |
|---------|-----|-----|
| 5 | $2,000 | $24,000 |
| 10 | $4,000 | $48,000 |
| 25 | $10,000 | $120,000 |
| 50 | $20,000 | $240,000 |

**Break-even:** 1 client covers costs.  
**Real costs:** GHL sub (~$97-$297/mo depending on plan) + Vercel (free tier).  
**Margin:** ~92%+ at scale.

---

## Tech Stack
- **Frontend:** Next.js 14 (App Router)
- **Hosting:** Vercel (Pro account)
- **Payments:** Stripe ($400/mo recurring)
- **Automation:** GoHighLevel (SMS workflows, CRM, booking)
- **SMS:** GHL native (Twilio backend)

---

## Files in This Directory
```
missed-call-ai/
├── LAUNCH_SUMMARY.md          ← You are here
├── GHL_WORKFLOW_SETUP.md      ← GHL setup instructions
├── stripe-ids.json            ← Stripe IDs (gitignored)
├── package.json
├── next.config.js
├── vercel.json
└── app/
    ├── layout.js
    ├── page.js
    └── page.module.css
```

---

## Quick Links
| Resource | URL |
|----------|-----|
| Landing Page (live) | https://missed-call-ai-orpin.vercel.app |
| Stripe Payment Link | https://buy.stripe.com/4gMdR144J6KYcmi7XWg7e05 |
| GitHub Repo | https://github.com/BubbaB10/missed-call-ai |
| Vercel Dashboard | https://vercel.com/billywbelljr-4327s-projects/missed-call-ai |
| Stripe Dashboard | https://dashboard.stripe.com/products/prod_UcywiGbZBCPxCO |
| GHL Location | https://app.gohighlevel.com (location: BJscUZZrDwXGRiUcwZYH) |
