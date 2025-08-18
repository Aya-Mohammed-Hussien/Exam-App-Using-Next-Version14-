export interface User {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  isVerified: boolean;
  createdAt: string;             
  passwordChangedAt?: string;    
  passwordResetExpires?: string;
  resetCodeVerified?: boolean;
}

export interface SuccessAuthResponse {
  message: string;
  token: string;
  user: User;
}
export interface ErrorAuthResponse {
  message: string;
  code:number;
}
 export type AuthResponse = SuccessAuthResponse | ErrorAuthResponse