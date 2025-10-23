import Bag from '@/assets/images/basil_bag-outline.svg';
import Key from '@/assets/images/key.svg';
import LeftArrow from '@/assets/images/leftArrow.svg';
import Settings from '@/assets/images/setting.svg';
import Vector from '@/assets/images/Vector.svg';
import { COLORS } from '@/constants/Colors';
import { router } from 'expo-router';
import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerButton}>
                    <TouchableOpacity 
                        onPress={() => router.push('/(onboarding)/homescreen')}
                    >
                        <LeftArrow/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => router.push('/(onboarding)/homeScreenProfileSettings')}
                    >
                        <Settings/>
                    </TouchableOpacity>
                </View>

            </View>

            {/* Profile Section */}
            <View style={styles.profileSection}>
                <View style={styles.profileContainer}>
                    <View style={styles.avatarContainer}>
                        <View style={styles.avatar}>
                            <Text style={styles.avatarIcon}>
                                <Bag width='34' />
                            </Text>
                        </View>
                    </View>
                    <View style={styles.profileInfo}>
                        <Text style={styles.profileName}>Angodigitaltech</Text>
                        <Text style={styles.profileEmail}>riya@angodigitaltech.com</Text>
                    </View>
                </View>
            </View>

            {/* Content */}
            <ScrollView style={styles.content}>
                {/* Ways to sign in section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Ways to sign in or verify</Text>

                    <View style={styles.infoCard}>
                        <View style={styles.keyIconContainer}>
                            <Key/>
                        </View>
                        <View style={styles.infoContent}>
                            <Text style={styles.infoTitle}>Connected account</Text>
                            <Text style={styles.infoDescription}>
                                This account is used to sign in to other apps on this device
                            </Text>
                        </View>
                    </View>

                    {/* Support Section */}
                    <Text style={styles.sectionTitle}>Support</Text>

                    <TouchableOpacity style={styles.contactButton}>
                        <View style={styles.contactLeft}>
                            <Text style={styles.contactText}>Contact Us</Text>
                        </View>
                        <Text style={styles.chevronIcon}><Vector/></Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffffff',
    },
    statusBar: {
        backgroundColor: '#5046e5',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 8,
    },
    statusTime: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '600',
    },
    statusIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    signalBars: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 2,
    },
    header: {
        backgroundColor: COLORS.primary,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        height: 100,
        width: '100%'
    },
    headerButton: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: 15,
    },
    profileSection: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 24,
        paddingBottom: 24
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        top: 10
    },
    avatarContainer: {
        marginRight: 16,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 24,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarIcon: {
        fontSize: 25,
    },
    profileInfo: {
        flex: 1,
    },
    profileName: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 2,
    },
    profileEmail: {
        color: '#c7d2fe',
        fontSize: 14,
    },
    content: {
        flex: 1,
        backgroundColor: '#ffffffff',
    },
    section: {
        paddingHorizontal: 24,
        paddingTop: 16,
    },
    sectionTitle: {
        color: '#1E3A8A',
        fontSize: 13,
        fontWeight: '600',
        marginBottom: 16,
    },
    infoCard: {
        flexDirection: 'row',
        marginBottom: 24,
    },
    keyIconContainer: {
        marginRight: 16,
        marginTop: 2,
    },
    infoContent: {
        flex: 1,
    },
    infoTitle: {
        color: '#0F172A',
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 4,
    },
    infoDescription: {
        color: '#475569',
        fontSize: 14,
        lineHeight: 20,
    },
    contactButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb',
    },
    contactLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    contactText: {
        color: '#475569',
        fontSize: 16,
    },
    chevronIcon: {
        color: '#9ca3af',
        fontSize: 28,
        fontWeight: '300',
    },
});