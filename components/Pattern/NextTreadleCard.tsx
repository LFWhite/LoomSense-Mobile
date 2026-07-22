import { StyleSheet, Text, View } from 'react-native';

type NextTreadleCardProps = {
  treadle: number;
  status?: 'ready' | 'error';
  pressedTreadle?: number;
};

export default function NextTreadleCard({
  treadle,
  status = 'ready',
  pressedTreadle,
}: NextTreadleCardProps) {
  const hasError = status === 'error';

  return (
    <View style={[styles.card, hasError && styles.errorCard]}>
      <Text style={styles.title}>Next Treadle</Text>

      <Text style={styles.treadle}>{treadle}</Text>

      {hasError ? (
        <View style={styles.statusContainer}>
          <Text style={styles.errorStatus}>✕ Wrong Treadle</Text>

          <Text style={styles.errorDetail}>
            Pressed {pressedTreadle ?? '-'} • Expected {treadle}
          </Text>
        </View>
      ) : (
        <Text style={styles.readyStatus}>✓ Ready</Text>
      )}
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
  errorCard: {
    backgroundColor: '#6a2d32',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#eef0f4',
  },
  treadle: {
    marginVertical: 6,
    textAlign: 'center',
    fontSize: 76,
    fontWeight: '700',
    color: '#62b0ff',
  },
  statusContainer: {
    minHeight: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  readyStatus: {
    minHeight: 40,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#eef0f4',
  },
  errorStatus: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
  errorDetail: {
    marginTop: 4,
    textAlign: 'center',
    fontSize: 13,
    color: '#ffffff',
  },
});