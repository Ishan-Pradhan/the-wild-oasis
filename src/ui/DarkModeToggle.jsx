import { HiOutlineLightBulb, HiOutlineMoon } from "react-icons/hi";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineLightBulb /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
