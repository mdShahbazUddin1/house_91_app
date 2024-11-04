import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import ArrowRight from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const InsightsUtility = () => {
  const navigation = useNavigation();
  return (
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
            <Text style={{fontSize: 15, fontWeight: 500}}>
              Insights and Utilities
            </Text>
            <Text style={{fontSize: 8, fontWeight: 500, marginTop: -3}}>
              Grow from Browsing to Buying
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('InsightAndUtility')}>
          <Text style={{fontSize: 12, fontWeight: 500}}>View All</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between', // Even spacing between cards
          paddingHorizontal: 0, // Optional padding to add spacing on the sides
          marginTop: 20,
        }}>
        {/* Card 1 */}
        <View
          style={{
            borderRadius: 8,
            // height: 110,
            width: 105,
            backgroundColor: 'white',

            // Shadow for iOS
            shadowColor: 'rgba(0, 0, 0, 062)', // Slightly darker for better visibility
            shadowOffset: {width: -2, height: 4}, // Adds a subtle left shadow
            shadowOpacity: 0,
            shadowRadius: 8, // Increased for a softer shadow

            // Shadow for Android
            elevation: 8, // Increased elevation for a stronger shadow on Android
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#DBFFD5',
              justifyContent: 'center', // Center vertically
              alignItems: 'center', // Center horizontally
              margin: 'auto',
              borderRadius: 50,
              marginTop: 10,
            }}>
            <FontAwesome6 name="hand-holding-dollar" size={20} color="green" />
          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 6,
                paddingTop: 10,
              }}>
              <Text style={{fontSize: 8, fontWeight: 500}}>Price Trends</Text>
              <ArrowRight
                name="keyboard-arrow-right"
                size={12}
                color="black"
                style={{fontWeight: 700, marginTop: 1}}
              />
            </View>
            <Text
              style={{
                fontSize: 8,
                paddingBottom: 8,
                marginLeft: 6,
                width: '90%',
              }}>
              Check Properties Rates and Prices
            </Text>
          </View>
        </View>

        {/* Card 2 */}

        <View
          style={{
            borderRadius: 8,
            // height: 110,
            width: 105,
            backgroundColor: 'white',

            // Shadow for iOS
            shadowColor: 'rgba(0, 0, 0, 062)', // Slightly darker for better visibility
            shadowOffset: {width: -2, height: 4}, // Adds a subtle left shadow
            shadowOpacity: 0,
            shadowRadius: 8, // Increased for a softer shadow

            // Shadow for Android
            elevation: 8, // Increased elevation for a stronger shadow on Android
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#DBFFD5',
              justifyContent: 'center', // Center vertically
              alignItems: 'center', // Center horizontally
              margin: 'auto',
              borderRadius: 50,
              marginTop: 10,
            }}>
            <FontAwesome5 name="map-marked-alt" size={20} color="green" />
          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 6,
                paddingTop: 10,
              }}>
              <Text style={{fontSize: 8, fontWeight: 500}}>
                Locality Insights
              </Text>
              <ArrowRight
                name="keyboard-arrow-right"
                size={12}
                color="black"
                style={{fontWeight: 700, marginTop: 1}}
              />
            </View>
            <Text
              style={{
                fontSize: 8,
                paddingBottom: 8,
                marginLeft: 6,
                width: '90%',
              }}>
              Know more about different localities
            </Text>
          </View>
        </View>
        {/* Card 3 */}
        <View
          style={{
            borderRadius: 8,
            // height: 102,
            width: 105,
            backgroundColor: 'white',

            // Shadow for iOS
            shadowColor: 'rgba(0, 0, 0, 062)', // Slightly darker for better visibility
            shadowOffset: {width: -2, height: 4}, // Adds a subtle left shadow
            shadowOpacity: 0,
            shadowRadius: 8, // Increased for a softer shadow

            // Shadow for Android
            elevation: 8, // Increased elevation for a stronger shadow on Android
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#DBFFD5',
              justifyContent: 'center', // Center vertically
              alignItems: 'center', // Center horizontally
              margin: 'auto',
              borderRadius: 50,
              marginTop: 10,
            }}>
            <MaterialCommunityIcons
              name="message-text"
              size={20}
              color="green"
            />
          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 6,
                paddingTop: 10,
              }}>
              <Text style={{fontSize: 8, fontWeight: 500}}>
                Reviews by Residents{' '}
              </Text>
              <ArrowRight
                name="keyboard-arrow-right"
                size={12}
                color="black"
                style={{fontWeight: 700, marginTop: 1}}
              />
            </View>
            <Text
              style={{
                fontSize: 8,
                paddingBottom: 16,
                marginLeft: 6,
                width: '90%',
              }}>
              Know what Residents Say
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default InsightsUtility;
