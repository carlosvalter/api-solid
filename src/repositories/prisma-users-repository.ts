import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

export class PrismaUserRepository {
  // data: o Prisma ja cria automaticamente varias tipagens para cada model
  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    })

    return user
  }
}
