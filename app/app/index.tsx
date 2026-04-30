import { Button } from "react-native";
import { Text, View } from "react-native";
import handleButton from "@/hooks/homePage";
import { useState } from "react";

/*
*     Entrypoint of the application
*/

export default function Index() {
  const [index, setIndex] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title = "A button" />
    </View>
  );
}
