import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Search from '~/pages/Search';

const Routes = createSwitchNavigator({ 
  Main,
  Search
}, {
  initialRouteName: 'Search'
});

export default createAppContainer(Routes);
