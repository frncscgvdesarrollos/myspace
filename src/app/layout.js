// import Cubo from "./components/Cubo";
import "./globals.css";


export const metadata = {
  title: "Francisco Guerra - Portfolio",
  description: "Desarrollador Web Full Stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-[100vw] md:w-[40rem] lg:w-[60rem] mx-auto ">
          {/* <Cubo /> */}
          <main >
            {children}
          </main>
      </body>
    </html>
  );
}
