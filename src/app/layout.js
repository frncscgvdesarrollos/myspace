import "./globals.css";


export const metadata = {
  title: "Francisco Guerra - Full Stack Developer - Portfolio",
  description: "Desarrollador Web Full Stack",
  keywords: "Francisco Guerra, Full Stack Developer, Desarrollador Web, Portfolio, JavaScript, React, Web Development, Portafolio, Argentino La pampa Santa Rosa",
  author: "Francisco Guerra",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  canonical: "https://frncscgvdesarrollos.vercel.app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="../public/icons/favicon.ico" />
      </head>
     <body className="w-[100%] md:w-[40rem] lg:w-[60rem] lg:mx-auto overflow-x-hidden">
            {children}
      </body>
    </html>
  );
}
