import { StyleSheet } from "react-native";
import React from "react";
import { Input } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { useChangeProfileForm } from ".";
import { SafeAreaView } from "react-native";
import { useAuthStore, useRouting } from "hooks";
import { ChangeAvatar } from ".";
import { LoginButton } from "components/auth";
import { useImagePicker } from "hooks";
import { IUpdateUserPayload } from "models";
import { useMutation } from "react-query";
import { UserService } from "service";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { useQueryClient } from "react-query";
import { queryNames } from "constants/.";

const isErrorStyle = (isError: boolean) =>
  isError ? { borderColor: "#ef4444", color: "#ef4444" } : {};

const ChangeProfileForm = () => {
  const { user } = useAuthStore();
  const { navigateTo } = useRouting();
  const queryClient = useQueryClient();

  const updateUserMutation = useMutation(
    async (payload: IUpdateUserPayload) => {
      return UserService.updateUser(payload, user?.id || 0);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("user");
        queryClient.invalidateQueries(queryNames.userStats);
        navigateTo("profile")();
      },
      onError: (e: Error) => {
        console.log(e);
        Toast.show({
          text1: "Something went wrong",
          text2: e.message,
        });
      },
    }
  );

  const {
    image,
    loading: imageLoading,
    photoUrl,
    takeAPhoto,
    uploadFile,
  } = useImagePicker();

  const updateProfile = (name: string, bio: string) => {
    const updateObject: IUpdateUserPayload = {
      name,
      bio,
      picture: photoUrl ? photoUrl : user?.picture || "",
    };

    updateUserMutation.mutate(updateObject);
  };

  const {
    bindBio,
    bindName,
    changeUser,
    bio,
    isBioError,
    isNameError,
    loading,
    name,
  } = useChangeProfileForm(updateProfile);

  return (
    <SafeAreaView style={styles.wrapper}>
      <ChangeAvatar
        takeAPhoto={takeAPhoto}
        uploadFile={uploadFile}
        image={image}
        isLoading={imageLoading}
      />

      <Input
        {...bindName}
        placeholder="Name..."
        errorMessage={
          isNameError ? "name is required and must ne more than 3 symbols" : ""
        }
        rightIcon={<FormIcon isError={isNameError} name="user" />}
        errorStyle={{ fontSize: 10 }}
      />

      <Input
        {...bindBio}
        placeholder="Your Bio..."
        errorMessage={
          isNameError ? "name is required and must ne more than 3 symbols" : ""
        }
        rightIcon={<FormIcon isError={isBioError} name="airplay" />}
        errorStyle={{ fontSize: 10 }}
      />

      <LoginButton
        loading={loading}
        onPress={changeUser}
        text="Save and exit"
      />
    </SafeAreaView>
  );
};

export default ChangeProfileForm;

function FormIcon({ name, isError }: { name: string; isError: boolean }) {
  return (
    <Feather
      style={isErrorStyle(isError)}
      name={name as any}
      size={24}
      color="#f59e0b"
    />
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  buttonWrapper: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
});
