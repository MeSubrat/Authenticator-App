// app/(onboarding)/loading.tsx
import { COLORS } from '@/constants/Colors';
import { SIZES } from '@/constants/Theme';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import Logo from '../../Components/Logo';
import ProgressBar from '../../Components/ProgressBar';

export default function LoadingScreen() {
    const router = useRouter();
    const [progress, setProgress] = useState(0);
    const pulseAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        // Logo pulse animation
        Animated.loop(
            Animated.sequence([
                Animated.timing(pulseAnim, {
                    toValue: 1.1,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.timing(pulseAnim, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                }),
            ])
        ).start();

        // Progress bar animation
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => router.replace('/(onboarding)/welcome'), 300);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
                <Logo />
            </Animated.View>
            <View style={styles.progressContainer}>
                <ProgressBar progress={progress} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressContainer: {
        position: 'absolute',
        bottom: 100,
        width: SIZES.width,
        alignItems: 'center',
    },
});