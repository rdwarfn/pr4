import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import DetailsScreen from '../screens/DetailsScreen';
import ListsScreen from '../screens/ListsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HomeScreen from '../screens/HomeScreen';

const ListStack = createStackNavigator({
  Lists : { screen: ListsScreen },
  Details: { screen: DetailsScreen },
});

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  }
);

export default createBottomTabNavigator(
  {
    Lists: ListStack,
    Settings: SettingsStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Lists') {
          iconName = `ios-list${focused ? '' : ''}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : ''}`;
        }

        return <TabBarIcon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);
