import { TSubscription } from "../Subscription/Subscription";

type TUserRole = "customer" | "admin" | "superAdmin";

type TUserStatus = "active" | "banned" | "pendingDelete";

type TUserPermission =
  | "update_subscription_plan"
  | "manage_customer"
  | "create_admin"
  | "update_admin";

type TUserProfile = {
  picture?: string;
};

type TLoggedInDevice = {
  id?: string;
  ip?: string;
  city?: string;
  country?: string;
  lastUsedAt?: string;
  isBlocked: boolean;
  blockedAt?: string;
  createdAt?: string;
  updatedAt?: string;
  expiresAt?: string;
};

type TUser = {
  id?: string;
  userId?: string;
  fullName?: string;
  email?: string;
  isEmailVerified?: boolean;
  needsPasswordChange?: boolean;
  role?: TUserRole;
  status?: TUserStatus;
  permissions?: TUserPermission[];
  profile?: TUserProfile;
  loggedInDevices?: TLoggedInDevice[];
  subscriptions: TSubscription[];
};

type TUserSlice = {
  user: TUser | null;
  isUserLoading: boolean;
};

export type {
  TLoggedInDevice,
  TUser,
  TUserPermission,
  TUserProfile,
  TUserRole,
  TUserSlice,
  TUserStatus,
};
