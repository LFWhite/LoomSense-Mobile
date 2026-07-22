import { useMemo, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Drawdown from '../components/Drawdown/Drawdown';
import NextTreadleCard from '../components/Pattern/NextTreadleCard';
import SensorTestCard from '../components/Pattern/SensorTestCard';
import UpcomingCard from '../components/Pattern/UpcomingCard';
import PlanningCard from '../components/Project/PlanningCard';
import { useWeavingSession } from '../hooks/useWeavingSession';

const pattern = [1, 2, 3, 4];

const drawdownCells = Array.from({ length: 22 }, (_, row) =>
  Array.from({ length: 32 }, (_, column) =>
    (row + column) % 3 === 0 ? 1 : 0,
  ),
);

export default function WeavingScreen() {
  const [targetLength, setTargetLength] = useState('72');
  const [plannedPpi, setPlannedPpi] = useState('24');
  
  const weaving = useWeavingSession(pattern);
  

  const estimatedPicks = useMemo(() => {
    const length = Number(targetLength) || 0;
    const ppi = Number(plannedPpi) || 0;

    return Math.round(length * ppi);
  }, [targetLength, plannedPpi]);

  const estimatedRepeats = useMemo(() => {
    if (pattern.length === 0) {
      return 0;
    }

    return Math.ceil(estimatedPicks / pattern.length);
  }, [estimatedPicks]);



  return (
    <SafeAreaView style={styles.screen} edges={['bottom']}>
      <View style={styles.header}>
        <Text style={styles.patternName}>Blue Twill Towels</Text>
        <Text style={styles.connection}>● Loom Connected</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
      
		<PlanningCard
          targetLength={targetLength}
          plannedPpi={plannedPpi}
          estimatedPicks={estimatedPicks}
          estimatedRepeats={estimatedRepeats}
          onTargetLengthChange={setTargetLength}
          onPlannedPpiChange={setPlannedPpi}
        />
		
		<NextTreadleCard
          treadle={pattern[weaving.currentStepIndex]}
          status={weaving.status}
          pressedTreadle={weaving.pressedTreadle}
		/>
		
		<UpcomingCard
		  pattern={pattern}
		  currentStepIndex={weaving.currentStepIndex}
		/>	  

        

        <SensorTestCard
	      treadleCount={4}
          onTreadlePress={weaving.handleTreadlePress}
		/>
		
		<Drawdown cells={drawdownCells} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#20262f',
  },
  header: {
    minHeight: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#46515f',
    backgroundColor: '#2b3440',
    paddingHorizontal: 18,
  },
  patternName: {
    flex: 1,
    fontSize: 17,
    fontWeight: '700',
    color: '#eef0f4',
  },
  connection: {
    marginLeft: 12,
    fontSize: 14,
    fontWeight: '600',
    color: '#8ee09c',
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
});