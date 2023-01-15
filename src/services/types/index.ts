export type SingleAnswerType = {
  id: string | number;
  questionId: string | number;
  author: string;
  creationTime: number;
  answer: string;
  reactions: {
    like: number;
    dislike: number;
  };
};

export type SingleQuestionType = {
  id: number | string;
  author: string;
  title: string;
  question: string;
  details: string;
  isRead: boolean;
  creationTime: number;
  answersCount: number;
};
