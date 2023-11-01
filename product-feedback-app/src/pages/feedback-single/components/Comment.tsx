import { BsPersonCircle } from "react-icons/bs";

type CommentProps = {
  author: {
    name: string;
    username: string;
  };
  text: string;
};

function Comment({ author, text }: CommentProps) {
  return (
    <div className="flex space-x-4">
      <div>
        <BsPersonCircle size={40} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <div>
            <h1 className="font-bold">{author.name}</h1>
            <h2 className="text-gray-500">@{author.username}</h2>
          </div>
          <a href="#" className="text-blue-600 font-bold self-end">
            Reply
          </a>
        </div>
        <div>
          <p className="leading-8 text-gray-600">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
