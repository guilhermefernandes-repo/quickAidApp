import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, Padding, Border, FontFamily } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.home, styles.homeLayout]}>
      <Pressable
        style={styles.searchBar}
        onPress={() => navigation.navigate("Busca")}
      >
        <Text style={[styles.busca, styles.buscaTypo]}>Busca</Text>
        <Image
          style={[styles.searchIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
      </Pressable>
      <View
        style={[
          styles.emergenciasMaisPesquisadas,
          styles.numerosDeEmergenciaPosition,
        ]}
      >
        <Text style={[styles.emergnciasMaisPesquisadas, styles.quickAidClr]}>
          Emergências mais pesquisadas
        </Text>
        <View style={[styles.engasgoOuAsfixia, styles.cortesLayout]}>
          <Text
            style={[styles.engasgoOuAsfixia1, styles.quickAidClr]}
          >{`Engasgo ou
Asfixia`}</Text>
        </View>
        <View style={[styles.mordidas, styles.cortesLayout]}>
          <Text
            style={[styles.engasgoOuAsfixia1, styles.quickAidClr]}
          >{`Mordidas
de animais`}</Text>
        </View>
        <View style={[styles.queimaduras, styles.cortesLayout]}>
          <Text style={[styles.queimaduras1, styles.quickAidClr]}>
            Queimaduras
          </Text>
        </View>
        <View style={[styles.cortes, styles.cortesLayout]}>
          <Text style={[styles.engasgoOuAsfixia1, styles.quickAidClr]}>
            Cortes
          </Text>
        </View>
        <View style={[styles.picadas, styles.cortesLayout]}>
          <Text
            style={[styles.engasgoOuAsfixia1, styles.quickAidClr]}
          >{`Picada de
inseto`}</Text>
        </View>
        <View style={[styles.choqueEletrico, styles.cortesLayout]}>
          <Text style={[styles.engasgoOuAsfixia1, styles.quickAidClr]}>{`Choque
elétrico`}</Text>
        </View>
        <Pressable
          style={[styles.desmaio, styles.cortesLayout]}
          onPress={() => navigation.navigate("Desmaio")}
        >
          <Text style={[styles.engasgoOuAsfixia1, styles.quickAidClr]}>
            Desmaio
          </Text>
        </Pressable>
        <View style={[styles.fraturas, styles.cortesLayout]}>
          <Text style={[styles.engasgoOuAsfixia1, styles.quickAidClr]}>
            Fraturas
          </Text>
        </View>
        <View style={[styles.verTodas, styles.verLayout]}>
          <Text style={[styles.verTodasAs, styles.buscaTypo]}>
            Ver todas as emergências
          </Text>
        </View>
      </View>
      <View
        style={[styles.numerosDeEmergencia, styles.numerosDeEmergenciaPosition]}
      >
        <Text style={[styles.emergnciasMaisPesquisadas, styles.quickAidClr]}>
          Principais números de emergência
        </Text>
        <View style={[styles.verTodas1, styles.verLayout]}>
          <Text style={[styles.verTodasAs, styles.buscaTypo]}>
            Ver todos os números de emergência
          </Text>
        </View>
        <View style={[styles.engasgoOuAsfixia2, styles.engasgoLayout1]}>
          <Text style={[styles.polciaMilitar, styles.textTypo]}>
            Polícia Militar
          </Text>
          <Text style={[styles.text, styles.textTypo]}>190</Text>
        </View>
        <View style={[styles.engasgoOuAsfixia3, styles.engasgoLayout1]}>
          <Text style={[styles.polciaMilitar, styles.textTypo]}>Bombeiros</Text>
          <Text style={[styles.text, styles.textTypo]}>193</Text>
        </View>
        <View style={[styles.engasgoOuAsfixia4, styles.engasgoLayout1]}>
          <Text style={[styles.polciaMilitar, styles.textTypo]}>SAMU</Text>
          <Text style={[styles.text, styles.textTypo]}>192</Text>
        </View>
        <View style={[styles.engasgoOuAsfixia5, styles.engasgoLayout1]}>
          <Text style={[styles.polciaMilitar, styles.textTypo]}>
            Defesa Civil
          </Text>
          <Text style={[styles.text, styles.textTypo]}>199</Text>
        </View>
      </View>
      <View style={[styles.verTodas2, styles.verLayout]}>
        <Text style={[styles.verTodasAs, styles.buscaTypo]}>
          Todos meus contatos de emergência
        </Text>
      </View>
      <View style={[styles.engasgoOuAsfixia6, styles.engasgoLayout]}>
        <Image
          style={styles.plusIcon}
          contentFit="cover"
          source={require("../assets/plus.png")}
        />
      </View>
      <View style={[styles.engasgoOuAsfixia7, styles.engasgoLayout]}>
        <Image
          style={styles.plusIcon}
          contentFit="cover"
          source={require("../assets/plus.png")}
        />
      </View>
      <View style={[styles.engasgoOuAsfixia8, styles.engasgoLayout]}>
        <Image
          style={styles.plusIcon}
          contentFit="cover"
          source={require("../assets/plus.png")}
        />
      </View>
      <View style={[styles.engasgoOuAsfixia9, styles.engasgoLayout]}>
        <Image
          style={styles.plusIcon}
          contentFit="cover"
          source={require("../assets/plus.png")}
        />
      </View>
      <Text style={[styles.contatosDeEmergncia, styles.quickAidClr]}>
        Contatos de emergência
      </Text>
      <View style={[styles.logo, styles.logoPosition]}>
        <Image
          style={[styles.medicalIconfirstAid, styles.homebuttonIconPosition]}
          contentFit="cover"
          source={require("../assets/medicaliconfirstaid.png")}
        />
        <Text style={[styles.quickAid, styles.logoPosition]}>Quick Aid</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeLayout: {
    width: "100%",
    overflow: "hidden",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  buscaTypo: {
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  numerosDeEmergenciaPosition: {
    marginLeft: -180.5,
    width: 361,
    left: "50%",
    position: "absolute",
  },
  quickAidClr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  cortesLayout: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    height: 78,
    width: 78,
    borderRadius: Border.br_8xs,
    flexDirection: "row",
    backgroundColor: Color.white,
    position: "absolute",
  },
  verLayout: {
    height: 26,
    backgroundColor: Color.colorMaroon,
    borderRadius: Border.br_smi,
    justifyContent: "center",
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    width: 361,
    position: "absolute",
  },
  engasgoLayout1: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    height: 78,
    width: 78,
    borderRadius: Border.br_8xs,
    top: 46,
    alignItems: "center",
    backgroundColor: Color.white,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  engasgoLayout: {
    top: 636,
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    height: 78,
    width: 78,
    borderRadius: Border.br_8xs,
    alignItems: "center",
    backgroundColor: Color.white,
    position: "absolute",
  },
  logoPosition: {
    width: 42,
    left: "50%",
    position: "absolute",
  },
  homebuttonIconPosition: {
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  busca: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorSilver_200,
  },
  searchIcon: {
    overflow: "hidden",
  },
  searchBar: {
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
  emergnciasMaisPesquisadas: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    marginLeft: -180.5,
    left: "50%",
    position: "absolute",
    top: 0,
  },
  engasgoOuAsfixia1: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
  },
  engasgoOuAsfixia: {
    left: 0,
    top: 46,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    height: 78,
    width: 78,
    borderRadius: Border.br_8xs,
  },
  mordidas: {
    top: 140,
    left: 0,
  },
  queimaduras1: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.colorBlack,
  },
  queimaduras: {
    left: 94,
    top: 46,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    height: 78,
    width: 78,
    borderRadius: Border.br_8xs,
  },
  cortes: {
    left: 94,
    top: 140,
  },
  picadas: {
    left: 283,
    top: 46,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    height: 78,
    width: 78,
    borderRadius: Border.br_8xs,
  },
  choqueEletrico: {
    left: 283,
    top: 140,
  },
  desmaio: {
    left: 189,
    top: 46,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    height: 78,
    width: 78,
    borderRadius: Border.br_8xs,
  },
  fraturas: {
    left: 189,
    top: 140,
  },
  verTodasAs: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorGainsboro,
  },
  verTodas: {
    top: 234,
    left: 0,
  },
  emergenciasMaisPesquisadas: {
    top: 124,
    height: 260,
  },
  verTodas1: {
    top: 140,
    left: 0,
  },
  polciaMilitar: {
    fontSize: FontSize.size_3xs,
  },
  text: {
    fontSize: FontSize.size_5xl,
    marginTop: 10,
  },
  engasgoOuAsfixia2: {
    left: 0,
  },
  engasgoOuAsfixia3: {
    left: 94,
  },
  engasgoOuAsfixia4: {
    left: 189,
  },
  engasgoOuAsfixia5: {
    left: 283,
  },
  numerosDeEmergencia: {
    top: 404,
    height: 166,
  },
  verTodas2: {
    top: 730,
    left: 16,
  },
  plusIcon: {
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  engasgoOuAsfixia6: {
    left: 16,
  },
  engasgoOuAsfixia7: {
    left: 205,
  },
  engasgoOuAsfixia8: {
    left: 110,
  },
  engasgoOuAsfixia9: {
    left: 299,
  },
  contatosDeEmergncia: {
    top: 590,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    marginLeft: -180.5,
    left: "50%",
    position: "absolute",
  },
  medicalIconfirstAid: {
    marginLeft: -13.8,
    width: 27,
    height: 27,
    top: 0,
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
  home: {
    backgroundColor: Color.colorGainsboro,
    flex: 1,
    height: 852,
    overflow: "hidden",
  },
});

export default Home;
