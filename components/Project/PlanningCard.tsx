import { StyleSheet, Text, TextInput, View } from 'react-native';

type PlanningCardProps = {
  targetLength: string;
  plannedPpi: string;
  estimatedPicks: number;
  estimatedRepeats: number;
  onTargetLengthChange: (value: string) => void;
  onPlannedPpiChange: (value: string) => void;
};

export default function PlanningCard({
  targetLength,
  plannedPpi,
  estimatedPicks,
  estimatedRepeats,
  onTargetLengthChange,
  onPlannedPpiChange,
}: PlanningCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Project Setup</Text>

      <View style={styles.metric}>
        <Text style={styles.label}>Target Length</Text>

        <TextInput
          style={styles.input}
          value={targetLength}
          onChangeText={onTargetLengthChange}
          keyboardType="decimal-pad"
          placeholder="72"
          placeholderTextColor="#8994a0"
        />
      </View>

      <View style={styles.metric}>
        <Text style={styles.label}>Planned PPI</Text>

        <TextInput
          style={styles.input}
          value={plannedPpi}
          onChangeText={onPlannedPpiChange}
          keyboardType="decimal-pad"
          placeholder="24"
          placeholderTextColor="#8994a0"
        />
      </View>

      <View style={styles.metric}>
        <Text style={styles.label}>Estimated Picks</Text>
        <Text style={styles.value}>
          {estimatedPicks.toLocaleString()}
        </Text>
      </View>

      <View style={styles.metric}>
        <Text style={styles.label}>Estimated Repeats</Text>
        <Text style={styles.value}>
          {estimatedRepeats.toLocaleString()}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 14,
    borderRadius: 10,
    backgroundColor: '#313b47',
    padding: 14,
  },
  title: {
    marginBottom: 12,
    fontSize: 22,
    fontWeight: '700',
    color: '#eef0f4',
  },
  metric: {
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    color: '#eef0f4',
  },
  value: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
  input: {
    width: 82,
    minHeight: 38,
    borderRadius: 6,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    textAlign: 'right',
    fontSize: 16,
    color: '#20262f',
  },
});