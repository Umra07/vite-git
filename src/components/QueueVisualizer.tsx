import { useState } from 'react';

const QueueVisualizer = () => {
  const [text, setText] = useState<string>('');
  const [queue, setQueue] = useState<string[]>([]);

  const handleClickedPush = () => {
    if (text.trim()) setQueue((prevQueue) => [text, ...prevQueue]);
    setText('');
  };

  const handleClickedDelete = () => {
    setQueue((prevQueue) => {
      const newQueue = [...prevQueue];
      newQueue.pop();
      return newQueue;
    });
  };

  return (
    <>
      <div>
        <input type={text} value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleClickedPush}>Push</button>
        <button onClick={handleClickedDelete}>Delete</button>
      </div>
      <ul>
        {queue.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default QueueVisualizer;
