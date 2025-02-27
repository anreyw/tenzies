import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tenzies",
  description: "Roll the dice and race against time in this fun and addictive Tenzies web app! Match all ten dice as fast as you can—perfect for quick, casual gameplay. Try it now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.className}>
      <body className="flex items-center justify-center h-screen bg-slate-800">
	<main className="bg-zinc-100 size-4/5 rounded-lg flex flex-col items-center justify-center gap-8">
	  <h1 className="text-3xl font-bold">Tenzies</h1>
          {children}
	</main>
      </body>
    </html>
  );
}
