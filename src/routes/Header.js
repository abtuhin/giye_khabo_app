import {StackNavigator} from 'react-navigation';
import RegistrationForm from './../components/RegistrationForm';
import MenuList from './../components/MenuList';
import LocationView from './../components/LocationView';
import Profile from './../components/Profile';

const Header = StackNavigator({
  Menu: {
    screen: MenuList,
    navigationOptions: {
      title: 'Menu'
    }
  },
  Register: {
    screen: RegistrationForm,
    navigationOptions: {
      title: 'Register'
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile'
    }
  },
  Map:{
    screen: LocationView,
    navigationOptions: {
      title: 'Location'
    }
  },

}, {
  headerMode: 'float',
  navigationOptions: {
    headerStyle: {backgroundColor: '#E73536'},
    headerTintColor: 'white'
  }
});

export default Header;
