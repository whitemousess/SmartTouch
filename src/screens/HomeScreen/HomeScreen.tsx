import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {darkTheme, lightTheme} from '~/constants/colors';
import {updateLocalStorage} from '~/constants/LocalStorage';
import {removeCurrentUser} from '~/redux/action/appActions';
import {RootState} from '~/redux/reducers/rootReducer';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {darkMode} = useSelector((state: RootState) => state.appReducer);

  const logOut = () => {
    dispatch(removeCurrentUser());
    updateLocalStorage({key: 'appInfo', value: {currentUser: null}});
  };

  return (
    <View
      style={{
        backgroundColor: darkMode ? darkTheme.mainColor : lightTheme.mainColor,
        flex: 1,
      }}>
      <TouchableOpacity onPress={logOut}>
        <Text>Toggle darkMode</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
