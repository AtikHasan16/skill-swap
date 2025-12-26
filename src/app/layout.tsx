import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import LightRays from "@/components/LightRays";
import BackgroundGradient from "@/components/BackgroundGradient";

const inter = Inter({
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skill Swap",
  description:
    "Skill Swap is a modern, secure, and user-friendly course exchange platform where users can exchange ownership of their purchased online courses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${inter.className} ${plusJakartaSans.className} antialiased min-h-screen text-white`}
      >
        <BackgroundGradient />
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={0.1}
          lightSpread={0.5}
          rayLength={1}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays absolute top-0 left-0 inset-0 z-[-1]"
        />
        <div className="">{children}</div>
      </body>
    </html>
  );
}
