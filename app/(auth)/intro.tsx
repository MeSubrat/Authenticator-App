// app/(auth)/intro.tsx
import { COLORS } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('window');
const DOT_SIZE = 12;
const DOT_SPACING = 8;

export default function IntroScreen() {
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const fadeAnims = useRef([
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0),
    ]).current;

    useEffect(() => {
        // Animate screens one by one
        const animateScreen = (index: number) => {
            Animated.sequence([
                Animated.timing(fadeAnims[index], {
                    toValue: 1,
                    duration: 600,
                    useNativeDriver: true,
                }),
                Animated.delay(800),
                Animated.timing(fadeAnims[index], {
                    toValue: 0,
                    duration: 400,
                    useNativeDriver: true,
                }),
            ]).start(() => {
                if (index < 2) {
                    setCurrentIndex(index + 1);
                    animateScreen(index + 1);
                } else {
                    // Navigate to sign in after all animations
                    setTimeout(() => {
                        router.replace({
                            pathname: '/(auth)/signin-email',
                        });
                    }, 500);
                }
            });
        };

        animateScreen(0);
    }, []);

    const renderDots = () => {
        return (
            <View style={styles.dotsContainer}>
                {[0, 1, 2].map((index) => {
                    const opacity = fadeAnims[index].interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.3, 1],
                    });

                    const scale = fadeAnims[index].interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 1.3],
                    });

                    return (
                        <Animated.View
                            key={index}
                            style={[
                                styles.dot,
                                {
                                    opacity,
                                    transform: [{ scale }],
                                    backgroundColor: index <= currentIndex ? COLORS.black : COLORS.gray,
                                },
                            ]}
                        />
                    );
                })}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <View style={styles.content}>
                {renderDots()}
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
    },
    dotsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 100,
    },
    dot: {
        width: DOT_SIZE,
        height: DOT_SIZE,
        borderRadius: DOT_SIZE / 2,
        marginHorizontal: DOT_SPACING / 2,
    },
});