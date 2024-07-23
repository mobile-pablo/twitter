import {useRouter} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import {Stack} from "expo-router";
import HomeSearchBtn from "@/components/home/HomeSearchBtn";

const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{flex: 1}}>
            <Stack.Screen
                options={{
                    headerShadowVisible: false,
                    headerTitle: '',
                    headerLeft: () => (<HomeSearchBtn handlePress={{}}/>),
                }}
            />
        </SafeAreaView>
    )
}

export default Home;