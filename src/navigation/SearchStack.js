import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SearchScreen } from "../screens/SearchScreen";
import { screenName } from "../utils/screenName";

const Stack = createNativeStackNavigator();

export function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenName.search.search}
        component={SearchScreen}
        options={{ title: "Search" }}
      />
    </Stack.Navigator>
  );
}
