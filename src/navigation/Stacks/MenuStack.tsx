import { createStackNavigator } from '@react-navigation/stack';

import { ScreenName } from '../type';
import React from 'react';
import { StackOptions } from './StackOptions';
import MenuScreen from '~/screens/MenuScreen';
import DisplaySettingScreen from '~/screens/DisplaySettingScreen';
import AccountScreen from '~/screens/AccountScreen/AccountScreen';

const Stack = createStackNavigator();
const MenuStack = () => {
  return (
    <Stack.Navigator screenOptions={StackOptions}>
      <Stack.Screen name={ScreenName.Menu} component={MenuScreen} />

      <Stack.Screen name={ScreenName.DisplaySetting} component={DisplaySettingScreen} />
      <Stack.Screen name={ScreenName.Account} component={AccountScreen} />

    </Stack.Navigator>
  );
};

export default MenuStack;