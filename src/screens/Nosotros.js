import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import Back from "../../assets/background.png";
import { Card } from "react-native-paper";
import { Linking } from "react-native";
import ButtonGreen from "./Buttons/ButtonGreen";
import ButtonGreenLight from "./Buttons/ButtonGreenLight";

const Nosotros = () => {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={Back} resizeMode="cover" style={styles.image}>
        <View style={styles.containerLogo}>
          <Image source={require("../../assets/SaveFood.png")} />
        </View>
        <View style={styles.containerText}>
          <View>
            <Card style={styles.card}>
              <View style={styles.nombreimagen}>
                <Text style={styles.text}>Luis Soracá</Text>
                <Image
                  style={styles.imagenperfil}
                  source={{
                    uri: "https://media-exp1.licdn.com/dms/image/D4E35AQEVH7Kxy-5ZBw/profile-framedphoto-shrink_200_200/0/1660782093154?e=1666818000&v=beta&t=jMaUyNbIYlF6EkpNCsMH0oAKiHTRYyPx3rlYVEaRSDw",
                  }}
                />
              </View>
              <Text style={styles.item}>
                Apasionado por lo que hago y amante de la tecnología. Cómo
                desarrollador siempre busco crear soluciones de la mejor manera,
                teniendo en cuenta los valores y estándares del rubro IT.
              </Text>
              <View style={styles.botones}>
                <ButtonGreenLight
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      "https://www.linkedin.com/in/luis-enrique-sorac%C3%A1-benthan-09a999241/"
                    )
                  }
                  text="LinkedIn"
                ></ButtonGreenLight>
                <ButtonGreenLight
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL("https://github.com/LuisSoraca27")
                  }
                  text="GitHub"
                ></ButtonGreenLight>
              </View>
            </Card>
          </View>

          <View>
            <Card style={styles.card}>
              <View style={styles.nombreimagen}>
                <Text style={styles.text}>Florencia Lioi</Text>
                <Image
                  style={styles.imagenperfil}
                  source={{
                    uri: "https://media-exp1.licdn.com/dms/image/D5635AQGQuAifp_h7Mg/profile-framedphoto-shrink_200_200/0/1641253139318?e=1666818000&v=beta&t=12Q4iOakcU5VIkaqDl4QGzkTFy-2KGnn8dn5ZHeTQ4M",
                  }}
                />
              </View>
              <Text style={styles.item}>
                Al terminar la secundaria, comencé la carrera en Educación
                Inicial, la cual finalice, pero decidí hacer un cambio en mi
                vida y encontrar realmente a que quiero dedicarme. Actualmente
                me dedico a la programación, adquiriendo herramientas del área
                constantemente.
              </Text>
              <View style={styles.botones}>
                <ButtonGreenLight
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      "https://www.linkedin.com/in/florencialioi/"
                    )
                  }
                  text="LinkedIn"
                ></ButtonGreenLight>
                <ButtonGreenLight
                  style={styles.link}
                  onPress={() => Linking.openURL("https://github.com/FlorLioi")}
                  text="GitHub"
                ></ButtonGreenLight>
              </View>
            </Card>
          </View>

          <View>
            <Card style={styles.card}>
              <View style={styles.nombreimagen}>
                <Text style={styles.text}>Joselyn Miranda</Text>
                <Image
                  style={styles.imagenperfil}
                  source={{
                    uri: "https://media-exp1.licdn.com/dms/image/D4D35AQGvMgKq-_BnUw/profile-framedphoto-shrink_200_200/0/1660169262139?e=1666818000&v=beta&t=PUIyX04FSahOPjDpUNHmO2NUDZdNoI55rI3f8iJ_fAQ",
                  }}
                />
              </View>
              <Text style={styles.item}>
                Aca cada uno se describe 
              </Text>
              <View style={styles.botones}>
                <ButtonGreenLight
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      "https://www.linkedin.com/in/jocelynmiranda/"
                    )
                  }
                  text="LinkedIn"
                ></ButtonGreenLight>
                <ButtonGreenLight
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL("https://github.com/mirandajc")
                  }
                  text="GitHub"
                ></ButtonGreenLight>
              </View>
            </Card>
          </View>

          <View>
            <Card style={styles.card}>
              <View style={styles.nombreimagen}>
                <Text style={styles.text}>Alicia Zuliani</Text>
                <Image
                  style={styles.imagenperfil}
                  source={{
                    uri: "https://media-exp1.licdn.com/dms/image/D4D35AQEMhCq81OW_mA/profile-framedphoto-shrink_200_200/0/1646090248169?e=1666814400&v=beta&t=jKCKZXqu4_g9X2sxvG1vy51UqrMJPEJHjGeUQ756MuY",
                  }}
                />
              </View>
              <Text style={styles.item}>
                Organizada, entusiasta, orientada al cumplimiento de objetivos y
                metas organizacionales, con enfoque a generar valor en los
                proyectos involucrados a partir de la mejora continua y el
                intercambio. En permanente capacitación y desarrollo
                profesional. 
              </Text>
              <View style={styles.botones}>
                <ButtonGreenLight
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      "https://www.linkedin.com/in/alicia-zuliani/"
                    )
                  }
                  text="LinkedIn"
                ></ButtonGreenLight>
                <ButtonGreenLight
                  style={styles.link}
                  onPress={() => Linking.openURL("https://github.com/LuZeta")}
                  text="GitHub"
                ></ButtonGreenLight>
              </View>
            </Card>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Nosotros;

const styles = StyleSheet.create({
  containerLogo: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  container: {
    flex: 1,
  },
  card: {
    borderRadius: 20,
    margin: 20,
    backgroundColor: "#DAF4F0",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 70,
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    color: "#184D47",
    paddingTop: 20,
  },
  item: {
    textAlign: "center",
    color: "#8EB1AC",
    marginBottom: 30,
    marginTop: 30,
  },
  botones: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
  },
  link: {
    textAlign: "center",
    color: "#8EB1AC",
  },
  nombreimagen: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  imagenperfil: {
    width: 80,
    height: 80,
    marginTop: 10,
  },
});
