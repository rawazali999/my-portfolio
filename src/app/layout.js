import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/Theme/themeContext";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Rawaz Ali",
  description: "Rawaz Ali's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body
          className={`bg-slate-50 text-slate-900 dark:bg-main dark:text-white  ${poppins.className}`}
        >
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
