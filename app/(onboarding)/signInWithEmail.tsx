import Shild from '@/assets/images/arcticons_authenticator.svg';
import { COLORS } from '@/constants/Colors';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const signInWithEmail = () => {

    const authNumber: string[] = ['90', '90', '90'];
    const links: string[] = ['Terms & Conditions', 'Privacy Policy']

    return (
        <View id='container'>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Approve sign in request</Text>
            </View>

            <View id='content-container' style={styles.contentContainer}>
                <View id='approve-text' style={styles.approveText}>
                    <Shild style={{marginTop:3}}/>
                    <Text style={styles.textColor}>Open your Authenticator app and approve the request. Enter the number if prompted.</Text>
                </View>
                <Text style={styles.textColor}>riya@angodigitaltech.com</Text>

                <View id='btn-container' style={styles.numberContainer}>
                    {
                        authNumber.map((num: string, index: number) => {
                            return <TouchableOpacity key={index} style={styles.buttons}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18, fontFamily: 'Roboto' }}>{num}</Text>
                            </TouchableOpacity>
                        })
                    }
                </View>

                <View>
                    <Text style={styles.textColor}>
                        Didn't receive a sign-in request?
                        <Text style={{ fontWeight: '400' }}>Swipe down to refresh</Text> the content in your app.
                    </Text>
                </View>

                <View>
                    {
                        links.map((link, index) => {
                            return <Text key={index} style={styles.linkStyle}>{link}</Text>
                        })
                    }
                </View>
            </View>

            <View id='cancel-btn' style={styles.cancelBtnContainer}>
                    <TouchableOpacity style={styles.cancelBtn}>
                        <Text style={{color: '#362CA3', fontSize: 18}}>Cancel</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

export default signInWithEmail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    },
    header: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 375,
        height: 88
    },
    headerTitle: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '500',
        margin: 'auto',
        marginTop: 38
    },
    contentContainer: {
        width: 334,
        height: 292,
        margin: 'auto',
        top: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    approveText: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    textColor: {
        color: '#3A3939',
        fontWeight: '300'
    },
    numberContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 38,
        width: '100%',
        padding: 20
    },
    buttons: {
        height: 50,
        width: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        fontWeight: 'bold',
        fontFamily: "Roboto"
    },
    linkStyle:{
        marginTop: 7,
        position: 'relative',
        bottom: 9,
        fontWeight: 300,
        textDecorationLine: 'underline',
        color: '#1E3A8A',
    },
    cancelBtnContainer: {
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: 350, 
        // backgroundColor: 'gray',
    },
    cancelBtn:{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#362CA3',
        width: 320,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 32,
    }

});