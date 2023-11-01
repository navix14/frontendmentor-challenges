import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FeedbackOverview, FeedbackPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FeedbackOverview />,
  },
  {
    path: "feedbacks/:feedbackId",
    element: <FeedbackPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
