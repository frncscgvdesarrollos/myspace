import "./globals.css";


export const metadata = {
  title: "Francisco Guerra - Portfolio",
  description: "Desarrollador Web Full Stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

      </head>
      <body className="w-[100%] md:w-[40rem] lg:w-[60rem] lg:mx-auto overflow-x-hidden">
            {children}
      </body>
    </html>
  );
}
