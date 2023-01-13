import {
  useMutation,
  useQueryClient,
  type RefetchOptions,
  type RefetchQueryFilters,
  type QueryObserverResult,
} from "@tanstack/react-query";
import { FC } from "react";
import { voteForAnswer } from "../../../services/api/functions";
import { SingleAnswerType } from "../../../services/types";

interface Props {
  id: string | number;
  author: string;
  creationTime: number;
  answer: string;
  reactions: {
    like: number;
    dislike: number;
  };
  questionId: string | number;
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<SingleAnswerType[], unknown>>;
}

const AnswerBox: FC<Props> = (props) => {
  const {
    answer,
    author,
    creationTime,
    id,
    reactions: { like, dislike },
    questionId,
    refetch,
  } = props;

  const queryClient = useQueryClient();
  const positiveVoteMutation = useMutation({
    mutationFn: () => voteForAnswer(id, like + 1, dislike),
    onSuccess: (data) => {
      refetch();
    },
  });
  const negativeVoteMutatation = useMutation({
    mutationFn: () => voteForAnswer(id, like, dislike + 1),
    onSuccess: () => {
      refetch();
    },
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

  const handlePositiveVote = () => {
    positiveVoteMutation.mutate();
  };

  const handleNegativeVote = () => {
    negativeVoteMutatation.mutate();
  };

  return (
    <div className="flex flex-col rounded-lg bg-graylightest shadow-md relative">
      <div className="flex justify-between items-center px-4 py-4 rounded-lg bg-white shadow-sm relative left-0 right-0 top-0 z-[1]">
        <span className="flex gap-4">
          <img src="/assets/images/person.png" alt="" />
          <h3 className="pt-1 text-base font-bold">{author}</h3>
        </span>
        <span className="flex gap-16">
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
          <span className="flex gap-8">
            <span className="flex items-center gap-1">
              <img src="/assets/icons/Happy.svg" alt="" />
              <span className="text-graydark">{like}</span>
            </span>
            <span className="flex items-center gap-1">
              <img src="/assets/icons/Sad.svg" alt="" />
              <span className="text-graydark">{dislike}</span>
            </span>
          </span>
        </span>
      </div>
      <div className="flex flex-col gap-5 bg-graylightest px-4 py-4 rounded-b-lg">
        <span>{answer}</span>
        <span className="flex justify-end gap-3">
          <button
            className="flex items-center gap-2 rounded-md border border-[#E4E9EC] px-2.5 py-2"
            onClick={handlePositiveVote}
          >
            <img src="/assets/icons/Happy.svg" alt="" />
            <span className="text-sm font-bold text-[#66CB9F]">
              پاسخ خوب بود
            </span>
          </button>
          <button
            className="flex items-center gap-2 rounded-md border border-[#E4E9EC] px-2.5 py-2"
            onClick={handleNegativeVote}
          >
            <img src="/assets/icons/Sad.svg" alt="" />
            <span className="text-sm font-bold text-[#F16063]">
              پاسخ خوب نبود
            </span>
          </button>
        </span>
      </div>
    </div>
  );
};

export default AnswerBox;
