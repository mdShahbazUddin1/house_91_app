import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import ArrowRight from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const FeaturedCollection = () => {
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
            <Text style={{fontSize: 15, fontWeight: 500}}>
              Featured Collection
            </Text>
            <Text style={{fontSize: 8, fontWeight: 500, marginTop: -3}}>
              Category suited to your property needs
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between', // Even spacing between cards
          // paddingHorizontal: 10, // Optional padding to add spacing on the sides
          marginTop: 10,
          position: 'relative',
        }}>
        {/* Card 1 */}
        <View
          style={{
            borderRadius: 8,
            borderColor: '#128807',
            borderWidth: 2,
            height: 109,
            width: 125,
            backgroundColor: 'white',
            shadowOpacity: 0,
            shadowRadius: 8, // Softer shadow
          }}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center', // Centers items vertically
                paddingLeft: 6,
                padding: 5,
                backgroundColor: '#128807',
                borderTopRightRadius: 5,
                borderTopLeftRadius: 5,
              }}>
              <Text style={{fontSize: 8, fontWeight: '500', color: 'white'}}>
                Independent House
              </Text>
              <FontAwesome
                name="arrow-circle-right"
                size={11}
                color="white"
                style={{fontWeight: '700', marginLeft: 4}}
              />
            </View>
            <View
              style={{
                width: '100%',
                height: 84,
                overflow: 'hidden',
                borderBottomRightRadius: 7,
                borderBottomLeftRadius: 7,
              }}>
              {' '}
              {/* Set a specific height for the image container */}
              <Image
                source={require('../../assets/house1.jpg')}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover', // Ensures the image fits within the container
                  //   marginTop: -8,
                }}
              />
            </View>
          </View>
        </View>

        {/* Card 2 */}
        <View
          style={{
            position: 'absolute',
            zIndex: 9999,
            bottom: -0,
            left: 210,
            borderRadius: 8,
            borderColor: '#128807',
            borderWidth: 2,
            height: 109,
            width: 125,
            backgroundColor: 'white',
            shadowOpacity: 0,
            shadowRadius: 8, // Softer shadow
          }}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center', // Centers items vertically
                paddingLeft: 6,
                padding: 5,
                backgroundColor: '#128807',
                borderTopRightRadius: 5,
                borderTopLeftRadius: 5,
              }}>
              <Text style={{fontSize: 8, fontWeight: '500', color: 'white'}}>
                Townships
              </Text>
              <FontAwesome
                name="arrow-circle-right"
                size={11}
                color="white"
                style={{fontWeight: '700', marginLeft: 4}}
              />
            </View>
            <View
              style={{
                width: '100%',
                height: 84,
                overflow: 'hidden',
                borderBottomRightRadius: 7,
                borderBottomLeftRadius: 7,
              }}>
              {' '}
              {/* Set a specific height for the image container */}
              <Image
                source={require('../../assets/house2.jpg')}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover', // Ensures the image fits within the container
                  //   marginTop: -8,
                }}
              />
            </View>
          </View>
        </View>

        {/* Card 3 */}
        <View
          style={{
            position: 'absolute',
            zIndex: 999,
            bottom: -0,
            left: 103,
            borderRadius: 8,
            borderColor: '#128807',
            borderWidth: 2,
            height: 109,
            width: 125,
            backgroundColor: 'white',
            shadowOpacity: 0,
            shadowRadius: 8, // Softer shadow
          }}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center', // Centers items vertically
                paddingLeft: 6,
                padding: 5,
                backgroundColor: '#128807',
                borderTopRightRadius: 5,
                borderTopLeftRadius: 5,
              }}>
              <Text style={{fontSize: 8, fontWeight: '500', color: 'white'}}>
                Ready to move in
              </Text>
              <FontAwesome
                name="arrow-circle-right"
                size={11}
                color="white"
                style={{fontWeight: '700', marginLeft: 4}}
              />
            </View>
            <View
              style={{
                width: '100%',
                height: 84,
                overflow: 'hidden',
                borderBottomRightRadius: 7,
                borderBottomLeftRadius: 7,
              }}>
              {' '}
              {/* Set a specific height for the image container */}
              <Image
                source={require('../../assets/house3.jpg')}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover', // Ensures the image fits within the container
                  //   marginTop: -8,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FeaturedCollection;
