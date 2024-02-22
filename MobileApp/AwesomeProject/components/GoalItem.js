import styled from "styled-components/native";

import { View, Text, Pressable, Modal } from "react-native";

const StyledGoalItem = styled.View`
  margin: 8px;

  border-radius: 6px;
  background-color: #5e0acc;
`;
const StyledGoalItemText = styled.Text`
  color: #fff;
  padding: 8px;
`;

function GoalItem({ text, onPress }) {
  return (
    <StyledGoalItem>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={onPress}
        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
      >
        <StyledGoalItemText>{text}</StyledGoalItemText>
      </Pressable>
    </StyledGoalItem>
  );
}

export default GoalItem;
