# GHL Missed Call AI — Workflow Setup Guide

## Location: Billy Bell (BJscUZZrDwXGRiUcwZYH)

The GHL API token (PIT key) has location-level read access but does not have
workflow write scope. Set up the following automation manually in GHL UI.
This takes ~15 minutes.

---

## Step 1: Create the "Missed Call" Tag

1. GHL → Settings → Tags
2. Create tag: `missed-call`
3. Color: Red (urgent)

---

## Step 2: Create the Missed Call Workflow

### Automation → Workflows → New Workflow → Start from scratch

**Name:** `Missed Call AI - Follow-Up Sequence`

**Trigger:** Inbound Call → Call Status = Missed

### Action 1 — Immediate SMS (Fire instantly)
- **Type:** Send SMS
- **From:** Location Phone (your business number)
- **Delay:** 0 minutes
- **Message:**
```
Hi {{contact.first_name}}, sorry I missed your call! This is {{location.name}}. How can I help you today?
```

### Add If/Else Branch — Check for reply
- **Condition:** Last Message (Inbound) → Exists → Within 10 minutes

**If replied → End workflow** (they engaged, handle manually or via AI bot)

**If NO reply → Continue:**

### Action 2 — Follow-up SMS (10 min delay)
- **Type:** Send SMS
- **Delay:** 10 minutes after Action 1
- **Message:**
```
Still here if you need us! We're {{location.name}} and we'd love to help. Click here to book a time that works for you: {{location.booking_link}}
```

### Add If/Else Branch — Check for reply again
- **Condition:** Last Message (Inbound) → Exists → Within 1 hour

**If replied → End workflow**

**If NO reply → Continue:**

### Action 3 — Last Chance SMS (1 hour delay)
- **Type:** Send SMS
- **Delay:** 1 hour after Action 2
- **Message:**
```
Last chance! We have openings this week — reply BOOK and I'll get you scheduled right away. —{{location.name}}
```

### Action 4 — Tag Contact
- **Type:** Add Tag
- **Tag:** `missed-call-followed-up`

### Action 5 — Add to Pipeline
- **Type:** Create Opportunity
- **Pipeline:** New Leads
- **Stage:** Missed Call Follow-Up
- **Name:** `{{contact.full_name}} - Missed Call`

---

## Step 3: Create the "BOOK" Reply Handler

**New Workflow: `Missed Call - BOOK Reply Handler`**

**Trigger:** Inbound SMS → Message Contains → "BOOK"

**Action 1:** Send SMS
```
Perfect! Here's my booking link to grab a time that works for you: {{location.booking_link}}

I'll confirm once you're booked. —{{location.name}}
```

**Action 2:** Add Tag → `booking-link-sent`

---

## Step 4: Set Up AI Conversation Bot (Optional — HighLevel AI)

If you have GHL AI enabled:

1. Automations → AI Employee → Configure
2. Set persona: "Friendly service scheduler for {{location.name}}"
3. Goal: Book appointments when leads reply to missed call follow-ups
4. Connect to calendar

---

## SMS Templates (Copy-Paste Ready)

| # | Timing | Message |
|---|--------|---------|
| 1 | Immediate | `Hi {{contact.first_name}}, sorry I missed your call! This is {{location.name}}. How can I help you today?` |
| 2 | +10 min (no reply) | `Still here if you need us! We're {{location.name}} and we'd love to help. Book here: {{location.booking_link}}` |
| 3 | +1 hr (no reply) | `Last chance — I have openings this week. Reply BOOK and I'll get you scheduled. —{{location.name}}` |

---

## Notes

- The API PIT token does not have workflow:write scope as of 2026-06-01
- All templates are built and documented above
- To grant API access: GHL → Settings → Integrations → API Keys → Edit scope
- Request scopes: `workflows.readonly`, `workflows.write`, `automations.write`
