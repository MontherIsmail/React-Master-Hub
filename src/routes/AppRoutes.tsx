import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Todo from "../pages/Todo";
import Notes from "../pages/Notes";
import Expenses from "../pages/Expenses";
import Flashcards from "../pages/Flashcards";
import Auth from "../pages/Auth";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
