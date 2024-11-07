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

const ContactUs = () => {
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
          CONTACT - US
        </Text>
      </View>

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{marginTop: 15}}>
          <Text
            style={{
              color: '##787878',
              fontSize: 13,
              fontWeight: 400,
              textAlign: 'center',
            }}>
            Interested in project.? Lets Talk
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 15,
              paddingVertical: 5,
            }}>
            <Ionicons name="call" size={14} color="#128807" />
            <Text style={{color: '#128807', marginTop: -2, marginLeft: 4}}>
              +91 9876554321
            </Text>
          </View>
          <View style={{marginHorizontal: 20}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'start',
                justifyContent: 'space-around',
                paddingHorizontal: 2,
                paddingVertical: 15,
              }}>
              <View>
                <Text style={{color: '#787878', fontSize: 12, fontWeight: 400}}>
                  Headquarters
                </Text>
              </View>
              <View style={{width: '50%'}}>
                <Text style={{fontSize: 10, fontWeight: 400, lineHeight: 15}}>
                  Agrahara, Chandrapur, Mysuru, Karnataka 570004
                </Text>
              </View>
            </View>
            {/* phone */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'start',
                justifyContent: 'space-around',
                paddingHorizontal: 2,
                //   paddingVertical: 15,
              }}>
              <View style={{width: '22%'}}>
                <Text style={{color: '#787878', fontSize: 12, fontWeight: 400}}>
                  Phone
                </Text>
              </View>
              <View style={{width: '50%'}}>
                <Text style={{fontSize: 10, fontWeight: 400, lineHeight: 15}}>
                  +91 44 3334 5566
                </Text>
                <Text style={{fontSize: 10, fontWeight: 400, lineHeight: 15}}>
                  +91 44 3334 6677
                </Text>
              </View>
            </View>
            {/* fax */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'start',
                justifyContent: 'space-around',
                paddingHorizontal: 2,
                marginTop: 10,
              }}>
              <View style={{width: '22%'}}>
                <Text style={{color: '#787878', fontSize: 12, fontWeight: 400}}>
                  Fax
                </Text>
              </View>
              <View style={{width: '50%'}}>
                <Text style={{fontSize: 10, fontWeight: 400, lineHeight: 15}}>
                  +91 44 3334 5566
                </Text>
              </View>
            </View>
            {/* email */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'start',
                justifyContent: 'space-around',
                paddingHorizontal: 2,
                marginTop: 10,
              }}>
              <View style={{width: '22%'}}>
                <Text style={{color: '#787878', fontSize: 12, fontWeight: 400}}>
                  E-mail
                </Text>
              </View>
              <View style={{width: '50%'}}>
                <Text style={{fontSize: 10, fontWeight: 400, lineHeight: 15}}>
                  customercare@House91.com
                </Text>
              </View>
            </View>
            {/* corporate */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'start',
                justifyContent: 'space-around',
                paddingHorizontal: 6,
                marginTop: 10,
              }}>
              <View style={{width: '30%'}}>
                <Text style={{color: '#787878', fontSize: 12, fontWeight: 400}}>
                  Corporate Office
                </Text>
              </View>
              <View style={{width: '53%'}}>
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: 400,
                    lineHeight: 15,
                    color: '#787878',
                  }}>
                  Monday to Saturday
                </Text>
                <Text style={{fontSize: 10, fontWeight: 400, lineHeight: 15}}>
                  9.30 am to 06.30 pm
                </Text>
              </View>
            </View>
            {/* office */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'start',
                justifyContent: 'space-around',
                paddingHorizontal: 6,
                marginTop: 10,
              }}>
              <View style={{width: '30%'}}>
                <Text style={{color: '#787878', fontSize: 12, fontWeight: 400}}>
                  Site office
                </Text>
              </View>
              <View style={{width: '53%'}}>
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: 400,
                    lineHeight: 15,
                    color: '#787878',
                  }}>
                  All days
                </Text>
                <Text style={{fontSize: 10, fontWeight: 400, lineHeight: 15}}>
                  10.00 am to 07.00 pm
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* What we can help you with */}
        <View style={{marginTop: 20, paddingHorizontal: 20}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 13,
              color: '#787878',
              fontWeight: 400,
            }}>
            What we can help you with
          </Text>
          <View style={{marginTop: 20, paddingVertical: 10}}>
            <Text style={{fontSize: 15, fontWeight: 400, color: '#787878'}}>
              Enquiry
            </Text>
            <TextInput
              placeholder="Enter your enquiry"
              placeholderTextColor={'#787878'}
              style={{
                borderColor: '#787878',
                borderWidth: 1,
                marginTop: 10,
                borderRadius: 10,
                height: 97,
                paddingLeft: 10, // Adds gap from the left
                textAlignVertical: 'top',
              }}
            />
            <TextInput
              placeholder="Name"
              placeholderTextColor={'#787878'}
              style={styles.TextInput}
            />
            <TextInput
              placeholder="Mobile No"
              placeholderTextColor={'#787878'}
              style={styles.TextInput}
            />
            <TextInput
              placeholder="E-mail Id"
              placeholderTextColor={'#787878'}
              style={styles.TextInput}
            />
            <TouchableOpacity style={styles.btn}>
              <Text style={{textAlign: 'center'}}>Send Enquiry</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  TextInput: {
    borderColor: '#787878',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingLeft: 10, // Adds gap from the left
    textAlignVertical: 'top',
  },
  btn: {
    borderColor: 'green',
    borderWidth: 2,
    marginTop: 20,
    width: '50%',
    margin: 'auto',
    paddingVertical: 10,
    borderRadius: 20,
  },
});
