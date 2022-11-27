import React from 'react' ;
import { NavigationContainer} from '@react-navigation/native';
import Home from './src/componentes/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProdutoComponent from './src/componentes/produto';

const Stack = createNativeStackNavigator();



const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Principal'>

      <Stack.Screen name="Principal" component={Home} />
      <Stack.Screen name="Produto" component={ProdutoComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;