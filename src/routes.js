import React from "react";
import { View, Image } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import logo from "./assets/logo.png";
import Feed from "./pages/Feed";

const Routes = createAppContainer(
    createStackNavigator({
        Feed
    }, {
        defaultNavigationOptions: {
            headerTitleAlign: "center",
            headerTitle: () => <Image source={logo} />,
            // headerTitleAlign: "center",
            // headerStyle: {
            //     backgroundColor: "#f5f5f5"
            // }
        }
    })
);

export default Routes
