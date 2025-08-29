export interface LoginResponse {
  token: string;
  user: {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: string;
    isVerified: boolean;
  };
}

export type User = LoginResponse["user"]

export interface ChangePasswordResponse {
  token : string
}
