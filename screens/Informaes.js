import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Informaes = () => {
  return (
    <View style={[styles.informaes, styles.iconLayout1]}>
      <View style={styles.buscaParent}>
        <Text style={styles.busca}>Busca</Text>
        <Image
          style={[styles.searchIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
      </View>
      <View style={styles.logo}>
        <Image
          style={styles.medicalIconfirstAid}
          contentFit="cover"
          source={require("../assets/medicaliconfirstaid.png")}
        />
        <Text style={styles.quickAid}>Quick Aid</Text>
      </View>
      <Text style={[styles.informaes1, styles.informaes1Typo]}>
        Informações
      </Text>
      <Text style={[styles.oQueSo, styles.queTypo]}>
        O que são os Primeiros Socorros?
      </Text>
      <Text style={[styles.porQueAprender, styles.queTypo]}>
        Por que aprender os Primeiros Socorros?
      </Text>
      <Text style={[styles.sequnciasDasAes, styles.queTypo]}>
        Sequências das Ações:
      </Text>
      <Text style={[styles.primeirosSocorrosSo, styles.primeirosTypo]}>
        Primeiros Socorros são as primeiras providências tomadas no local do
        acidente. É o atendimento inicial e temporário, até a chegada de um
        socorro profissional.
      </Text>
      <Text style={[styles.osPrimeirosSocorrosContainer, styles.primeirosTypo]}>
        <Text
          style={styles.osPrimeirosSocorros}
        >{`Os primeiros socorros têm como objetivo estabilizar a vítima até que a  ajuda profissional chegue. Muitas pessoas não sabem quais atitudes tomar  nesse tipo de situação, porém, buscar informações sobre os primeiros  socorros e saber como colocá-los em prática pode ser decisivo quando há  risco de morte. Aprender sobre as técnicas e principais manobras que  podem ser utilizadas em situações emergenciais é fundamental e todas as  pessoas deveriam estar atentas a isso.
Além disso, de acordo com o `}</Text>
        <Text style={styles.informaes1Typo}>
          artigo 135 do Código Penal Brasileiro
        </Text>
        <Text style={styles.osPrimeirosSocorros}>
          , “deixar de prestar assistência, quando possível fazê-lo sem risco
          pessoal, à criança abandonada ou extraviada, ou à pessoa inválida ou
          ferida, ao desamparo ou em grave e iminente perigo; ou não pedir,
          nesses casos, o socorro da autoridade pública. Com pena de detenção de
          um a seis meses, ou multa.”
        </Text>
      </Text>
      <Text
        style={[styles.manterACalma, styles.primeirosTypo]}
      >{`manter a calma e lógica;
garantir a segurança,
sinalizando o local do ocorrido;
pedir socorro, no caso se não tiver telefone próximo, pedir para
alguém que estiver de passagem
por ali para avisar o serviço de
saúde;
controlar a situação,
conversando com as vitimas
tentando acalma-las;
verificar a situação das vítimas,
ver se tem fraturas, feridos, hemorragias e se todos estão
conscientes;
realizar algumas ações com as
vítimas.`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  informaes1Typo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  queTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    marginLeft: -180.5,
    color: Color.colorBlack,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  primeirosTypo: {
    textAlign: "justify",
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    width: 361,
    left: 16,
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: Padding.p_3xs,
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
    width: 42,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  logo: {
    marginLeft: -20.5,
    top: 13,
    height: 39,
    width: 42,
    left: "50%",
    position: "absolute",
  },
  informaes1: {
    top: 124,
    fontSize: FontSize.size_5xl,
    color: Color.colorMaroon,
    marginLeft: -180.5,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  oQueSo: {
    top: 166,
  },
  porQueAprender: {
    top: 445,
    height: 60,
    width: 361,
  },
  sequnciasDasAes: {
    top: 253,
  },
  primeirosSocorrosSo: {
    top: 198,
    fontFamily: FontFamily.poppinsRegular,
  },
  osPrimeirosSocorros: {
    fontFamily: FontFamily.poppinsRegular,
  },
  osPrimeirosSocorrosContainer: {
    top: 507,
  },
  manterACalma: {
    top: 285,
    height: 150,
    fontFamily: FontFamily.poppinsRegular,
  },
  informaes: {
    backgroundColor: Color.colorGainsboro,
    flex: 1,
    height: 852,
    overflow: "hidden",
  },
});

export default Informaes;
