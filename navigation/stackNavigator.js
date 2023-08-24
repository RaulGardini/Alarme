import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/home';
import ConfgAlarme from '../screen/confgAlarme';
import ConfgApp from '../screen/confgApp';

const Stack = createStackNavigator();

export default function Stack_navigator() {
  return (
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ConfgAlarme" component={ConfgAlarme} />
        <Stack.Screen name="ConfgApp" component={ConfgApp} />
      </Stack.Navigator>
  );
}