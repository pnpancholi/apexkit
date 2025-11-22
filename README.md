# Apex Kit

A full-stack Next.js 14 starter built for speed, clarity, and ownership — with Drizzle ORM, Better Auth, and DaisyUI + 30+ themes baked in.
If you like the developer experience of boilerplates but want to avoid vendor lock-ins and retain flexibilty for scale, then this is intended to aid you with just that.


## Mission

Enabling builders to ship prodiuction-grade software rapidly.

## What you get (out of the box)

| Feature                        | Included | Notes                                               | 
|--------------------------------|----------|-----------------------------------------------------| 
| Next.js 14 + App Router        | Yes      | Server Actions, parallel routes                     |
| Drizzle ORM                    | Yes      | SQL + MongoDB ready, no Prisma tax.                 |
| Better Auth                    | Yes      | Email/password + magic links + Google               |
| DaisyUI + 30+ themes           | Yes      | One simple line and a refreshing looks              |
| DB Adapters                    | Yes      | One-line DB switch                                  | 
| TypeScript                     | Yes      | Type safety is necessary not princess treatment     |
| Avoid vendor lock-in           | Yes     | You have both your hands on the steering wheel       |

## Get Started
```bash
git clone https://github.com/PradhumnaPancholi/apex-kit
cd apex-kit 
cp .env.example .env
# Put in your environment variables
pnpm install
npx drizzle-kit push
pnpm run dev
