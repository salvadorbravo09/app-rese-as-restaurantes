import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FavoritesScreen } from "../screens/FavoritesScreen";
import { screenName } from "../utils/screenName";

const Stack = createNativeStackNavigator();

export function FavoritesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenName.favorites.favorites}
        component={FavoritesScreen}
        options={{ title: "Favoritos" }}
      />
    </Stack.Navigator>
  );
}
