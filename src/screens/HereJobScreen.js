// src/screens/HereJobScreen.js
import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/commonStyles';

const HereJobScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.screenContainer}>
        <Text style={styles.screenTitle}>Here Job</Text>
        <Text style={styles.jobLocation}>🔥 Andheri West, Mumbai</Text>

        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>⭐ Integrated</Text>
        </View>

        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapIcon}>📍</Text>
          <Text style={styles.mapIcon}>📍</Text>
        </View>

        <Text style={styles.sectionTitle}>Recommended Jobs</Text>

        <View style={styles.jobCard}>
          <View style={styles.jobCardHeader}>
            <Text style={styles.jobTitle}>Mason</Text>
            <View style={styles.jobBadge}>
              <Text style={styles.jobBadgeText}>New</Text>
            </View>
          </View>
          <Text style={styles.jobLocation}>at Andheri West</Text>
          <Text style={styles.jobSkills}>Skills: New Cement Wood</Text>
          <Text style={styles.jobSkills}>Subtype: Construction</Text>
          <Text style={styles.jobPayment}>₹600/day</Text>
          <View style={styles.jobCardFooter}>
            <Text style={styles.jobTiming}>🕐 Full Day</Text>
            <TouchableOpacity 
              style={styles.acceptButtonSmall}
              onPress={() => navigation.navigate('ActiveJobs')}
            >
              <Text style={styles.acceptButtonText}>Accept</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.jobCard}>
          <Text style={styles.jobTitle}>Electrician</Text>
          <Text style={styles.jobLocation}>at Bandra</Text>
          <Text style={styles.jobPayment}>₹700</Text>
          <View style={styles.jobCardFooter}>
            <Text>🕒 Project Manager</Text>
            <Text>9hrs</Text>
          </View>
        </View>

        <View style={styles.paginationDots}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HereJobScreen;
