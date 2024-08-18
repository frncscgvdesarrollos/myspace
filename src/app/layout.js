// import Cubo from "./components/Cubo";
import "./globals.css";


export const metadata = {
  title: "Francisco Guerra - Portfolio",
  description: "Desarrollador Web Full Stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-[20rem] md:w-[40rem] lg:w-[60rem] mx-auto">
          {/* <Cubo /> */}
          <main className="mt-52 md:mt-32 lg:mt-0">
            {children}
          </main>
      </body>
    </html>
  );
}
