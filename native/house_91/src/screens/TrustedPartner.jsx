import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

const TrustedPartner = () => {
  const details = [
    {
      id: 1,
      title: 'Access High-Quality Leads',
      subTitle:
        'Connect with property seekers and property sellers in your area.',
    },
    {
      id: 2,
      title: 'List and Promote Your Projects',
      subTitle:
        'Showcase your projects to a wide audience looking to buy or invest.',
    },
    {
      id: 3,
      title: 'Enhanced Brand Visibility',
      subTitle:
        'Stand out with a dedicated profile that highlights your experience and projects.',
    },
    {
      id: 4,
      title: 'Easy-to-Use Interface',
      subTitle:
        'Our platform is designed with simplicity in mind, making it easy to list     properties, connect with leads, and manage interactions all in one place.',
    },
    {
      id: 5,
      title: 'Choose Localized Opportunities',
      subTitle:
        'Filter and find listings within your service area, allowing you to focus on properties that align with your strengths and expertise.',
    },
    {
      id: 6,
      title: 'Flexibility and Control',
      subTitle:
        'Take charge of your listings and choose when and where you want to showcase your properties.',
    },
    {
      id: 7,
      title: 'Support and Resources',
      subTitle:
        'House 91 provides channel partners with tools, resources, and insights to enhance their sales strategies and improve client experiences.',
    },
    {
      id: 8,
      title: 'Competitive Advantage',
      subTitle:
        'Stand out in your local market by being part of a trusted platform that connects motivated buyers and sellers directly to you.',
    },
  ];
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <AntDesign name="arrowleft" size={22} style={{padding: 15}} />
      <ScrollView contentContainerStyle={{flexGrow: 1}} bounces={true}>
        <Animatable.View
          animation="fadeInDown"
          duration={1000}
          style={{paddingHorizontal: 20, paddingVertical: 5}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              fontWeight: 700,
            }}>
            House
            <Text style={{fontSize: 12, fontWeight: 700, color: 'green'}}>
              {' '}
              91:{' '}
            </Text>
            Your Trusted Partner in Real Estate
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              fontWeight: 700,
              color: 'green',
            }}>
            Connect, Collaborate, Close
          </Text>
        </Animatable.View>
        <Animatable.View animation="fadeInUp" duration={1000} delay={500}>
          <Text
            style={{
              textAlign: 'center',
              color: '#6B6B6B',
              fontSize: 10,
              lineHeight: 15,
              fontWeight: 600,
              paddingHorizontal: 12,
            }}>
            House 91 is the platform where real estate professionals and
            property owners come together to make property transactions seamless
            and successful. We empower real estate channel partners to access
            high-quality leads, showcase their listings, and close deals faster.
            At House 91, we believe that collaboration drives success, and we
            are committed to providing an easy-to-use platform that helps you
            grow your real estate business.
          </Text>
        </Animatable.View>
        <Animatable.View
          animation="zoomIn"
          duration={1000}
          delay={700}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              fontWeight: 700,
            }}>
            Why Join House 91 as a Channel Partner?
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: '#6B6B6B',
              fontSize: 10,
              lineHeight: 15,
              fontWeight: 600,
              paddingHorizontal: 12,
              marginTop: 5,
            }}>
            Becoming a channel partner with House 91 opens up numerous
            opportunities for growth and success in the competitive real estate
            market. Here are some key benefits:
          </Text>
        </Animatable.View>
        <Animatable.View
          animation="zoomIn"
          duration={1000}
          delay={700}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '80%',
              borderRadius: 20,
              marginTop: 10,
            }}>
            <Image
              source={require('../../assets/trust.jpg')}
              style={{width: '100%', borderRadius: 20}}
            />
          </View>
        </Animatable.View>
        <View style={{marginHorizontal: 20, marginTop: 20}}>
          {details.map(item => (
            <Animatable.View
              key={item.id}
              animation="slideInLeft"
              duration={1000}
              delay={item.id * 200} // Stagger animations for each item
              style={{marginBottom: 10}}>
              <Text style={{fontSize: 12, fontWeight: '500'}}>
                <Text style={{color: 'green', fontSize: 12}}>{item.id}. </Text>
                {item.title}
              </Text>
              <Text style={{fontSize: 10, marginLeft: 10}}>
                {item.subTitle}
              </Text>
            </Animatable.View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TrustedPartner;
