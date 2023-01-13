import QuestionBox from "./QuestionBox";

const QuestionListContainer = () => {
  /* Api Call */

  return (
    <main className="flex flex-col gap-5 px-14 py-8">
      <QuestionBox />
      <QuestionBox />
      <QuestionBox />
    </main>
  );
};

export default QuestionListContainer;
