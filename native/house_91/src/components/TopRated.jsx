import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import ArrowRight from 'react-native-vector-icons/MaterialIcons';

const TopRated = () => {
  return (
    <View style={{flex: 1, paddingHorizontal: 15, paddingVertical: 15}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'start',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'start',
            justifyContent: 'space-between',
          }}>
          <Image
            source={require('../../assets/commer.jpg')}
            style={{width: 25, height: 25}}
          />
          <View style={{marginLeft: 7, marginTop: -2}}>
            <Text style={{fontSize: 15, fontWeight: '500'}}>
              Top Rated Developers
            </Text>
            <Text style={{fontSize: 8, fontWeight: '500', marginTop: -3}}>
              Most reputed developers in chennai
            </Text>
          </View>
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 10}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between', // Even spacing between cards
            // paddingHorizontal: 10, // Optional padding to add spacing on the sides
            marginTop: 0,
          }}>
          <View
            style={{
              width: 270,
              borderColor: 'green',
              borderWidth: 2,
              paddingHorizontal: 15,
              paddingVertical: 15,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 10,
              marginRight: 10,
            }}>
            <View
              style={{
                width: '50%',
                height: 56,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 4},
                shadowOpacity: 0.4, // Adjust for desired shadow transparency
                shadowRadius: 2, // Adjust for softness of shadow
                elevation: 2, // For Android shadow effect
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 8,
                }}>
                <Image
                  source={require('../../assets/logo1.jpg')}
                  style={{resizeMode: 'contain'}}
                />
              </View>
            </View>
            <View>
              <Text style={{fontSize: 15, fontWeight: 500}}>Prestige Grp</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <View>
                  <Text style={{fontSize: 10, fontWeight: 500}}>1986</Text>
                  <Text style={{fontSize: 9, fontWeight: 500}}>Year Estd</Text>
                </View>
                <View>
                  <Text style={{fontSize: 10, fontWeight: 500}}>300</Text>
                  <Text style={{fontSize: 9, fontWeight: 500}}>Projects</Text>
                </View>
              </View>
            </View>
          </View>
          {/* card 2 */}
        </View>
      </ScrollView>
    </View>
  );
};

export default TopRated;
