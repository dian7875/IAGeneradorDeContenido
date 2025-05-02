import api from "../lib/axios";

export const generateText = async (prompt: { prompt: string }) => {
  const data = await api.post("/prompts", prompt);
  return data;
};
