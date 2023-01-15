import { useQuery } from "@tanstack/react-query";
import { getAllQuestions } from "../../../services/api/functions";
import QuestionBox from "./QuestionBox";

const QuestionListContainer = () => {
  const query = useQuery({
    queryKey: ["questions"],
    queryFn: getAllQuestions,
    staleTime: 5000,
    refetchInterval: 5000,
  });

  return (
    <main className="flex flex-col gap-5 px-14 py-8">
      {query.data
        ?.sort((a, b) => (b.creationTime - a.creationTime))
        .map((question) => (
          <QuestionBox
            key={question.id}
            id={question.id}
            creationTime={question.creationTime}
            isRead={question.isRead}
            question={question.question}
            title={question.title}
            answersCount={question.answersCount}
          />
        ))}
    </main>
  );
};

export default QuestionListContainer;
