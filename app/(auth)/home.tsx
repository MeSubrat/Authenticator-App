// app/(auth)/home.tsx
import { COLORS } from '@/constants/Colors';
import { FONTS, SIZES } from '@/constants/Theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface AccountItem {
    id: string;
    icon: string;
    title: string;
    email: string;
    code: string;
}

const ACCOUNTS: AccountItem[] = [
    {
        id: '1',
        icon: 'email',
        title: 'Email ID',
        email: 'Hyd@angodigitaltech.com',
        code: '456 088',
    },
    {
        id: '2',
        icon: 'domain',
        title: 'Angodigitaltech',
        email: 'Hyd@angodigitaltech.com',
        code: '',
    },
];

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Authenticator</Text>
                <TouchableOpacity style={styles.menuButton}>
                    <MaterialCommunityIcons name="dots-vertical" size={24} color={COLORS.white} />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.content}>
                {ACCOUNTS.map((account) => (
                    <TouchableOpacity key={account.id} style={styles.accountCard}>
                        <View style={styles.accountLeft}>
                            <View style={styles.iconContainer}>
                                <MaterialCommunityIcons
                                    name={account.icon as any}
                                    size={24}
                                    color={COLORS.primary}
                                />
                            </View>
                            <View style={styles.accountInfo}>
                                <Text style={styles.accountTitle}>{account.title}</Text>
                                <Text style={styles.accountEmail}>{account.email}</Text>
                            </View>
                        </View>
                        <MaterialCommunityIcons
                            name="chevron-right"
                            size={24}
                            color={COLORS.darkGray}
                        />
                    </TouchableOpacity>
                ))}

                <View style={styles.codeCard}>
                    <View style={styles.codeHeader}>
                        <View style={styles.iconContainer}>
                            <MaterialCommunityIcons
                                name="email"
                                size={24}
                                color={COLORS.primary}
                            />
                        </View>
                        <View style={styles.accountInfo}>
                            <Text style={styles.accountTitle}>Email ID</Text>
                            <Text style={styles.accountEmail}>Hyd@angodigitaltech.com</Text>
                        </View>
                        <MaterialCommunityIcons
                            name="chevron-right"
                            size={24}
                            color={COLORS.darkGray}
                        />
                    </View>
                    <Text style={styles.code}>456 088</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray,
    },
    header: {
        backgroundColor: '#4A3F8F',
        paddingTop: 50,
        paddingBottom: 20,
        paddingHorizontal: SIZES.padding * 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        ...FONTS.h2,
        color: COLORS.white,
        fontWeight: '600',
    },
    menuButton: {
        padding: 5,
    },
    content: {
        flex: 1,
        paddingTop: 20,
    },
    accountCard: {
        backgroundColor: COLORS.white,
        marginHorizontal: SIZES.padding * 2,
        marginBottom: 15,
        padding: 20,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    accountLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: COLORS.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    accountInfo: {
        flex: 1,
    },
    accountTitle: {
        ...FONTS.h3,
        color: COLORS.black,
        marginBottom: 5,
    },
    accountEmail: {
        ...FONTS.small,
        color: COLORS.darkGray,
    },
    codeCard: {
        backgroundColor: COLORS.white,
        marginHorizontal: SIZES.padding * 2,
        marginBottom: 15,
        padding: 20,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    codeHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    code: {
        fontSize: 36,
        fontWeight: '700',
        color: COLORS.black,
        textAlign: 'left',
        letterSpacing: 8,
    },
});