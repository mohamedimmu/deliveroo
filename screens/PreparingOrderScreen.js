import { View, Text } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/motorcycle.gif")}
        animations="slideInUp"
        iterationCount={1}
        className="h-96 w-96 rounded-full"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="font-bold  text-[#00aebe] text-xl text-center mb-5"
      >
        Waiting for restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle
        color="#00aebe"
        borderColor="#00aebe"
        borderWidth={3}
        size={60}
        fill="#00000000"
        indeterminate={true}
      />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
