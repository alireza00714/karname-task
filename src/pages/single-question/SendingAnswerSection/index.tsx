import {
  type QueryObserverResult,
  type RefetchOptions,
  type RefetchQueryFilters,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { type FC, useState } from "react";
import { createAnswer } from "../../../services/api/functions";
import type {
  SingleAnswerType,
  SingleQuestionType,
} from "../../../services/types";

interface Props {
  questionId: string | number;
  answersRefetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<SingleAnswerType[], unknown>>;
  questionRefetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<SingleQuestionType, unknown>>;
}

const SendingAnswerSection: FC<Props> = (props) => {
  const { questionId, questionRefetch, answersRefetch } = props;

  const [answerValue, setAnswerValue] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () =>
      createAnswer({
        answer: answerValue,
        id: Date.now(),
        author: "علیرضا پیرمژدهی",
        creationTime: Date.now(),
        questionId: questionId,
        reactions: { like: 0, dislike: 0 },
      }),
    onSuccess: () => {
      questionRefetch();
      answersRefetch();
      setAnswerValue("");
    },
  });

  const handleSubmitAnswer = () => {
    mutation.mutate();
  };

  return (
    <div className="flex flex-col gap-[1.125rem]">
      <h2 className="text-2xl font-extrabold">پاسخ خود را ثبت کنید</h2>
      <div className="flex flex-col gap-2.5">
        <label className="text-graydarker" htmlFor="answerBox">
          پاسخ خود را بنویسید
        </label>
        <div className="w-full">
          <textarea
            name="answerBox"
            id="answerBox"
            placeholder="متن پاسخ..."
            className="py-3 px-4 text-sm border border-solid border-graylight focus:outline-none rounded-md h-40 resize-none w-full"
            value={answerValue}
            onChange={(e) => setAnswerValue(e.target.value)}
          ></textarea>
          <p className="text-[#F16063] text-[0.625rem] font-normal mr-4">
            محل قرارگیری متن خطا
          </p>
        </div>
        <button className="btn-primary mt-4 w-48" onClick={handleSubmitAnswer}>
          ارسال پاسخ
        </button>
      </div>
    </div>
  );
};

export default SendingAnswerSection;
