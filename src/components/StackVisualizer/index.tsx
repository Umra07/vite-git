import { useState } from 'react';

const StackVisualizer = () => {
  const [text, setText] = useState('');
  const [stack, setStack] = useState<string[]>([]);

  const handleClickedPush = () => {
    setStack((stack) => [text, ...stack]);
    setText('');
  };

  const handleClickedPop = () => {
    setStack((prevStack) => {
      const newStack = [...prevStack];
      newStack.pop();
      return newStack;
    });
  };

  return (
    <>
      <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleClickedPush}>Push</button>
        <button onClick={handleClickedPop}>Pop</button>
      </div>
      <ul>
        {stack.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default StackVisualizer;
