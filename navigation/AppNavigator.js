import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import MainTabNavigator from './MainTabNavigator';
import CompilerScreen from '../screens/CompilerScreen';

const RootNavigator = createStackNavigator(
    {
        Home: { screen: HomeScreen },
        BottomTab: {
            screen: MainTabNavigator,
            navigationOptions: ({ navigation }) => {
                return {
                    header: null,
                }
            }
        },
        Compiler: {
            screen: CompilerScreen,
        }
    }
)

export default createAppContainer(RootNavigator);
