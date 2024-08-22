import { updateVisit } from "./firebase";
import "./globals.css";


export const metadata = {
  title: "Francisco Guerra - Full Stack Developer - Portfolio",
  description: "Desarrollador Web Full Stack",
  keywords: "Francisco Guerra, Full Stack Developer, Desarrollador Web, Portfolio, JavaScript, React, Web Development, Portafolio, Argentino La pampa Santa Rosa",
  author: "Francisco Guerra",
  robots: "index, follow",
  canonical: "https://frncscgvdesarrollos.vercel.app",
};

export default function RootLayout({ children }) {
  async function handleVisitas () {
    try {
      await updateVisit();
    } catch (error) {
      console.log(error);
    }
  }
 handleVisitas();
 
  return (
    <html lang="en">
      <head >
        <link rel="icon" href="/icons/favicon.ico" type="image/x-icon" />
      </head>
     <body className="w-[100%] md:w-[40rem] lg:w-[60rem] lg:mx-auto overflow-x-hidden lg:overflow-y-hidden">
            {children}
      </body>
    </html>
  );
}
