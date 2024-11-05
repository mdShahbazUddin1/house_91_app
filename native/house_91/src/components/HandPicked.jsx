import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HandPicked = () => {
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
          <MaterialCommunityIcons
            name="office-building"
            size={20}
            color="green"
          />
          <View style={{marginLeft: 5, marginTop: -5}}>
            <Text style={{fontSize: 15, fontWeight: '500'}}>
              Hand Picked Commercial Projects
            </Text>
            <Text style={{fontSize: 8, fontWeight: '500', marginTop: -3}}>
              Includes commercial projects all over India
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
            marginTop: 0,
          }}>
          <View
            style={{
              width: 290,
              height: 300,
              //   backgroundColor: 'gray',
              borderRadius: 10,
              overflow: 'hidden', // Ensure children don't overflow the border radius
              position: 'relative',
              marginRight: 10,
            }}>
            <View
              style={{
                width: 290,
                height: 235,
                justifyContent: 'center', // Center align child elements
                alignItems: 'center', // Center align child elements
                position: 'absolute', // Position absolute for overlay effect
                zIndex: 1, // Ensure this is below the overlay
                borderRadius: 10,
              }}>
              {/* Here, you can display your image */}
              <Image
                source={require('../../assets/building1.jpg')} // Replace with your image path
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  borderRadius: 10,
                }}
                resizeMode="cover"
              />
            </View>
            {/* Overlay component */}
            <View
              style={{
                width: '90%',
                position: 'absolute',
                bottom: 15,
                backgroundColor: 'white',
                // paddingHorizontal: 10,
                borderRadius: 10,
                paddingVertical: 25,

                left: '22%', // Center the icon container
                transform: [{translateX: -50}], // Adjust for centering

                zIndex: 2, // Ensure overlay is above the image
                alignItems: 'center', // Center align text in overlay
                // Shadow properties for iOS
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3,
                shadowRadius: 4,

                // Shadow property for Android
                elevation: 5,
              }}>
              <View
                style={{
                  position: 'absolute',
                  top: -20,
                  zIndex: 999,
                  left: '50%', // Center the icon container
                  transform: [{translateX: -50}], // Adjust for centering
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    width: 100,
                    height: 30,
                    overflow: 'hidden',
                    borderWidth: 2,
                    borderColor: 'green',
                    borderRadius: 10,
                  }}>
                  <Image
                    source={require('../../assets/house1.png')}
                    style={{
                      resizeMode: 'cover',
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </View>
              </View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 13,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Mana Dale
              </Text>
              <Text
                style={{
                  color: '#7F7E7E',
                  width: '80%',
                  fontSize: 10,
                  fontWeight: '500',
                  textAlign: 'center',
                }}>
                3, 4 BHK Apartment in Sarjapur Road, Bangalore
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 13,
                  fontWeight: '500',
                  textAlign: 'center',
                  marginTop: 5,
                }}>
                ₹ 1.6 - 2.13 Cr
              </Text>
              <TouchableOpacity
                style={{
                  width: '40%',
                  position: 'absolute',
                  bottom: -14,
                  padding: 6,
                  backgroundColor: '#A9C8FF',
                  borderRadius: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: 'transparent',
                  borderWidth: 1,
                }}>
                <Ionicons
                  name="call"
                  size={15}
                  color="#3A5EFF"
                  style={{marginRight: 5}}
                />
                <Text style={{textAlign: 'center'}}>Call Me</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* card 2 */}
          <View
            style={{
              width: 290,
              height: 300,
              //   backgroundColor: 'gray',
              borderRadius: 10,
              overflow: 'hidden', // Ensure children don't overflow the border radius
              position: 'relative',
              marginRight: 10,
            }}>
            <View
              style={{
                width: 290,
                height: 235,
                justifyContent: 'center', // Center align child elements
                alignItems: 'center', // Center align child elements
                position: 'absolute', // Position absolute for overlay effect
                zIndex: 1, // Ensure this is below the overlay
                borderRadius: 10,
              }}>
              {/* Here, you can display your image */}
              <Image
                source={require('../../assets/building1.jpg')} // Replace with your image path
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  borderRadius: 10,
                }}
                resizeMode="cover"
              />
            </View>
            {/* Overlay component */}
            <View
              style={{
                width: '90%',
                position: 'absolute',
                bottom: 15,
                backgroundColor: 'white',
                // paddingHorizontal: 10,
                borderRadius: 10,
                paddingVertical: 25,

                left: '22%', // Center the icon container
                transform: [{translateX: -50}], // Adjust for centering

                zIndex: 2, // Ensure overlay is above the image
                alignItems: 'center', // Center align text in overlay
                // Shadow properties for iOS
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3,
                shadowRadius: 4,

                // Shadow property for Android
                elevation: 5,
              }}>
              <View
                style={{
                  position: 'absolute',
                  top: -20,
                  zIndex: 999,
                  left: '50%', // Center the icon container
                  transform: [{translateX: -50}], // Adjust for centering
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    width: 100,
                    height: 30,
                    overflow: 'hidden',
                    borderWidth: 2,
                    borderColor: 'green',
                    borderRadius: 10,
                  }}>
                  <Image
                    source={require('../../assets/house1.png')}
                    style={{
                      resizeMode: 'cover',
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </View>
              </View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 13,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Mana Dale
              </Text>
              <Text
                style={{
                  color: '#7F7E7E',
                  width: '80%',
                  fontSize: 10,
                  fontWeight: '500',
                  textAlign: 'center',
                }}>
                3, 4 BHK Apartment in Sarjapur Road, Bangalore
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 13,
                  fontWeight: '500',
                  textAlign: 'center',
                  marginTop: 5,
                }}>
                ₹ 1.6 - 2.13 Cr
              </Text>
              <TouchableOpacity
                style={{
                  width: '40%',
                  position: 'absolute',
                  bottom: -14,
                  padding: 6,
                  backgroundColor: '#A9C8FF',
                  borderRadius: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: 'transparent',
                  borderWidth: 1,
                }}>
                <Ionicons
                  name="call"
                  size={15}
                  color="#3A5EFF"
                  style={{marginRight: 5}}
                />
                <Text style={{textAlign: 'center'}}>Call Me</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* card 3  */}
          <View
            style={{
              width: 290,
              height: 300,
              //   backgroundColor: 'gray',
              borderRadius: 10,
              overflow: 'hidden', // Ensure children don't overflow the border radius
              position: 'relative',
              marginRight: 10,
            }}>
            <View
              style={{
                width: 290,
                height: 235,
                justifyContent: 'center', // Center align child elements
                alignItems: 'center', // Center align child elements
                position: 'absolute', // Position absolute for overlay effect
                zIndex: 1, // Ensure this is below the overlay
                borderRadius: 10,
              }}>
              {/* Here, you can display your image */}
              <Image
                source={require('../../assets/building1.jpg')} // Replace with your image path
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  borderRadius: 10,
                }}
                resizeMode="cover"
              />
            </View>
            {/* Overlay component */}
            <View
              style={{
                width: '90%',
                position: 'absolute',
                bottom: 15,
                backgroundColor: 'white',
                // paddingHorizontal: 10,
                borderRadius: 10,
                paddingVertical: 25,

                left: '22%', // Center the icon container
                transform: [{translateX: -50}], // Adjust for centering

                zIndex: 2, // Ensure overlay is above the image
                alignItems: 'center', // Center align text in overlay
                // Shadow properties for iOS
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3,
                shadowRadius: 4,

                // Shadow property for Android
                elevation: 5,
              }}>
              <View
                style={{
                  position: 'absolute',
                  top: -20,
                  zIndex: 999,
                  left: '50%', // Center the icon container
                  transform: [{translateX: -50}], // Adjust for centering
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    width: 100,
                    height: 30,
                    overflow: 'hidden',
                    borderWidth: 2,
                    borderColor: 'green',
                    borderRadius: 10,
                  }}>
                  <Image
                    source={require('../../assets/house1.png')}
                    style={{
                      resizeMode: 'cover',
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </View>
              </View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 13,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Mana Dale
              </Text>
              <Text
                style={{
                  color: '#7F7E7E',
                  width: '80%',
                  fontSize: 10,
                  fontWeight: '500',
                  textAlign: 'center',
                }}>
                3, 4 BHK Apartment in Sarjapur Road, Bangalore
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 13,
                  fontWeight: '500',
                  textAlign: 'center',
                  marginTop: 5,
                }}>
                ₹ 1.6 - 2.13 Cr
              </Text>
              <TouchableOpacity
                style={{
                  width: '40%',
                  position: 'absolute',
                  bottom: -14,
                  padding: 6,
                  backgroundColor: '#A9C8FF',
                  borderRadius: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: 'transparent',
                  borderWidth: 1,
                }}>
                <Ionicons
                  name="call"
                  size={15}
                  color="#3A5EFF"
                  style={{marginRight: 5}}
                />
                <Text style={{textAlign: 'center'}}>Call Me</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HandPicked;
