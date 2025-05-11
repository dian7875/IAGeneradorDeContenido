import api from "../lib/axios";

export const generateText = async (prompt: { prompt: string }) => {
  const data = await api.post("/prompts", prompt);
  return data;
};

export const getPrompts = async () => {
  const data = await api.get("/prompts");
  return data.data;
};

export const deletePromt = async (id: number) => {
  const data = await api.delete(`/prompts/${id}`);
  return data;
};

export const regenerateResponse = async (id: number) => {
  const data = await api.post(`prompts/${id}/regenerate`);
  return data;
};
