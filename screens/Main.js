import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";
const screenWidth = Dimensions.get("window").width;
const N_Stack = createNativeStackNavigator();
export default function Main({ navigation: { navigate } }) {
  return (
    <Container>
      <TouchableOpacity onPress={() => navigate("All_models")}>
        <Img>
          <ImageBackground
            source={require("../a1.jpeg")}
            style={{
              height: "100%",
              width: "100%",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Title>Find Your BMW*</Title>
          </ImageBackground>
        </Img>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("Visualizer")}>
        <Img>
          <ImageBackground
            source={require("../a2.jpeg")}
            style={{
              height: "100%",
              width: "100%",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
            blurRadius={1}
          >
            <Title>STYLE YOUR BMW</Title>
          </ImageBackground>
        </Img>
      </TouchableOpacity>
      <Wrapper>
        <Img2>
          <TouchableOpacity>
            <ImageBackground
              source={require("../a3.webp")}
              style={{
                height: "100%",
                width: "100%",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Title>M DRIVING PLEASURE</Title>
            </ImageBackground>
          </TouchableOpacity>
        </Img2>
        <Img2>
          <TouchableOpacity>
            <ImageBackground
              source={require("../a4.jpeg")}
              style={{
                height: "100%",
                width: "100%",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Title>EXPOLORE ELECTRIC</Title>
            </ImageBackground>
          </TouchableOpacity>
        </Img2>
      </Wrapper>
      <Wrapper>
        <Img2>
          <TouchableOpacity>
            <ImageBackground
              source={require("../a5.png")}
              style={{
                height: "100%",
                width: "100%",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Title>WALLPAPER</Title>
            </ImageBackground>
          </TouchableOpacity>
        </Img2>
        <Img2>
          <TouchableOpacity>
            <ImageBackground
              source={require("../a6.jpeg")}
              style={{
                height: "100%",
                width: "100%",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Title>MEDIA</Title>
            </ImageBackground>
          </TouchableOpacity>
        </Img2>
      </Wrapper>
      <Img>
        <TouchableOpacity>
          <ImageBackground
            source={require("../a7.jpeg")}
            style={{
              height: "100%",
              width: "100%",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Title>HOW TO VIDEOS</Title>
          </ImageBackground>
        </TouchableOpacity>
      </Img>
      <Img>
        <Text>Made by YS</Text>
      </Img>
    </Container>
  );
}
const Container = styled.ScrollView``;
const Img = styled.View`
  height: 200px;
  border: 2px solid white;
`;
const Img2 = styled.View`
  flex: 1;
  border: 2px solid white;
`;
const Wrapper = styled.View`
  height: 200px;
  flex-direction: row;
  display: flex;
`;
const Title = styled.Text`
  color: white;
  font-size: 25px;
  margin-bottom: 20px;
  text-align: center;
`;
