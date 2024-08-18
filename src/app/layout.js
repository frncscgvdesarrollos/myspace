// import Cubo from "./components/Cubo";
import "./globals.css";


export const metadata = {
  title: "Francisco Guerra - Portfolio",
  description: "Desarrollador Web Full Stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex ">
          {/* <Cubo /> */}
          <main className="">
            {children}
          </main>
      </body>
    </html>
  );
}
