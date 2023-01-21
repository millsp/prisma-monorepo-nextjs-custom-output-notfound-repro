# Prisma + Next.js Custom Output Not Found Repro

1. `pnpm install`
2. `cd packages/database && pnpm exec prisma generate`
3. `cd ../service && pnpm exec next build`
4. `rm -fr .next/standalone/node_modules` to workaround https://github.com/vercel/next.js/issues/42651
5. `node .next/standalone/server.js`
6. Open http://localhost:3000/api/test
7. See error:
```
Error: ENOENT: no such file or directory, open '/home/millsp/Work/repros/prisma-monorepo-nextjs-custom-output-notfound-repro/packages/service/.next/standalone/.next/server/pages/api/schema.prisma'
```
