# Cinematic Systems — SEO Fix Guide

## What Changed & Why

### Problem 1 Fixed: `"use client"` removed from ServicePageTemplate

The original `ServicePageTemplate.tsx` had `"use client"` at the top, which
prevented Google from reading page content server-side. This is now a Server
Component. The scrolling gallery (which needs the browser) is extracted into a
separate `GalleryScroll.tsx` client component.

### Problem 2 Fixed: Unique content per service page

Every page now accepts unique `benefits` and `faqs` props, plus a `children`
slot for any extra unique section. Google will now see each page as distinct.

### Problem 3 Fixed: FAQ structured data

Each page with FAQs gets a JSON-LD `FAQPage` schema automatically rendered
inside `ServicePageTemplate`. This enables Google rich snippets (FAQ answers
appearing directly in search results).

### Problem 4 Fixed: Better image alt texts

Gallery images now use `${serviceName} installation by Cinematic Systems
Johannesburg N` instead of the generic `Cinematic Systems installation N`.

---

## Files to Replace

| File in this folder       | Replace at path in your project                              |
| ------------------------- | ------------------------------------------------------------ |
| `GalleryScroll.tsx`       | `website/app/components/common/GalleryScroll.tsx` (NEW file) |
| `ServicePageTemplate.tsx` | `website/app/components/common/ServicePageTemplate.tsx`      |
| `cctv-page.tsx`           | `website/app/services/security/cctv/page.tsx`                |
| `dstv-page.tsx`           | `website/app/services/tv-systems/dstv/page.tsx`              |
| `wifi-page.tsx`           | `website/app/services/networking/wifi/page.tsx`              |

---

## How to Update the Remaining Service Pages

For every other service page, follow this pattern (use cctv-page.tsx as your
reference). Each page needs:

### 1. Unique `benefits` array (3 items)

Make them specific to THAT service. Do not reuse the same 3 benefits across pages.

### 2. Unique `faqs` array (4–6 questions)

Think about what customers actually ask. Include:

- Price/cost question
- How long does it take
- What areas do you cover
- A technical question specific to that service

### 3. A `children` block with "What's Included" list

List 6–8 specific things included in that service installation.

### 4. A `structuredData` object

Copy the pattern from cctv-page.tsx and update:

- `name` — the service name
- `serviceType` — what type of service it is
- `description` — one sentence about the service

---

## Remaining Pages to Update

Apply the same pattern to these pages:

### Security

- `website/app/services/security/page.tsx`
- `website/app/services/security/access-control/page.tsx`
- `website/app/services/security/biometrics/page.tsx`
- `website/app/services/security/intercom/page.tsx`

### TV Systems

- `website/app/services/tv-systems/page.tsx`
- `website/app/services/tv-systems/tv-mounting/page.tsx`
- `website/app/services/tv-systems/projector/page.tsx`
- `website/app/services/tv-systems/hdmi-matrix/page.tsx`

### Networking

- `website/app/services/networking/page.tsx`
- `website/app/services/networking/cabling/page.tsx`
- `website/app/services/networking/access-points/page.tsx`

### Entertainment

- `website/app/services/entertainment/page.tsx`
- `website/app/services/entertainment/home-theatre/page.tsx`
- `website/app/services/entertainment/hifi/page.tsx`
- `website/app/services/entertainment/speakers/page.tsx`

---

## Quick benefits/FAQ ideas per remaining service

### Access Control

Benefits: Keyless entry, visitor management, remote access control
FAQs: What types of access control exist, cost, can I control it from my phone

### Biometrics

Benefits: Fingerprint/face recognition, no keys to lose, audit trail
FAQs: How accurate is biometric access, can multiple people be registered

### Intercom

Benefits: See and speak to visitors, gate/door release, video recording
FAQs: Wired vs wireless intercom, can I answer from my phone

### TV Mounting

Benefits: Clean wall mount, cable management, tilt/swivel options
FAQs: What wall types can you mount on, what size TVs, do you hide cables

### Home Theatre

Benefits: Surround sound setup, projector + screen, acoustic optimisation
FAQs: What's the difference between 5.1 and 7.1, cost, room requirements

### HiFi Audio

Benefits: High-fidelity stereo, multi-room audio, audiophile setup
FAQs: What brands do you install, wired vs wireless speakers

### Speakers

Benefits: Indoor/outdoor speakers, ceiling speakers, Bluetooth/wired
FAQs: Can speakers be fitted in ceiling, weatherproof outdoor options

### Projector

Benefits: 4K projection, home cinema setup, large screen experience
FAQs: What screen size, fixed vs retractable screen, ambient light

---

## After Making Changes

1. Deploy your updated site
2. Go to Google Search Console
3. Request re-indexing for any pages you updated
4. Check back in 1–2 weeks to see improvement in the Pages report
