// app/(onboarding)/welcome.tsx
import { COLORS } from '@/constants/Colors';
import { FONTS, SIZES } from '@/constants/Theme';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import WelcomeScreenLogo from "../../assets/images/WelcomeScreenLogo.svg";


export default function WelcomeScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />

            <View style={styles.content}>
                <View style={styles.iconContainer}>
                    <View style={styles.shieldContainer}>
                        <WelcomeScreenLogo />
                    </View>
                </View>

                <Text style={styles.title}>AngoDigital Technologies</Text>
                <Text style={styles.description}>
                    We value your privacy. Our app collects limited personal information to provide and improve our service.
                </Text>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => router.push('/(onboarding)/accept')}
                >
                    <Text style={styles.buttonText}>Accept</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => console.log('Privacy Policy')}>
                    <Text style={styles.privacyText}>Privacy Policy</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    iconContainer: {
        marginBottom: 40,
    },
    shieldContainer: {
        position: 'relative',
    },
    checkmark: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: COLORS.secondary,
        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: COLORS.white,
    },
    title: {
        ...FONTS.h2,
        color: '#0F172A',
        marginBottom: 15,
        textAlign: 'center',
    },
    description: {
        ...FONTS.body,
        color: '#475569',
        textAlign: 'center',
        lineHeight: 24,
    },
    footer: {
        paddingHorizontal: 16,
        paddingBottom: 40,
    },
    button: {
        backgroundColor: "#1E3A8A",
        paddingVertical: 16,
        borderRadius: SIZES.radius,
        alignItems: 'center',
        marginBottom: 15,
    },
    buttonText: {
        color: COLORS.white,
        ...FONTS.h3,
    },
    privacyText: {
        color: "#1E3A8A",
        ...FONTS.body,
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
});