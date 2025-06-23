import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AccountScreen } from "../screens/AccountScreen";
import { screenName } from "../utils/screenName";

const Stack = createNativeStackNavigator();

export function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenName.account.account}
        component={AccountScreen}
        options={{ title: "Account" }}
      />
    </Stack.Navigator>
  );
}
