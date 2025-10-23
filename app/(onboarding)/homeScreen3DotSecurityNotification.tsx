import LeftArrow from '@/assets/images/leftArrow.svg';
import PaperAirplane from '@/assets/images/paperAirplane.svg';
import { COLORS } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const homeScreen3DotSecurityNotification = () => {
    const {width: deviceWidth} = Dimensions.get('window');
    const router = useRouter();
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                    <TouchableOpacity 
                        onPress={() => router.push('/(onboarding)/homescreen')}
                    style={{
                        position: 'absolute',
                        left: 15, 
                        top: 50
                    }}>
                        <LeftArrow />
                    </TouchableOpacity>
                <View style={styles.header}>
                    <Text style={{
                        color: 'white',
                        fontSize: 18,
                        fontWeight: 600
                    }}>Security Notifications</Text>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <PaperAirplane/>
                <Text style={{color: '#0F172A', fontSize:16}}>No activity to show yet</Text>
            </View>
        </View>
    )
}

export default homeScreen3DotSecurityNotification

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fafb'
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
});