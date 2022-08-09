import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styled from "styled-components/native";
import { Entypo } from "@expo/vector-icons";
export default function Visualizer() {
  const [the2, setThe2] = useState(0);
  const [the4, setThe4] = useState(0);
  const [the5, setThe5] = useState(0);
  const [the6, setThe6] = useState(0);
  const [theX, setTheX] = useState(0);
  const [theM, setTheM] = useState(0);
  const [theI, setTheI] = useState(0);
  const upThe2 = () => {
    setThe2(the2 + 1);
  };
  return (
    <Container>
      {the2 % 2 == 0 ? (
        <List>
          <Title>THE 2</Title>
          <TouchableOpacity onPress={upThe2}>
            <View>
              <Text>
                <Entypo
                  name={the2 % 2 == 0 ? "plus" : "minus"}
                  size={30}
                  color="blue"
                />
              </Text>
            </View>
          </TouchableOpacity>
        </List>
      ) : (
        <List2>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Title>THE 2</Title>
            <TouchableOpacity onPress={upThe2}>
              <View>
                <Text>
                  <Entypo
                    name={the2 % 2 == 0 ? "plus" : "minus"}
                    size={30}
                    color="blue"
                  />
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <ImgWrapper>
            <Img>
              <ImageBackground
                source={require("../asset/Visualizer/a1.jpeg")}
                style={{ width: "100%", height: "100%" }}
                resizeMode="contain"
              />
            </Img>
            <Img>
              <ImageBackground
                source={require("../asset/Visualizer/a2.png")}
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
              />
            </Img>
          </ImgWrapper>
          <ImgWrapper>
            <Img>
              <Text style={{ fontSize: 10, textAlign: "center" }}>
                BMW 2 Series Active Tourer
              </Text>
            </Img>
            <Img>
              <Text style={{ fontSize: 10, textAlign: "center" }}>
                BMW 2 Series Gran Tourer
              </Text>
            </Img>
          </ImgWrapper>
        </List2>
      )}
      <List>
        <Title>THE 4</Title>
        <View>
          <Text>
            <Entypo name="plus" size={30} color="blue" />
          </Text>
        </View>
      </List>
      <List>
        <Title>THE 5</Title>
        <View>
          <Text>
            <Entypo name="plus" size={30} color="blue" />
          </Text>
        </View>
      </List>
      <List>
        <Title>THE 6</Title>
        <View>
          <Text>
            <Entypo name="plus" size={30} color="blue" />
          </Text>
        </View>
      </List>
      <List>
        <Title>THE X</Title>
        <View>
          <Text>
            <Entypo name="plus" size={30} color="blue" />
          </Text>
        </View>
      </List>
      <List>
        <Title>THE M</Title>
        <View>
          <Text>
            <Entypo name="plus" size={30} color="blue" />
          </Text>
        </View>
      </List>
      <List>
        <Title>THE i</Title>
        <View>
          <Text>
            <Entypo name="plus" size={30} color="blue" />
          </Text>
        </View>
      </List>
    </Container>
  );
}
const Container = styled.View`
  align-items: center;
  background-color: white;
`;
const List = styled.View`
  margin-top: 20px;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  width: 85%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const List2 = styled.View`
  margin-top: 20px;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  width: 85%;
  height: 200px;
`;
const Title = styled.Text`
  font-weight: 400;
  font-size: 24px;
`;
const ImgWrapper = styled.View`
  flex: 1;
  flex-direction: row;
`;
const Img = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
