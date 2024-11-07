import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AboutUs = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <AntDesign name="arrowleft" size={22} style={{padding: 15}} />
      <View style={{backgroundColor: '#128807', padding: 10}}>
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 18,
            fontWeight: 400,
            textAlign: 'center',
          }}>
          ABOUT - US
        </Text>
      </View>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{marginTop: 15, paddingHorizontal: 30}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              fontWeight: 400,
              lineHeight: 17,
              paddingBottom: 20,
            }}>
            House91 is India's largest Integrated real estate marketplace, with
            category leadership presence across multiple touchpoints of consumer
            home ownership journey. With Urbanisation and rising disposable
            incomes as the core theme, Square Yards, with 8mn+ monthly traffic
            and ~USD 5bn+ GTV, is the largest and asset light proxy play to the
            growing residential demand story of India.
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              fontWeight: 400,
              lineHeight: 17,
              paddingBottom: 20,
            }}>
            One of the few Indian start ups to taste global success with
            presence in 100+ cities across 9 countries, Square Yards is at the
            forefront of tech adoption in the sector, with multiple patents
            across VR/AI domains.
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              fontWeight: 400,
              lineHeight: 17,
              paddingBottom: 20,
            }}>
            From residences that can be appreciated by the burgeoning upper
            middle class to extravagant luxury homes in Chennai that are akin to
            castles in the air, we’ve done it all over our 60 years in the real
            estate industry. we widely credited to have introduced the
            “Apartment Culture” in Chennai by being one of the first to offer
            elegantly designed residences.
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              fontWeight: 400,
              lineHeight: 17,
              paddingBottom: 20,
            }}>
            {' '}
            Additionally, we were the builders in Chennai to pioneer the concept
            of creating townships in key suburban locations through the urban
            development model – one that is now replicated by many others.
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              fontWeight: 400,
              lineHeight: 17,
              paddingBottom: 20,
            }}>
            Our vision is to identify and develop properties in Chennai that
            inspire and integrate value creation, impeccable quality, modernity
            and excellence. We aim to continue fostering an everlasting bond of
            customer relationship built on trust, confidence and delight while
            adhering to principles of ethics and professionalism.
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              fontWeight: 400,
              lineHeight: 17,
              paddingBottom: 20,
            }}>
            Over the past couple of years, we’ve also experimented with creating
            properties for new market segments. As a result, we launched our
            ultra-luxury residences at Azure The Oceanic at R A Puram in Chennai
            that guarantees endless ocean views and utterly blissful life at the
            heart of this bustling city.
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              fontWeight: 400,
              lineHeight: 17,
              paddingBottom: 20,
            }}>
            The property also cemented a long-term collaboration between the
            brand and the Singapore-based WOW architects, known across the globe
            for their daring design and thoughtfully crafted spaces. This
            collaboration also extends to Altezza, our brand new flats for sale
            in Chennai.
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              fontWeight: 400,
              lineHeight: 17,
              paddingBottom: 20,
            }}>
            Unlike the other properties, we attempt at incorporating and
            introducing sustainable construction to Chennai’s real estate
            market.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutUs;
