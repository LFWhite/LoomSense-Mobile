import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ProjectSetupCard from '../components/Project/ProjectSetupCard';
import { RootStackParamList } from '../App';

type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export default function HomeScreen({
  navigation,
}: HomeScreenProps) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>LoomSense</Text>

        <Text style={styles.subtitle}>
          Pattern Guidance & Treadle Tracking
        </Text>
      </View>

      <ProjectSetupCard
        onPress={() => navigation.navigate('ProjectSetup')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f4f1ea',
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#24323d',
  },
  subtitle: {
    marginTop: 4,
    fontSize: 16,
    color: '#66737d',
  },
});