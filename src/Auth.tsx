import React from "react";
//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
//screens
import SplashScreen from "./screens/SplashScreen";
//Home
import HomeScreen from "./screens/Home/HomeScreen";
import ScrapScreen from "./screens/Home/ScrapScreen";
//Product
import CreateScreen from "./screens/Product/CreateScreen";
//User
import ProfileScreen from "./screens/User/ProfileScreen";
import SignUpScreen from "./screens/User/SignUpScreen";
//icons
import Icon from "react-native-vector-icons/AntDesign";
//styles
import ChutesColors from "./styles/colors";

const colors = ChutesColors();

const DisplayTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        headerBackTitleVisible: false,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Icon name={"search1"} size={30} color={colors.primary} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarIcon: () => (
            <Icon name={"addfile"} size={30} color={colors.primary} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Icon name={"user"} size={30} color={colors.primary} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
const Auth = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Tabs" component={DisplayTabs} />
        <Stack.Screen name="Scrap" component={ScrapScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Auth;
