import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { readSingleQuestion } from "../../../services/api/functions";

interface Props {
  id: number | string;
  title: string;
  question: string;
  isRead: boolean;
  creationTime: number;
}

const QuestionBox: FC<Props> = (props) => {
  const { id, creationTime, isRead, question, title } = props;

  const navigate = useNavigate();
  
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => readSingleQuestion(id, true),
  });

  const dateTime = new Date(creationTime);
  const seperatedTime = dateTime.toLocaleTimeString("fa-IR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const seperatedDate = dateTime.toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const handleNavigateToSingleQuestionPage = () => {
    if (!isRead) {
      mutation.mutate();
      queryClient.invalidateQueries({ queryKey: ["questions"] });
    }

    navigate(`/questions/${id}`);
  };

  return (
    <div className="flex flex-col rounded-lg bg-graylightest shadow-md relative">
      <div className="flex justify-between items-center px-4 py-4 rounded-lg bg-white shadow-sm relative left-0 right-0 top-0 z-[1]">
        <span className="flex gap-4">
          <img src="/assets/images/person.png" alt="" />
          <h3 className="pt-1 text-base font-bold">{title}</h3>
        </span>
        <span className="flex gap-5">
          <span className="flex gap-3">
            <span className="flex items-center gap-1">
              <span className="text-graydark text-sm font-normal">ساعت :</span>
              <span className="text-black font-bold">{seperatedTime}</span>
            </span>
            <span className="w-px bg-black bg-opacity-10"></span>
            <span className="flex items-center gap-1">
              <span className="text-graydark text-sm font-normal">تاریخ :</span>
              <span className="text-black font-bold">{seperatedDate}</span>
            </span>
          </span>
          <span className="flex items-center gap-1.5">
            <img src="/assets/icons/Comment.svg" alt="" />
            <span className="text-graydark">20</span>
          </span>
        </span>
      </div>
      <div className="flex flex-col gap-5 bg-graylightest px-4 py-4 rounded-b-lg">
        <span>{question}</span>
        <span>
          {isRead ? (
            <button
              className="btn-secondary-read mr-auto float-left"
              onClick={handleNavigateToSingleQuestionPage}
            >
              مشاهده جزئیات
            </button>
          ) : (
            <button
              className="btn-secondary mr-auto float-left"
              onClick={handleNavigateToSingleQuestionPage}
            >
              مشاهده جزئیات
            </button>
          )}
        </span>
      </div>
    </div>
  );
};

export default QuestionBox;
