import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export const isCompanyLoggedIn = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies["jwt"];
    if (!token) {
      res.status(401).json({ message: "Not authenticated" });
      return;
    }
    const decoded = verify(req.cookies["jwt"], process.env.JWT_SECRET);
    req.companyUser = decoded as any;
    next();
  } catch (e: any) {
    res.status(401).send("Un");
  }
};
