import {StackNavigator, DrawerNavigator} from 'react-navigation';
import Profile from './../components/Profile';
import Header from './Header';
import RegistrationForm from './../components/RegistrationForm';
import MenuList from './../components/MenuList';

// const Drawer = StackNavigator({
//   Root: {
//     screen: Header
//   },
//
// }, {
//   headerMode: 'float'
// })

const Root = DrawerNavigator({
  Home: {
    screen: Header,
  },
  Menu: {
    screen: MenuList
  },
  Profile: {
    screen: Profile
  },
  Register: {
    screen: RegistrationForm
  }
}, {
  headerMode: 'none',
  headerStyle: {backgroundColor: '#E73536'},
});



export default Root;
