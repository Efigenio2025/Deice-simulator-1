
import React, { useState } from 'react';

const scenarios = [
  {
    id: 1,
    prompt: "Ramp, we are ready for deicing.",
    expected: "Captain, please prepare the aircraft for deicing."
  },
  {
    id: 2,
    prompt: "Deicing complete. Please provide post-deicing communication.",
    expected: "Captain, American Eagle 4321, you have been anti-iced with Type IV, Cryotech Polar Guard X-Tend at 100%, starting at 13:48. Post deicing/anti-icing check complete, deicing personnel and equipment are safely away."
  }
];

function App() {
  const [step, setStep] = useState(0);
  const [response, setResponse] = useState('');
  const [score, setScore] = useState(null);

  const handleCheck = () => {
    const expected = scenarios[step].expected.toLowerCase().trim();
    const actual = response.toLowerCase().trim();
    let similarity = 0;
    const expectedWords = expected.split(' ');
    const actualWords = actual.split(' ');
    const matchCount = expectedWords.filter(word => actualWords.includes(word)).length;
    similarity = Math.round((matchCount / expectedWords.length) * 100);
    setScore(similarity);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Deice Communication Simulator</h1>
      <p><strong>Pilot:</strong> {scenarios[step].prompt}</p>
      <textarea
        rows="4"
        cols="80"
        value={response}
        onChange={(e) => setResponse(e.target.value)}
        placeholder="Speak or type your response here..."
      />
      <br />
      <button onClick={handleCheck}>Check Response</button>
      {score !== null && (
        <p>Score: {score}% match</p>
      )}
    </div>
  );
}

export default App;
