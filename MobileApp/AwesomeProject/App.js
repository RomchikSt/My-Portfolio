import { useState } from "react";
import { View, FlatList, Button, StatusBar } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

import styled from "styled-components/native";

const StyledAppContainer = styled.View`
  padding: 50px 16px;
  flex: 1;
`;

const StyledGoalsContainer = styled.View`
  flex: 1;
`;

export default function App() {
  const [modalVisable, setModalVisable] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function startAddGoalHandler() {
    setModalVisable(true);
  }

  function cancelGoalAdditionHandler() {
    setModalVisable(false);
  }

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText.length === 0) return;

    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setModalVisable(false);
  }

  function removeGoalHandler(goalId) {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <StyledAppContainer>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onPress={addGoalHandler}
          onChangeText={goalInputHandler}
          visible={modalVisable}
          unvisible={cancelGoalAdditionHandler}
        />
        <StyledGoalsContainer>
          <FlatList
            data={courseGoals}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onPress={() => removeGoalHandler(itemData.item.id)}
                />
              );
            }}
          />
        </StyledGoalsContainer>
      </StyledAppContainer>
    </>
  );
}
