const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import SplashScreen from "./screens/SplashScreen";
import Busca from "./screens/Busca";
import Informaes from "./screens/Informaes";
import Desmaio from "./screens/Desmaio";
import DesmaioVideo from "./screens/DesmaioVideo";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Busca"
              component={Busca}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Informaes"
              component={Informaes}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Desmaio"
              component={Desmaio}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DesmaioVideo"
              component={DesmaioVideo}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
