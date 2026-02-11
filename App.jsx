/* // KaamSathi.jsx - Main Application with React Navigation
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const { width } = Dimensions.get('window');
const Stack = createNativeStackNavigator();

// Main App Component with Navigation
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F7FA" />
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4A90E2',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="GetStarted" 
          component={GetStartedScreen}
          options={{ title: "Let's Get Started" }}
        />
        <Stack.Screen 
          name="AboutWork" 
          component={AboutWorkScreen}
          options={{ title: 'About Your Work' }}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="HereJob" 
          component={HereJobScreen}
          options={{ title: 'Available Jobs' }}
        />
        <Stack.Screen 
          name="RateJob" 
          component={RateJobScreen}
          options={{ title: 'Rate the Job' }}
        />
        <Stack.Screen 
          name="ActiveJobs" 
          component={ActiveJobsScreen}
          options={{ title: 'My Active Jobs' }}
        />
        <Stack.Screen 
          name="JobDetail" 
          component={JobDetailScreen}
          options={{ title: 'Job Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Welcome Screen
const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenContainer}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoIcon}>🔨</Text>
            <Text style={styles.logoText}>KaamSathi</Text>
          </View>
          <TouchableOpacity style={styles.languageBtn}>
            <Text style={styles.languageText}>🌐 ▼</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contentCenter}>
          <Text style={styles.mainTitle}>Find trusted local workers or jobs near you</Text>
          <Text style={styles.locationIcon}>📍</Text>
          
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Aadhaar</Text>
            <Text style={styles.infoValue}>⭐12, 11,658+</Text>
          </View>
        </View>

        <View style={styles.bottomSection}>
          <TouchableOpacity 
            style={styles.primaryButton}
            onPress={() => navigation.navigate('GetStarted')}
          >
            <Text style={styles.primaryButtonText}>Send OTP</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('GetStarted')}>
            <Text style={styles.linkText}>Why Aadhaar? 🛈</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// Get Started Screen
const GetStartedScreen = ({ navigation }) => {
  const [userData, setUserData] = useState({
    age: '',
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenContainer}>
        <Text style={styles.screenTitle}>Let's get started</Text>
        <Text style={styles.screenSubtitle}>Fill in your details</Text>

        <View style={styles.formContainer}>
          <Text style={styles.inputLabel}>Where do you work from?</Text>
          <TouchableOpacity style={styles.inputButton}>
            <Text style={styles.inputButtonText}>📍 Use current location</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inputButtonOutline}>
            <Text style={styles.inputButtonOutlineText}>📍 Select your area</Text>
          </TouchableOpacity>

          <Text style={[styles.inputLabel, { marginTop: 20 }]}>How old are you?</Text>
          <View style={styles.ageButtonContainer}>
            {['18-25', '26-40', '41+'].map((age) => (
              <TouchableOpacity
                key={age}
                style={[
                  styles.ageButton,
                  userData.age === age && styles.ageButtonActive,
                ]}
                onPress={() => setUserData({ ...userData, age })}
              >
                <Text style={[
                  styles.ageButtonText,
                  userData.age === age && styles.ageButtonTextActive,
                ]}>{age}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => navigation.navigate('AboutWork')}
        >
          <Text style={styles.primaryButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// About Work Screen
const AboutWorkScreen = ({ navigation }) => {
  const [userData, setUserData] = useState({
    workType: '',
    experience: '',
  });

  const workTypes = [
    { id: 'construction', label: 'Construction', icon: '🏗️', color: '#FF8A65' },
    { id: 'plumbing', label: 'Plumbing', icon: '🔧', color: '#9575CD' },
    { id: 'electrical', label: 'Electrical', icon: '⚡', color: '#4DB6AC' },
    { id: 'painting', label: 'Painting', icon: '🎨', color: '#FFB74D' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenContainer}>
        <Text style={styles.screenTitle}>About your work</Text>
        <Text style={styles.screenSubtitle}>Tell us more</Text>

        <Text style={styles.inputLabel}>What kind of work do you do?</Text>
        <View style={styles.workTypeGrid}>
          {workTypes.map((work) => (
            <TouchableOpacity
              key={work.id}
              style={[
                styles.workTypeCard,
                { backgroundColor: work.color },
                userData.workType === work.id && styles.workTypeCardActive,
              ]}
              onPress={() => setUserData({ ...userData, workType: work.id })}
            >
              <Text style={styles.workTypeIcon}>{work.icon}</Text>
              <Text style={styles.workTypeLabel}>{work.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={[styles.inputLabel, { marginTop: 20 }]}>Your experience</Text>
        <View style={styles.ageButtonContainer}>
          {['New (0-1 yr)', '1-3 yrs', '3+ yrs'].map((exp) => (
            <TouchableOpacity
              key={exp}
              style={[
                styles.ageButton,
                userData.experience === exp && styles.ageButtonActive,
              ]}
              onPress={() => setUserData({ ...userData, experience: exp })}
            >
              <Text style={[
                styles.ageButtonText,
                userData.experience === exp && styles.ageButtonTextActive,
              ]}>{exp}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.bottomButtonRow}>
          <TouchableOpacity 
            style={styles.skipButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.skipButtonText}>Skip for now</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.finishButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.finishButtonText}>Finish</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// Login Screen
const LoginScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenContainer}>
        <Text style={styles.screenTitle}>Login</Text>
        
        <View style={styles.locationDisplay}>
          <Text style={styles.locationIcon}>📍</Text>
          <Text style={styles.locationText}>Bandra East, Mumbai</Text>
        </View>

        <View style={styles.otpContainer}>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <TextInput
              key={num}
              style={styles.otpInput}
              maxLength={1}
              keyboardType="number-pad"
            />
          ))}
          <TouchableOpacity style={styles.otpCheckButton}>
            <Text style={styles.otpCheckText}>✓</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.otpHelperText}>Resend OTP in 00:42</Text>

        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.primaryButtonText}>Verify OTP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Home Screen
const HomeScreen = ({ navigation }) => {
  const jobs = [
    { id: '1', title: 'Painter', location: 'at Borivli', payment: '₹2700', duration: '12 hrs', skills: 'Skill: Woodconstruction', status: 'Accept' },
    { id: '2', title: 'Jaldi: Woodconstruction', location: 'at Andheri', payment: '₹2700', duration: '12 hrs', status: 'Accept' },
    { id: '3', title: 'Mukul West: Plastic city', location: 'at Mumbai', payment: '₹3000', duration: '8 hrs', status: 'Accept' },
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
          <TouchableOpacity style={styles.tab}>
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
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.jobCard}>
              <View style={styles.jobCardLeft}>
                <Text style={styles.jobTitle}>{item.title}</Text>
                {item.location && <Text style={styles.jobLocation}>{item.location}</Text>}
                {item.skills && <Text style={styles.jobSkills}>{item.skills}</Text>}
                {item.payment && <Text style={styles.jobPayment}>{item.payment}</Text>}
                {item.duration && <Text style={styles.jobDuration}>{item.duration}</Text>}
              </View>
              {item.status && (
                <TouchableOpacity 
                  style={styles.acceptButton}
                  onPress={() => navigation.navigate('HereJob')}
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

// Here Job Screen
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

// Rate Job Screen
const RateJobScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenContainer}>
        <Text style={styles.screenTitle}>Rate the job</Text>
        <Text style={styles.jobLocation}>🔥 Andheri West, Mumbai</Text>

        <View style={styles.ratingContainer}>
          <View style={styles.ratingItem}>
            <View style={[styles.ratingCircle, styles.ratingCircleActive]} />
            <Text style={styles.ratingLabel}>Accepted</Text>
          </View>
          <View style={styles.ratingLine} />
          <View style={styles.ratingItem}>
            <View style={[styles.ratingCircle, styles.ratingCircleActive]} />
            <Text style={styles.ratingLabel}>In progress</Text>
          </View>
          <View style={styles.ratingLine} />
          <View style={styles.ratingItem}>
            <View style={styles.ratingCircle} />
            <Text style={styles.ratingLabel}>Completed</Text>
          </View>
        </View>

        <Text style={[styles.inputLabel, { marginTop: 30 }]}>Your experience</Text>
        <View style={styles.ageButtonContainer}>
          {['New (0-1 yr)', '1-3 yrs', '3+ yrs'].map((exp) => (
            <TouchableOpacity key={exp} style={styles.ageButton}>
              <Text style={styles.ageButtonText}>{exp}</Text>
            </TouchableOpacity>
          ))}
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
      </View>
    </SafeAreaView>
  );
};

// Active Jobs Screen
const ActiveJobsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.screenContainer}>
        <View style={styles.tabRow}>
          <TouchableOpacity style={styles.tabItemActive}>
            <Text style={styles.tabItemActiveText}>My Jobs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Text style={styles.tabItemText}>Searches</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Active Job</Text>
        <Text style={styles.subTitle}>Currently ongoing</Text>

        <TouchableOpacity 
          style={styles.activeJobCard}
          onPress={() => navigation.navigate('JobDetail')}
        >
          <View style={styles.activeJobHeader}>
            <Text style={styles.activeJobTitle}>Painter</Text>
            <Text style={styles.activeJobStatus}>🕐 Ongoing</Text>
          </View>
          <Text style={styles.activeJobLocation}>at Vasarae</Text>
          <View style={styles.activeJobDetails}>
            <Text>🏢 Workshop</Text>
            <Text>👤 Client: C3 Construction</Text>
            <Text>⏱️ Started: 2 hours ago</Text>
          </View>
          <Text style={styles.activeJobPayment}>₹5000/7hrs</Text>
        </TouchableOpacity>

        <View style={styles.illustrationContainer}>
          <Text style={styles.illustrationIcon}>👷‍♂️</Text>
          <Text style={styles.illustrationIcon}>👷</Text>
        </View>

        <Text style={styles.sectionTitle}>Active Jobs</Text>

        <TouchableOpacity style={styles.activeJobCard}>
          <View style={styles.activeJobHeader}>
            <Text style={styles.activeJobTitle}>Painter</Text>
            <Text style={styles.activeJobStatus}>🕐 Scheduled</Text>
          </View>
          <Text style={styles.activeJobLocation}>at Chembur</Text>
          <View style={styles.activeJobDetails}>
            <Text>🏢 Residential</Text>
            <Text>⏱️ Starts: 30th Oct</Text>
          </View>
          <Text style={styles.activeJobPayment}>₹3500/5hrs</Text>
          <View style={styles.jobCardFooter}>
            <Text>⏰ Time Flexible</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.linkButtonText}>Continue similarly →</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

// Job Detail Screen
const JobDetailScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.screenContainer}>
        <Text style={styles.screenTitle}>Mason at Andheri West</Text>
        <Text style={styles.subTitle}>⭐ 4.8 | ₹ 8,500</Text>

        <View style={styles.detailCard}>
          <Text style={styles.detailLabel}>📍 Mumbai - Andheri West</Text>
          <Text style={styles.detailLabel}>👤 Construction Project</Text>
          <View style={styles.ratingStars}>
            <Text>⭐⭐⭐⭐⭐</Text>
          </View>
        </View>

        <View style={styles.workerCard}>
          <View style={styles.workerAvatar}>
            <Text style={styles.avatarText}>👷</Text>
          </View>
          <View style={styles.workerInfo}>
            <Text style={styles.workerName}>Work Site: Building A</Text>
            <Text style={styles.workerRole}>At: Construction Site</Text>
            <Text style={styles.workerExp}>📋 27 Jul - Duration: 9-6</Text>
          </View>
          <View style={styles.ratingBadge}>
            <Text>⭐ 4.5</Text>
          </View>
        </View>

        <View style={styles.detailCard}>
          <Text style={styles.detailLabel}>Available Workers</Text>
          <TouchableOpacity style={styles.shortlistButton}>
            <Text style={styles.shortlistButtonText}>📋 Shortlist</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.workerCard}>
          <View style={styles.workerAvatar}>
            <Text style={styles.avatarText}>👷</Text>
          </View>
          <View style={styles.workerInfo}>
            <Text style={styles.workerName}>Aukshan</Text>
            <Text style={styles.workerRole}>Python, Masonry Expert</Text>
            <Text style={styles.workerExp}>📋 Experience: 5+ years</Text>
          </View>
          <View style={styles.ratingBadge}>
            <Text>⭐ 4.8</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoIcon: {
    fontSize: 24,
    marginRight: 8,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  languageBtn: {
    padding: 8,
  },
  languageText: {
    fontSize: 16,
  },
  contentCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  locationIcon: {
    fontSize: 60,
    marginVertical: 20,
  },
  infoBox: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
    minWidth: 200,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoLabel: {
    color: '#7F8C8D',
    fontSize: 14,
  },
  infoValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginTop: 5,
  },
  bottomSection: {
    paddingBottom: 20,
  },
  primaryButton: {
    backgroundColor: '#4A90E2',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  primaryButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#4A90E2',
    textAlign: 'center',
    fontSize: 14,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 5,
  },
  screenSubtitle: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 30,
  },
  formContainer: {
    flex: 1,
  },
  inputLabel: {
    fontSize: 16,
    color: '#2C3E50',
    marginBottom: 10,
    fontWeight: '600',
  },
  inputButton: {
    backgroundColor: '#4A90E2',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
  },
  inputButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  inputButtonOutline: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  inputButtonOutlineText: {
    color: '#2C3E50',
    fontSize: 16,
  },
  ageButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  ageButton: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 12,
    marginHorizontal: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  ageButtonActive: {
    backgroundColor: '#4A90E2',
    borderColor: '#4A90E2',
  },
  ageButtonText: {
    color: '#2C3E50',
    fontSize: 14,
  },
  ageButtonTextActive: {
    color: '#FFF',
  },
  workTypeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  workTypeCard: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  workTypeCardActive: {
    borderWidth: 3,
    borderColor: '#2C3E50',
  },
  workTypeIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  workTypeLabel: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  skipButton: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#FFF',
    marginRight: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  skipButtonText: {
    color: '#7F8C8D',
    fontSize: 16,
  },
  finishButton: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#5CB85C',
    alignItems: 'center',
  },
  finishButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  locationDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 30,
  },
  locationText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#2C3E50',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  otpInput: {
    width: 45,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 12,
    textAlign: 'center',
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  otpCheckButton: {
    width: 50,
    height: 50,
    backgroundColor: '#5CB85C',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpCheckText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  otpHelperText: {
    textAlign: 'center',
    color: '#7F8C8D',
    fontSize: 14,
    marginBottom: 30,
  },
  homeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  subGreeting: {
    fontSize: 14,
    color: '#7F8C8D',
    marginTop: 5,
  },
  menuIcon: {
    fontSize: 28,
    color: '#2C3E50',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  searchInput: {
    flex: 1,
    padding: 12,
    fontSize: 16,
  },
  searchIcon: {
    fontSize: 20,
    color: '#4A90E2',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
  },
  tab: {
    alignItems: 'center',
    padding: 10,
  },
  tabIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  tabText: {
    fontSize: 12,
    color: '#2C3E50',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 15,
    marginTop: 10,
  },
  subTitle: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 15,
  },
  jobCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  jobCardLeft: {
    flex: 1,
  },
  jobCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  jobBadge: {
    backgroundColor: '#FFE5E5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  jobBadgeText: {
    color: '#FF6B6B',
    fontSize: 12,
    fontWeight: 'bold',
  },
  jobLocation: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 5,
  },
  jobSkills: {
    fontSize: 13,
    color: '#7F8C8D',
    marginBottom: 3,
  },
  jobPayment: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5CB85C',
    marginTop: 5,
  },
  jobDuration: {
    fontSize: 13,
    color: '#7F8C8D',
    marginTop: 3,
  },
  jobCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  jobTiming: {
    fontSize: 13,
    color: '#7F8C8D',
  },
  acceptButton: {
    backgroundColor: '#5CB85C',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  acceptButtonSmall: {
    backgroundColor: '#5CB85C',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
  },
  acceptButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  statusBadge: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 15,
  },
  statusText: {
    color: '#2C3E50',
    fontWeight: 'bold',
  },
  mapPlaceholder: {
    backgroundColor: '#E8F4F8',
    height: 150,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row',
  },
  mapIcon: {
    fontSize: 40,
    marginHorizontal: 20,
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: '#4A90E2',
    width: 24,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  ratingItem: {
    alignItems: 'center',
  },
  ratingCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    marginBottom: 8,
  },
  ratingCircleActive: {
    backgroundColor: '#5CB85C',
  },
  ratingLabel: {
    fontSize: 12,
    color: '#7F8C8D',
    textAlign: 'center',
  },
  ratingLine: {
    flex: 1,
    height: 2,
    backgroundColor: '#E0E0E0',
    marginHorizontal: -10,
  },
  tabRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tabItem: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginHorizontal: 5,
    borderRadius: 8,
  },
  tabItemActive: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#4A90E2',
    marginHorizontal: 5,
    borderRadius: 8,
  },
  tabItemText: {
    color: '#7F8C8D',
    fontSize: 14,
  },
  tabItemActiveText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  activeJobCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  activeJobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  activeJobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  activeJobStatus: {
    fontSize: 14,
    color: '#FF9800',
  },
  activeJobLocation: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 10,
  },
  activeJobDetails: {
    marginBottom: 10,
  },
  activeJobPayment: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5CB85C',
  },
  illustrationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  illustrationIcon: {
    fontSize: 60,
    marginHorizontal: 20,
  },
  linkButton: {
    alignItems: 'center',
    padding: 15,
  },
  linkButtonText: {
    color: '#4A90E2',
    fontSize: 14,
  },
  detailCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  detailLabel: {
    fontSize: 14,
    color: '#2C3E50',
    marginBottom: 8,
  },
  ratingStars: {
    marginTop: 5,
  },
  workerCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  workerAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E8F4F8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    fontSize: 24,
  },
  workerInfo: {
    flex: 1,
  },
  workerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 3,
  },
  workerRole: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 3,
  },
  workerExp: {
    fontSize: 13,
    color: '#7F8C8D',
  },
  ratingBadge: {
    backgroundColor: '#FFF9E6',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  shortlistButton: {
    backgroundColor: '#4A90E2',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  shortlistButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default App; */


// App.js - Root Entry Point
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return <AppNavigator />;
};

export default App;
