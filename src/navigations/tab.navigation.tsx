import React from "react";
import { colors } from "../styles/colors";
import { createBottomTabNavigator, BottomTabBarButtonProps, BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { ScreenInputLocation } from "../screens"
import { FontAwesome5 } from '@expo/vector-icons'; 

export interface ICoords {
    origemLatitude?: number
    origemLongitude?: number
    destinoLatitude?: number
    destinoLongitude?: number
}

type TabParam = {
    Input: undefined,
    Show: undefined | ICoords
}
type TabScreenNavigation = BottomTabNavigationProp<TabParam, 'Input'>
export type TabTypes = {
    navigation: TabScreenNavigation
}
export function TabNavigation(){
    const Tab = createBottomTabNavigator()
    return(
        <Tab.Navigator screenOptions={{
                tabBarActiveBackgroundColor: colors.primary,
                tabBarActiveTintColor: colors.white,
            headerStyle: {
                
                backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
        }}>
            <Tab.Screen name="Input" component={ScreenInputLocation} options={{
                tabBarIcon: () => (
                    <FontAwesome5 name="search-location" size={24} color={colors.white} />
                ),
                headerTitle: "Entrada de dados",
                tabBarLabel: "Entrada"
            }}/>
        </Tab.Navigator>
    )
}