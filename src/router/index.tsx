import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomePage } from 'pages'
import { RootStackNavigatorProps } from 'types'

const RootStack = createNativeStackNavigator<RootStackNavigatorProps>()

const Router = () => {
  return (
    <NavigationContainer children>
      <RootStack.Navigator initialRouteName='Home' children>
        <RootStack.Screen
          name='Home'
          component={HomePage}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default Router
