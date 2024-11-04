import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import ArrowRight from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Budget = () => {
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
          <View style={{marginLeft: 5, marginTop: -5}}>
            <Text style={{fontSize: 15, fontWeight: 500}}>Select Budget</Text>
            <Text style={{fontSize: 8, fontWeight: 500, marginTop: -3}}>
              Explore properties based on price range
            </Text>
          </View>
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between', // Even spacing between cards
            // paddingHorizontal: 10, // Optional padding to add spacing on the sides
            marginTop: 0,
          }}>
          {/* Card 1 */}
          <View
            style={{
              borderRadius: 8,
              borderColor: '#6B6B6B',
              borderWidth: 2,
              height: 90,
              width: 105,
              backgroundColor: 'white',
              shadowOpacity: 0,
              shadowRadius: 8, // Increased for a softer shadow
              paddingHorizontal: 10,
              marginRight: 5,
            }}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: '#DBFFD5',
                justifyContent: 'center', // Center vertically
                alignItems: 'center', // Center horizontally
                borderRadius: 50,
                marginTop: 10,
              }}>
              <FontAwesome6
                name="hand-holding-dollar"
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
                <Text style={{fontSize: 10, fontWeight: 500}}>Upto ₹30 L </Text>
                <ArrowRight
                  name="keyboard-arrow-right"
                  size={12}
                  color="black"
                  style={{fontWeight: 700, marginTop: 1}}
                />
              </View>
            </View>
          </View>

          {/* Card 2 */}

          <View
            style={{
              borderRadius: 8,
              borderColor: '#6B6B6B',
              borderWidth: 2,
              height: 90,
              width: 110,
              backgroundColor: 'white',
              shadowOpacity: 0,
              shadowRadius: 8, // Increased for a softer shadow
              paddingHorizontal: 10,
              marginRight: 5,
            }}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: '#DBFFD5',
                justifyContent: 'center', // Center vertically
                alignItems: 'center', // Center horizontally
                borderRadius: 50,
                marginTop: 10,
              }}>
              <FontAwesome6
                name="hand-holding-dollar"
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
                <Text style={{fontSize: 10, fontWeight: 500}}>Upto ₹30 L </Text>
                <ArrowRight
                  name="keyboard-arrow-right"
                  size={12}
                  color="black"
                  style={{fontWeight: 700, marginTop: 1}}
                />
              </View>
            </View>
          </View>
          {/* Card 3 */}
          <View
            style={{
              borderRadius: 8,
              borderColor: '#6B6B6B',
              borderWidth: 2,
              height: 90,
              width: 110,
              backgroundColor: 'white',
              shadowOpacity: 0,
              shadowRadius: 8, // Increased for a softer shadow
              paddingHorizontal: 10,
              marginRight: 5,
            }}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: '#DBFFD5',
                justifyContent: 'center', // Center vertically
                alignItems: 'center', // Center horizontally
                borderRadius: 50,
                marginTop: 10,
              }}>
              <FontAwesome6
                name="hand-holding-dollar"
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
                <Text style={{fontSize: 10, fontWeight: 500}}>Upto ₹30 L </Text>
                <ArrowRight
                  name="keyboard-arrow-right"
                  size={12}
                  color="black"
                  style={{fontWeight: 700, marginTop: 1}}
                />
              </View>
            </View>
          </View>
          {/* card 4 */}
          <View
            style={{
              borderRadius: 8,
              borderColor: '#6B6B6B',
              borderWidth: 2,
              height: 90,
              width: 110,
              backgroundColor: 'white',
              shadowOpacity: 0,
              shadowRadius: 8, // Increased for a softer shadow
              paddingHorizontal: 10,
              marginRight: 5,
            }}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: '#DBFFD5',
                justifyContent: 'center', // Center vertically
                alignItems: 'center', // Center horizontally
                borderRadius: 50,
                marginTop: 10,
              }}>
              <FontAwesome6
                name="hand-holding-dollar"
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
                <Text style={{fontSize: 10, fontWeight: 500}}>Upto ₹30 L </Text>
                <ArrowRight
                  name="keyboard-arrow-right"
                  size={12}
                  color="black"
                  style={{fontWeight: 700, marginTop: 1}}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Budget;
