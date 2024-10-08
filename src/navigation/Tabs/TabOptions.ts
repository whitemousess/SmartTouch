import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import colors from '~/constants/colors';
import {Platform} from 'react-native';

import {useSelectorApp} from '~/redux/slices/app.slice';

export const TabOptions = (show: boolean): BottomTabNavigationOptions => {
  const {darkMode} = useSelectorApp();

  return {
    tabBarLabel: () => null,
    headerShown: false,
    tabBarInactiveTintColor: colors.whiteGray,
    tabBarActiveTintColor: colors.mainColor,
    tabBarStyle: {
      display: show ? 'flex' : 'none',
      height: 60,
      position: 'absolute',
      bottom: 25,
      left: 20,
      right: 20,
      paddingBottom: -30,
      elevation: 5,
      backgroundColor: darkMode ? colors.darkGrayOpacity : colors.white,
      borderRadius: 20,
      shadowColor: 'rgba(0, 0, 0, 0.3)',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      ...Platform.select({
        ios: {
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.3,
          shadowRadius: 2,
        },
        android: {
          elevation: 5,
        },
      }),
    },
  };
};
