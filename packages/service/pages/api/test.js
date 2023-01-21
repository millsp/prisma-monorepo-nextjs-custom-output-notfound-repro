const { PrismaClient } = require('database')

export default async function handle(req, res) {
  const prisma = new PrismaClient()

  await prisma.user.delete()
  await prisma.user.create({
    data: {
      email: 'test'
    }
  })

  res.json({ ok: true })
}