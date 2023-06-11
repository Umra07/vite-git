import { useState } from 'react';
import { StackVisualizerWrapper } from './style';

const StackVisualizer = () => {
  const [text, setText] = useState('');
  const [stack, setStack] = useState<string[]>([]);

  return (
    <StackVisualizerWrapper>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </StackVisualizerWrapper>
  );
};

export default StackVisualizer;
