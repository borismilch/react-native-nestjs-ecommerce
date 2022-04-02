import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { useToggle } from "../hooks";
import * as Google from "expo-google-app-auth";
import { IUser, RegisterPayload } from "models";
import { useQuery } from "react-query";
import { AuthService } from "service";
import { useAuthMutations } from "hooks";
import { AxiosResponse } from "axios";
import { useNavigation } from "@react-navigation/native";
import { config } from "config";
import { initialContext, AuthContextProps } from "./Auth.context";

const googgleConfig = {
  androidClientId: config.GOOGLE_CLIENT_ID,
  scopes: ["profile", "email"],
  permissions: ["public_profile", "gender", "email", "location"],
};
export const AuthContext = createContext<AuthContextProps>(initialContext);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, _, changeLoading] = useToggle(false);
  const navigator = useNavigation();

  const {
    data: userData,
    refetch,
    isLoading,
    isFetching,
  } = useQuery<AxiosResponse<IUser>>(
    "user",
    async () => await AuthService.getCurrentUser(),
    {
      onError: (e) => {
        setUser(null);
      },
      onSuccess: (data) => {
        console.log("success");
      },
    }
  );
  const { login, register, signInWithProvider, createGooglePayload } =
    useAuthMutations();
  const logout = () => {
    setUser(null);
    AuthService.logoutUser();
  };
  const signInWithGoogle = async () => {
    changeLoading(true);

    Google.logInAsync(googgleConfig as any).then(async (loginResult) => {
      if (loginResult.type === "success") {
        const { user } = loginResult;
        const googleUser = createGooglePayload(user);

        signInWithProvider.mutate(googleUser, {
          onSuccess: () => {
            refetch();
          },
        });

        setTimeout(() => {
          changeLoading(false);
          navigator.navigate("home" as never);
        }, 1500);
      } else {
        changeLoading(false);
        throw new Error("Google auth rejected");
      }
    });
  };

  const loginUser = async (email: string, password: string) => {
    login.mutate({ email, password });
    refetch();

    setTimeout(() => navigator.navigate("home" as never), 300);
  };

  const registerUser = async (payload: RegisterPayload) => {
    register.mutate(payload);
    refetch();

    setTimeout(() => navigator.navigate("home" as never), 300);
  };

  useEffect(() => {
    setUser(userData?.data as any);
  }, [userData]);

  const contextValue = {
    user,
    signInWithGoogle,
    isLoading: isLoading || isFetching,
    loginUser: loginUser,
    registerUser: registerUser,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
