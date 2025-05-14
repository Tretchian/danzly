import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import "../globals.css";

const unbounded = Unbounded({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Авторизация",
  description: "Вход на платформу",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={unbounded.className}>
            {children}
        </div>
    );
}
