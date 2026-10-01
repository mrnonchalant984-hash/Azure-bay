import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Azure Bay Hotel", description: "A refined coastal stay with rooms, dining and unforgettable service." };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
