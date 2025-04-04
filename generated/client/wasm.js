
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  expires_at: 'expires_at',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires'
};

exports.Prisma.VerificationTokenScalarFieldEnum = {
  identifier: 'identifier',
  token: 'token',
  expires: 'expires'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  emailVerified: 'emailVerified',
  image: 'image',
  password: 'password',
  status: 'status',
  role: 'role',
  employmentType: 'employmentType',
  jobStartDate: 'jobStartDate',
  jobEndDate: 'jobEndDate',
  departmentId: 'departmentId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  managerId: 'managerId',
  positionId: 'positionId',
  locationId: 'locationId'
};

exports.Prisma.UserStatusHistoryScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  status: 'status',
  comment: 'comment',
  createdAt: 'createdAt',
  changedById: 'changedById'
};

exports.Prisma.CandidateNoteScalarFieldEnum = {
  id: 'id',
  candidateId: 'candidateId',
  content: 'content',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId'
};

exports.Prisma.JobListingScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  employmentType: 'employmentType',
  workplaceType: 'workplaceType',
  referralSource: 'referralSource',
  startDate: 'startDate',
  endDate: 'endDate',
  status: 'status',
  departmentId: 'departmentId',
  locationId: 'locationId',
  keywords: 'keywords',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  positionId: 'positionId'
};

