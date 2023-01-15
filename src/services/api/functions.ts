import customInstance from ".";
import type { SingleAnswerType, SingleQuestionType } from "../types";

export const getAllAnswers = async (questionId: string | number) => {
  const res = await customInstance.get<SingleAnswerType[]>(
    `/answers?questionId=${questionId}`
  );
  return res.data;
};

export const createAnswer = async (answer: SingleAnswerType) => {
  const res = await customInstance.post<SingleAnswerType>("/answers", answer);
  return res.data;
};

export const voteForAnswer = async (
  answerId: string | number,
  like: number,
  dislike: number
) => {
  const res = await customInstance.patch<SingleAnswerType>(
    `/answers/${answerId}`,
    { reactions: { like, dislike } }
  );
  return res.data;
};

export const getAllQuestions = async () => {
  const res = await customInstance.get<SingleQuestionType[]>("/questions");
  return res.data;
};

export const getSingleQuestion = async (id: number | string) => {
  const res = await customInstance.get<SingleQuestionType>(`/questions/${id}`);
  return res.data;
};

export const readSingleQuestion = async (
  id: string | number,
  isRead: boolean
) => {
  const res = await customInstance.patch<SingleQuestionType>(
    `/questions/${id}`,
    {
      isRead,
    }
  );
  return res.data;
};

export const createQuestion = async (question: SingleQuestionType) => {
  const res = await customInstance.post<SingleQuestionType>(
    "/questions",
    question
  );
  return res.data;
};
