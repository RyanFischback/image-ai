const BASE_URL = 'https://your-backend.com/api';

export const getOpenAIResponse = async (prompt: string) => {
  const res = await fetch(`${BASE_URL}/openai`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt }),
  });

  const data = await res.json();
  return data;
};
