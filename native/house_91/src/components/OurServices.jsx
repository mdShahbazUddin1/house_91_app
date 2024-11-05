import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import ArrowRight from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const OurServices = () => {
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
          <FontAwesome6 name="user-tie" size={20} color="green" />
          <View style={{marginLeft: 7, marginTop: -3}}>
            <Text style={{fontSize: 15, fontWeight: 500}}>
              Our Services for Owners
            </Text>
            <Text style={{fontSize: 8, fontWeight: 500, marginTop: -3}}>
              Enhance your life with our services.
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between', // Even spacing between cards
          paddingHorizontal: 20, // Optional padding to add spacing on the sides
          marginTop: 20,
          width: 333,
          backgroundColor: '#DBFFD5',
          height: 141,
          borderRadius: 20,
        }}>
        <View style={{marginTop: -10}}>
          <Text style={{fontSize: 13, fontWeight: 700}}>
            get help selling more quickly
          </Text>
          <Text style={{color: '#6B6B6B', width: 190, fontSize: 12}}>
            A relationship manager who will help you sell your home faster.
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'transparent',
              padding: 10,
              borderColor: 'green',
              borderWidth: 1,
              borderRadius: 10,
              width: 115,
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 12, fontWeight: 700}}>Explore Now</Text>
            <AntDesign
              name="arrowright"
              size={18}
              color="green"
              style={{marginLeft: 8}}
            />
          </TouchableOpacity>
        </View>
        <View>
          <FontAwesome5 name="laptop-house" size={80} color="green" />
        </View>
      </View>
    </View>
  );
};

export default OurServices;
