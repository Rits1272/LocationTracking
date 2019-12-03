import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './screens/Home';
import Login from './screens/Login';

const MainNavigator = createStackNavigator({
  Home : {screen : Home},
  Login : {screen : Login}, 
},{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor : '#f4511e',
    },
    headerTintColor : '#fff',
  }
});

const App = createAppContainer(MainNavigator);

export default App;
