# Prisma + Next.js Custom Output Not Found Repro

1. `pnpm install`
2. `cd packages/database && pnpm exec prisma generate`
3. `cd ../service && pnpm exec next build`
4. `rm -fr .next/standalone/node_modules`
4. `cp -r .next/standalone/ /tmp/service`