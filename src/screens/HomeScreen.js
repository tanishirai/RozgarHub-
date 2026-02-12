// src/screens/HomeScreen.js
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from '../styles/commonStyles';

const HomeScreen = ({ navigation }) => {
  const jobs = [
    {
      id: '1',
      title: 'Painter',
      location: 'at Borivli',
      payment: '₹2700',
      duration: '12 hrs',
      skills: 'Skill: Woodconstruction',
      status: 'Accept',
    },
    {
      id: '2',
      title: 'Jaldi: Woodconstruction',
      location: 'at Andheri',
      payment: '₹2700',
      duration: '12 hrs',
      status: 'Accept',
    },
    {
      id: '3',
      title: 'Mukul West: Plastic city',
      location: 'at Mumbai',
      payment: '₹3000',
      duration: '8 hrs',
      status: 'Accept',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.screenContainer}>
        <View style={styles.homeHeader}>
          <View>
            <Text style={styles.greeting}>Hello, Ali!</Text>
            <Text style={styles.subGreeting}>🌟 Bandra East, Mumbai</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.menuIcon}>☰</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="🔍 Search jobs..."
            placeholderTextColor="#999"
          />
          <Text style={styles.searchIcon}>→</Text>
        </View>

        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => navigation.navigate('HereJob')}
          >
            <Text style={styles.tabIcon}>👤</Text>
            <Text style={styles.tabText}>Find Work</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabIcon}>📋</Text>
            <Text style={styles.tabText}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabIcon}>👷</Text>
            <Text style={styles.tabText}>Workers</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Today's Jobs</Text>

        <FlatList
          data={jobs}
          scrollEnabled={false}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.jobCard}>
              <View style={styles.jobCardLeft}>
                <Text style={styles.jobTitle}>{item.title}</Text>
                {item.location && (
                  <Text style={styles.jobLocation}>{item.location}</Text>
                )}
                {item.skills && (
                  <Text style={styles.jobSkills}>{item.skills}</Text>
                )}
                {item.payment && (
                  <Text style={styles.jobPayment}>{item.payment}</Text>
                )}
                {item.duration && (
                  <Text style={styles.jobDuration}>{item.duration}</Text>
                )}
              </View>
              {item.status && (
                <TouchableOpacity
                  style={styles.acceptButton}
                  onPress={() => navigation.navigate('ActiveJobs')}
                >
                  <Text style={styles.acceptButtonText}>{item.status}</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
