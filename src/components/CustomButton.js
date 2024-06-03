import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

function CustomButton({
  backgroundColor,
  color,
  text,
  onPress,
  fontSize = 16,
  width = 120,
}) {
  const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor,
      width,
      padding: 10,
    },
    buttonText: {
      fontSize,
      fontWeight: "700",
      color,
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;