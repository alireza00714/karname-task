import { useQuery } from "@tanstack/react-query";
import { getAllQuestions } from "../../../services/api/functions";
import QuestionBox from "./QuestionBox";

const QuestionListContainer = () => {
  /* Api Call */
  const query = useQuery({
    queryKey: ["questions"],
    queryFn: getAllQuestions,
    staleTime: 5000,
    refetchInterval: 5000,
  });

  return (
    <main className="flex flex-col gap-5 px-14 py-8">
      {query.data?.map((question) => (
        <QuestionBox
          key={question.id}
          id={question.id}
          creationTime={question.creationTime}
          isRead={question.isRead}
          question={question.question}
          title={question.title}
        />
      ))}
    </main>
  );
};

export default QuestionListContainer;
