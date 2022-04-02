import { IUser, RegisterPayload } from "models";
import { createContext } from "react";

export interface AuthContextProps {
  user?: IUser | null;
  signInWithGoogle: () => Promise<void>;
  isLoading: boolean;
  logout: () => void;
  loginUser: (email: string, password: string) => Promise<void>;
  registerUser: (payload: RegisterPayload) => Promise<void>;
}

export const initialContext: AuthContextProps = {
  user: null,
  signInWithGoogle: async () => {},
  isLoading: true,
  logout: () => {},
  loginUser: async () => {},
  registerUser: async () => {},
};

export const AuthContext = createContext<AuthContextProps>(initialContext);
