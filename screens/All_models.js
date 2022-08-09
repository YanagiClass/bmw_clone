import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from "react-native";
import styled from "styled-components/native";

const D_width = Dimensions.get("window").width;

export default function All_models() {
  return (
    <ScrollView>
      <Container>
        <Img1>
          <ImageBackground
            source={require("../a1.jpeg")}
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-end",
            }}
          >
            <Title>ALL MODELS</Title>
          </ImageBackground>
        </Img1>
        <The_2>
          <Box>
            <Title2>THE 2</Title2>
          </Box>
          <Wrapper>
            <Image
              source={require("../asset/All_models/a1.jpg")}
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "black",
                flex: 0.5,
              }}
            />
          </Wrapper>
        </The_2>

        <Text_Wrapper>
          <View>
            <Box_Text>BMW 2 SEries Gran Tourer|BMW2Series</Box_Text>
            <Box_Text>Active Touerer</Box_Text>
            <Box_Text2>03/2020</Box_Text2>
          </View>
        </Text_Wrapper>

        <The_2>
          <Box>
            <Title2>THE 4</Title2>
          </Box>
          <Wrapper>
            <Image
              source={require("../asset/All_models/a2.jpg")}
              style={{
                height: "100%",
                width: "90%",
                backgroundColor: "black",
                flex: 0.5,
                marginRight: 5,
              }}
            />

            <Image
              source={require("../asset/All_models/a3.png")}
              style={{
                height: "100%",
                width: "90%",
                backgroundColor: "black",
                flex: 0.5,
                marginLeft: 5,
              }}
            />
          </Wrapper>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "44.5%",
                alignSelf: "center",
              }}
            >
              <View>
                <Box_Text>BMW 4 Series Coupe</Box_Text>
                <Box_Text2>03/2020</Box_Text2>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "44.5%",
                alignSelf: "center",
              }}
            >
              <View>
                <Box_Text>BMW 4 Series Convertible</Box_Text>
                <Box_Text2>03/2020</Box_Text2>
              </View>
            </View>
          </View>
        </The_2>
        <The_2>
          <Box>
            <Title2>THE 5</Title2>
          </Box>
          <Wrapper>
            <Image
              source={require("../asset/All_models/a2.jpg")}
              style={{
                height: "100%",
                width: "90%",
                backgroundColor: "black",
                flex: 0.5,
                marginRight: 5,
              }}
            />
            <Image
              source={require("../asset/All_models/a3.png")}
              style={{
                height: "100%",
                width: "90%",
                backgroundColor: "black",
                flex: 0.5,
                marginLeft: 5,
              }}
            />
          </Wrapper>
        </The_2>
        <The_2>
          <Box>
            <Title2>THE 6</Title2>
          </Box>
          <Wrapper>
            <Image
              source={require("../asset/All_models/a2.jpg")}
              style={{
                height: "100%",
                width: "90%",
                backgroundColor: "black",
                flex: 0.5,
                marginRight: 5,
              }}
            />
            <Image
              source={require("../asset/All_models/a3.png")}
              style={{
                height: "100%",
                width: "90%",
                backgroundColor: "black",
                flex: 0.5,
                marginLeft: 5,
              }}
            />
          </Wrapper>
        </The_2>
        <The_2>
          <Box>
            <Title2>THE X</Title2>
          </Box>
          <Wrapper>
            <Image
              source={require("../asset/All_models/a2.jpg")}
              style={{
                height: "100%",
                width: "90%",
                backgroundColor: "black",
                flex: 0.5,
                marginRight: 5,
              }}
            />
            <Image
              source={require("../asset/All_models/a3.png")}
              style={{
                height: "100%",
                width: "90%",
                backgroundColor: "black",
                flex: 0.5,
                marginLeft: 5,
              }}
            />
          </Wrapper>
        </The_2>
        <The_2>
          <Box>
            <Title2>THE M</Title2>
          </Box>
          <Wrapper>
            <Image
              source={require("../asset/All_models/a2.jpg")}
              style={{
                height: "100%",
                width: "90%",
                backgroundColor: "black",
                flex: 0.5,
                marginRight: 5,
              }}
            />
            <Image
              source={require("../asset/All_models/a3.png")}
              style={{
                height: "100%",
                width: "90%",
                backgroundColor: "black",
                flex: 0.5,
                marginLeft: 5,
              }}
            />
          </Wrapper>
        </The_2>
        <The_2>
          <Box>
            <Title2>THE I</Title2>
          </Box>
          <Wrapper>
            <Image
              source={require("../asset/All_models/a2.jpg")}
              style={{
                height: "100%",
                width: "90%",
                backgroundColor: "black",
                flex: 0.5,
                marginRight: 5,
              }}
            />
            <Image
              source={require("../asset/All_models/a3.png")}
              style={{
                height: "100%",
                width: "90%",
                backgroundColor: "black",
                flex: 0.5,
                marginLeft: 5,
              }}
            />
          </Wrapper>
        </The_2>
        <View style={{ height: 200 }}></View>
      </Container>
    </ScrollView>
  );
}

const Container = styled.View``;
const Img1 = styled.View`
  height: 200px;
  display: flex;
`;
const Title = styled.Text`
  color: white;
  font-size: 25px;
  margin-bottom: 10px;
  text-align: center;
  margin-left: 20px;
  font-weight: 300;
`;
const Box = styled.View`
  width: 85%;
  height: 80px;
  background-color: gray;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: center;
`;
const Title2 = styled.Text`
  color: rgba(255, 255, 255, 0.3);
  font-size: 50px;
  font-weight: 200;
`;
const Wrapper = styled.View`
  padding-top: 10px;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-self: center;
  width: 85%;
`;
const Wrapper2 = styled.View`
  padding-top: 10px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 85%;
`;
const The_2 = styled.View``;
const Box_Text = styled.Text`
  width: 85%;
  font-size: 8px;
  font-weight: 600;
  align-self: center;
`;
const Box_Text2 = styled(Box_Text)`
  font-weight: 400;
`;
const Text_Wrapper = styled.View`
  width: 90%;
  align-self: center;
  display: flex;
  flex-direction: row;
`;
