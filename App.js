import "react-native-url-polyfill/auto";
import { AppNavigator } from "./Navigation";
import { AuthProvider } from "./provider/auth";


export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
