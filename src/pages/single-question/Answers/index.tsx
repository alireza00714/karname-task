import { SingleAnswerType } from "../../../services/types";
import AnswerBox from "./AnswerBox";
import type { FC } from "react";
import type {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from "@tanstack/react-query";

interface Props {
  answers: SingleAnswerType[];
  questionId: number | string;
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<SingleAnswerType[], unknown>>;
}

const AnswersListContainer: FC<Props> = (props) => {
  const { answers, questionId, refetch } = props;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-extrabold">پاسخ ها</h2>
      <div className="flex flex-col gap-5">
        {answers.map((answer) => (
          <AnswerBox
            key={answer.id}
            questionId={questionId}
            answer={answer.answer}
            author={answer.author}
            creationTime={answer.creationTime}
            id={answer.id}
            reactions={answer.reactions}
            refetch={refetch}
          />
        ))}
      </div>
    </div>
  );
};

export default AnswersListContainer;
