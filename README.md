# ApexKit

An opinionated Next.js starter kit — built for the speed indie hackers crave and the stability enterprises demand.

ApexKit is an opinionated Next.js starter kit designed to help builders ship real products faster — without the usual headaches of vendor lock-in or endless decision-making about tools and libraries. When you're a solo developer or part of a small team validating an idea — whether for a hackathon, an incubator, or your own startup — time spent configuring authentication, email services, UI components, or database setups takes valuable time away from focusing on your core idea and unique features. These are repetitive tasks that slow you down when speed is everything.

But rapid prototyping shouldn’t come at the cost of performance, scalability, or future flexibility. Many “quick-start” solutions sacrifice performance, trap you in vendor ecosystems, or leave behind technical debt that becomes expensive — in both time and money — the moment your project gains traction. Suddenly, you’re stuck refactoring, migrating, or paying for subscriptions that don’t truly help you grow.
ApexKit gives you the best of both worlds: the velocity of indie hacking and the clean, scalable foundation that production apps (and serious businesses) need from day one.

## Philosophy

This short “Philosophy” section is a bit more candid and conversational than the rest of the docs — think of it as the “why behind the choices.” The rest of the documentation stays clean, concise, and to the point, I promise.

Whether you’re an experienced developer checking for red flags or just getting started and curious about the reasoning, I hope it helps.
Opinionated

We won’t pretend otherwise: “best tool” is subjective. Some developers are perfectly happy (and productive) with MongoDB; others wouldn’t touch a non-relational database with a ten-foot pole. Some swear JavaScript has no place on the back-end; others run profitable, secure businesses on it every day.

That same spectrum exists when choosing a starter kit. Being opinionated isn’t about arrogance—it’s about making deliberate, battle-tested choices for two practical reasons:

1. Safety Through Familiarity
Deep knowledge of a toolset lets you anticipate its pitfalls and edge cases. A JavaScript developer who understands where Node.js can be notorious for memory leaks is just as safe as a seasoned Rust engineer who knows the same about their language (yes, you can still leak memory in Rust). Strong opinions come from real-world experience. They act as guardrails that keep most projects secure and stable by default.

2. Speed That Actually Ships Products
It’s incredibly easy—and fun—to chase the next hot framework or CSS library. I did it constantly in college: one assignment in React, the next in Vue, then Angular, then Gatsby. Curiosity and experimentation are how we grow as developers.

But when you’re building something real—especially as a solo founder, small team, or side-project warrior with a day job—that mindset becomes expensive. Trying the shiny new thing might feel exciting, but it rarely helps you ship faster or sleep better at night.

I wouldn’t reach for an experimental stack when helping a friend launch a platform for independent journalists on nights and weekends. Tempting? Absolutely. Responsible? Not even close.

## Mission

Enabling builders to ship prodiuction-grade software rapidly.

## What you get (out of the box)

| Feature                        | Included | Notes                                                                     | 
|--------------------------------|----------|---------------------------------------------------------------------------| 
| Next.js 15 + App Router        | Yes      | (App Router + React Server Components)                                    |
| Drizzle ORM                    | Yes      | type-safe, SQL, and flexible to works with DB solution of your choice.    |
| Better Auth                    | Yes      | Fine-tuned authentication without vendor lock-in                          |
| TailwindCSS + DaisyUI          | Yes      | beautiful and accessible UI out of the box                                |
| TypeScript                     | Yes      | Type safety is necessary not princess treatment                           |

## Get Started
```bash
git clone https://github.com/PradhumnaPancholi/apex-kit
cd apex-kit 
cp .env.example .env
# Put in your environment variables
pnpm install
npx drizzle-kit push
pnpm run dev
```

## Support & Getting Help

ApexKit is a solo-developer, open-source project. Here’s how to get help:

### 1. Documentation  
99 % of questions are already answered in the docs → start here.

### 2. GitHub Issues  
Perfect for bugs, feature requests, or documentation fixes.  
→ [Open an issue](https://github.com/pradhumnapancholi/apex-kit/issues/new)

### 3. GitHub Discussions  
Quick questions, “how do I…?”, showcase your builds.  
→ [Discussions](https://github.com/pradhumnapancholi/apex-kit/discussions)

### 4. Paid / Priority Support  
Need guaranteed response time or 1-on-1 help?  
→ DM me on Twitter @knowpradhumna

I reply as fast as I can, but I also have a day job — thanks for understanding 🙌
