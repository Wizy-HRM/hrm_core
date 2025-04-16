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
        info: company.info || {},
        location: company.location || {},
        tenantId: company.tenantId || null,
        platform: company.platform,
        loginToken: company.loginToken,
        loginTokenExpired: company.loginTokenExpired,
      },
    });
  },

  async registerGoogleCompany(
    company: Pick<
      Company,
      | "email"
      | "info"
      | "loginToken"
      | "loginTokenExpired"
      | "location"
      | "platform"
      | "tenantId"
      | "registeredBy"
    >
  ): Promise<Company> {
    return await prisma.prisma.company.create({
      data: {
        email: company.email,
        info: company.info || {},
        location: company.location || {},
        tenantId: company.tenantId || null,
        platform: company.platform,
        registeredBy: company.registeredBy,
        loginToken: company.loginToken,
        loginTokenExpired: company.loginTokenExpired,
      },
    });
  },

  async getAllJobs(): Promise<JobListing[]> {
    return await prisma.prisma.jobListing.findMany({
      include: {
        company: {
          omit: {
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
        tenantId: true,
      },
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
    });

    return companies;
  },

  async searchCompanyByEmail(email: string): Promise<Company | null> {
    const company = await prisma.prisma.company.findFirst({
      where: {
        email,
      },
    });
    if (!company) return null;
    return company;
  },

  async validateMagicLink(token: string): Promise<Company | null> {
    const company = await prisma.prisma.company.findFirst({
      where: {
        loginToken: token,
      },
    });
    if (!company) return null;
    return company;
  },

  async updateCompanyByEmail(
    email: string,
    loginToken: string,
    loginTokenExpired: Date
  ) {
    return await prisma.prisma.company.update({
      where: {
        email,
      },
      data: {
        loginToken,
        loginTokenExpired,
      },
    });
  },
};
