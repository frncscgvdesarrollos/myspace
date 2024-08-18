// import Cubo from "./components/Cubo";
import "./globals.css";


export const metadata = {
  title: "Francisco Guerra - Portfolio",
  description: "Desarrollador Web Full Stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex bg-slate-900">
          {/* <Cubo /> */}
          <main className="overflow-hidden">
            {children}
          </main>
      </body>
    </html>
  );
}
