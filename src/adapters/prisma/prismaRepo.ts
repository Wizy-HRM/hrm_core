import * as prisma from "./client";
import { Company, JobListing } from "../../../generated/client";

export default {
  async getCompany(email: string): Promise<Company | null> {
    const company = await prisma.prisma.company.findFirst({
      where: {
        email,
      },
    });
    if (!company) return null;
    return company;
  },

  async createCompany(company: Company): Promise<Company> {
    return await prisma.prisma.company.create({
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

  async getAllJobs(): Promise<JobListing[]> {
    return await prisma.prisma.jobListing.findMany({
      include: {
        company: {
          omit: {
            password: true,
            salt: true,
            forgotPasswordToken: true,
            forgotPasswordTokenExpired: true,
            registerToken: true,
            registerTokenExpired: true,
            tenantId: true,
          },
        },
      },
    });
  },

  async createAd(
    ad: JobListing
  ): Promise<
    Pick<
      JobListing,
      | "description"
      | "title"
      | "endDate"
      | "startDate"
      | "status"
      | "referralSource"
      | "workplaceType"
      | "location"
      | "keywords"
      | "companyId"
    >
  > {
    return await prisma.prisma.jobListing.create({
      data: {
        description: ad.description,
        startDate: ad.startDate,
        title: ad.title,
        keywords: ad.keywords,
        location: ad.location || {},
        status: ad.status,
        companyId: ad.companyId,
        workplaceType: ad.workplaceType,
        referralSource: ad.referralSource,
        endDate: ad.endDate,
      },
    });
  },

  async listCompanies(): Promise<
    Omit<
      Company,
      | "password"
      | "salt"
      | "registerToken"
      | "registerTokenExpired"
      | "forgotPasswordToken"
      | "forgotPasswordTokenExpired"
      | "tenantId"
    >[]
  > {
    const companies = await prisma.prisma.company.findMany({
      omit: {
        password: true,
        salt: true,
        forgotPasswordToken: true,
        forgotPasswordTokenExpired: true,
        registerToken: true,
        registerTokenExpired: true,
        tenantId: true,
      },
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
    });

    return companies;
  },
};
