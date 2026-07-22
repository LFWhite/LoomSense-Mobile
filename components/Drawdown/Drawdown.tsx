import { Pressable, StyleSheet, Text, View } from 'react-native';

type DrawdownProps = {
  cells: number[][];
  onViewTieUp?: () => void;
};

export default function Drawdown({
  cells,
  onViewTieUp,
}: DrawdownProps) {
  const columnCount = cells[0]?.length ?? 0;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Drawdown</Text>

        <Pressable
          style={styles.button}
          onPress={onViewTieUp}
          disabled={!onViewTieUp}
        >
          <Text style={styles.buttonText}>View Tie-up</Text>
        </Pressable>
      </View>

      <View
        style={[
          styles.grid,
          {
            width: columnCount * (CELL_SIZE + CELL_GAP),
          },
        ]}
      >
        {cells.map((row, rowIndex) =>
          row.map((cell, columnIndex) => (
            <View
              key={`${rowIndex}-${columnIndex}`}
              style={[
                styles.cell,
                cell === 1 && styles.onCell,
              ]}
            />
          )),
        )}
      </View>
    </View>
  );
}

const CELL_SIZE = 10;
const CELL_GAP = 2;

const styles = StyleSheet.create({
  card: {
    marginBottom: 14,
    borderRadius: 10,
    backgroundColor: '#313b47',
    padding: 14,
  },
  header: {
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#eef0f4',
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#566678',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  buttonText: {
    fontWeight: '600',
    color: '#ffffff',
  },
  grid: {
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    marginRight: CELL_GAP,
    marginBottom: CELL_GAP,
    backgroundColor: '#3d4652',
  },
  onCell: {
    backgroundColor: '#f4f4f4',
  },
});