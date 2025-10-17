// app/(onboarding)/accept.tsx
import { COLORS } from '@/constants/Colors';
import { FONTS, SIZES } from '@/constants/Theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AccceptScreenLogo from '../../assets/images/AcceptScreenLogo.svg';

export default function AcceptScreen() {
    const router = useRouter();
    const [isChecked, setIsChecked] = useState(false);

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />

            <View style={styles.content}>
                <View style={styles.iconContainer}>
                    <View style={styles.phoneContainer}>
                        <AccceptScreenLogo />
                    </View>
                </View>

                <Text style={styles.title}>AngoDigital Technologies</Text>
                <Text style={styles.description}>
                    We collect limited usage data to help us improve our app experience. You may choose not to share this.
                </Text>
            </View>

            <View style={styles.footer}>

                {/* checkbox */}
                <TouchableOpacity
                    style={styles.checkboxContainer}
                    onPress={() => setIsChecked(!isChecked)}
                >
                    <View style={[styles.checkbox, isChecked && styles.checkboxChecked,]}>
                        {isChecked && <MaterialCommunityIcons name="check" size={16} color={COLORS.white} />}
                    </View>
                    <Text style={styles.checkboxText}>
                        Help improve the app by sharing your app usage data
                    </Text>
                </TouchableOpacity>

                {/* Continue Btn */}
                <TouchableOpacity
                    style={[styles.button, { opacity: isChecked ? 1 : 0.5 }]}
                    onPress={() => router.push('/(onboarding)/signin')}
                    disabled={!isChecked}
                >
                    <Text style={styles.buttonText}>Continue</Text>
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
    phoneContainer: {
        position: 'relative',
        width: 120,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lockIcon: {
        position: 'absolute',
        top: 10,
        right: -10,
        backgroundColor: COLORS.orange,
        borderRadius: 20,
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: COLORS.white,
    },
    shieldIcon: {
        position: 'absolute',
        bottom: 10,
        right: -15,
        backgroundColor: COLORS.secondary,
        borderRadius: 25,
        width: 50,
        height: 50,
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
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: COLORS.primary,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxChecked: {
        backgroundColor: COLORS.primary,
    },
    checkboxText: {
        ...FONTS.small,
        color: '#0F172A',
        flex: 1,
    },
    button: {
        backgroundColor: '#1E3A8A',
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