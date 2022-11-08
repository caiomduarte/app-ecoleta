

import { createStackNavigator } from'@react-navigation/stack';
import{ NavigationContainer }from'@react-navigation/native';


//Importando as telas
import Home from './pages/Home';
import Points from './pages/Points';
import Detail from './pages/Detail';

const AppStack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator headerMode="none" screenOptions={{cardStyle:{backgroundColor:'#F0F0F5'}}}>

                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="Points" component={Points}/>
                <AppStack.Screen name="Detail" component={Detail}/>

            </AppStack.Navigator>
        </NavigationContainer>
    )
}