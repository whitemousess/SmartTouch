import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import VectorIcon from './VectorIcon';
import {linkImage} from '~/utils/linkImage';
import Constants, { darkTheme, lightTheme } from '~/common/Constant';
import {useSelector} from 'react-redux';
import {RootState} from '~/redux/reducers/rootReducer';

interface HeaderBackProps {
  title?: string;
}

const HeaderBack: React.FC<HeaderBackProps> = ({title}) => {
  const navigation = useNavigation();
  const {darkMode} = useSelector((state: RootState) => state.appReducer);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity
      onPress={goBack}
      style={[styles.container,{backgroundColor: darkMode? darkTheme.headerColor : lightTheme.headerColor}]}
      activeOpacity={1}>
      <Image source={linkImage('IC_Back')} style={styles.icon} />
      <Text
        style={[
          styles.title,
          {
            color: darkMode ? Constants.white : Constants.black,
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingTop: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    padding: 10,
  },
});

export default HeaderBack;
