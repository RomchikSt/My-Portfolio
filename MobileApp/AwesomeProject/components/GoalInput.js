import {
  Button,
  TextInput,
  View,
  Modal,
  StyleSheet,
  Image,
} from "react-native";
import { useState } from "react";

import styled from "styled-components/native";

const StyledInputContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 24px;
  padding: 16px;
  background-color: #311b92;
`;

const StyledTextInput = styled.TextInput`
  border-width: 1px;
  width: 90%;
  margin-right: 8px;
  padding: 8px 24px;
  border-color: #e4d0ff;
  background-color: #e4d0ff;
  color: #311b92;
  border-radius: 24px;
`;

const StyledButtonsContainer = styled.View`
  margin-top: 16px;
  flex-direction: row;
`;

const StyledButtonContainer = styled.View`
  width: 100px;
  margin: 0 8px;
`;

const StyledImg = styled.Image`
  width: 100px;
  height: 100px;
`;

function GoalInput({ onPress, onChangeText, visible, unvisible }) {
  return (
    <Modal visible={visible} animationType="slide">
      <StyledInputContainer>
        <StyledImg source={require("../assets/img/goal.png")} />
        <StyledTextInput
          placeholder="Your Course Goal"
          onChangeText={onChangeText}
        />
        <StyledButtonsContainer>
          <StyledButtonContainer>
            <Button title="Add Goal" onPress={onPress} color="blue" />
          </StyledButtonContainer>
          <StyledButtonContainer>
            <Button title="Cancel" onPress={unvisible} color="red" />
          </StyledButtonContainer>
        </StyledButtonsContainer>
      </StyledInputContainer>
    </Modal>
  );
}

export default GoalInput;
