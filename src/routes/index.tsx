import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuestionListPage from "../pages/question-list";
import SingleQuestionPage from "../pages/single-question";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuestionListPage />} />
        <Route path="/question/:id" element={<SingleQuestionPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
