import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Rawaz Ali",
  description: "Rawaz Ali's personal website ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-main text-white  ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
