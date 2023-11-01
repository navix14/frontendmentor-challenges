import { ButtonVariants } from "@/types";
import { Button, Container } from "@/components";
import { BsPlus } from "react-icons/bs";

function AddFeedbackBar() {
  return (
    <div className="bg-slate-900 mb-10">
      <Container>
        <div className="flex py-3 justify-between items-center">
          <div className="flex space-x-2">
            <p>Sort by:</p>
            <p className="font-bold">Most Upvotes</p>
          </div>
          <div>
            <Button
              text="Add Feedback"
              variant={ButtonVariants.Purple}
              icon={<BsPlus />}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AddFeedbackBar;
