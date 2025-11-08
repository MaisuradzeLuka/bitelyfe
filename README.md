This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.







# Project Frontend (Next.js)

## 📂 Project Structure



src/
├── app/                 # Next.js App Router (pages & layouts)
│   └── pageName/        # Example route folder (e.g., /contact, /about)
│       └── page.tsx     # Page entry for that route
│
├── components/          # Reusable UI building blocks
│   ├── ui/              # shadcn/ui or design system components
│   └── shared/          # Shared components used across features (e.g., Loader, Modal)
│
├── constants/           # Static data and configuration constants
│   └── index.ts         # e.g., navigation links, enums, API endpoints
│
├── features/            # Feature-based structure (modular & scalable)
│   └── exampleFeature/
│       └── ui/
│           ├── components/  # Small pieces of the feature
│           └── views/       # Composed components forming full feature UI
│
├── lib/                 # Core library helpers
│   ├── rpc.ts           # API/RPC client setup
│   ├── middleware.ts    # Middleware utilities
│   └── utils.ts         # Generic utility functions
│
└── types/               # TypeScript types
    └── componentTypes.ts

