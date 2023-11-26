import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { HelloWorld } from "./HelloWorld";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailsScreen } from "./DetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Hello World" component={HelloWorld} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
