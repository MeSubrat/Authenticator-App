import LeftArrow from '@/assets/images/leftArrow.svg';
import Notification from '@/assets/images/notification.svg';
import Setting from '@/assets/images/settings.svg';
import { COLORS } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

//Toggle button
const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggleSwitch = () => {
    const toValue = isOn ? 0 : 1;
    Animated.timing(animation, {
      toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
    setIsOn(!isOn);
  };

  // Interpolating animated values for position and background color
  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 24],
  });

  const backgroundColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#cfcfcfff', '#1E3A8A'],
  });

  return (

    <TouchableOpacity onPress={toggleSwitch} activeOpacity={0.8}>
      <Animated.View style={[styles.toggleContainer, { backgroundColor }]}>
        <Animated.View style={[styles.circle, { transform: [{ translateX }] }]} />
      </Animated.View>
    </TouchableOpacity>
  );
}

export default function SettingsScreen() {
  const [appUpdates, setAppUpdates] = useState(true);
  const [usageData, setUsageData] = useState(true);
  const router = useRouter();

  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => router.push('/(onboarding)/homescreen')}
          style={{
            position: 'absolute',
            left: 15,
            top: 50
          }}>
          <LeftArrow />
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={{
            color: 'white',
            fontSize: 18,
            fontWeight: 600
          }}>Settings</Text>
        </View>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        {/* Notifications Section */}
        <Text style={styles.sectionHeader}>Notifications</Text>

        {/* Notifications Settings */}
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.iconContainer}>
            <Text><Setting width={24} height={24} /></Text>
          </View>
          <View style={styles.settingContent}>
            <Text style={styles.settingTitle}>Notifications Settings</Text>
            <Text style={styles.settingDescription}>
              Click here to update notification sound and vibrate settings.
            </Text>
          </View>
        </TouchableOpacity>

        {/* App Updates */}
        <View style={styles.settingItemWithSwitch}>
          <View style={styles.iconContainer}>
            <Text style={styles.bellIcon}><Notification width={24} height={24} /></Text>
          </View>
          <View style={styles.settingContent}>
            <Text style={styles.settingTitle}>App updates</Text>
            <Text style={styles.settingDescription}>
              Keeps you informed about new features. You'll continue to receive two-factor and login notifications even if this is turned off.
            </Text>
          </View>
          {/* <Switch
            value={appUpdates}
            onValueChange={setAppUpdates}
            trackColor={{ false: '#d1d5db', true: '#3b82f6' }}
            thumbColor="#ffffff"
            ios_backgroundColor="#d1d5db"
            /> */}
          <View style={styles.toogleBtn}>
            <ToggleButton />
          </View>
        </View>

        {/* Logs Section */}
        <Text style={styles.sectionHeader}>Logs</Text>

        {/* Usage Data */}
        <View style={styles.settingItemWithSwitch}>
          <View style={styles.settingContentFull}>
            <Text style={styles.settingTitle}>Usage data</Text>
            <Text style={styles.settingDescription}>
              Allow AIKA to gather non personally identifiable usage data to improve the app. Learn more in the FAQs available under the Help menu.
            </Text>
          </View>
          {/* <Switch
            value={usageData}
            onValueChange={setUsageData}
            trackColor={{ false: '#d1d5db', true: '#3b82f6' }}
            thumbColor="#ffffff"
            ios_backgroundColor="#d1d5db"
            /> */}
          <View style={styles.toogleBtn}>
            <ToggleButton />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  headerContainer: {
    backgroundColor: COLORS.primary,
    width: '100%',
    height: 88,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15
  },
  headerSpacer: {
    width: 40,
  },
  content: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E3A8A',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 12,
  },
  settingItem: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  settingItemWithSwitch: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  iconContainer: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  settingsIcon: {
    width: 24,
    height: 24
  },
  bellIcon: {
    fontSize: 20,
  },
  settingContent: {
    flex: 1,
    marginRight: 12,
  },
  settingContentFull: {
    flex: 1,
    marginRight: 12,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 13,
    color: '#6b7280',
    lineHeight: 18,
  },
  toggleContainer: {
    width: 52,
    height: 28,
    borderRadius: 20,
    justifyContent: 'center',
    padding: 2,
  }, circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    elevation: 3,
  },
  toogleBtn: {
    paddingVertical: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});