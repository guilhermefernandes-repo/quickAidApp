import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Desmaio = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.desmaio}>
      <View style={styles.buscaParent}>
        <Text style={styles.busca}>Busca</Text>
        <Image
          style={[styles.searchIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
      </View>
      <View style={[styles.logo, styles.logoPosition]}>
        <Image
          style={styles.medicalIconfirstAid}
          contentFit="cover"
          source={require("../assets/medicaliconfirstaid.png")}
        />
        <Text style={[styles.quickAid, styles.logoPosition]}>Quick Aid</Text>
      </View>
      <Text style={[styles.desmaio1, styles.desmaio1Typo]}>Desmaio</Text>
      <Text style={[styles.sequnciasDasAes, styles.desmaio1Typo]}>
        Sequências das Ações:
      </Text>
      <Text style={[styles.aPerdaSbita, styles.seAVtimaTypo]}>
        É a perda súbita, temporária e repentina da consciência, devido à
        diminuição de sangue e oxigênio no cérebro. Automaticamente o cérebro
        reage com falta de força muscular, queda do corpo e perda de
        consciência.
      </Text>
      <Text
        style={[styles.seAVtima, styles.seAVtimaTypo]}
      >{`Se a vítima estiver acordada (consciente):
Sentá-la em uma cadeira, ou outro local semelhante.
Curvá-la para frente.
Baixar a cabeça do acidentado, colocando-a entre as pernas e
 pressionar a cabeça para baixo.
Manter a cabeça mais baixa que os joelhos.
Fazê-la respirar profundamente, até que passe o mal-estar.

Havendo o desmaio:
Manter o acidentado deitado, colocando sua cabeça e ombros
em posição mais baixa em relação ao resto do corpo.
Afrouxe sua roupa.
Se houver vômito, lateralize a cabeça, para evitar sufocamento.
Se o desmaio durar mais que dois minutos agasalhar a
vítima e chame o socorro especializado`}</Text>
      <Pressable
        style={[styles.play, styles.playFlexBox]}
        onPress={() => navigation.navigate("DesmaioVideo")}
      >
        <Image
          style={styles.phplayFillIcon}
          contentFit="cover"
          source={require("../assets/phplayfill.png")}
        />
      </Pressable>
      <View style={[styles.phone, styles.playFlexBox]}>
        <Image
          style={styles.phplayFillIcon}
          contentFit="cover"
          source={require("../assets/icsharpphone.png")}
        />
      </View>
      <View style={[styles.audio, styles.playFlexBox]}>
        <Image
          style={styles.phplayFillIcon}
          contentFit="cover"
          source={require("../assets/f7speakerfill.png")}
        />
      </View>
      <View style={[styles.share, styles.playFlexBox]}>
        <Image
          style={styles.phplayFillIcon}
          contentFit="cover"
          source={require("../assets/materialsymbolsshare.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    height: 24,
    width: 24,
  },
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  logoPosition: {
    width: 42,
    left: "50%",
    position: "absolute",
  },
  desmaio1Typo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    marginLeft: -180.5,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  seAVtimaTypo: {
    textAlign: "justify",
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    width: 361,
    left: 16,
    position: "absolute",
  },
  playFlexBox: {
    justifyContent: "center",
    height: 26,
    backgroundColor: Color.colorMaroon,
    borderRadius: Border.br_smi,
    top: 232,
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  busca: {
    fontSize: FontSize.size_xs,
    color: Color.colorSilver_200,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
  },
  searchIcon: {
    overflow: "hidden",
  },
  buscaParent: {
    top: 60,
    borderRadius: Border.br_3xl,
    backgroundColor: Color.white,
    justifyContent: "space-between",
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    width: 361,
    left: 16,
    position: "absolute",
  },
  medicalIconfirstAid: {
    marginLeft: -13.8,
    top: 0,
    width: 27,
    height: 27,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  quickAid: {
    marginLeft: -21,
    top: 27,
    fontSize: FontSize.size_4xs_6,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    height: 12,
    color: Color.colorBlack,
    textAlign: "left",
  },
  logo: {
    marginLeft: -20.5,
    top: 13,
    height: 39,
  },
  desmaio1: {
    top: 124,
    fontSize: FontSize.size_5xl,
    color: Color.colorMaroon,
  },
  sequnciasDasAes: {
    top: 274,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  aPerdaSbita: {
    top: 162,
  },
  seAVtima: {
    top: 306,
    height: 225,
  },
  phplayFillIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  play: {
    width: 78,
    justifyContent: "center",
    height: 26,
    backgroundColor: Color.colorMaroon,
    borderRadius: Border.br_smi,
    top: 232,
    left: 16,
  },
  phone: {
    left: 205,
    width: 78,
    justifyContent: "center",
    height: 26,
    backgroundColor: Color.colorMaroon,
    borderRadius: Border.br_smi,
    top: 232,
  },
  audio: {
    left: 110,
    width: 79,
    justifyContent: "center",
    height: 26,
    backgroundColor: Color.colorMaroon,
    borderRadius: Border.br_smi,
    top: 232,
  },
  share: {
    left: 299,
    width: 78,
    justifyContent: "center",
    height: 26,
    backgroundColor: Color.colorMaroon,
    borderRadius: Border.br_smi,
    top: 232,
  },
  desmaio: {
    backgroundColor: Color.colorGainsboro,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Desmaio;
