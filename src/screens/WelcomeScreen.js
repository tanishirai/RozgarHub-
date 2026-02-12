// src/screens/WelcomeScreen.js
import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/commonStyles';

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenContainer}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoIcon}>🔨</Text>
            <Text style={styles.logoText}>RozgarHub</Text>
          </View>
          <TouchableOpacity style={styles.languageBtn}>
            <Text style={styles.languageText}>🌐 ▼</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contentCenter}>
          <Text style={styles.mainTitle}>Find trusted local workers or jobs near you</Text>
          <Text style={styles.locationIcon}>📍</Text>
          
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Mobile Number</Text>
            <Text style={styles.infoValue}>⭐12, 11,658+</Text>
          </View>
        </View>

        <View style={styles.bottomSection}>
          <TouchableOpacity 
            style={styles.primaryButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.primaryButtonText}>Send OTP</Text>
          </TouchableOpacity>
          <TouchableOpacity >
          {/* // onPress={() => navigation.navigate('GetStarted')} */}
            <Text style={styles.linkText}> Why Mobile Number?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;