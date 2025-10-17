// app/(onboarding)/signin.tsx
import { COLORS } from '@/constants/Colors';
import { FONTS, SIZES } from '@/constants/Theme';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SignInPageLogo from '../../assets/images/SignInPageLogo.svg';

export default function SignInScreen() {
    const handleSignIn = () => {
        console.log('Sign in with Email');
        // Navigate to your main app or authentication flow
    };

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />

            <View style={styles.content}>
                <View style={styles.iconContainer}>
                    {/* <View style={styles.userIcon}>
                        <MaterialCommunityIcons name="account" size={50} color={COLORS.blue} />
                    </View>
                    <View style={styles.userIcon2}>
                        <MaterialCommunityIcons name="account" size={50} color={COLORS.blue} />
                    </View>
                    <View style={styles.addIcon}>
                        <MaterialCommunityIcons name="plus" size={35} color={COLORS.white} />
                    </View> */}
                    <SignInPageLogo />
                </View>

                <Text style={styles.title}>Peace of mind, built into your digital life</Text>
                <Text style={styles.description}>
                    Multi-factor authentication adds an extra layer of security, ensuring only you can log in to your account.
                </Text>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSignIn}
                >
                    <Text style={styles.buttonText}>Sign in with Email</Text>
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
        position: 'relative',
        width: 150,
        height: 120,
        marginBottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userIcon: {
        position: 'absolute',
        left: 0,
        top: 10,
        backgroundColor: COLORS.blue,
        borderRadius: 40,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: COLORS.white,
    },
    userIcon2: {
        position: 'absolute',
        right: 0,
        top: 10,
        backgroundColor: COLORS.blue,
        borderRadius: 40,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: COLORS.white,
    },
    addIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: COLORS.secondary,
        borderRadius: 30,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
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
        paddingBottom: 70,
    },
    button: {
        backgroundColor: '#1E3A8A',
        paddingVertical: 16,
        borderRadius: SIZES.radius,
        alignItems: 'center',
    },
    buttonText: {
        color: COLORS.white,
        ...FONTS.h3,
    },
});