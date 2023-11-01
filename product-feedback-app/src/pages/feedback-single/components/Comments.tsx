import Container from "@/components/Container";
import Comment from "./Comment";

function Comments() {
  return (
    <div className="text-gray-700">
      <Container>
        <div className="bg-white shadow-md rounded-md p-6 px-8 space-y-8">
          <h2 className="font-bold">4 Comments</h2>
          <div className="space-y-14">
            <Comment
              author={{
                name: "Elijah Moss",
                username: "hexagon.bestagon",
              }}
              text="Also, please allow styles to be applied based on system preferences.
            I would love to be able to browse Frontend Mentor in the evening
            after my device's dark mode turns on without the bright background
            it currently has."
            />
            <Comment
              author={{
                name: "Elijah Moss",
                username: "hexagon.bestagon",
              }}
              text="Also, please allow styles to be applied based on system preferences.
            I would love to be able to browse Frontend Mentor in the evening
            after my device's dark mode turns on without the bright background
            it currently has."
            />
            <Comment
              author={{
                name: "Elijah Moss",
                username: "hexagon.bestagon",
              }}
              text="Also, please allow styles to be applied based on system preferences.
            I would love to be able to browse Frontend Mentor in the evening
            after my device's dark mode turns on without the bright background
            it currently has."
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Comments;
