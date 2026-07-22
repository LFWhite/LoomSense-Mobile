import { useState } from 'react';

export type WeavingStatus = 'ready' | 'error';

export function useWeavingSession(pattern: number[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [status, setStatus] = useState<WeavingStatus>('ready');
  const [pressedTreadle, setPressedTreadle] = useState<number>();

  function handleTreadlePress(treadle: number) {
    const expectedTreadle = pattern[currentStepIndex];

    if (treadle !== expectedTreadle) {
      setStatus('error');
      setPressedTreadle(treadle);
      return;
    }

    setStatus('ready');
    setPressedTreadle(undefined);

    setCurrentStepIndex(previous =>
      previous === pattern.length - 1
        ? 0
        : previous + 1
    );
  }

  return {
    currentStepIndex,
    status,
    pressedTreadle,
    handleTreadlePress,
  };
}