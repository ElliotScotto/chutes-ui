import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//styles
interface ProfileProps {
  title?: string;
}

export default function HomeScreen({ title = "PROFILE" }: ProfileProps) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
