import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRef } from "react";
import { IconButton } from "components/shared";
import { useRouting } from "hooks";
import { Dimensions } from "react-native";
import { useInputValue } from "hooks";
import { useDispatch } from "react-redux";
import { SearchActions } from "store/actions";

const PagesSearch = () => {
  const inputRef = useRef<TextInput>();
  const { route, navigation } = useRouting();
  const { changeValue, cleanValue, value } = useInputValue("");

  const dispatch = useDispatch();

  const onSubmitEditing = () => {
    dispatch(SearchActions.changeSearch(value));
    navigation.navigate("home" as never);
  };

  const startSearch = () => {
    inputRef.current?.focus();
  };

  const nativeRoutes = ["home", "cart", "liked", "detail"];
  const isHomeScreen = nativeRoutes.includes(route.name);

  return (
    <View style={styles.wrapper}>
      {!isHomeScreen && (
        <IconButton
          onPress={navigation.goBack}
          style={{ marginRight: 7 }}
          Icon={
            <Ionicons name="ios-arrow-back-sharp" size={28} color="white" />
          }
        />
      )}
      <View style={styles.inputWrapper()}>
        <IconButton
          Icon={<Ionicons name="ios-search-sharp" size={24} color="black" />}
          onPress={startSearch}
        />

        <TextInput
          ref={inputRef as any}
          value={value}
          onSubmitEditing={onSubmitEditing}
          onChangeText={changeValue}
          placeholder="Type something..."
          style={{ marginLeft: 5, flex: 1 }}
        />

        {!!value && (
          <IconButton
            Icon={<Ionicons name="close" size={24} color="black" />}
            onPress={cleanValue}
          />
        )}

        <Ionicons name="mic-outline" size={24} color="black" />
      </View>
    </View>
  );
};

export default PagesSearch;

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    paddingTop: 40,
    position: "relative",
    paddingBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor:
      "linear-gradient(90deg, rgba(2,105,85,1) 0%, rgba(58,255,223,1) 99%)  ",
  },

  inputWrapper(isHomeScreen: boolean) {
    return {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      borderRadius: 10,
      maxWidth: windowWidth - (isHomeScreen ? 65 : 0),
      fontSize: 19,
      padding: 9,
    };
  },
} as any);
