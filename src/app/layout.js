import "./globals.css";


export const metadata = {
  title: "Francisco Guerra - Full Stack Developer - Portfolio",
  description: "Desarrollador Web Full Stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Francisco Guerra, Full Stack Developer, JavaScript, React, Web Development, Portfolio" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://frncscgvdesarrollos.vercel.app" />
      </head>
      <body className="w-[100%] md:w-[40rem] lg:w-[60rem] lg:mx-auto overflow-x-hidden">
            {children}
      </body>
    </html>
  );
}
