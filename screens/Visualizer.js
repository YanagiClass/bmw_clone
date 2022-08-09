import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { Entypo } from "@expo/vector-icons";
export default function Visualizer() {
  return (
    <Container>
      <List>
        <Title>THE 2</Title>
        <TouchableOpacity>
          <View>
            <Text>
              <Entypo name="plus" size={30} color="blue" />
            </Text>
          </View>
        </TouchableOpacity>
      </List>
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
const Title = styled.Text`
  font-weight: 400;
  font-size: 24px;
`;
