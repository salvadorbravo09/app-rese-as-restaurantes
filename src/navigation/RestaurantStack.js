import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screenName } from "../utils/screenName";
import { AddRestaurantScreen } from "../screens/Restaurants/AddRestaurantScreen";
import { RestaurantsScreen } from "../screens/Restaurants/RestaurantsScreen";

const Stack = createNativeStackNavigator();

export function RestaurantStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenName.restaurant.restaurants}
        component={RestaurantsScreen}
        options={{ title: "Restaurantes" }}
      />
      <Stack.Screen
        name={screenName.restaurant.addRestaurant}
        component={AddRestaurantScreen}
        options={{ title: "Nuevo Restaurante" }}
      />
    </Stack.Navigator>
  );
}
