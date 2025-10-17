// components/Logo.tsx
import { COLORS } from '@/constants/Colors';
import { SIZES } from '@/constants/Theme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface LogoProps {
    size?: number;
}

const Logo: React.FC<LogoProps> = ({ size = SIZES.logoSize }) => {
    return (
        <View style={[styles.container, { width: size, height: size }]}>
            <Text style={styles.text}>Logo</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.gray,
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: COLORS.darkGray,
        fontWeight: '500',
    },
});

export default Logo;