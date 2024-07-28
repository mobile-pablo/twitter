import {useRouter} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import {Stack} from "expo-router";
import HomeSearchBtn from "@/components/home/HomeSearchBtn";
import TwitterLogo from "@/components/common/TwitterLogo";

const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{flex: 1}}>
            <Stack.Screen
                options={{
                    headerShadowVisible: false,
                    headerTitle: '',
                    headerRight: () => (<HomeSearchBtn handlePress={() => {
                        router.navigate('search')
                    }}/>),
                    headerLeft: () => (<TwitterLogo/>),
                }}
            />
        </SafeAreaView>
    )
}

export default Home;