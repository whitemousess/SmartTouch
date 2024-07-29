import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Animated } from "react-native";
import AddDeviceScreen from "~/screens/AddDeviceScreen";
import { ScreenName } from "../type";
import { TabOptions } from "./TabOptions";
import VectorIcon from "~/components/VectorIcon";
import Constants, { darkTheme } from "~/common/Constant";
import HomeStack from "../Stacks/HomeStack";
import MenuStack from "../Stacks/MenuStac";

interface MainTabsProps {
    state: object;
    routeName: string | undefined;
}

const Tab = createBottomTabNavigator();

const MainTabs: React.FC<MainTabsProps> = ({ state, routeName }) => {
    const show = routeName === ScreenName.Home || routeName === ScreenName.Menu || routeName === ScreenName.AddDevice;

    return (
        <Tab.Navigator
            initialRouteName={ScreenName.HomeStack}
            screenOptions={() => TabOptions(show)}
        >
            <Tab.Screen
                name={ScreenName.HomeStack}
                component={HomeStack}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Animated.View style={{ transform: [{ scale: focused ? 1.1 : 1 }] }}>
                            <VectorIcon.AntDesignVectorIcon name="home" size={30} color={color} />
                        </Animated.View>
                    ),
                }}
            />

            <Tab.Screen
                name={ScreenName.AddDevice}
                component={AddDeviceScreen}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Animated.View
                            style={{
                                backgroundColor: focused ? darkTheme.mainColor : Constants.whiteGray,
                                width: 50,
                                height: 50,
                                transform: [{ scale: focused ? 1.2 : 1 }],
                                top: -20,
                                borderRadius: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 4,
                                borderColor: "transparent"
                            }}
                        >
                            <VectorIcon.MaterialVectorIcon
                                name="add"
                                size={30}
                                color={Constants.white}
                            />
                        </Animated.View>
                    ),
                }}
            />

            <Tab.Screen
                name={ScreenName.MenuStack}
                component={MenuStack}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Animated.View style={{ transform: [{ scale: focused ? 1.1 : 1 }] }}>
                            <VectorIcon.FeatherVectorIcon name="menu" size={30} color={color} />
                        </Animated.View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default MainTabs;