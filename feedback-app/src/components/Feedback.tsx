import Container from "./Container";
import { PiCaretUpBold } from "react-icons/pi";
import { FaComment } from "react-icons/fa";
import { FeedbackType } from "../types";
import { Link } from "react-router-dom";

type FeedbackProps = {
  feedback: FeedbackType;
};

function Feedback({ feedback }: FeedbackProps) {
  return (
    <div className="text-gray-700">
      <Container>
        <div className="bg-white shadow-md rounded-md p-6 px-8 space-y-4">
          <Link to={`feedbacks/${feedback.id}`}>
            <h2 className="font-bold">{feedback.title}</h2>
          </Link>
          <p className="text-gray-500">{feedback.content}</p>
          <div className="w-min bg-blue-50 font-bold text-blue-700 py-2 px-4 text-center rounded-xl">
            {feedback.category}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center bg-blue-50 font-bold text-blue-700 py-2 px-4 text-center rounded-xl gap-2">
              <PiCaretUpBold />
              <span>{feedback.num_upvotes}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-blue-200">
                <FaComment size={24} />
              </div>
              <span className="font-bold mb-[2px]">
                {feedback.num_comments}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Feedback;
