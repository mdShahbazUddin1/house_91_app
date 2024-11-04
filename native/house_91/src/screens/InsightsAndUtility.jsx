import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import HeaderMenu from '../components/HeaderMenu';
import ArrowRight from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const cardData = [
  {
    icon: <FontAwesome6 name="hand-holding-dollar" size={20} color="green" />,
    title: 'Price Trends',
    subtitle: 'Check Properties Rates and Prices',
  },
  {
    icon: <FontAwesome5 name="map-marked-alt" size={20} color="green" />,
    title: 'Locality Insights',
    subtitle: 'Know more about different localities',
  },
  {
    icon: (
      <MaterialCommunityIcons name="message-text" size={20} color="green" />
    ),
    title: 'Reviews by Residents',
    subtitle: 'Know what Residents Say',
  },
  {
    icon: <FontAwesome name="money" size={20} color="green" />,
    title: 'Pricing of transactions',
    subtitle: 'Check the Property Transaction Values',
  },
  {
    icon: <FontAwesome5 name="house-user" size={20} color="green" />,
    title: 'My Property',
    subtitle: 'Check Prices and Analyze market Demands',
  },
  {
    icon: <Ionicons name="newspaper-outline" size={20} color="green" />,
    title: 'My Property',
    subtitle: 'Check Prices and Analyze market Demands',
  },
  {
    icon: <AntDesign name="filetext1" size={20} color="green" />,
    title: 'Check Articles',
    subtitle: 'On trending topics and policy updates',
  },
  {
    icon: <Feather name="book" size={20} color="green" />,
    title: 'User Guide',
    subtitle: 'To help home buyers, tenants and sellers',
  },
  {
    icon: <AntDesign name="calculator" size={20} color="green" />,
    title: 'Budget calculator',
    subtitle: 'Check your Affordability range for buying home',
  },
  {
    icon: <MaterialIcons name="calculate" size={20} color="green" />,
    title: 'EMI calculator',
    subtitle: 'Calculate your home loan EMI',
  },
  {
    icon: <MaterialIcons name="maps-home-work" size={20} color="green" />,
    title: 'Loan Eligibility',
    subtitle: 'Check your eligibility for your housing loan',
  },
  {
    icon: (
      <MaterialCommunityIcons name="vector-square" size={20} color="green" />
    ),
    title: 'Area converter',
    subtitle: 'Convert one area into any other easily',
  },
  // Add more card objects as needed (total 12)
];

const InsightsAndUtility = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#C4FFB966'}}>
      <HeaderMenu />
      <View style={{flex: 1, paddingHorizontal: 15, paddingVertical: 20}}>
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
              source={require('../../assets/investment.png')}
              style={{width: 22, height: 15}}
            />
            <View style={{marginLeft: 5, marginTop: -5}}>
              <Text style={{fontSize: 15, fontWeight: '500'}}>
                Insights and Utilities
              </Text>
              <Text style={{fontSize: 8, fontWeight: '500', marginTop: -3}}>
                Grow from Browsing to Buying
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap', // Allow cards to wrap to the next line
            alignItems: 'center',
            justifyContent: 'flex-start', // Use 'flex-start' instead of 'space-between'
            marginTop: 20,
            marginTop: 20,
          }}>
          {cardData.map((card, index) => (
            <View
              key={index}
              style={{
                borderRadius: 8,
                width: 100,
                height: 110,
                backgroundColor: 'white',
                shadowColor: 'rgba(0, 0, 0, 0.62)',
                shadowOffset: {width: -2, height: 4},
                shadowOpacity: 0.3,
                shadowRadius: 8,
                elevation: 8,
                marginRight: 10, // Space between cards
                marginTop: 10,
              }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: '#DBFFD5',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 50,
                  marginTop: 10,
                  margin: 'auto',
                }}>
                {card.icon}
              </View>

              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 6,
                    paddingTop: 10,
                  }}>
                  <Text style={{fontSize: 8, fontWeight: '500'}}>
                    {card.title}
                  </Text>
                  <ArrowRight
                    name="keyboard-arrow-right"
                    size={12}
                    color="black"
                    style={{fontWeight: '700', marginTop: 1}}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 8,
                    paddingBottom: 8,
                    marginLeft: 6,
                    width: '90%',
                  }}>
                  {card.subtitle}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InsightsAndUtility;
