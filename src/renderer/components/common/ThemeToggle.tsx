interface ThemeToggleProps {
    theme: "light" | "dark"
    setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>
  }
  
  export function ThemeToggle({ theme, setTheme }: ThemeToggleProps) {
    return (
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="p-2"
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
    )
  }