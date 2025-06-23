import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RankingScreen } from "../screens/RankingScreen";
import { screenName } from "../utils/screenName";

const Stack = createNativeStackNavigator();

export function RankingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenName.ranking.ranking}
        component={RankingScreen}
        options={{ title: "Ranking" }}
      />
    </Stack.Navigator>
  );
}
