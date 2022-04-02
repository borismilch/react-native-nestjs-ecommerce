import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { toastConfig } from "./src/components/layout/toasts";
import { AuthProvider } from "./src/providers";
import StackNavigation from "./StackNavigation";
import { QueryClientProvider, QueryClient } from "react-query";
import { store } from "store/store";
import { Provider } from "react-redux";
import { StripeProvider } from "@stripe/stripe-react-native";
import { config } from "config";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs();

console.warn = function warn() {};
const client = new QueryClient();

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StripeProvider publishableKey={config.STRIPE_PUBLISHABLE_KEY}>
          <NavigationContainer>
            <QueryClientProvider client={client}>
              <AuthProvider>
                <StackNavigation />
              </AuthProvider>
            </QueryClientProvider>
          </NavigationContainer>
        </StripeProvider>
      </Provider>

      <Toast config={toastConfig} />
    </>
  );
}
