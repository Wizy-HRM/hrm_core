import { Company } from "../../../generated/client";

export interface HttpInterface {
  config: {
    port: number;
  };
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET: string;
      PORT: string;
      DATABASE_URL: string;
      MAILER_HOST: string;
      MAILER_USER: string;
      MAILER_PASS: string;
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
      GOOGLE_REDIRECT_URI: string;
      // add more environment variables and their types here
    }
  }
}

declare module "express-serve-static-core" {
  interface Request {
    companyUser?: {
      data: {
        email: string;
        id: number;
      };
    }; // or define a custom interface if needed
  }
}
