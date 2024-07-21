import { useRouter } from "expo-router";
import { View ,Text} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import Dashboard from "./ui/feature/dashboard/dashboard";

const Home = () => {
    const router = useRouter();
    return (
            <SafeAreaView style={{ flex: 1}}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
        </SafeAreaView>
    )
}

export default Home;