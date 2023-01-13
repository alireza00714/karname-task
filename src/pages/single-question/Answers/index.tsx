import AnswerBox from "./AnswerBox";

const AnswersListContainer = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-extrabold">پاسخ ها</h2>
      <div className="flex flex-col gap-5">
        <AnswerBox />
        <AnswerBox />
        <AnswerBox />
        <AnswerBox />
      </div>
    </div>
  );
};

export default AnswersListContainer;
