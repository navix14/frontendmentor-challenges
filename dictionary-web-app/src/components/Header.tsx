import { PiBookThin, PiCaretDownBold } from "react-icons/pi";
import { CiDark, CiLight } from "react-icons/ci";
import Container from "./Container";
import { useState } from "react";

function Header() {
  const [isDark, setIsDark] = useState<boolean | null>(
    document.documentElement.classList.contains("dark")
  );

  const onToggleDarkMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    }
  };

  return (
    <Container>
      <header className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <PiBookThin color={"#898989"} size={40} />
        </div>
        {/* Right */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-3">
            <h3 className="font-semibold text-sm">Serif</h3>
            <PiCaretDownBold color={"#8b65a7"} />
          </div>
          <div onClick={onToggleDarkMode}>
            {!isDark && <CiLight size={32} color={"#8b65a7"} />}
            {isDark && <CiDark size={32} color={"#8b65a7"} />}
          </div>
        </div>
      </header>
    </Container>
  );
}

export default Header;
