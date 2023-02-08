// pages/index.tsx
import { useTheme } from "next-themes";


export default function IndexPage() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () =>
    setTheme(theme === "light" ? "dark" : "light");

  return (
    <div>
      <h1>The current theme is {theme === "dark" ? "dark" : "light"}</h1>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
}