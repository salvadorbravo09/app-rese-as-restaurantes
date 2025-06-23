import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import { RestaurantStack } from "./RestaurantStack";
import { FavoritesStack } from "./FavoritesStack";
import { RankingStack } from "./RankingStack";
import { SearchStack } from "./SearchStack";
import { AccountStack } from "./AccountStack";

import { screenName } from "../utils/screenName";

const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#00a680",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
      })}
    >
      <Tab.Screen
        name={screenName.restaurant.tab}
        component={RestaurantStack}
        options={{ title: "Restaurantes" }}
      />
      <Tab.Screen
        name={screenName.favorites.tab}
        component={FavoritesStack}
        options={{ title: "Favoritos" }}
      />
      <Tab.Screen
        name={screenName.ranking.tab}
        component={RankingStack}
        options={{ title: "Ranking" }}
      />
      <Tab.Screen
        name={screenName.search.tab}
        component={SearchStack}
        options={{ title: "Buscar" }}
      />
      <Tab.Screen
        name={screenName.account.tab}
        component={AccountStack}
        options={{ title: "Cuenta" }}
      />
    </Tab.Navigator>
  );
}

function screenOptions(route, color, size) {
  let iconName;

  if (route.name === screenName.restaurant.tab) {
    iconName = "compass-outline";
  }

  if (route.name === screenName.favorites.tab) {
    iconName = "heart-outline";
  }

  if (route.name === screenName.ranking.tab) {
    iconName = "star-outline";
  }

  if (route.name === screenName.search.tab) {
    iconName = "magnify";
  }

  if (route.name === screenName.account.tab) {
    iconName = "account-outline";
  }

  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
}
