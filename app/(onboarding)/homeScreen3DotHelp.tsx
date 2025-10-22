import LeftArrow from '@/assets/images/leftArrow.svg';
import { COLORS } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { Dimensions } from 'react-native';

export default function HelpScreen() {
    const router = useRouter();
    const {width: deviceWidth} = Dimensions.get('window');
    return (
        <View style={styles.container}>


            {/* Header */}
            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => router.push('/(onboarding)/homescreen')}
                    style={{
                        position: 'absolute',
                        right: deviceWidth * 0.43,
                        top: 3
                    }}>
                        <LeftArrow />
                    </TouchableOpacity>
                    <Text style={{
                        color: 'white',
                        fontSize: 18
                    }}>Help</Text>
                </View>
            </View>

            {/* Content */}
            <ScrollView style={styles.content}>
                {/* About Section Header */}
                <Text style={styles.sectionHeader}>About</Text>

                {/* Application Version */}
                <View style={styles.infoItem}>
                    <Text style={styles.infoTitle}>Application version</Text>
                    <Text style={styles.infoValue}>6.2507.4759</Text>
                </View>

                {/* Privacy Policy */}
                <TouchableOpacity style={styles.linkItem}>
                    <Text style={styles.linkText}>Privacy policy</Text>
                </TouchableOpacity>

                {/* Terms & Conditions */}
                <TouchableOpacity style={styles.linkItem}>
                    <Text style={styles.linkText}>Terms & Conditions</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* Home Indicator */}
            <View style={styles.homeIndicatorContainer}>
                <View style={styles.homeIndicator} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
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
    backButton: {
        padding: 4,
        width: 40,
    },
    backIcon: {
        color: '#ffffff',
        fontSize: 32,
        fontWeight: '300',
    },
    headerTitle: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '600',
        flex: 1,
        textAlign: 'center',
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
        paddingBottom: 16,
    },
    infoItem: {
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    infoTitle: {
        fontSize: 16,
        fontWeight: '400',
        color: '#0F172A',
        marginBottom: 6,
    },
    infoValue: {
        fontSize: 14,
        color: '#475569',
    },
    linkItem: {
        paddingHorizontal: 16,
        paddingVertical: 14,
    },
    linkText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#0F172A',
    },
    homeIndicatorContainer: {
        backgroundColor: '#ffffff',
        paddingVertical: 8,
        alignItems: 'center',
    },
    homeIndicator: {
        width: 134,
        height: 5,
        backgroundColor: '#000000',
        borderRadius: 3,
    },
});