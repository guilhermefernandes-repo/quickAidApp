import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const SplashScreen = () => {
  return (
    <View style={styles.splashScreen}>
      <View style={[styles.logo, styles.logoPosition]}>
        <Image
          style={styles.medicalIconfirstAid}
          contentFit="cover"
          source={require("../assets/medicaliconfirstaid1.png")}
        />
        <Text style={[styles.quickAid, styles.logoPosition]}>Quick Aid</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoPosition: {
    width: 175,
    left: "50%",
    position: "absolute",
  },
  medicalIconfirstAid: {
    marginLeft: -57.5,
    top: 0,
    width: 112,
    height: 114,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  quickAid: {
    marginLeft: -87.5,
    top: 114,
    fontSize: 36,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorBlack,
    textAlign: "left",
    height: 48,
  },
  logo: {
    marginLeft: -86.5,
    top: 369,
    height: 162,
  },
  splashScreen: {
    backgroundColor: Color.colorGainsboro,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default SplashScreen;
