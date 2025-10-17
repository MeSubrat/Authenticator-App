import { Stack } from 'expo-router';

export default function AuthLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                animation: 'fade',
            }}
        >
            {/* <Stack.Screen name="intro" />
            <Stack.Screen name="signin-email" />
            <Stack.Screen name="otp-verification" />
            <Stack.Screen name="home" /> */}
        </Stack>
    );
}