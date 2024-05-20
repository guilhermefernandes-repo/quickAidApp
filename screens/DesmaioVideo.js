import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const DesmaioVideo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.desmaioVideo}>
      <View style={styles.buscaParent}>
        <Text style={styles.busca}>Busca</Text>
        <Image
          style={[styles.searchIcon, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
      </View>
      <View style={[styles.logo, styles.logoLayout]}>
        <Image
          style={styles.medicalIconfirstAid}
          contentFit="cover"
          source={require("../assets/medicaliconfirstaid.png")}
        />
        <Text style={[styles.quickAid, styles.textTypo]}>Quick Aid</Text>
      </View>
      <Text style={[styles.desmaio, styles.desmaioTypo]}>Desmaio</Text>
      <Text style={[styles.sequnciasDasAes, styles.desmaioTypo]}>
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
Se o desmaio durar mais que dois minutos agasalhar a vítima e chame o socorro especializado`}</Text>
      <View style={styles.youtubePlayerMockup}>
        <View style={styles.screen} />
        <View style={[styles.controlBar, styles.barPosition]} />
        <View style={[styles.renderBar, styles.barPosition]} />
        <View style={[styles.loadingBar, styles.barPosition]} />
        <View style={[styles.playingBar, styles.barPosition]} />
        <Image
          style={styles.playButtonIcon}
          contentFit="cover"
          source={require("../assets/play-button.png")}
        />
        <Image
          style={[styles.youtubePlayerMockupChild, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/polygon-2.png")}
        />
        <Image
          style={[styles.backIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/back.png")}
        />
        <Image
          style={[styles.forwardIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/forward.png")}
        />
        <Image
          style={[styles.volumeIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/volume.png")}
        />
        <Text style={[styles.text, styles.hdLayout1]}>3:45 / 15:00</Text>
        <Text style={[styles.hd, styles.hdLayout]}>HD</Text>
        <Image
          style={[styles.fullscreenWhite24dp1Icon, styles.hdLayout]}
          contentFit="cover"
          source={require("../assets/fullscreen-white-24dp-1.png")}
        />
      </View>
      <Pressable
        style={[styles.play, styles.playFlexBox]}
        onPress={() => navigation.navigate("Desmaio")}
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
          source={require("../assets/f7speakerfill1.png")}
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
  iconLayout3: {
    height: 24,
    width: 24,
  },
  iconLayout2: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  logoLayout: {
    width: 42,
    left: "50%",
  },
  textTypo: {
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  desmaioTypo: {
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
  barPosition: {
    top: 180,
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    height: 8,
    width: 8,
    top: 189,
    position: "absolute",
  },
  iconLayout: {
    height: 11,
    top: 187,
  },
  hdLayout1: {
    height: 9,
    fontSize: FontSize.size_6xs_6,
    top: 188,
  },
  hdLayout: {
    width: 11,
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
    justifyContent: "space-between",
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    width: 361,
    backgroundColor: Color.white,
    left: 16,
    position: "absolute",
  },
  medicalIconfirstAid: {
    marginLeft: -13.8,
    width: 27,
    height: 27,
    top: 0,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  quickAid: {
    marginLeft: -21,
    top: 27,
    fontSize: FontSize.size_4xs_6,
    fontFamily: FontFamily.poppinsSemiBold,
    height: 12,
    color: Color.colorBlack,
    width: 42,
    left: "50%",
  },
  logo: {
    marginLeft: -20.5,
    top: 13,
    height: 39,
    position: "absolute",
  },
  desmaio: {
    top: 124,
    fontSize: FontSize.size_5xl,
    color: Color.colorMaroon,
  },
  sequnciasDasAes: {
    top: 489,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  aPerdaSbita: {
    top: 162,
  },
  seAVtima: {
    top: 521,
    height: 225,
  },
  screen: {
    height: 180,
    left: 0,
    top: 0,
    width: 361,
    position: "absolute",
  },
  controlBar: {
    backgroundColor: "#121212",
    height: 25,
    width: 361,
  },
  renderBar: {
    backgroundColor: "#565656",
    width: 361,
    height: 1,
  },
  loadingBar: {
    backgroundColor: "#8b8b8b",
    width: 257,
    height: 1,
  },
  playingBar: {
    backgroundColor: "#ff0000",
    width: 56,
    height: 1,
  },
  playButtonIcon: {
    top: 71,
    left: 151,
    width: 59,
    height: 38,
    position: "absolute",
  },
  youtubePlayerMockupChild: {
    left: 7,
  },
  backIcon: {
    left: 24,
  },
  forwardIcon: {
    left: 41,
  },
  volumeIcon: {
    left: 58,
    width: 44,
    position: "absolute",
  },
  text: {
    left: 267,
    fontFamily: FontFamily.interSemiBold,
    color: "#b4b4b4",
    width: 41,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  hd: {
    left: 316,
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
    color: "#6d6d6d",
    textAlign: "right",
    height: 9,
    fontSize: FontSize.size_6xs_6,
    top: 188,
  },
  fullscreenWhite24dp1Icon: {
    left: 339,
    height: 11,
    top: 187,
    overflow: "hidden",
  },
  youtubePlayerMockup: {
    top: 268,
    height: 205,
    width: 361,
    backgroundColor: Color.white,
    left: 16,
    position: "absolute",
    overflow: "hidden",
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
  desmaioVideo: {
    backgroundColor: Color.colorGainsboro,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default DesmaioVideo;
