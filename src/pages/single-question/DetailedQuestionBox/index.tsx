import type { FC } from "react";
import { SingleAnswerType, SingleQuestionType } from "../../../services/types";

interface Props {
  questionProps: SingleQuestionType;
  answers: SingleAnswerType[];
}

const DetailedQuestionBox: FC<Props> = (props) => {
  const {
    questionProps: { creationTime, details, question, title },
    answers,
  } = props;

  const repliesCount = answers.length;

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
          <span className="flex items-center gap-1">
            <img src="/assets/icons/Comment.svg" alt="" />
            <span className="text-graydark">{repliesCount}</span>
          </span>
        </span>
      </div>
      <div className="flex flex-col gap-5 bg-graylightest px-4 py-4 rounded-b-lg">
        <span>{question}</span>
        <span>{details}</span>
      </div>
    </div>
  );
};

export default DetailedQuestionBox;
