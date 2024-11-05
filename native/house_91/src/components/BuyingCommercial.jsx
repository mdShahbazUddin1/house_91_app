import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const BuyingCommercial = () => {
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
              Buying a Commercial Property
            </Text>
            <Text style={{fontSize: 8, fontWeight: '500', marginTop: -3}}>
              Shops, Offices, Land, Factories, Warehouse and more
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{marginTop: 20, width: '100%', height: 229, borderRadius: 22}}>
        <Image
          source={require('../../assets/buyIm.jpg')}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 22,
            resizeMode: 'contain',
          }}
        />
      </View>
      <TouchableOpacity
        style={{flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
        <Text style={{fontSize: 10, fontWeight: 500}}>
          Look into all of your commercial buying choices.
        </Text>
        <Entypo name="arrow-long-right" size={15} style={{marginLeft: 3}} />
      </TouchableOpacity>
      <Text style={{fontSize: 8, fontWeight: 600, color: '#7F7E7E'}}>
        Over 45,000 + properties and 7000+ Projects
      </Text>
    </View>
  );
};

export default BuyingCommercial;
