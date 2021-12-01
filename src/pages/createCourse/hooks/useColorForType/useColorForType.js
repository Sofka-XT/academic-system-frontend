import { useState, useEffect } from 'react';

export const useColorForType = (ruleType) => {
  const [color, setColor] = useState();

  useEffect(() => {
    const assingColorName = () => {
      if (ruleType === 'DANGER') {
        return 'Roja';
      }
      return ruleType === 'WARNING' ? 'Amarilla' : 'Verde';
    };

    setColor(assingColorName());
  }, [ruleType]);
  return {
    color,
  };
};
