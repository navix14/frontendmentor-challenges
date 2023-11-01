import Container from "@/components/Container";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  return (
    <div className="bg-gray-800">
      <Container>
        <div className="flex justify-between items-center py-6">
          <div className="space-y-1">
            <h1 className="text-xl font-semibold">Frontend Mentor</h1>
            <h2 className="text-sm">Feedback Board</h2>
          </div>
          <div>
            <GiHamburgerMenu size={32} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
