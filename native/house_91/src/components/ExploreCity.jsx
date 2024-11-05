import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const ExploreCity = () => {
  const cities = [
    {
      images: require('../../assets/indiagate.png'),
      cityName: 'Delhi/NCR',
    },
    {
      images: require('../../assets/Mumbai.jpg'),
      cityName: 'Mumbai',
    },
    {
      images: require('../../assets/banglore.jpg'),
      cityName: 'Banglore',
    },
    {
      images: require('../../assets/hydrabad.jpg'),
      cityName: 'Hydrabad',
    },
    {
      images: require('../../assets/pune.jpg'),
      cityName: 'Pune',
    },
  ];

  // Function to handle city click
  const handleCityPress = cityName => {
    console.log(`${cityName} clicked`); // Replace with navigation or any other action
    // For navigation: navigation.navigate('CityDetails', { cityName });
  };

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
          <FontAwesome6 name="building-wheat" size={20} color="green" />
          <View style={{marginLeft: 7, marginTop: -4}}>
            <Text style={{fontSize: 15, fontWeight: '500'}}>
              Explore Popular Cities
            </Text>
            <Text style={{fontSize: 8, fontWeight: '500', marginTop: -3}}>
              Buy or Sell Properties in Top Cities
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
          {cities.map((city, index) => (
            <TouchableOpacity
              key={index}
              style={{marginRight: 15}} // Add spacing between city cards
              onPress={() => handleCityPress(city.cityName)} // Handle city press
            >
              <View
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 50,
                }}>
                <Image
                  source={city.images} // Use city.images from the object
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                    borderRadius: 50,
                  }}
                />
              </View>
              <Text style={{textAlign: 'center'}}>{city.cityName}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ExploreCity;
