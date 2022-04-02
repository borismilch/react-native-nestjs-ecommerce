import React from "react";
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  CreateScreen,
  OrderScreen,
  DetailScreen,
  ProfileScreen,
  CartScreen,
  ChangeProfileScreen,
  DisscussScreen,
  UserOrdersScreen,
} from "./src/screens";
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { useAuthStore } from "./src/hooks";
import { LikesScreen } from "./src/screens";

const Stack = createStackNavigator();

const HomeScreenOptions: StackNavigationOptions = {
  header: () => <></>,
};

const StackNavigation = () => {
  const { user } = useAuthStore();

  return (
    <Stack.Navigator initialRouteName={user ? "home" : "login"}>
      {user ? (
        <>
          <Stack.Group
            screenOptions={{
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
            }}
          >
            <Stack.Screen
              options={HomeScreenOptions}
              name="home"
              component={HomeScreen}
            />

            <Stack.Screen
              options={HomeScreenOptions}
              name="cart"
              component={CartScreen}
            />
            <Stack.Screen
              options={HomeScreenOptions}
              name="profile"
              component={ProfileScreen}
            />

            <Stack.Screen
              options={HomeScreenOptions}
              name="create"
              component={CreateScreen}
            />

            <Stack.Screen
              options={HomeScreenOptions}
              name="disscuss"
              component={DisscussScreen}
            />
          </Stack.Group>

          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen
              options={HomeScreenOptions}
              name="change_profile"
              component={ChangeProfileScreen}
            />
          </Stack.Group>

          <Stack.Screen
            options={HomeScreenOptions}
            name="order"
            component={OrderScreen}
          />

          <Stack.Screen
            options={HomeScreenOptions}
            name="liked"
            component={LikesScreen}
          />

          <Stack.Screen
            options={HomeScreenOptions}
            name="detail"
            component={DetailScreen}
          />

          <Stack.Screen
            options={HomeScreenOptions}
            name="orders"
            component={UserOrdersScreen}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            options={HomeScreenOptions}
            name="login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={HomeScreenOptions}
            name="register"
            component={RegisterScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
