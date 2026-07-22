import { Pressable, StyleSheet, Text, View } from 'react-native';

type SensorTestCardProps = {
  treadleCount: number;
  onTreadlePress: (treadle: number) => void;
};

export default function SensorTestCard({
  treadleCount,
  onTreadlePress,
}: SensorTestCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Prototype Sensor Test</Text>

      <View style={styles.grid}>
        {Array.from({ length: treadleCount }, (_, index) => {
          const treadle = index + 1;

          return (
            <Pressable
              key={treadle}
              style={({ pressed }) => [
                styles.button,
                pressed && styles.pressedButton,
              ]}
              onPress={() => onTreadlePress(treadle)}
            >
              <Text style={styles.buttonText}>{treadle}</Text>
            </Pressable>
          );
        })}
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
  label: {
    marginBottom: 10,
    fontSize: 14,
    color: '#eef0f4',
  },
  grid: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    flex: 1,
    minHeight: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#566678',
  },
  pressedButton: {
    opacity: 0.7,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#ffffff',
  },
});