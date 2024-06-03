import React from "react";
import { TextInput, Text, StyleSheet, View } from "react-native";

function CustomTextInput({ text, onChange, label, multiline, numberOfLines }) {
  const styles = StyleSheet.create({
    textInputWrapper: {
      marginTop: 20,
    },
    input: {
      borderWidth: 2,
      borderColor: "#DDD",
      padding: 10,
    },
  });

  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        onChangeText={onChange}
        style={styles.input}
        placeholder={label}
        defaultValue={text}
      />
    </View>
  );
}

export default CustomTextInput;
