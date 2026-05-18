import { Slider } from "@flexnative/slider";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const App: React.FC = () => {
  const [basicValue, setBasicValue] = useState<number>(50);
  const [advancedValue, setAdvancedValue] = useState<number>(30);
  const [rangeValue, setRangeValue] = useState<number>(75);

  const handleValueChange = (value: number): void => {
    console.log("Value changed:", value);
  };

  const handleSlidingComplete = (value: number): void => {
    console.log("Sliding completed:", value);
  };

  const formatCurrency = (value: number): string => {
    return `$${value.toFixed(2)}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Basic Slider</Text>
      <Slider
        value={basicValue}
        onValueChange={setBasicValue}
        onSlidingComplete={handleSlidingComplete}
        minimumValue={0}
        maximumValue={100}
        step={1}
      />
      <Text style={styles.value}>Value: {basicValue}</Text>

      <Text style={[styles.title, styles.marginTop]}>
        Advanced Slider with Marks
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  marginTop: {
    marginTop: 30,
  },
  value: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
    color: "#666",
  },
  sliderContainer: {
    marginHorizontal: 10,
  },
});

export default App;
