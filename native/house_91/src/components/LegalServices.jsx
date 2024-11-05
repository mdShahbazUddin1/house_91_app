import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ArrowRight from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const legalServicesData = [
  {
    id: 1,
    icon: (
      <MaterialCommunityIcons
        name="content-save-edit-outline"
        size={30}
        color="green"
      />
    ),
    title: 'Rental',
    subtitle: 'Agreement',
  },
  {
    id: 2,
    icon: (
      <MaterialCommunityIcons name="home-outline" size={30} color="green" />
    ),
    title: 'Tenant',
    subtitle: 'Verification',
  },
  {
    id: 3,
    icon: <ArrowRight name="receipt-long" size={30} color="green" />,
    title: 'Sale',
    subtitle: 'Agreement',
  },
  {
    id: 4,
    icon: <FontAwesome name="balance-scale" size={30} color="green" />,
    title: 'Property Legal',
    subtitle: 'Services',
  },
];

const LegalServices = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <ArrowRight name="gavel" size={20} color="green" />
        <Text style={styles.headerText}>Legal Services</Text>
      </View>

      {/* Cards Section */}
      <View style={styles.cardsContainer}>
        {legalServicesData.map(service => (
          <TouchableOpacity style={{marginTop: 20}}>
            <View key={service.id} style={styles.card}>
              {service.icon}
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.title}>{service.title}</Text>
              <Text style={styles.subtitle}>{service.subtitle}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    // backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 20,
  },
  headerText: {
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 5,
    color: 'black',
  },
  cardsContainer: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    width: 60,
    height: 60,
    backgroundColor: '#DBFFD5',
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
  },

  title: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});

export default LegalServices;
