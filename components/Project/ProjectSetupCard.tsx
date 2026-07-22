import { Pressable, StyleSheet, Text, View } from 'react-native';

type ProjectSetupCardProps = {
  onPress: () => void;
};

export default function ProjectSetupCard({
  onPress,
}: ProjectSetupCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
      accessibilityRole="button"
      accessibilityLabel="Open Project Setup"
    >
      <View>
        <Text style={styles.cardTitle}>Project Setup</Text>

        <Text style={styles.cardText}>
          Configure your loom and weaving project.
        </Text>

        <Text style={styles.openText}>Open Project Setup ›</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    elevation: 3,
  },
  cardPressed: {
    opacity: 0.7,
  },
  cardTitle: {
    marginBottom: 8,
    fontSize: 20,
    fontWeight: '700',
    color: '#24323d',
  },
  cardText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#59656e',
  },
  openText: {
    marginTop: 16,
    fontSize: 15,
    fontWeight: '700',
    color: '#315d74',
  },
});