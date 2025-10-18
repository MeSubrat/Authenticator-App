import { Stack } from 'expo-router';

export default function OnboardingLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      <Stack.Screen name="splash" />
      <Stack.Screen name="loading" />
      <Stack.Screen name="welcome" />
      <Stack.Screen name="accept" />
      <Stack.Screen name="signin" /> 
      
      {/* khageswar-dev added these */}
      <Stack.Screen name="signInWithEmail" />
      <Stack.Screen name="homescreen" /> 
      <Stack.Screen name="homeScreenProfile"/>
      <Stack.Screen name="homeScreenProfileSettings"/>
      <Stack.Screen name="homeScreen3DotSecurityNotification"/>
      <Stack.Screen name="homeScreen3DotSettings"/>
      <Stack.Screen name="homeScreen3DotHelp"/>


    </Stack>
  );
}