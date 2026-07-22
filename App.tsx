import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ProjectSetupScreen from './screens/ProjectSetupScreen';
import WeavingScreen from './screens/WeavingScreen';

export type RootStackParamList = {
  Home: undefined;
  ProjectSetup: undefined;
  Weaving: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4f1ea',
          },
          headerTintColor: '#24323d',
          headerTitleStyle: {
            fontWeight: '700',
          },
          contentStyle: {
            backgroundColor: '#f4f1ea',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ProjectSetup"
          component={ProjectSetupScreen}
          options={{ title: 'Project Setup' }}
        />
		
		<Stack.Screen
	      name="Weaving"
		  component={WeavingScreen}
		  options={{ title: 'Weaving' }}
		/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}