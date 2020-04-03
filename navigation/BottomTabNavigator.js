import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import RoutineScreen from "../screens/RoutineScreen";
import AboutScreen from "../screens/AboutScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-home" />
          )
        }}
      />
      <BottomTab.Screen
        name="Routine"
        component={RoutineScreen}
        options={{
          title: "Routine",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-calendar" />
          )
        }}
      />

      <BottomTab.Screen
        name="Setting"
        component={AboutScreen}
        options={{
          title: "Setting",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-settings" />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "Start Workout";
    case "Routine":
      return "My Routine";
    case "Setting":
      return "Links to learn more";
  }
}
