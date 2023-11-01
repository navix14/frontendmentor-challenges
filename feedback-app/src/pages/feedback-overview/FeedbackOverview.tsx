import Feedback from "@/components/Feedback";
import { AddFeedbackBar, Header } from "./components";
import { mockFeedbacks } from "@/data/feedbacks";

function FeedbackOverview() {
  return (
    <>
      <Header />
      <AddFeedbackBar />
      <div className="space-y-8">
        {mockFeedbacks.map((feedback) => (
          <Feedback key={feedback.id} feedback={feedback} />
        ))}
      </div>
    </>
  );
}

export default FeedbackOverview;
