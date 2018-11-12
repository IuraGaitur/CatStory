import {
    createStackNavigator,
} from 'react-navigation';

import CatDetailsScreen from 'src/screens/details/CatDetailsScreen'

const App = createStackNavigator({
    Profile: { screen: CatDetailsScreen },
});

export default App;
