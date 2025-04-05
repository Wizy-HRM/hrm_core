import { Company } from "../../../../generated/client";
import { prisma } from "..";
import { DatabaseAdapater } from "../../../core/ports";

export const companiesRegister: Pick<DatabaseAdapater, "createCompany"> = {
  async createCompany(company) {
    return prisma.prisma.company.create({
      data: {
        email: company.email,
        password: company.password,
        info: company.info || {},
        location: company.location || {},
        salt: company.salt,
        tenantId: company.tenantId || null,
        platform: company.platform,
        registerToken: company.registerToken,
        registerTokenExpired: company.registerTokenExpired,
      },
    });
  },
};
