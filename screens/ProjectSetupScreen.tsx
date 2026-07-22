import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Project } from '../types/Project';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../App';

type ProjectSetupScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ProjectSetup'
>;

export default function ProjectSetupScreen({
  navigation,
}: ProjectSetupScreenProps) {
  const [project, setProject] = useState<Project>({
    id: '',
    name: '',
    shaftCount: 8,
    treadleCount: 10,
    patternName: '',
  });

  function updateProject<K extends keyof Project>(
    field: K,
    value: Project[K],
  ) {
    setProject((currentProject) => ({
      ...currentProject,
      [field]: value,
    }));
  }

  return (
    <SafeAreaView style={styles.screen} edges={['bottom']}>
      <KeyboardAvoidingView
        style={styles.screen}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.sectionTitle}>Project Details</Text>

          <View style={styles.field}>
            <Text style={styles.label}>Project Name</Text>
            <TextInput
              style={styles.input}
              value={project.name}
              onChangeText={(value) => updateProject('name', value)}
              placeholder="Enter project name"
            />
          </View>

          <View style={styles.row}>
            <View style={styles.rowField}>
              <Text style={styles.label}>Shafts</Text>
              <TextInput
                style={styles.input}
                value={String(project.shaftCount)}
                onChangeText={(value) =>
                  updateProject(
                    'shaftCount',
                    Number.parseInt(value, 10) || 0,
                  )
                }
                keyboardType="number-pad"
              />
            </View>

            <View style={styles.rowField}>
              <Text style={styles.label}>Treadles</Text>
              <TextInput
                style={styles.input}
                value={String(project.treadleCount)}
                onChangeText={(value) =>
                  updateProject(
                    'treadleCount',
                    Number.parseInt(value, 10) || 0,
                  )
                }
                keyboardType="number-pad"
              />
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Pattern Name</Text>
            <TextInput
              style={styles.input}
              value={project.patternName}
              onChangeText={(value) =>
                updateProject('patternName', value)
              }
              placeholder="Enter pattern name"
            />
          </View>
		  
		  <Pressable
		    style={({ pressed }) => [
		     styles.startButton,
             pressed && styles.startButtonPressed,
			]}
			onPress={() => navigation.navigate('Weaving')}
		  >
		    <Text style={styles.startButtonText}>Start Weaving</Text>
          </Pressable>
		  
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f4f1ea',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  sectionTitle: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: '700',
    color: '#24323d',
  },
  field: {
    marginBottom: 18,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 18,
  },
  rowField: {
    flex: 1,
  },
  label: {
    marginBottom: 7,
    fontSize: 15,
    fontWeight: '600',
    color: '#24323d',
  },
  input: {
    minHeight: 48,
    borderWidth: 1,
    borderColor: '#c9c5bc',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    paddingHorizontal: 14,
    fontSize: 16,
    color: '#24323d',
  },
  
  startButton: {
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#24323d',
    paddingHorizontal: 18,
   },
   startButtonPressed: {
     opacity: 0.8,
   },
   startButtonText: {
     fontSize: 16,
     fontWeight: '700',
     color: '#ffffff',
   },
});