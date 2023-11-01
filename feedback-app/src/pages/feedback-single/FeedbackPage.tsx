import { ButtonVariants, FeedbackType } from "@/types";
import { mockFeedbacks } from "@/data/feedbacks";
import { Container, Feedback, Button } from "@/components";
import { Comments } from "./components";
import { PiCaretLeftBold } from "react-icons/pi";
import { Link, useParams } from "react-router-dom";

type FeedbackParams = {
  feedbackId: string;
};

function FeedbackPage() {
  const params = useParams<FeedbackParams>();

  const feedback = mockFeedbacks.find(
    (feedback: FeedbackType) => feedback.id === parseInt(params.feedbackId!)
  )!;

  return (
    <div className="space-y-8">
      <Container>
        <div className="flex justify-between mt-5">
          <Link to={"/"}>
            <div className="flex items-center space-x-2">
              <div className="text-blue-700">
                <PiCaretLeftBold size={16} />
              </div>
              <h1 className="text-slate-500 font-bold text-lg">Go Back</h1>
            </div>
          </Link>
          <Button text="Edit Feedback" variant={ButtonVariants.Blue} />
        </div>
      </Container>
      <Feedback feedback={feedback} />
      <Comments />
    </div>
  );
}

export default FeedbackPage;
