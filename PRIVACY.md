# Privacy Policy

**Application:** MoodShapes (the “Application”)
**Service Provider / Data Controller:** Ausianovich Kanstantsin (the “Service Provider”, “we”, “us”)
**Contact:** [moodshaperapp@gmail.com](mailto:moodshaperapp@gmail.com)
**Effective date:** 2026-05-05
**Last updated:** 2026-05-05

This Privacy Policy describes how the Application handles information when you use it on Apple iPhone and Apple Watch. The Application is provided as a self-help tool for personal mood tracking and self-reflection on an “AS IS” basis. By downloading, installing, accessing, or using the Application, you acknowledge that you have read, understood, and agreed to this Privacy Policy and the End-User License Agreement (the “EULA”) referenced below. If you do not agree, do not install or use the Application.

> **Important.** The Application is **not a medical device**. It does not provide medical, psychological, psychiatric, diagnostic, therapeutic, or counseling advice or services. The questionnaires available in the Application (including but not limited to WHO-5, PHQ-9, GAD-7, PSS-10, K10, RSES, AUDIT, SWLS, BAT-12, IPIP-NEO-50, EPI Short, and Belov Temperament) are provided **solely for general self-reflection and personal interest**. They are **not** intended to diagnose, treat, cure, mitigate, or prevent any disease, condition, or disorder. See the EULA for full disclaimers. By using the Application you acknowledge and accept this without reservation.

---

## 1. Summary in plain language

- The Application is built to keep your personal mood data **on your device**.
- We do **not** require you to register, sign in, or provide an email, real name, phone number, or government ID to use the Application.
- Your mood entries, notes, photos, tags, and assessment answers stay locally on your iPhone and Apple Watch (in Apple-managed device storage). They are not transmitted to any server we operate.
- We collect only **minimal anonymous product analytics** through PostHog (EU region) so we can understand which features are used. Analytics never include your mood entries, notes, photos, free-text content, or your individual answers or scores from the questionnaires.
- Subscriptions are processed by **Apple** via the App Store and managed by **RevenueCat** on our behalf. We do not see or store your payment card or Apple ID password.
- Push and reminder notifications are scheduled **locally on your device** and are not delivered through our servers.

---

## 2. Who is the Service Provider

The Application is an independent product of an individual developer:

- Service Provider: **Ausianovich Kanstantsin**, an individual
- Contact email: [moodshaperapp@gmail.com](mailto:moodshaperapp@gmail.com)
- Distribution channel: Apple App Store

The Service Provider is the controller of any limited personal data described in Section 5. For all device-level data that never leaves your device, the Service Provider has no access and exercises no control; you control that data through standard Apple device management (uninstall, restore, iCloud backup settings, etc.).

---

## 3. What this Policy covers (scope)

This Policy covers the Application only. It does **not** cover:

- Apple’s collection and processing of data through iOS, watchOS, the App Store, your Apple ID, App Store receipts, or iCloud backups, which are governed by Apple’s privacy policy and the agreements between you and Apple;
- Your network operator’s collection of metadata;
- Any third-party content or services linked to from inside or outside the Application.

---

## 4. Data that stays on your device only

The following content is created and stored locally on your iPhone and (where applicable) Apple Watch using Apple-managed storage (Core Data on the device, the device keychain where used, and the App Group container `group.moodshapes.sharedata`):

- Mood entries (mood level, timestamp, optional note, optional photo, optional tags);
- Tags you create or customise;
- Your responses, intermediate selections, and computed band/score for any psychological self-test you complete inside the Application;
- The display name you optionally enter (a free-text label of your choice);
- Your reminder time and whether reminders are enabled;
- Application preferences and counters (for example, whether you have already seen onboarding, launch counter, last review-prompt date).

This data is not transmitted to the Service Provider. The Service Provider has no copy of this data, no ability to read it, restore it, decrypt it, recover it, or correlate it to you. If your device is lost, reset, or restored, this data may be lost permanently. iCloud backup of application data is governed by your iCloud settings configured with Apple.

If you uninstall the Application, the operating system removes the local data; the Service Provider cannot “remember” you.

---

## 5. Limited data we DO process (analytics and subscription operations)

### 5.1 Anonymous product analytics (PostHog, EU region)

To understand which features are used and to prioritise improvements, the Application sends a small amount of pseudonymous usage telemetry to PostHog (EU servers, `eu.i.posthog.com`). This is limited to:

