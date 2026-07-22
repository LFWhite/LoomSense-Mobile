import { StyleSheet, Text, View } from 'react-native';

type UpcomingCardProps = {
  pattern: number[];
  currentStepIndex: number;
};

export default function UpcomingCard({
  pattern,
  currentStepIndex,
}: UpcomingCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Upcoming</Text>

      {pattern.map((_, offset) => {
        const patternIndex =
          (currentStepIndex + offset) % pattern.length;

        const treadle = pattern[patternIndex];
        const isCurrent = offset === 0;

        return (
          <View
            key={`${patternIndex}-${offset}`}
            style={[
              styles.row,
              isCurrent ? styles.currentRow : undefined,
            ]}
          >
            <Text
              style={[
                styles.rowText,
                isCurrent ? styles.currentRowText : undefined,
              ]}
            >
              {isCurrent ? '▶ ' : ''}
              Step {patternIndex + 1} - Treadle {treadle}
            </Text>
          </View>
        );
      })}
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
    marginBottom: 10,
    fontSize: 22,
    fontWeight: '700',
    color: '#eef0f4',
  },
  row: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  currentRow: {
    backgroundColor: '#62b0ff',
  },
  rowText: {
    fontSize: 15,
    color: '#eef0f4',
  },
  currentRowText: {
    fontWeight: '700',
    color: '#ffffff',
  },
});