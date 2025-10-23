// app/(auth)/signin-email.tsx
import { COLORS } from '@/constants/Colors';
import { FONTS, SIZES } from '@/constants/Theme';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignInEmailScreen() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const validateEmail = (text: string) => {
        setEmail(text);
        if (text && !text.includes('@')) {
            setEmailError('Invalid Email. Enter valid email to Sign-In.');
        } else {
            setEmailError('');
        }
    };

    const handleNext = () => {
        if (!email) {
            setEmailError('Invalid Email. Enter valid email to Sign-In.');
            return;
        }
        if (emailError) return;

        // Navigate to OTP verification
        router.push({
            pathname: '/(auth)/otp-verification',
            params: { email }
        });
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <StatusBar style="dark" />
            <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
                <View style={styles.content}>
                    <Text style={styles.title}>Sign in</Text>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={[styles.input, emailError ? styles.inputError : null]}
                            placeholder="Enter Email"
                            placeholderTextColor={COLORS.gray}
                            value={email}
                            onChangeText={validateEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        {emailError ? (
                            <Text style={styles.errorText}>{emailError}</Text>
                        ) : null}
                    </View>

                    <TouchableOpacity>
                        <Text style={styles.link}>Terms & Conditions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.link}>Privacy Policy</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.buttonSecondary}
                        onPress={() => router.back()}
                    >
                        <Text style={styles.buttonSecondaryText}>Back</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.buttonPrimary, (!email || emailError) && styles.buttonDisabled]}
                        onPress={handleNext}
                        disabled={!email || !!emailError}
                    >
                        <Text style={styles.buttonPrimaryText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    scrollContent: {
        flexGrow: 1,
    },
    content: {
        flex: 1,
        // paddingHorizontal: 2,
        alignItems:'flex-start',
        paddingTop: 60,
        padding: 20
    },
    title: {
        ...FONTS.h1,
        color: COLORS.black,
        marginBottom: 30,
    },
    inputContainer: {
        marginBottom: 20,
        width: '100%',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray,
        paddingVertical: 12,
        fontSize: 16,
        color: COLORS.black,
        width: '100%',
    },
    inputError: {
        borderBottomColor: 'red',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
    },
    link: {
        color: COLORS.primary,
        fontSize: 14,
        marginBottom: 10,
        textDecorationLine: 'underline',
    },
    footer: {
        flexDirection: 'row',
        paddingHorizontal:15,
        paddingBottom: 30,
        gap: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonSecondary: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingVertical: 10,
        maxWidth: 162,
        borderRadius: 5,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.primary,
    },
    buttonSecondaryText: {
        color: COLORS.primary,
        ...FONTS.h3,
    },
    buttonPrimary: {
        flex: 1,
        backgroundColor: COLORS.primary,
        paddingVertical: 10,
        borderRadius: 5,
        maxWidth: 162,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.primary,
    },
    buttonPrimaryText: {
        color: COLORS.white,
        ...FONTS.h3,
    },
    buttonDisabled: {
        opacity: 0.5,
    },
});