exports.Prisma.CandidateScalarFieldEnum = {
  id: 'id',
  name: 'name',
  surname: 'surname',
  email: 'email',
  phone: 'phone',
  linkedin: 'linkedin',
  github: 'github',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.JobApplicationScalarFieldEnum = {
  id: 'id',
  candidateId: 'candidateId',
  resumeKey: 'resumeKey',
  additionalNotes: 'additionalNotes',
  referralSource: 'referralSource',
  status: 'status',
  jobListingId: 'jobListingId',
  createdAt: 'createdAt'
};

exports.Prisma.CvAnalysisScalarFieldEnum = {
  id: 'id',
  applicationId: 'applicationId',
  totalScore: 'totalScore',
  technicalScore: 'technicalScore',
  experienceScore: 'experienceScore',
  educationScore: 'educationScore',
  cvQualityScore: 'cvQualityScore',
  softSkillsScore: 'softSkillsScore',
  analysis: 'analysis',
  parsedContent: 'parsedContent',
  error: 'error',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.JobApplicationHistoryScalarFieldEnum = {
  id: 'id',
  applicationId: 'applicationId',
  status: 'status',
  comment: 'comment',
  createdAt: 'createdAt',
  changedByUserId: 'changedByUserId'
};

exports.Prisma.PersonalInfoScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  amka: 'amka',
  afm: 'afm',
  doy: 'doy',
  middleName: 'middleName',
  birthDate: 'birthDate',
  birthPlace: 'birthPlace',
  maritalStatus: 'maritalStatus',
  numberOfChildren: 'numberOfChildren',
  citizenship: 'citizenship',
  nationality: 'nationality',
  gender: 'gender',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  educationLevel: 'educationLevel',
  educationTitle: 'educationTitle',
  educationInstitution: 'educationInstitution',
  graduationYear: 'graduationYear'
};

exports.Prisma.IdentificationDocumentScalarFieldEnum = {
  id: 'id',
  personalInfoId: 'personalInfoId',
  type: 'type',
  documentNumber: 'documentNumber',
  issueDate: 'issueDate',
  expiryDate: 'expiryDate',
  issuingAuthority: 'issuingAuthority',
  isPrimary: 'isPrimary',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AddressScalarFieldEnum = {
  id: 'id',
  personalInfoId: 'personalInfoId',
  type: 'type',
  street: 'street',
  streetNumber: 'streetNumber',
  city: 'city',
  region: 'region',
  postalCode: 'postalCode',
  country: 'country',
  isPrimary: 'isPrimary',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DocumentScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  key: 'key',
  uploadedAt: 'uploadedAt',
  dependentMemberId: 'dependentMemberId',
  languageSkillId: 'languageSkillId'
};

exports.Prisma.DocumentVerificationScalarFieldEnum = {
  id: 'id',
  documentId: 'documentId',
  status: 'status',
  reviewedById: 'reviewedById',
  comments: 'comments',
  reviewedAt: 'reviewedAt',
  userId: 'userId'
};

exports.Prisma.OnboardingProgressScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  applicationId: 'applicationId',
  currentPhase: 'currentPhase',
  startedAt: 'startedAt',
  completedAt: 'completedAt',
  status: 'status',
  hireDate: 'hireDate',
  hiringManagerId: 'hiringManagerId'
};

exports.Prisma.OnboardingInvitationScalarFieldEnum = {
  id: 'id',
  email: 'email',
  token: 'token',
  otp: 'otp',
  otpExpiresAt: 'otpExpiresAt',
  applicationId: 'applicationId',
  expiresAt: 'expiresAt',
  verifiedAt: 'verifiedAt',
  lastAccessedAt: 'lastAccessedAt',
  sessionToken: 'sessionToken',
  sessionExpiresAt: 'sessionExpiresAt',
  createdAt: 'createdAt'
};

exports.Prisma.EmergencyContactScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  fullName: 'fullName',
  relationship: 'relationship',
  primaryPhone: 'primaryPhone',
  secondaryPhone: 'secondaryPhone',
  email: 'email',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DependentMemberScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  firstName: 'firstName',
  lastName: 'lastName',
  middleName: 'middleName',
  birthDate: 'birthDate',
  relationship: 'relationship',
  isStudent: 'isStudent',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserEmailScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  email: 'email',
  type: 'type',
  isPrimary: 'isPrimary',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserPhoneScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  phoneNumber: 'phoneNumber',
  countryCode: 'countryCode',
  type: 'type',
  isPrimary: 'isPrimary',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BankAccountScalarFieldEnum = {
  id: 'id',
  personalInfoId: 'personalInfoId',
  bank: 'bank',
  iban: 'iban',
  isPrimary: 'isPrimary',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ContractScalarFieldEnum = {
  id: 'id',
  onboardingId: 'onboardingId',
  draftKey: 'draftKey',
  signedKey: 'signedKey',
  uploadedAt: 'uploadedAt',
  signedAt: 'signedAt',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LanguageSkillScalarFieldEnum = {
  id: 'id',
  personalInfoId: 'personalInfoId',
  language: 'language',
  proficiency: 'proficiency',
  certificate: 'certificate',
  issueDate: 'issueDate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RequestScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  status: 'status',
  requesterId: 'requesterId',
  managerId: 'managerId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RequestStatusHistoryScalarFieldEnum = {
  id: 'id',
  requestId: 'requestId',
  status: 'status',
  comment: 'comment',
  changedBy: 'changedBy',
  createdAt: 'createdAt'
};

exports.Prisma.StatusAttachmentScalarFieldEnum = {
  id: 'id',
  historyId: 'historyId',
  fileName: 'fileName',
  fileKey: 'fileKey',
  fileType: 'fileType',
  uploadedAt: 'uploadedAt'
};

exports.Prisma.RequestAttachmentScalarFieldEnum = {
  id: 'id',
  requestId: 'requestId',
  fileName: 'fileName',
  fileKey: 'fileKey',
  fileType: 'fileType',
  uploadedAt: 'uploadedAt'
};

exports.Prisma.LeaveRequestScalarFieldEnum = {
  id: 'id',
  employeeId: 'employeeId',
  managerId: 'managerId',
  type: 'type',
  startDate: 'startDate',
  endDate: 'endDate',
  duration: 'duration',
  reason: 'reason',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LeaveAttachmentScalarFieldEnum = {
  id: 'id',
  leaveId: 'leaveId',
  fileName: 'fileName',
  fileKey: 'fileKey',
  fileType: 'fileType',
  uploadedAt: 'uploadedAt'
};

exports.Prisma.LeaveStatusHistoryScalarFieldEnum = {
  id: 'id',
  leaveId: 'leaveId',
  status: 'status',
  comment: 'comment',
  changedById: 'changedById',
  createdAt: 'createdAt'
};

exports.Prisma.LeaveStatusAttachmentScalarFieldEnum = {
  id: 'id',
  historyId: 'historyId',
  fileName: 'fileName',
  fileKey: 'fileKey',
  fileType: 'fileType',
  uploadedAt: 'uploadedAt'
};

exports.Prisma.HolidayScalarFieldEnum = {
  id: 'id',
  name: 'name',
  date: 'date',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DepartmentScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LocationScalarFieldEnum = {
  id: 'id',
  name: 'name',
  address: 'address',
  city: 'city',
  region: 'region',
  postalCode: 'postalCode',
  country: 'country',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PositionScalarFieldEnum = {
  id: 'id',
  title: 'title',
  code: 'code',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ClientScalarFieldEnum = {
  id: 'id',
  name: 'name',
  vatNumber: 'vatNumber',
  email: 'email',
  phone: 'phone',
  address: 'address',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProjectScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  clientId: 'clientId',
  status: 'status',
  startDate: 'startDate',
  endDate: 'endDate',
  managerId: 'managerId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProjectMemberScalarFieldEnum = {
  id: 'id',
  projectId: 'projectId',
  userId: 'userId',
  role: 'role',
  joinedAt: 'joinedAt',
  leftAt: 'leftAt'
};

exports.Prisma.TimeEntryScalarFieldEnum = {
  id: 'id',
  projectId: 'projectId',
  userId: 'userId',
  description: 'description',
  startTime: 'startTime',
  endTime: 'endTime',
  duration: 'duration',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AnnouncementScalarFieldEnum = {
  id: 'id',
  title: 'title',
  content: 'content',
  publishedAt: 'publishedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  changedBy: 'changedBy',
  publishedBy: 'publishedBy'
};

exports.Prisma.TimeScheduleScalarFieldEnum = {
  id: 'id',
  name: 'name',
  startTime: 'startTime',
  endTime: 'endTime',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ShiftEntryScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  scheduleId: 'scheduleId',
  date: 'date',
  status: 'status',
  isNightShift: 'isNightShift',
  workplaceType: 'workplaceType',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CompanySettingsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  logoUrl: 'logoUrl',
  url: 'url',
  address: 'address',
  postalCode: 'postalCode',
  city: 'city',
  region: 'region',
  country: 'country',
  phone: 'phone',
  email: 'email',
  timezone: 'timezone',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CareerSettingsScalarFieldEnum = {
  id: 'id',
  logoUrl: 'logoUrl',
  headerButtonText: 'headerButtonText',
  headerButtonUrl: 'headerButtonUrl',
  headerButtonBgColor: 'headerButtonBgColor',
  headerButtonTextColor: 'headerButtonTextColor',
  bannerText: 'bannerText',
  bannerBgColor: 'bannerBgColor',
  bannerTextColor: 'bannerTextColor',
  showCvBanner: 'showCvBanner',
  cvBannerUrl: 'cvBannerUrl',
  cvBannerTitle: 'cvBannerTitle',
  cvBannerSubtitle: 'cvBannerSubtitle',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.UserStatus = exports.$Enums.UserStatus = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  PENDING: 'PENDING'
};

exports.UserRole = exports.$Enums.UserRole = {
  ONBOARDING_EMPLOYEE: 'ONBOARDING_EMPLOYEE',
  EMPLOYEE: 'EMPLOYEE',
  HR: 'HR',
  EXTERNAL_ACCOUNTANT: 'EXTERNAL_ACCOUNTANT',
  ADMIN: 'ADMIN'
};

exports.EmploymentType = exports.$Enums.EmploymentType = {
  FULL_TIME: 'FULL_TIME',
  PART_TIME: 'PART_TIME',
  CONTRACT: 'CONTRACT',
  TEMPORARY: 'TEMPORARY',
  OTHER: 'OTHER',
  VOLUNTEER: 'VOLUNTEER',
  INTERNSHIP: 'INTERNSHIP'
};

exports.WorkplaceType = exports.$Enums.WorkplaceType = {
  ON_SITE: 'ON_SITE',
  HYBRID: 'HYBRID',
  REMOTE: 'REMOTE'
};

exports.JobStatus = exports.$Enums.JobStatus = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  EXPIRED: 'EXPIRED'
};

exports.ApplicationStatus = exports.$Enums.ApplicationStatus = {
  PENDING: 'PENDING',
  REVIEW: 'REVIEW',
  INTERVIEWING: 'INTERVIEWING',
  OFFERED: 'OFFERED',
  ONBOARDING: 'ONBOARDING',
  HIRED: 'HIRED',
  REJECTED: 'REJECTED'
};

exports.MaritalStatus = exports.$Enums.MaritalStatus = {
  SINGLE: 'SINGLE',
  MARRIED: 'MARRIED',
  DIVORCED: 'DIVORCED',
  WIDOWED: 'WIDOWED',
  CIVIL_PARTNERSHIP: 'CIVIL_PARTNERSHIP'
};

exports.Gender = exports.$Enums.Gender = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

exports.EducationLevel = exports.$Enums.EducationLevel = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
  POST_SECONDARY: 'POST_SECONDARY',
  BACHELOR: 'BACHELOR',
  MASTER: 'MASTER',
  PHD: 'PHD'
};

exports.IdentificationDocumentType = exports.$Enums.IdentificationDocumentType = {
  ID_CARD: 'ID_CARD',
  PASSPORT: 'PASSPORT',
  RESIDENCE_PERMIT: 'RESIDENCE_PERMIT'
};

exports.AddressType = exports.$Enums.AddressType = {
  PERMANENT: 'PERMANENT',
  TEMPORARY: 'TEMPORARY',
  WORK: 'WORK',
  POSTAL: 'POSTAL',
  FAMILY: 'FAMILY',
  OTHER: 'OTHER'
};

exports.DocumentType = exports.$Enums.DocumentType = {
  AMKA: 'AMKA',
  AFM: 'AFM',
  ID_CARD: 'ID_CARD',
  PASSPORT: 'PASSPORT',
  RESIDENCE_PERMIT: 'RESIDENCE_PERMIT',
  MILITARY_DOC: 'MILITARY_DOC',
  DEGREE: 'DEGREE',
  BANK_ACCOUNT: 'BANK_ACCOUNT',
  STUDENT_CERTIFICATE: 'STUDENT_CERTIFICATE',
  FAMILY_STATUS: 'FAMILY_STATUS',
  INSURANCE_RECORD: 'INSURANCE_RECORD',
  INSURANCE_REGISTRATION_CERT: 'INSURANCE_REGISTRATION_CERT',
  TAX_REGISTRY_CERT: 'TAX_REGISTRY_CERT',
  LANGUAGE_CERTIFICATE: 'LANGUAGE_CERTIFICATE',
  OTHER: 'OTHER'
};

exports.VerificationStatus = exports.$Enums.VerificationStatus = {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  NEEDS_REVISION: 'NEEDS_REVISION'
};

exports.Phase = exports.$Enums.Phase = {
  PERSONAL_INFO: 'PERSONAL_INFO',
  IDENTITY_DOCS: 'IDENTITY_DOCS',
  EMPLOYMENT_DOCS: 'EMPLOYMENT_DOCS',
  BANK_INFO: 'BANK_INFO',
  COMPLETED: 'COMPLETED'
};

exports.OnboardingStatus = exports.$Enums.OnboardingStatus = {
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  REJECTED: 'REJECTED'
};

exports.EmailType = exports.$Enums.EmailType = {
  PERSONAL: 'PERSONAL',
  WORK: 'WORK',
  OTHER: 'OTHER'
};

exports.PhoneType = exports.$Enums.PhoneType = {
  PERSONAL: 'PERSONAL',
  WORK: 'WORK',
  HOME: 'HOME',
  OTHER: 'OTHER'
};

exports.GreekBank = exports.$Enums.GreekBank = {
  NATIONAL_BANK: 'NATIONAL_BANK',
  ALPHA_BANK: 'ALPHA_BANK',
  PIRAEUS_BANK: 'PIRAEUS_BANK',
  EUROBANK: 'EUROBANK',
  ATTICA_BANK: 'ATTICA_BANK',
  OPTIMA_BANK: 'OPTIMA_BANK',
  PANCRETA_BANK: 'PANCRETA_BANK',
  OTHER: 'OTHER'
};

exports.ContractStatus = exports.$Enums.ContractStatus = {
  PENDING: 'PENDING',
  UPLOADED: 'UPLOADED',
  SIGNED: 'SIGNED',
  REJECTED: 'REJECTED'
};

exports.Language = exports.$Enums.Language = {
  ENGLISH: 'ENGLISH',
  FRENCH: 'FRENCH',
  GERMAN: 'GERMAN',
  SPANISH: 'SPANISH',
  ITALIAN: 'ITALIAN',
  RUSSIAN: 'RUSSIAN',
  CHINESE: 'CHINESE',
  ARABIC: 'ARABIC',
  TURKISH: 'TURKISH',
  BULGARIAN: 'BULGARIAN',
  ROMANIAN: 'ROMANIAN',
  ALBANIAN: 'ALBANIAN',
  OTHER: 'OTHER'
};

exports.Proficiency = exports.$Enums.Proficiency = {
  A1: 'A1',
  A2: 'A2',
  B1: 'B1',
  B2: 'B2',
  C1: 'C1',
  C2: 'C2',
  NATIVE: 'NATIVE'
};

exports.RequestStatus = exports.$Enums.RequestStatus = {
  PENDING: 'PENDING',
  IN_REVIEW: 'IN_REVIEW',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED'
};

exports.LeaveType = exports.$Enums.LeaveType = {
  ANNUAL: 'ANNUAL',
  UNPAID: 'UNPAID',
  SICK: 'SICK',
  EXAM: 'EXAM',
  POSTGRADUATE_EXAM: 'POSTGRADUATE_EXAM',
  BLOOD_DONATION: 'BLOOD_DONATION',
  MARRIAGE: 'MARRIAGE',
  BEREAVEMENT: 'BEREAVEMENT',
  MATERNITY: 'MATERNITY',
  SPECIAL_MATERNITY: 'SPECIAL_MATERNITY',
  PATERNITY: 'PATERNITY',
  CHILD_CARE: 'CHILD_CARE',
  PARENTAL: 'PARENTAL',
  CAREGIVER: 'CAREGIVER',
  FORCE_MAJEURE: 'FORCE_MAJEURE',
  FLEXIBLE_WORK: 'FLEXIBLE_WORK',
  IVF: 'IVF',
  PRENATAL_CHECKUP: 'PRENATAL_CHECKUP',
  CHILD_ILLNESS: 'CHILD_ILLNESS',
  CHILD_HOSPITAL: 'CHILD_HOSPITAL',
  SCHOOL_VISIT: 'SCHOOL_VISIT',
  DEPENDENT_CARE: 'DEPENDENT_CARE',
  SINGLE_PARENT: 'SINGLE_PARENT',
  DISABLED_CHILD: 'DISABLED_CHILD',
  NIGHT_WORK_EXEMPT: 'NIGHT_WORK_EXEMPT',
  BEREAVED_PARENT: 'BEREAVED_PARENT',
  GYNECOLOGICAL_EXAM: 'GYNECOLOGICAL_EXAM',
  OTHER: 'OTHER'
};

exports.LeaveStatus = exports.$Enums.LeaveStatus = {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED'
};

exports.ClientStatus = exports.$Enums.ClientStatus = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  ARCHIVED: 'ARCHIVED'
};

exports.ProjectStatus = exports.$Enums.ProjectStatus = {
  ACTIVE: 'ACTIVE',
  ON_HOLD: 'ON_HOLD',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  ARCHIVED: 'ARCHIVED'
};

exports.ProjectMemberRole = exports.$Enums.ProjectMemberRole = {
  MANAGER: 'MANAGER',
  MEMBER: 'MEMBER',
  VIEWER: 'VIEWER'
};

exports.TimeEntryStatus = exports.$Enums.TimeEntryStatus = {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

exports.ShiftStatus = exports.$Enums.ShiftStatus = {
  SCHEDULED: 'SCHEDULED',
  COMPLETED: 'COMPLETED',
  ABSENT: 'ABSENT',
  LATE: 'LATE',
  ON_LEAVE: 'ON_LEAVE'
};

exports.Prisma.ModelName = {
  Account: 'Account',
  Session: 'Session',
  VerificationToken: 'VerificationToken',
  User: 'User',
  UserStatusHistory: 'UserStatusHistory',
  CandidateNote: 'CandidateNote',
  JobListing: 'JobListing',
  Candidate: 'Candidate',
  JobApplication: 'JobApplication',
  CvAnalysis: 'CvAnalysis',
  JobApplicationHistory: 'JobApplicationHistory',
  PersonalInfo: 'PersonalInfo',
  IdentificationDocument: 'IdentificationDocument',
  Address: 'Address',
  Document: 'Document',
  DocumentVerification: 'DocumentVerification',
  OnboardingProgress: 'OnboardingProgress',
  OnboardingInvitation: 'OnboardingInvitation',
  EmergencyContact: 'EmergencyContact',
  DependentMember: 'DependentMember',
  UserEmail: 'UserEmail',
  UserPhone: 'UserPhone',
  BankAccount: 'BankAccount',
  Contract: 'Contract',
  LanguageSkill: 'LanguageSkill',
  Request: 'Request',
  RequestStatusHistory: 'RequestStatusHistory',
  StatusAttachment: 'StatusAttachment',
  RequestAttachment: 'RequestAttachment',
  LeaveRequest: 'LeaveRequest',
  LeaveAttachment: 'LeaveAttachment',
  LeaveStatusHistory: 'LeaveStatusHistory',
  LeaveStatusAttachment: 'LeaveStatusAttachment',
  Holiday: 'Holiday',
  Department: 'Department',
  Location: 'Location',
  Position: 'Position',
  Client: 'Client',
  Project: 'Project',
  ProjectMember: 'ProjectMember',
  TimeEntry: 'TimeEntry',
  Announcement: 'Announcement',
  TimeSchedule: 'TimeSchedule',
  ShiftEntry: 'ShiftEntry',
  CompanySettings: 'CompanySettings',
  CareerSettings: 'CareerSettings'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
