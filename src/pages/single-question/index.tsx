import { useQueries } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import { getAllAnswers, getSingleQuestion } from "../../services/api/functions";
import AnswerConfirmation from "./AnswerConfirmation";
import AnswersListContainer from "./Answers";
import DetailedQuestionBox from "./DetailedQuestionBox";

const SingleQuestionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const results = useQueries({
    queries: [
      {
        queryKey: ["question", id],
        queryFn: () => getSingleQuestion(id!),
        staleTime: Infinity,
      },
      {
        queryKey: ["answers", id],
        queryFn: () => getAllAnswers(id!),
        staleTime: 5000,
      },
    ],
  });

  const question = results[0];
  const answers = results[1];

  if (!question.data || !answers.data) return <div>Loading...</div>;

  if (!id) navigate("/");

  return (
    <>
      <Header persianPageName="جزئیات سوال" />
      <main className="flex flex-col gap-5 px-14 py-8">
        <DetailedQuestionBox
          answers={answers.data}
          questionProps={question.data}
        />
        <AnswersListContainer
          answers={answers.data}
          refetch={answers!.refetch}
          questionId={question.data.id}
        />
        <AnswerConfirmation />
      </main>
    </>
  );
};

export default SingleQuestionPage;
