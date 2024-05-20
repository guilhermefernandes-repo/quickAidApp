import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Busca = () => {
  return (
    <View style={[styles.busca, styles.iconLayout1]}>
      <View style={styles.buscaParent}>
        <Text style={styles.busca1}>Busca</Text>
        <Image
          style={[styles.searchIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
      </View>
      <View style={styles.iosKeyboardPhone}>
        <View style={styles.layoutPosition}>
          <View style={[styles.key, styles.keyShadowBox19]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>a</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key1, styles.keyPosition9]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>q</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key2, styles.keyShadowBox17]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>s</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key3, styles.keyPosition8]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>z</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key4, styles.keyShadowBox16]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>w</Text>
              <Text style={[styles.number, styles.numberClr]}>2</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key5, styles.keyShadowBox15]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>d</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key6, styles.keyShadowBox15]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>x</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key7, styles.keyShadowBox14]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>e</Text>
              <Text style={[styles.number, styles.numberClr]}>3</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key8, styles.keyShadowBox13]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>f</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key9, styles.keyShadowBox13]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>c</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key10, styles.keyShadowBox12]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>r</Text>
              <Text style={[styles.number, styles.numberClr]}>4</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key11, styles.keyShadowBox11]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>g</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key12, styles.keyShadowBox11]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>v</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={styles.textPosition2}>
            <View style={[styles.keyPad26, styles.keyPosition10]} />
            <Image
              style={[styles.emojiIcon, styles.emojiIconPosition]}
              contentFit="cover"
              source={require("../assets/emoji.png")}
            />
            <View style={styles.numbers}>
              <Text style={[styles.letter26, styles.letterFlexBox]}>space</Text>
            </View>
          </View>
          <View style={[styles.textKey1, styles.keyShadowBox10]}>
            <View style={[styles.keyPad26, styles.keyPosition10]} />
            <Image
              style={[styles.emojiIcon1, styles.emojiIconPosition]}
              contentFit="cover"
              source={require("../assets/emoji1.png")}
            />
            <View style={styles.numbers}>
              <Text style={[styles.letter26, styles.letterFlexBox]}>
                return
              </Text>
            </View>
          </View>
          <View style={[styles.key13, styles.keyShadowBox9]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>t</Text>
              <Text style={[styles.number, styles.numberClr]}>5</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key14, styles.keyShadowBox8]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>h</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key15, styles.keyShadowBox8]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>b</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key16, styles.keyShadowBox7]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>y</Text>
              <Text style={[styles.number, styles.numberClr]}>6</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key17, styles.keyShadowBox6]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>j</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key18, styles.keyShadowBox6]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>n</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key19, styles.keyShadowBox5]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>u</Text>
              <Text style={[styles.number, styles.numberClr]}>7</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key20, styles.keyShadowBox4]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>k</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key21, styles.keyShadowBox4]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>m</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key22, styles.keyShadowBox3]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>i</Text>
              <Text style={[styles.number, styles.numberClr]}>8</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key23, styles.keyShadowBox19]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>l</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key24, styles.keyShadowBox2]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>o</Text>
              <Text style={[styles.number, styles.numberClr]}>9</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key25, styles.keyShadowBox1]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>p</Text>
              <Text style={[styles.number, styles.numberClr]}>0</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.specialKey, styles.textPosition3]}>
            <View style={[styles.keyPad, styles.keyPosition10]} />
            <View style={[styles.micro, styles.microPosition]}>
              <Image
                style={[styles.microChild, styles.specialIconLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-46.png")}
              />
              <View style={[styles.microItem, styles.microLayout]} />
            </View>
          </View>
          <View style={[styles.specialKey1, styles.specialPosition]}>
            <View style={[styles.keyPad26, styles.keyPosition10]} />
            <Image
              style={[styles.globeIcon, styles.microPosition]}
              contentFit="cover"
              source={require("../assets/globe.png")}
            />
          </View>
          <View style={[styles.textKey2, styles.keyPosition7]}>
            <View style={[styles.keyPad26, styles.keyPosition10]} />
            <Image
              style={[styles.emojiIcon, styles.emojiIconPosition]}
              contentFit="cover"
              source={require("../assets/emoji2.png")}
            />
            <View style={styles.numbers}>
              <Text style={[styles.letter26, styles.letterFlexBox]}>123</Text>
            </View>
          </View>
          <Image
            style={[styles.specialKeyIcon, styles.keyPosition7]}
            contentFit="cover"
            source={require("../assets/special-key.png")}
          />
          <Image
            style={styles.specialKeyIcon1}
            contentFit="cover"
            source={require("../assets/special-key1.png")}
          />
        </View>
        <View style={[styles.numbersLayout, styles.layoutPosition]}>
          <View style={[styles.key26, styles.keyShadowBox18]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>-</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key27, styles.keyPosition9]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>1</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key28, styles.keyShadowBox16]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>/</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={styles.keyPosition6}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>.</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key30, styles.keyPosition7]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter26, styles.letterFlexBox]}>#+=</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key31, styles.keyShadowBox16]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>2</Text>
              <Text style={[styles.number, styles.numberClr]}>2</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key32, styles.keyShadowBox14]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>:</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={styles.keyPosition5}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>,</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key34, styles.keyShadowBox14]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>3</Text>
              <Text style={[styles.number, styles.numberClr]}>3</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key35, styles.keyShadowBox12]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>;</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={styles.keyPosition4}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>?</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key37, styles.keyShadowBox12]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>4</Text>
              <Text style={[styles.number, styles.numberClr]}>4</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key38, styles.keyShadowBox9]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>(</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={styles.keyPosition3}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>!</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={styles.textPosition2}>
            <View style={[styles.keyPad26, styles.keyPosition10]} />
            <Image
              style={[styles.emojiIcon, styles.emojiIconPosition]}
              contentFit="cover"
              source={require("../assets/emoji.png")}
            />
            <View style={styles.numbers}>
              <Text style={[styles.letter26, styles.letterFlexBox]}>space</Text>
            </View>
          </View>
          <View style={[styles.textKey4, styles.keyShadowBox10]}>
            <View style={[styles.keyPad26, styles.keyPosition10]} />
            <Image
              style={[styles.emojiIcon1, styles.emojiIconPosition]}
              contentFit="cover"
              source={require("../assets/emoji1.png")}
            />
            <View style={styles.numbers}>
              <Text style={[styles.letter26, styles.letterFlexBox]}>
                return
              </Text>
            </View>
          </View>
          <View style={[styles.key40, styles.keyShadowBox9]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>5</Text>
              <Text style={[styles.number, styles.numberClr]}>5</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key41, styles.keyShadowBox7]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>)</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={styles.keyPosition2}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>‘</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key43, styles.keyShadowBox7]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>6</Text>
              <Text style={[styles.number, styles.numberClr]}>6</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key44, styles.keyShadowBox5]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>$</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key45, styles.keyShadowBox5]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>7</Text>
              <Text style={[styles.number, styles.numberClr]}>7</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key46, styles.keyShadowBox3]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>{`&`}</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key47, styles.keyShadowBox3]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>8</Text>
              <Text style={[styles.number, styles.numberClr]}>8</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key48, styles.keyShadowBox2]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>@</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key49, styles.keyShadowBox1]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>"</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key50, styles.keyShadowBox2]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>9</Text>
              <Text style={[styles.number, styles.numberClr]}>9</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key51, styles.keyShadowBox1]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>0</Text>
              <Text style={[styles.number, styles.numberClr]}>0</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.specialKey2, styles.textPosition3]}>
            <View style={[styles.keyPad, styles.keyPosition10]} />
            <View style={[styles.micro, styles.microPosition]}>
              <Image
                style={[styles.microChild, styles.specialIconLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-46.png")}
              />
              <View style={[styles.microItem, styles.microLayout]} />
            </View>
          </View>
          <Image
            style={[styles.specialKeyIcon2, styles.specialPosition]}
            contentFit="cover"
            source={require("../assets/special-key2.png")}
          />
          <View style={[styles.textKey5, styles.keyPosition7]}>
            <View style={[styles.keyPad26, styles.keyPosition10]} />
            <Image
              style={[styles.emojiIcon, styles.emojiIconPosition]}
              contentFit="cover"
              source={require("../assets/emoji2.png")}
            />
            <View style={styles.numbers}>
              <Text style={[styles.letter26, styles.letterFlexBox]}>ABC</Text>
            </View>
          </View>
          <Image
            style={styles.specialKeyIcon1}
            contentFit="cover"
            source={require("../assets/special-key1.png")}
          />
        </View>
        <View style={[styles.numbersLayout, styles.layoutPosition]}>
          <View style={[styles.key52, styles.keyShadowBox18]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>_</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key53, styles.keyPosition9]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>[</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key54, styles.keyShadowBox16]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>\</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={styles.keyPosition6}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>.</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key56, styles.keyPosition7]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter26, styles.letterFlexBox]}>123</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key57, styles.keyShadowBox16]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>]</Text>
              <Text style={[styles.number, styles.numberClr]}>2</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key58, styles.keyShadowBox14]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>|</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={styles.keyPosition5}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>,</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key60, styles.keyShadowBox14]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>{`{`}</Text>
              <Text style={[styles.number, styles.numberClr]}>3</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key61, styles.keyShadowBox12]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>~</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={styles.keyPosition4}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>?</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key63, styles.keyShadowBox12]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>{`}`}</Text>
              <Text style={[styles.number, styles.numberClr]}>4</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key64, styles.keyShadowBox9]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>{`<`}</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={styles.keyPosition3}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>!</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={styles.textPosition2}>
            <View style={[styles.keyPad26, styles.keyPosition10]} />
            <Image
              style={[styles.emojiIcon, styles.emojiIconPosition]}
              contentFit="cover"
              source={require("../assets/emoji.png")}
            />
            <View style={styles.numbers}>
              <Text style={[styles.letter26, styles.letterFlexBox]}>space</Text>
            </View>
          </View>
          <View style={[styles.textKey7, styles.keyShadowBox10]}>
            <View style={[styles.keyPad26, styles.keyPosition10]} />
            <Image
              style={[styles.emojiIcon1, styles.emojiIconPosition]}
              contentFit="cover"
              source={require("../assets/emoji1.png")}
            />
            <View style={styles.numbers}>
              <Text style={[styles.letter26, styles.letterFlexBox]}>
                return
              </Text>
            </View>
          </View>
          <View style={[styles.key66, styles.keyShadowBox9]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>#</Text>
              <Text style={[styles.number, styles.numberClr]}>5</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key67, styles.keyShadowBox7]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>{`>`}</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={styles.keyPosition2}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>‘</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key69, styles.keyShadowBox7]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>%</Text>
              <Text style={[styles.number, styles.numberClr]}>6</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key70, styles.keyShadowBox5]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>€</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key71, styles.keyShadowBox5]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>^</Text>
              <Text style={[styles.number, styles.numberClr]}>7</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key72, styles.keyShadowBox3]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>£</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key73, styles.keyShadowBox3]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>*</Text>
              <Text style={[styles.number, styles.numberClr]}>8</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key74, styles.keyShadowBox2]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>¥</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key75, styles.keyShadowBox1]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter158, styles.letterFlexBox]}>·</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key76, styles.keyShadowBox2]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>+</Text>
              <Text style={[styles.number, styles.numberClr]}>9</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.key77, styles.keyShadowBox1]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter, styles.letterFlexBox]}>=</Text>
              <Text style={[styles.number, styles.numberClr]}>0</Text>
            </View>
            <View style={[styles.v2, styles.v2Position]}>
              <View style={[styles.keyPad1, styles.keyPad1Layout]} />
              <Text style={[styles.letter1, styles.letterTypo1]}>A</Text>
              <Text style={[styles.number1, styles.numberTypo1]}>1</Text>
            </View>
          </View>
          <View style={[styles.specialKey3, styles.textPosition3]}>
            <View style={[styles.keyPad, styles.keyPosition10]} />
            <View style={[styles.micro, styles.microPosition]}>
              <Image
                style={[styles.microChild, styles.specialIconLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-46.png")}
              />
              <View style={[styles.microItem, styles.microLayout]} />
            </View>
          </View>
          <Image
            style={[styles.specialKeyIcon2, styles.specialPosition]}
            contentFit="cover"
            source={require("../assets/special-key2.png")}
          />
          <View style={[styles.textKey8, styles.keyPosition7]}>
            <View style={[styles.keyPad26, styles.keyPosition10]} />
            <Image
              style={[styles.emojiIcon, styles.emojiIconPosition]}
              contentFit="cover"
              source={require("../assets/emoji2.png")}
            />
            <View style={styles.numbers}>
              <Text style={[styles.letter26, styles.letterFlexBox]}>ABC</Text>
            </View>
          </View>
          <Image
            style={styles.specialKeyIcon1}
            contentFit="cover"
            source={require("../assets/special-key1.png")}
          />
        </View>
        <View style={[styles.numbersLayout, styles.layoutPosition]}>
          <Image
            style={[styles.specialKeyIcon6, styles.dialPosition4]}
            contentFit="cover"
            source={require("../assets/special-key3.png")}
          />
          <View style={[styles.dialKey, styles.dialPosition2]}>
            <View style={[styles.keyPad, styles.keyPosition10]} />
            <Text style={[styles.letter165, styles.letterTypo]}>1</Text>
            <Text style={[styles.number156, styles.numberTypo]}>GHI</Text>
            <Image
              style={[styles.iosDialSymbols, styles.iosPosition]}
              contentFit="cover"
              source={require("../assets/ios-dial-symbols.png")}
            />
          </View>
          <View style={[styles.dialKey1, styles.dialPosition1]}>
            <View style={[styles.keyPad, styles.keyPosition10]} />
            <Text style={[styles.letter165, styles.letterTypo]}>4</Text>
            <Text style={[styles.number157, styles.numberTypo]}>GHI</Text>
            <Image
              style={[styles.iosDialSymbols, styles.iosPosition]}
              contentFit="cover"
              source={require("../assets/ios-dial-symbols1.png")}
            />
          </View>
          <View style={[styles.dialKey2, styles.dialPosition]}>
            <View style={[styles.keyPad, styles.keyPosition10]} />
            <Text style={[styles.letter165, styles.letterTypo]}>7</Text>
            <Text style={[styles.number157, styles.numberTypo]}>PQRS</Text>
            <Image
              style={[styles.iosDialSymbols, styles.iosPosition]}
              contentFit="cover"
              source={require("../assets/ios-dial-symbols2.png")}
            />
          </View>
          <View style={[styles.dialKey3, styles.dialPosition2]}>
            <View style={[styles.keyPad, styles.keyPosition10]} />
            <Text style={[styles.letter168, styles.letterTypo]}>7</Text>
            <Text style={[styles.number156, styles.numberTypo]}>PQRS</Text>
            <Image
              style={styles.iosPosition}
              contentFit="cover"
              source={require("../assets/ios-dial-symbols3.png")}
            />
          </View>
          <View style={[styles.dialKey4, styles.keyShadowBox]}>
            <View style={[styles.keyPad, styles.keyPosition10]} />
            <Text style={[styles.letter165, styles.letterTypo]}>2</Text>
            <Text style={[styles.number157, styles.numberTypo]}>ABC</Text>
            <Image
              style={[styles.iosDialSymbols, styles.iosPosition]}
              contentFit="cover"
              source={require("../assets/ios-dial-symbols4.png")}
            />
          </View>
          <View style={[styles.dialKey5, styles.keyShadowBox]}>
            <View style={[styles.keyPad, styles.keyPosition10]} />
            <Text style={[styles.letter165, styles.letterTypo]}>5</Text>
            <Text style={[styles.number157, styles.numberTypo]}>JKL</Text>
            <Image
              style={[styles.iosDialSymbols, styles.iosPosition]}
              contentFit="cover"
              source={require("../assets/ios-dial-symbols5.png")}
            />
          </View>
          <View style={[styles.dialKey6, styles.keyShadowBox]}>
            <View style={[styles.keyPad, styles.keyPosition10]} />
            <Text style={[styles.letter165, styles.letterTypo]}>8</Text>
            <Text style={[styles.number157, styles.numberTypo]}>TUV</Text>
            <Image
              style={[styles.iosDialSymbols, styles.iosPosition]}
              contentFit="cover"
              source={require("../assets/ios-dial-symbols6.png")}
            />
          </View>
          <View style={[styles.dialKey7, styles.dialPosition3]}>
            <View style={[styles.keyPad, styles.keyPosition10]} />
            <Text style={[styles.letter165, styles.letterTypo]}>3</Text>
            <Text style={[styles.number157, styles.numberTypo]}>DEF</Text>
            <Image
              style={[styles.iosDialSymbols, styles.iosPosition]}
              contentFit="cover"
              source={require("../assets/ios-dial-symbols7.png")}
            />
          </View>
          <View style={[styles.dialKey8, styles.dialPosition1]}>
            <View style={[styles.keyPad, styles.keyPosition10]} />
            <Text style={[styles.letter165, styles.letterTypo]}>9</Text>
            <Text style={[styles.number157, styles.numberTypo]}>MNO</Text>
            <Image
              style={[styles.iosDialSymbols, styles.iosPosition]}
              contentFit="cover"
              source={require("../assets/ios-dial-symbols8.png")}
            />
          </View>
          <View style={[styles.dialKey9, styles.dialPosition]}>
            <View style={[styles.keyPad, styles.keyPosition10]} />
            <Text style={[styles.letter165, styles.letterTypo]}>9</Text>
            <Text style={[styles.number157, styles.numberTypo]}>WXYZ</Text>
            <Image
              style={[styles.iosDialSymbols, styles.iosPosition]}
              contentFit="cover"
              source={require("../assets/ios-dial-symbols9.png")}
            />
          </View>
          <View style={[styles.key78, styles.keyShadowBox]}>
            <View style={styles.keyPosition10}>
              <View style={[styles.keyPad, styles.keyPosition10]} />
              <Text style={[styles.letter175, styles.letterTypo]}>0</Text>
              <Text style={[styles.number, styles.numberClr]}>1</Text>
            </View>
            <View style={[styles.v278, styles.v2Position]}>
              <View style={[styles.keyPad180, styles.keyPad180Layout]} />
              <Text style={[styles.letter176, styles.keyPad180Layout]}>A</Text>
              <Text style={[styles.number167, styles.numberTypo1]}>1</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.logo, styles.logoPosition]}>
        <Image
          style={styles.medicalIconfirstAid}
          contentFit="cover"
          source={require("../assets/medicaliconfirstaid.png")}
        />
        <Text style={[styles.quickAid, styles.logoPosition]}>Quick Aid</Text>
      </View>
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
  keyShadowBox19: {
    backgroundColor: Color.iOSDarkKey1,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    width: "8.53%",
    height: "20.66%",
    borderRadius: 4,
    bottom: "52.89%",
    top: "26.45%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
    overflow: "hidden",
  },
  keyPosition10: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  letterFlexBox: {
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    display: "flex",
    color: Color.white,
    left: "0%",
    top: "0%",
    alignItems: "center",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  numberClr: {
    color: Color.fontColor,
    display: "none",
  },
  v2Position: {
    top: "9.09%",
    display: "none",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  keyPad1Layout: {
    height: "92.89%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  letterTypo1: {
    fontSize: FontSize.size_xl,
    color: Color.fontColor,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    alignItems: "center",
  },
  numberTypo1: {
    fontSize: FontSize.size_xs_6,
    color: Color.fontColor,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    left: "0%",
    top: "0%",
    alignItems: "center",
    position: "absolute",
    width: "100%",
  },
  keyPosition9: {
    bottom: "79.34%",
    top: "0%",
  },
  keyShadowBox17: {
    left: "15.29%",
    right: "76.17%",
    backgroundColor: Color.iOSDarkKey1,
    borderRadius: 4,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    width: "8.53%",
    height: "20.66%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
    overflow: "hidden",
  },
  keyPosition8: {
    bottom: "26.45%",
    top: "52.89%",
  },
  keyShadowBox16: {
    left: "10.15%",
    right: "81.32%",
    backgroundColor: Color.iOSDarkKey1,
    borderRadius: 4,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    width: "8.53%",
    height: "20.66%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
    overflow: "hidden",
  },
  keyShadowBox15: {
    left: "25.44%",
    right: "66.02%",
    backgroundColor: Color.iOSDarkKey1,
    borderRadius: 4,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    width: "8.53%",
    height: "20.66%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
  },
  keyShadowBox14: {
    left: "20.33%",
    right: "71.14%",
    backgroundColor: Color.iOSDarkKey1,
    borderRadius: 4,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    width: "8.53%",
    height: "20.66%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
    overflow: "hidden",
  },
  keyShadowBox13: {
    left: "35.62%",
    right: "55.85%",
    backgroundColor: Color.iOSDarkKey1,
    borderRadius: 4,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    width: "8.53%",
    height: "20.66%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
    overflow: "hidden",
  },
  keyShadowBox12: {
    left: "30.48%",
    right: "60.99%",
    backgroundColor: Color.iOSDarkKey1,
    borderRadius: 4,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    width: "8.53%",
    height: "20.66%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
    overflow: "hidden",
  },
  keyShadowBox11: {
    left: "45.77%",
    right: "45.69%",
    backgroundColor: Color.iOSDarkKey1,
    borderRadius: 4,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    width: "8.53%",
    height: "20.66%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
    overflow: "hidden",
  },
  emojiIconPosition: {
    height: 11,
    width: 11,
    marginTop: -11.8,
    top: "50%",
    display: "none",
    left: "50%",
    position: "absolute",
  },
  keyShadowBox10: {
    backgroundColor: Color.darkIOSKeyII,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
  },
  keyShadowBox9: {
    left: "40.63%",
    right: "50.84%",
    backgroundColor: Color.iOSDarkKey1,
    borderRadius: 4,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    width: "8.53%",
    height: "20.66%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
    overflow: "hidden",
  },
  keyShadowBox8: {
    left: "55.92%",
    right: "35.54%",
    backgroundColor: Color.iOSDarkKey1,
    borderRadius: 4,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    width: "8.53%",
    height: "20.66%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
    overflow: "hidden",
  },
  keyShadowBox7: {
    left: "50.81%",
    right: "40.66%",
    backgroundColor: Color.iOSDarkKey1,
    borderRadius: 4,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    width: "8.53%",
    height: "20.66%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
    overflow: "hidden",
  },
  keyShadowBox6: {
    left: "66.1%",
    right: "25.37%",
    backgroundColor: Color.iOSDarkKey1,
    borderRadius: 4,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    width: "8.53%",
    height: "20.66%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
    overflow: "hidden",
  },
  keyShadowBox5: {
    left: "60.96%",
    right: "30.51%",
    backgroundColor: Color.iOSDarkKey1,
    borderRadius: 4,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    width: "8.53%",
    height: "20.66%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
    overflow: "hidden",
  },
  keyShadowBox4: {
    right: "15.21%",
    left: "76.25%",
    backgroundColor: Color.iOSDarkKey1,
    borderRadius: 4,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    width: "8.53%",
    height: "20.66%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
    overflow: "hidden",
  },
  keyShadowBox3: {
    left: "71.14%",
    right: "20.33%",
    backgroundColor: Color.iOSDarkKey1,
    borderRadius: 4,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    width: "8.53%",
    height: "20.66%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
    overflow: "hidden",
  },
  keyShadowBox2: {
    left: "81.29%",
    right: "10.18%",
    backgroundColor: Color.iOSDarkKey1,
    borderRadius: 4,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    width: "8.53%",
    height: "20.66%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
    overflow: "hidden",
  },
  keyShadowBox1: {
    left: "91.44%",
    right: "0.03%",
    backgroundColor: Color.iOSDarkKey1,
    borderRadius: 4,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    width: "8.53%",
    height: "20.66%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
    overflow: "hidden",
  },
  textPosition3: {
    top: "79.34%",
    bottom: "0%",
  },
  microPosition: {
    height: 20,
    width: 20,
    marginTop: -9.6,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  specialIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  microLayout: {
    borderRadius: 18,
    position: "absolute",
  },
  specialPosition: {
    left: "12.73%",
    right: "76.15%",
    width: "11.12%",
    top: "79.34%",
    bottom: "0%",
    borderRadius: 4,
    height: "20.66%",
    position: "absolute",
  },
  keyPosition7: {
    right: "88.88%",
    width: "11.12%",
    left: "0%",
    borderRadius: 4,
    height: "20.66%",
    position: "absolute",
  },
  layoutPosition: {
    left: "1.2%",
    bottom: "4.54%",
    right: "1.3%",
    top: "8.86%",
    width: "97.51%",
    height: "86.6%",
    position: "absolute",
  },
  keyShadowBox18: {
    right: "91.47%",
    left: "0%",
    backgroundColor: Color.iOSDarkKey1,
    borderRadius: 4,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    width: "8.53%",
    height: "20.66%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
    overflow: "hidden",
  },
  dialPosition4: {
    left: "67.72%",
    right: "0.08%",
    width: "32.2%",
    height: "23.92%",
    borderRadius: 4,
    position: "absolute",
    overflow: "hidden",
  },
  dialPosition2: {
    left: "0.1%",
    right: "67.69%",
    width: "32.2%",
    height: "23.92%",
    borderRadius: 4,
    position: "absolute",
    overflow: "hidden",
  },
  letterTypo: {
    fontSize: FontSize.size_7xl_9,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    left: "0%",
    top: "0%",
    alignItems: "center",
    position: "absolute",
    width: "100%",
  },
  numberTypo: {
    opacity: 0.4,
    letterSpacing: 1.2,
    fontSize: FontSize.size_smi_4,
    top: "60.74%",
    height: "39.26%",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    justifyContent: "center",
    textAlign: "center",
    left: "0%",
    alignItems: "center",
    position: "absolute",
    width: "100%",
  },
  iosPosition: {
    width: 59,
    marginLeft: -29.7,
    height: 20,
    marginTop: -9.6,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  dialPosition1: {
    bottom: "55.56%",
    top: "20.51%",
  },
  dialPosition: {
    bottom: "28.03%",
    top: "48.05%",
  },
  keyShadowBox: {
    left: "33.9%",
    right: "33.9%",
    width: "32.2%",
    height: "23.92%",
    backgroundColor: Color.darkIOSKeyII,
    borderRadius: 4,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
    overflow: "hidden",
  },
  dialPosition3: {
    bottom: "83.09%",
    top: "-7.02%",
  },
  keyPad180Layout: {
    height: "93.08%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  logoPosition: {
    width: 42,
    left: "50%",
    position: "absolute",
  },
  busca1: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorSilver_200,
    textAlign: "left",
  },
  searchIcon: {
    overflow: "hidden",
  },
  buscaParent: {
    top: 60,
    left: 16,
    borderRadius: Border.br_3xl,
    width: 361,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: Padding.p_3xs,
    alignItems: "center",
    backgroundColor: Color.white,
    position: "absolute",
  },
  keyPad: {
    display: "none",
    borderRadius: 4,
    left: "0%",
    bottom: "0%",
    top: "0%",
    backgroundColor: Color.white,
  },
  letter: {
    fontSize: FontSize.size_2xl_8,
  },
  number: {
    fontSize: FontSize.size_3xs_1,
    width: 16,
    height: 14,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    right: 0,
    color: Color.fontColor,
    top: 0,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    position: "absolute",
  },
  keyPad1: {
    top: "-8.44%",
    bottom: "15.56%",
    display: "none",
    right: "0%",
    borderRadius: 4,
    backgroundColor: Color.white,
  },
  letter1: {
    top: "6.89%",
    height: "92.89%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  number1: {
    height: "29.56%",
  },
  v2: {
    height: "107.66%",
    bottom: "-16.75%",
  },
  key: {
    right: "86.35%",
    left: "5.11%",
  },
  key1: {
    right: "91.47%",
    left: "0%",
    backgroundColor: Color.iOSDarkKey1,
    borderRadius: 4,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    width: "8.53%",
    height: "20.66%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
    overflow: "hidden",
  },
  key2: {
    bottom: "52.89%",
    top: "26.45%",
  },
  key3: {
    left: "15.29%",
    right: "76.17%",
    backgroundColor: Color.iOSDarkKey1,
    borderRadius: 4,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    width: "8.53%",
    height: "20.66%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
    overflow: "hidden",
  },
  key4: {
    bottom: "79.34%",
    top: "0%",
  },
  key5: {
    bottom: "52.89%",
    top: "26.45%",
    overflow: "hidden",
  },
  key6: {
    bottom: "26.45%",
    top: "52.89%",
    overflow: "hidden",
  },
  key7: {
    bottom: "79.34%",
    top: "0%",
  },
  key8: {
    bottom: "52.89%",
    top: "26.45%",
  },
  key9: {
    bottom: "26.45%",
    top: "52.89%",
  },
  key10: {
    bottom: "79.34%",
    top: "0%",
  },
  key11: {
    bottom: "52.89%",
    top: "26.45%",
  },
  key12: {
    bottom: "26.45%",
    top: "52.89%",
  },
  keyPad26: {
    display: "none",
    borderRadius: 4,
    left: "0%",
    bottom: "0%",
    top: "0%",
  },
  emojiIcon: {
    marginLeft: -5.7,
  },
  letter26: {
    fontSize: FontSize.size_mini_2,
  },
  numbers: {
    marginTop: -18.7,
    height: 38,
    top: "50%",
    right: 0,
    left: 0,
    position: "absolute",
  },
  textPosition2: {
    right: "25.34%",
    width: "39.04%",
    top: "79.34%",
    left: "35.62%",
    bottom: "0%",
    backgroundColor: Color.iOSDarkKey1,
    borderRadius: 4,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    height: "20.66%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
  },
  emojiIcon1: {
    marginLeft: -5.8,
  },
  textKey1: {
    left: "76.25%",
    width: "23.75%",
    backgroundColor: Color.darkIOSKeyII,
    top: "79.34%",
    bottom: "0%",
    right: "0%",
    borderRadius: 4,
    height: "20.66%",
    position: "absolute",
  },
  key13: {
    bottom: "79.34%",
    top: "0%",
  },
  key14: {
    bottom: "52.89%",
    top: "26.45%",
  },
  key15: {
    bottom: "26.45%",
    top: "52.89%",
  },
  key16: {
    bottom: "79.34%",
    top: "0%",
  },
  key17: {
    bottom: "52.89%",
    top: "26.45%",
  },
  key18: {
    bottom: "26.45%",
    top: "52.89%",
  },
  key19: {
    bottom: "79.34%",
    top: "0%",
  },
  key20: {
    bottom: "52.89%",
    top: "26.45%",
  },
  key21: {
    bottom: "26.45%",
    top: "52.89%",
  },
  key22: {
    bottom: "79.34%",
    top: "0%",
  },
  key23: {
    right: "5.06%",
    left: "86.4%",
  },
  key24: {
    bottom: "79.34%",
    top: "0%",
  },
  key25: {
    bottom: "79.34%",
    top: "0%",
  },
  microChild: {
    height: "59.18%",
    width: "46.43%",
    top: "33.67%",
    right: "27.55%",
    bottom: "7.14%",
    left: "26.02%",
    borderRadius: 18,
    position: "absolute",
    overflow: "hidden",
  },
  microItem: {
    height: "61.22%",
    width: "28.06%",
    top: "5.61%",
    right: "36.73%",
    bottom: "33.16%",
    left: "35.2%",
    borderColor: Color.white,
    borderWidth: 1.1,
    borderStyle: "solid",
  },
  micro: {
    marginLeft: -9.85,
  },
  specialKey: {
    left: "25.44%",
    right: "66.02%",
    backgroundColor: Color.iOSDarkKey1,
    borderRadius: 4,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    width: "8.53%",
    height: "20.66%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
  },
  globeIcon: {
    marginLeft: -9.7,
  },
  specialKey1: {
    backgroundColor: Color.darkIOSKeyII,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
  },
  textKey2: {
    backgroundColor: Color.darkIOSKeyII,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    top: "79.34%",
    bottom: "0%",
  },
  specialKeyIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "26.45%",
    top: "52.89%",
    overflow: "hidden",
  },
  specialKeyIcon1: {
    left: "88.88%",
    width: "11.12%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "26.45%",
    top: "52.89%",
    right: "0%",
    borderRadius: 4,
    height: "20.66%",
    position: "absolute",
    overflow: "hidden",
  },
  key26: {
    bottom: "52.89%",
    top: "26.45%",
  },
  key27: {
    right: "91.47%",
    left: "0%",
    backgroundColor: Color.iOSDarkKey1,
    borderRadius: 4,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    width: "8.53%",
    height: "20.66%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
    overflow: "hidden",
  },
  key28: {
    bottom: "52.89%",
    top: "26.45%",
  },
  keyPosition6: {
    right: "72.18%",
    width: "12.53%",
    bottom: "26.45%",
    top: "52.89%",
    left: "15.29%",
    backgroundColor: Color.iOSDarkKey1,
    borderRadius: 4,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    height: "20.66%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
    overflow: "hidden",
  },
  key30: {
    backgroundColor: Color.darkIOSKeyII,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    bottom: "26.45%",
    top: "52.89%",
    overflow: "hidden",
  },
  key31: {
    bottom: "79.34%",
    top: "0%",
  },
  key32: {
    bottom: "52.89%",
    top: "26.45%",
  },
  keyPosition5: {
    left: "29.44%",
    right: "57.93%",
    width: "12.63%",
    bottom: "26.45%",
    top: "52.89%",
    backgroundColor: Color.iOSDarkKey1,
    borderRadius: 4,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    height: "20.66%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
    overflow: "hidden",
  },
  key34: {
    bottom: "79.34%",
    top: "0%",
  },
  key35: {
    bottom: "52.89%",
    top: "26.45%",
  },
  keyPosition4: {
    left: "43.68%",
    right: "43.58%",
    width: "12.73%",
    bottom: "26.45%",
    top: "52.89%",
    backgroundColor: Color.iOSDarkKey1,
    borderRadius: 4,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    height: "20.66%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
    overflow: "hidden",
  },
  key37: {
    bottom: "79.34%",
    top: "0%",
  },
  key38: {
    bottom: "52.89%",
    top: "26.45%",
  },
  keyPosition3: {
    left: "58.01%",
    right: "29.36%",
    width: "12.63%",
    bottom: "26.45%",
    top: "52.89%",
    backgroundColor: Color.iOSDarkKey1,
    borderRadius: 4,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    height: "20.66%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
    overflow: "hidden",
  },
  textKey4: {
    left: "76.25%",
    width: "23.75%",
    backgroundColor: Color.darkIOSKeyII,
    top: "79.34%",
    bottom: "0%",
    right: "0%",
    borderRadius: 4,
    height: "20.66%",
    position: "absolute",
  },
  key40: {
    bottom: "79.34%",
    top: "0%",
  },
  key41: {
    bottom: "52.89%",
    top: "26.45%",
  },
  keyPosition2: {
    left: "72.26%",
    width: "12.53%",
    right: "15.21%",
    bottom: "26.45%",
    top: "52.89%",
    backgroundColor: Color.iOSDarkKey1,
    borderRadius: 4,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    height: "20.66%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
    overflow: "hidden",
  },
  key43: {
    bottom: "79.34%",
    top: "0%",
  },
  key44: {
    bottom: "52.89%",
    top: "26.45%",
  },
  key45: {
    bottom: "79.34%",
    top: "0%",
  },
  key46: {
    bottom: "52.89%",
    top: "26.45%",
  },
  key47: {
    bottom: "79.34%",
    top: "0%",
  },
  key48: {
    bottom: "52.89%",
    top: "26.45%",
  },
  key49: {
    bottom: "52.89%",
    top: "26.45%",
  },
  key50: {
    bottom: "79.34%",
    top: "0%",
  },
  key51: {
    bottom: "79.34%",
    top: "0%",
  },
  specialKey2: {
    left: "25.44%",
    right: "66.02%",
    backgroundColor: Color.iOSDarkKey1,
    borderRadius: 4,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    width: "8.53%",
    height: "20.66%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
  },
  specialKeyIcon2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textKey5: {
    backgroundColor: Color.darkIOSKeyII,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    top: "79.34%",
    bottom: "0%",
  },
  numbersLayout: {
    display: "none",
  },
  key52: {
    bottom: "52.89%",
    top: "26.45%",
  },
  key53: {
    right: "91.47%",
    left: "0%",
    backgroundColor: Color.iOSDarkKey1,
    borderRadius: 4,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    width: "8.53%",
    height: "20.66%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
    overflow: "hidden",
  },
  key54: {
    bottom: "52.89%",
    top: "26.45%",
  },
  key56: {
    backgroundColor: Color.darkIOSKeyII,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    bottom: "26.45%",
    top: "52.89%",
    overflow: "hidden",
  },
  key57: {
    bottom: "79.34%",
    top: "0%",
  },
  key58: {
    bottom: "52.89%",
    top: "26.45%",
  },
  key60: {
    bottom: "79.34%",
    top: "0%",
  },
  key61: {
    bottom: "52.89%",
    top: "26.45%",
  },
  key63: {
    bottom: "79.34%",
    top: "0%",
  },
  key64: {
    bottom: "52.89%",
    top: "26.45%",
  },
  textKey7: {
    left: "76.25%",
    width: "23.75%",
    backgroundColor: Color.darkIOSKeyII,
    top: "79.34%",
    bottom: "0%",
    right: "0%",
    borderRadius: 4,
    height: "20.66%",
    position: "absolute",
  },
  key66: {
    bottom: "79.34%",
    top: "0%",
  },
  key67: {
    bottom: "52.89%",
    top: "26.45%",
  },
  key69: {
    bottom: "79.34%",
    top: "0%",
  },
  key70: {
    bottom: "52.89%",
    top: "26.45%",
  },
  key71: {
    bottom: "79.34%",
    top: "0%",
  },
  key72: {
    bottom: "52.89%",
    top: "26.45%",
  },
  key73: {
    bottom: "79.34%",
    top: "0%",
  },
  key74: {
    bottom: "52.89%",
    top: "26.45%",
  },
  letter158: {
    fontSize: 55,
  },
  key75: {
    bottom: "52.89%",
    top: "26.45%",
  },
  key76: {
    bottom: "79.34%",
    top: "0%",
  },
  key77: {
    bottom: "79.34%",
    top: "0%",
  },
  specialKey3: {
    left: "25.44%",
    right: "66.02%",
    backgroundColor: Color.iOSDarkKey1,
    borderRadius: 4,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    width: "8.53%",
    height: "20.66%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    position: "absolute",
  },
  textKey8: {
    backgroundColor: Color.darkIOSKeyII,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    top: "79.34%",
    bottom: "0%",
  },
  specialKeyIcon6: {
    bottom: "0.54%",
    top: "75.53%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  letter165: {
    height: "75.83%",
    fontSize: FontSize.size_7xl_9,
    display: "flex",
    color: Color.white,
  },
  number156: {
    color: Color.fontColor,
    display: "none",
  },
  iosDialSymbols: {
    display: "none",
  },
  dialKey: {
    bottom: "83.09%",
    top: "-7.02%",
    backgroundColor: Color.darkIOSKeyII,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
  },
  number157: {
    display: "flex",
    color: Color.white,
  },
  dialKey1: {
    left: "0.1%",
    right: "67.69%",
    width: "32.2%",
    height: "23.92%",
    borderRadius: 4,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.darkIOSKeyII,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
  },
  dialKey2: {
    left: "0.1%",
    right: "67.69%",
    width: "32.2%",
    height: "23.92%",
    borderRadius: 4,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.darkIOSKeyII,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
  },
  letter168: {
    height: "75.83%",
    fontSize: FontSize.size_7xl_9,
    color: Color.fontColor,
    display: "none",
  },
  dialKey3: {
    bottom: "0.54%",
    top: "75.53%",
  },
  dialKey4: {
    bottom: "83.09%",
    top: "-7.02%",
  },
  dialKey5: {
    bottom: "55.56%",
    top: "20.51%",
  },
  dialKey6: {
    bottom: "28.03%",
    top: "48.05%",
  },
  dialKey7: {
    left: "67.72%",
    right: "0.08%",
    width: "32.2%",
    height: "23.92%",
    borderRadius: 4,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.darkIOSKeyII,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
  },
  dialKey8: {
    left: "67.72%",
    right: "0.08%",
    width: "32.2%",
    height: "23.92%",
    borderRadius: 4,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.darkIOSKeyII,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
  },
  dialKey9: {
    left: "67.72%",
    right: "0.08%",
    width: "32.2%",
    height: "23.92%",
    borderRadius: 4,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.darkIOSKeyII,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.22)",
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
  },
  letter175: {
    display: "flex",
    color: Color.white,
    height: "100%",
  },
  keyPad180: {
    top: "-8.46%",
    bottom: "15.38%",
    display: "none",
    right: "0%",
    borderRadius: 4,
    backgroundColor: Color.white,
  },
  letter176: {
    top: "6.92%",
    fontSize: FontSize.size_xl,
    color: Color.fontColor,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    alignItems: "center",
  },
  number167: {
    height: "29.42%",
  },
  v278: {
    height: "107.44%",
    bottom: "-16.53%",
  },
  key78: {
    bottom: "0.54%",
    top: "75.53%",
  },
  iosKeyboardPhone: {
    top: 573,
    shadowColor: "rgba(120, 159, 194, 0.26)",
    shadowRadius: 61.86,
    elevation: 61.86,
    backgroundColor: "#202325",
    height: 234,
    shadowOpacity: 1,
    shadowOffset: {
      width: -10.225276947021484,
      height: 53.15688705444336,
    },
    left: 0,
    position: "absolute",
    width: 393,
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
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorBlack,
    height: 12,
    textAlign: "left",
  },
  logo: {
    marginLeft: -20.5,
    top: 13,
    height: 39,
  },
  busca: {
    backgroundColor: Color.colorGainsboro,
    flex: 1,
    height: 852,
    overflow: "hidden",
  },
});

export default Busca;
