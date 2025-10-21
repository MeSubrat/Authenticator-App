// app/(auth)/otp-verification.tsx
import { COLORS } from '@/constants/Colors';
import { FONTS, SIZES } from '@/constants/Theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const OTP_LENGTH = 6;

export default function OTPVerificationScreen() {
    const router = useRouter();
    const { email } = useLocalSearchParams<{ email: string }>();
    const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));
    const [otpError, setOtpError] = useState('');
    const inputRefs = useRef<(TextInput | null)[]>([]);

    const handleOtpChange = (value: string, index: number) => {
        if (isNaN(Number(value))) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        setOtpError('');

        // Auto focus next input
        if (value && index < OTP_LENGTH - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyPress = (e: any, index: number) => {
        if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleVerify = () => {
        const otpValue = otp.join('');
        if (otpValue.length !== OTP_LENGTH) {
            setOtpError('Invalid code. Please try again');
            return;
        }

        // Navigate to home screen after successful verification
        // Bro I think you push the wrong screen here I pushed here the real 
        // screen i.e '/(onboarding)/homescreen'
        // router.push('/(auth)/home');
        router.push('/(onboarding)/homescreen');
    };

    const handleResend = () => {
        setOtp(Array(OTP_LENGTH).fill(''));
        setOtpError('');
        console.log('Resending OTP to:', email);
    };

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />

            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <MaterialCommunityIcons name="arrow-left" size={24} color={COLORS.black} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>OTP Verification</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.description}>
                    Enter the 6-digit code sent to your email.
                </Text>

                <View style={styles.otpContainer}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={(ref) => (inputRefs.current[index] = ref)}
                            style={[
                                styles.otpInput,
                                digit ? styles.otpInputFilled : null,
                                otpError ? styles.otpInputError : null,
                            ]}
                            value={digit}
                            onChangeText={(value) => handleOtpChange(value, index)}
                            onKeyPress={(e) => handleKeyPress(e, index)}
                            keyboardType="number-pad"
                            maxLength={1}
                            selectTextOnFocus
                        />
                    ))}
                </View>

                {otpError ? (
                    <Text style={styles.errorText}>{otpError}</Text>
                ) : null}

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleVerify}
                >
                    <Text style={styles.buttonText}>Verify</Text>
                </TouchableOpacity>

                <View style={styles.resendContainer}>
                    <Text style={styles.resendText}>Did not receive any code? </Text>
                    <TouchableOpacity onPress={handleResend}>
                        <Text style={styles.resendLink}>Resend Again</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.padding,
        paddingTop: 50,
        paddingBottom: 20,
    },
    backButton: {
        padding: 5,
    },
    headerTitle: {
        ...FONTS.h2,
        color: COLORS.black,
        marginLeft: 15,
    },
    content: {
        flex: 1,
        paddingHorizontal: SIZES.padding * 2,
        paddingTop: 20,
    },
    description: {
        ...FONTS.body,
        color: COLORS.darkGray,
        marginBottom: 30,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    otpInput: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        color: COLORS.black,
    },
    otpInputFilled: {
        borderColor: COLORS.primary,
        backgroundColor: COLORS.lightGray,
    },
    otpInputError: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
        marginBottom: 20,
    },
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 16,
        borderRadius: SIZES.radius,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: COLORS.white,
        ...FONTS.h3,
    },
    resendContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    resendText: {
        ...FONTS.small,
        color: COLORS.darkGray,
    },
    resendLink: {
        ...FONTS.small,
        color: 'red',
        fontWeight: '600',
    },
});