- Generic product events (for example, screen visits, button taps, feature impressions);
- The fact that an in-app self-test was completed, recorded as the event `assessment_completed` with one property: the technical identifier of the test (e.g. `phq9_depression`);
- Two non-identifying super-properties: whether the user is currently a premium subscriber and a launch counter;
- A pseudonymous device-level identifier generated by PostHog;
- Standard technical metadata that the SDK collects automatically (e.g. iOS version, device model, app version, locale, time zone).

Analytics do **not** include: your name, email, phone, address, IP address treated as identifying you, mood scores or moods, notes, photos, tags, free-text content, the answers you gave on any questionnaire, individual question scores, total scores, severity bands, or any field that could reasonably be used to identify you. We have configured the Application to capture only the minimum signal needed.

You can request that we delete the pseudonymous analytics record associated with the device identifier by contacting the Service Provider; please note that because the data is pseudonymous, we may need additional information to locate it, and we can only act on what is stored.

### 5.2 Subscription operations (RevenueCat and Apple)

Paid subscriptions to PREMIUM features are sold by Apple through the App Store and managed for us by [RevenueCat](https://www.revenuecat.com/privacy/). RevenueCat processes Apple-issued receipt information and a pseudonymous App User ID assigned by RevenueCat on our behalf to verify and synchronise your entitlement. The Service Provider does not collect or store your payment card, your Apple ID password, your Apple ID, your full name, your billing address, or any other Apple identity information. Refunds, cancellations, family sharing and tax handling are managed by Apple under Apple’s terms.

### 5.3 Local notifications

Reminder notifications are scheduled and delivered locally by your iPhone and Apple Watch via the iOS/watchOS notification system. They are not delivered through our servers. We do not receive or log whether you opened a notification.

### 5.4 Apple Watch synchronisation

If you use the Watch companion, mood entries logged on the watch are transferred to the paired iPhone using Apple’s on-device WatchConnectivity framework. Transfers happen between your two paired devices only and are not routed through our servers.

### 5.5 Crash diagnostics

If you have enabled “Share with App Developers” in iOS Settings, Apple may share aggregated crash and performance reports with the Service Provider directly through Apple’s analytics pipeline. These reports are aggregated and provided by Apple under Apple’s terms.

---

## 6. Categories of personal data and legal bases (GDPR / UK GDPR)

| Category | Purpose | Legal basis | Retention |
|---|---|---|---|
| Pseudonymous PostHog identifier and event metadata | Improve and prioritise features; understand usage | Legitimate interest (Art. 6(1)(f) GDPR) in operating and improving the Application; balanced against the minimised, non-identifying nature of the data | Up to 24 months from collection, or until you request deletion (subject to feasibility) |
| RevenueCat App User ID and entitlement state | Validate and restore subscriptions | Performance of contract (Art. 6(1)(b) GDPR) — to provide PREMIUM access you purchased | For the lifetime of the entitlement plus the period required by Apple/RevenueCat for billing reconciliation |
| Inquiries you send by email | Respond to your message | Legitimate interest / consent | Up to 24 months from last correspondence |

The Application does not process “special category” data (Art. 9 GDPR) on our infrastructure. The questionnaires you may complete inside the Application can produce information about your mental state; however, that information stays on your device only. We do not receive it.

---

## 7. Your rights

Depending on where you live, you may have rights under laws such as the EU/UK GDPR, the California Consumer Privacy Act (CCPA/CPRA), the Brazilian LGPD, and other applicable laws. These rights may include:

- The right to know what data we hold about you;
- The right to access, correct, or delete that data;
- The right to restrict or object to certain processing;
- The right to portability;
- The right to withdraw consent at any time;
- The right not to be subject to automated decision-making with legal effects (we do not perform such decision-making);
- The right to lodge a complaint with your local supervisory authority.

To exercise any of these rights, contact the Service Provider at [moodshaperapp@gmail.com](mailto:moodshaperapp@gmail.com). Because we deliberately collect very little, the most reliable way to delete the locally stored content is to delete the Application from your device. We will respond within the period required by applicable law.

**Sale of personal data:** the Service Provider does **not** sell or rent personal data, and does not engage in “cross-context behavioural advertising” as defined by California law.

---

## 8. International transfers

PostHog analytics are stored on servers in the European Union. RevenueCat and Apple may process data in the United States and other regions in accordance with their own privacy policies and approved transfer mechanisms (such as Standard Contractual Clauses). By using the Application from outside those regions, you acknowledge such cross-border transfers as a normal part of using a mobile application distributed by Apple worldwide.

---

## 9. Security

We rely on the security mechanisms provided by Apple iOS / watchOS for on-device storage, by Apple App Store for payment, by RevenueCat for entitlement processing, and by PostHog for analytics in transit (TLS) and at rest. No method of electronic storage or transmission is 100% secure. The Service Provider does not warrant the security of your device, your Apple ID, your network, or any service operated by Apple or any other third party. You are responsible for keeping your device, Apple ID, and access credentials secure.

---

## 10. Children and Minors

The Application is rated **13+** in the Apple App Store and is not directed to, intended for, or designed for children under the age of 13. The Service Provider does not knowingly collect personal information from children under 13 (or under the equivalent minimum age set by applicable law in your jurisdiction, which may be higher — for example, 16 in parts of the European Economic Area). If you are under 13, you must not download, install, or use the Application.

If you are between 13 and the age of digital majority in your jurisdiction, you may use the Application only with the active involvement, review, and verifiable consent of a parent or legal guardian. Parents and legal guardians are responsible for monitoring the use of the Application by minors and for deciding whether the topics covered (including emotional well-being, alcohol-use questions, personality assessments, and questions about low mood or self-harm such as PHQ-9 question 9) are appropriate for the minor.

If you believe that a child under 13 has provided personal information to the Service Provider, contact [moodshaperapp@gmail.com](mailto:moodshaperapp@gmail.com) and we will take reasonable steps to delete it.

---

## 11. Third-party services we rely on

The Application uses the following third-party services. Each of them maintains its own privacy practices, which you should review:

- **Apple Inc.** — App Store distribution, in-app purchase, push and notification infrastructure, optional iCloud backup. See Apple’s privacy policy at [apple.com/legal/privacy](https://www.apple.com/legal/privacy/).
- **RevenueCat, Inc.** — subscription entitlement management. See [revenuecat.com/privacy](https://www.revenuecat.com/privacy/).
- **PostHog Inc. (EU region)** — minimised product analytics. See [posthog.com/privacy](https://posthog.com/privacy).

The Service Provider has no responsibility for the practices of these or any other third parties beyond the configuration choices made within the Application as described in this Policy.

---

## 12. Do Not Track and tracking

The Application does not display behavioural advertising and does not use cross-app tracking via Apple’s App Tracking Transparency framework. We do not respond to browser “Do Not Track” signals because the Application is not a website.

---

## 13. Changes to this Policy

The Service Provider may update this Policy from time to time. The updated Policy will be posted at this URL with a revised “Last updated” date. Material changes will, where practical, also be communicated through an in-app notice or App Store release notes. Your continued use of the Application after an update constitutes your acceptance of the updated Policy. If you do not accept the updated Policy, your sole and exclusive remedy is to stop using the Application and uninstall it.

---

## 14. Limitation of responsibility for privacy claims

To the fullest extent permitted by applicable law, and subject to the EULA, the Service Provider’s total liability arising out of or in connection with this Privacy Policy is limited as set out in the EULA. In particular, the Service Provider is not liable for losses arising from (a) actions or omissions of Apple, RevenueCat, PostHog, or any other third-party service; (b) loss of locally stored content following uninstall, reset, restore, or device loss; (c) unauthorised access to your device or Apple ID; (d) your use of the questionnaires or any decisions you make based on them.

---

## 15. Consent and Acceptance

By installing or using the Application you acknowledge that you have read this Privacy Policy and the EULA, that you are at least 13 years old (or, if you are between 13 and the age of digital majority in your jurisdiction, that a parent or legal guardian has reviewed this Privacy Policy and the EULA and consented on your behalf), that the Application is **not a medical device and does not provide medical or psychological advice**, and that you accept all terms of this Privacy Policy and the EULA without modification. If you do not consent, you must uninstall the Application and discontinue use.

---

## 16. Contact

For privacy questions, requests to exercise your rights, or any other inquiry, contact the Service Provider at:

**Email:** [moodshaperapp@gmail.com](mailto:moodshaperapp@gmail.com)

Please include enough information for us to respond meaningfully (the nature of your request and, where applicable, the device locale, country, and approximate date you used the Application). We aim to respond within 30 days, or sooner where required by law.
