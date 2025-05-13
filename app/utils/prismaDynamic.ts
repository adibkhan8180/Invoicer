// lib/prismaDynamic.ts
import { PrismaClient } from "@/lib/generated/prisma";

type TenantConfig = {
  databaseUrl: string;
};

export function createPrismaClient(config: TenantConfig): PrismaClient {
  return new PrismaClient({
    datasources: {
      db: {
        url: config.databaseUrl,
      },
    },
  });
}