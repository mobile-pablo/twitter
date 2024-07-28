import {useRouter} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import {Stack} from "expo-router";
import HomeSearchBtn from "@/components/home/HomeSearchBtn";
import TwitterLogo from "@/components/common/TwitterLogo";
import {useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import Top from "@/app/feature/top";
import Latest from "@/app/feature/latest";
import {useState} from "react";


const Home = () => {

    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {key: 'top', title: 'Top'},
        {key: 'latest', title: 'Latest'},
    ]);

    const router = useRouter();
    const renderScene = SceneMap({
        first: Top,
        second: Latest,
    });

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

            <TabView
                navigationState={{index, routes}}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{width: layout.width}}
            />
        </SafeAreaView>
    )
}

export default Home;