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

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ProfileDataResponse extends User{}

export interface ForgetPasswordResponse {
  info : string ,
}