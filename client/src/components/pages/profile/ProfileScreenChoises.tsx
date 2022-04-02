import { StyleSheet } from "react-native";
import React from "react";
import { useToggle } from "hooks";
import { SpeedDial } from "react-native-elements";
import { useAuthStore, useRouting } from "hooks";

const ProfileScreenChoises = () => {
  const [open, toggleOpen] = useToggle(false);
  const { logout } = useAuthStore();
  const { navigateTo } = useRouting();

  const goToChanges = () => {
    toggleOpen();
    navigateTo("change_profile")();
  };

  return (
    <SpeedDial
      isOpen={open}
      buttonStyle={{
        borderRadius: 50,
        overflow: "hidden",
        backgroundColor: "#0d9488",
      }}
      icon={{ name: "add", color: "#fff" }}
      openIcon={{ name: "close", color: "#fff" }}
      onOpen={toggleOpen}
      onClose={toggleOpen}
    >
      <SpeedDial.Action
        icon={{ name: "logout", color: "#fff" }}
        title="Logout"
        buttonStyle={{
          borderRadius: 50,
          overflow: "hidden",
          backgroundColor: "#0d9488",
        }}
        onPress={logout}
      />
      <SpeedDial.Action
        icon={{ name: "edit", color: "#fff" }}
        title="Change Profile"
        buttonStyle={{
          borderRadius: 50,
          overflow: "hidden",
          backgroundColor: "#0d9488",
        }}
        onPress={goToChanges}
      />
    </SpeedDial>
  );
};

export default ProfileScreenChoises;

const styles = StyleSheet.create({});
