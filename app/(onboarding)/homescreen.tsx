import Frame from '@/assets/images/Frame.svg';
import Vector from '@/assets/images/Vector.svg';
import { COLORS } from '@/constants/Colors';
import React, { JSX, useEffect, useRef, useState } from 'react';
import {
    Animated,
    Easing,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import Notification from '@/assets/images/notification.svg';
import Question from '@/assets/images/question.svg';
import Settings from '@/assets/images/settings.svg';


import { useRouter } from 'expo-router';
import Svg, { Circle } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const ThreeSecLoading = () => {
    const animatedValue = useRef(new Animated.Value(0)).current;

    const radius = 14;
    const strokeWidth = 2;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start();
    }, []);

    const strokeDashoffset = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [circumference, 0],
    });


    return (
        <View style={styles.loaderContainer}>
            <View style={styles.loaderContainer}>
                {/* Background Circle */}
                <Svg width={24} height={24} style={styles.svgBackground}>
                    <Circle
                        cx={40}
                        cy={40}
                        r={radius}
                        stroke="#727272ff"
                        strokeWidth={strokeWidth}
                        fill="none"
                    />
                </Svg>

                {/* Progress Circle */}
                <Svg width={80} height={80} style={styles.svgProgress}>
                    <AnimatedCircle
                        cx={40}
                        cy={40}
                        r={radius}
                        stroke="#405d9aff"
                        strokeWidth={strokeWidth}
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        rotation="-90"
                        origin="40, 40"
                    />
                </Svg>

                {/* Number Text */}
                <View style={styles.numberContainer}>
                    <Text style={styles.numberText}>3</Text>
                </View>
            </View>
        </View>
    );
};


const AuthenticatorApp = () => {
    const [code1, setCode1] = useState('456 088');
    const [clicked, setClicked] = useState(false);
    const topValue = useRef(new Animated.Value(-12)).current;
    const router = useRouter();

    // Simulate code refresh every 30 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            const newCode = Math.floor(100000 + Math.random() * 900000);
            setCode1(`${newCode.toString().slice(0, 3)} ${newCode.toString().slice(3)}`);
        }, 30000);
        return () => clearInterval(interval);
    }, []);

    interface MenuItem {
        id: string;
        logo: JSX.Element;
        title: string;
        route: '/(onboarding)/homeScreen3DotSecurityNotification'
                | '/(onboarding)/homeScreen3DotSettings'
                | '/(onboarding)/homeScreen3DotHelp';
    }

    const menuItems: MenuItem[] = [
        { id: 'notification', logo: <Notification />, title: 'Security Notification', route: '/(onboarding)/homeScreen3DotSecurityNotification' },
        { id: 'settings', logo: <Settings />, title: 'Settings', route: '/(onboarding)/homeScreen3DotSettings' },
        { id: 'help', logo: <Question />, title: 'Help', route: '/(onboarding)/homeScreen3DotHelp' }
    ]

    const menuBtnClicked = () => {
        Animated.timing(topValue, {
            toValue: clicked ? -12 : 88,
            duration: 200,
            useNativeDriver: false
        }).start();
        setClicked(!clicked);
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Authenticator</Text>
                <TouchableOpacity
                    style={styles.menuButton}
                    onPress={menuBtnClicked}
                >
                    <Text style={styles.menuIcon}>⋮</Text>
                </TouchableOpacity>
            </View>

            {/* Menu bar */}
            <Animated.View id='menubar-container' style={[styles.menubarContainer, {top: topValue}]}>
                {
                    menuItems.map((item) => {
                        return <TouchableOpacity 
                                    id='item-container'
                                    key={item.id} 
                                    style={styles.menuItemContainer}
                                    onPress={() => router.push(item.route)}
                            >
                            {item.logo}
                            <Text style={{color: '#0f172aff'}}>{item.title}</Text>
                        </TouchableOpacity>

                    })
                }
            </Animated.View>


            {/* Account List */}
            <View style={styles.content}>
                {/* First Account */}
                <TouchableOpacity style={styles.accountCard}
                    onPress={() => router.push('/(onboarding)/signInWithEmail')}
                >
                    <View style={styles.accountHeader}>
                        <View style={styles.iconContainer}>
                            <Frame />
                        </View>
                        <View style={styles.accountInfo}>
                            <Text style={styles.accountLabel}>Email ID</Text>
                            <Text style={styles.accountEmail}>myai@angodigitaltech.com</Text>
                        </View>
                        <Text style={styles.chevron}><Vector /></Text>
                    </View>

                    <View style={styles.codeContainer}>
                        <Text style={styles.code}>{code1}</Text>
                        <TouchableOpacity style={styles.refreshButton}>
                            <Text style={styles.refreshIcon}>
                                <ThreeSecLoading />
                            </Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>

                {/* Second Account */}
                <TouchableOpacity style={styles.accountCard}
                    onPress={() => router.push('/(onboarding)/homeScreenProfile')}
                >
                    <View style={styles.accountHeader}>
                        <View style={styles.iconContainer}>
                            <Frame />
                        </View>
                        <View style={styles.accountInfo}>
                            <Text style={styles.accountLabel}>Angodigitaltech</Text>
                            <Text style={styles.accountEmail}>myai@angodigitaltech.com</Text>
                        </View>
                        <Text style={styles.chevron}>
                            <Vector />
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        backgroundColor: '#362ca3ff',
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 88,
        zIndex: 2
    },
    headerTitle: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '500',
        margin: 'auto',
        marginTop: 38
    },
    menuButton: {
        padding: 4,
        marginTop: 30,
        marginRight: 7
    },
    menuIcon: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold'
    },
    content: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    accountCard: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    accountHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
        backgroundColor: '#ebebebff',
        borderRadius: 15,
    },
    icon: {
        backgroundColor: 'gray',
        width: 29,
        height: 29,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        textAlign: 'center'
    },
    accountInfo: {
        flex: 1,
    },
    accountLabel: {
        fontSize: 16,
        color: '#212121',
        fontWeight: '500',
        marginBottom: 2,
    },
    accountEmail: {
        fontSize: 13,
        color: '#757575',
    },
    chevron: {
        fontSize: 24,
        color: '#9E9E9E',
        fontWeight: '300',
    },
    codeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 12,
        marginLeft: 36,
    },
    code: {
        fontSize: 24,
        fontWeight: '400',
        color: '#1E3A8A',
        letterSpacing: 2,
    },
    refreshButton: {
        padding: 8,
    },
    refreshIcon: {
        fontSize: 24,
        color: '#9E9E9E',
    },
    bottomIndicator: {
        position: 'absolute',
        bottom: 8,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    indicator: {
        width: 134,
        height: 5,
        backgroundColor: '#212121',
        borderRadius: 3,
    },
    Loadingcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    loaderContainer: {
        width: 24,
        height: 24,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    svgBackground: {
        position: 'absolute',

    },
    svgProgress: {
        position: 'absolute',
    },
    numberContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    numberText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333333',
    },
    menubarContainer: {
        backgroundColor: 'white',
        width: 190,
        padding: 5,
        position: 'absolute',
        zIndex: 1,
        right: 0,
        // top: -10,
        elevation: 5,
        borderBottomLeftRadius: 9,
        borderBottomRightRadius: 9
    },
    menuItemContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        flexDirection: 'row',
        gap: 8,
        margin: 5,
        opacity: 1
        
    }
});

export default AuthenticatorApp;