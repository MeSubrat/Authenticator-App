import LeftArrow from '@/assets/images/leftArrow.svg';
import Vector from '@/assets/images/Vector.svg';
import { COLORS } from '@/constants/Colors';
import React, { useState } from 'react';
import { Animated, Dimensions, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface RenameModalProps {
    visible: boolean;
    onClose: () => void;
    onSave: (name: string) => void;
    initialValue?: string;
}

const RenameModal: React.FC<RenameModalProps> = ({ visible, onClose, onSave, initialValue = '' }) => {
    const [accountName, setAccountName] = React.useState(initialValue);

    const handleSave = () => {
        onSave(accountName);
        onClose();
    };

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    {/* Header */}
                    <View style={styles.head}>
                        <Text style={styles.headerTitle}>Rename</Text>
                    </View>

                    {/* Content */}
                    <View style={styles.content}>
                        <Text style={styles.label}>Account name</Text>
                        <TextInput
                            style={styles.input}
                            value={accountName}
                            onChangeText={setAccountName}
                            placeholder="Enter your name"
                            placeholderTextColor="#9ca3af"
                            autoFocus
                        />
                    </View>

                    {/* Footer */}
                    <View style={styles.footer}>
                        <TouchableOpacity onPress={onClose}>
                            <Text style={styles.cancelButton}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleSave}>
                            <Text style={styles.saveButton}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};




const homeScreenProfileSettings = () => {
    const screenWidth = Dimensions.get('window').width;
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [accountName, setAccountName] = React.useState('Account name');

    const handleRename = (newName: string) => {
        setAccountName(newName);
    };
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    <View style={{
                        position: 'absolute',
                        left: -130,
                        top: 3
                    }}>
                        <LeftArrow />
                    </View>
                    <Text style={{
                        color: 'white',
                        fontSize: 18
                    }}>Account Settings</Text>
                </View>
            </View>

            <View style={styles.accountNameContainer}>
                <View style={styles.acountName}>
                    <Text style={{
                        color: '#0F172A',
                        marginLeft: 20,
                        fontSize: 16
                    }}>Account name</Text>
                </View>
                <TouchableOpacity style={styles.editAccountName}
                    onPress={() => setIsModalVisible(true)}
                >
                    <Text style={{
                        color: '#475569',
                        fontSize: 16
                    }}>Account name</Text>
                    <Vector />
                </TouchableOpacity>
            </View>


            <RenameModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                onSave={handleRename}
                initialValue={accountName}
            />

        </View>
    )
}

export default homeScreenProfileSettings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fafb'
    },
    headerContainer: {
        backgroundColor: COLORS.primary,
        height: 88,
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 15
    },
    accountNameContainer: {
        height: 50,
        top: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    acountName: {
        flex: 1.5
    },
    editAccountName: {
        flex: 2.6,
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    overlay: {
        flex: 1,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    modalContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        width: '100%',
        maxWidth: 400,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    head: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 16,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1E3A8A',
    },
    content: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    label: {
        fontSize: 12,
        color: '#475569',
        fontWeight: '500',
        position: 'absolute',
        zIndex: 1,
        top: -9,
        left: 30,
        backgroundColor: 'white',
        paddingLeft: 1,
        paddingRight: 1
    },
    input: {
        borderWidth: 1,
        borderColor: '#9A9494',
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 14,
        color: '#111827',
        backgroundColor: '#ffffffff',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16,
        gap: 20,
    },
    cancelButton: {
        fontSize: 15,
        color: '#DD2E2E',
        fontWeight: '500',
    },
    saveButton: {
        fontSize: 15,
        color: '#1E3A8A',
        fontWeight: '500',
    }
});