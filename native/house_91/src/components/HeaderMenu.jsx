import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const HeaderMenu = () => {
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor="#128807" />
      <View>
        {/* Header Text and Icon */}
        <View style={styles.headerContent}>
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather name="arrow-left-circle" size={25} />
            </TouchableOpacity>
          </View>
          <Icon name="bars" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

export default HeaderMenu;

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 8,
    zIndex: 1, // Keep header text above the image
  },
  greetingText: {
    color: 'black',
    fontSize: 12,
    fontWeight: '500',
  },
  locationText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
