// components/ProgressBar.tsx
import { COLORS } from '@/constants/Colors';
import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

interface ProgressBarProps {
    progress?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress = 0 }) => {
    const animatedWidth = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(animatedWidth, {
            toValue: progress,
            duration: 500,
            useNativeDriver: false,
        }).start();
    }, [progress]);

    const width = animatedWidth.interpolate({
        inputRange: [0, 100],
        outputRange: ['0%', '100%'],
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.progress, { width }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '40%',
        height: 4,
        backgroundColor: COLORS.gray,
        borderRadius: 2,
        overflow: 'hidden',
    },
    progress: {
        height: '100%',
        backgroundColor: COLORS.primary,
        borderRadius: 2,
    },
});

export default ProgressBar;