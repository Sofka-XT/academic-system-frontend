import { useState, useEffect } from 'react';

export const useColorBg = (ruleType) => {
  const [colorBg, setColorBg] = useState();

  useEffect(() => {
    const assingColorBg = () => {
      if (ruleType === 'DANGER') {
        return 'rule_red';
      }
      return ruleType === 'WARNING' ? 'rule_yellow' : 'rule_green';
    };

    setColorBg(assingColorBg());
  }, [ruleType]);
  return {
    colorBg,
  };
};
