import Header from "../../components/Header";
import AnswerConfirmation from "./AnswerConfirmation";
import AnswersListContainer from "./Answers";
import DetailedQuestionBox from "./DetailedQuestionBox";

const SingleQuestionPage = () => {
  return (
    <>
      <Header persianPageName="جزئیات سوال" />
      <main className="flex flex-col gap-5 px-14 py-8">
        <DetailedQuestionBox />
        <AnswersListContainer />
        <AnswerConfirmation />
      </main>
    </>
  );
};

export default SingleQuestionPage;
