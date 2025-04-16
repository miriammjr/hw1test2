import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#ff0055', dark: '#0400ff' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">This is a test app</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">It probably won't work</ThemedText>
        <ThemedText>I don't know what I'm doing</ThemedText>
        <ThemedText>🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱</ThemedText>
        <ThemedText>🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈</ThemedText>
        <ThemedText>This is all I can do 😭😭😭</ThemedText>
      </ThemedView>
      

      
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
