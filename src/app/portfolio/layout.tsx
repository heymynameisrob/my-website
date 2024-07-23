import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Portfolio of heymynameisrob",
  description: "My personal website yeah bitch",
};

export default function PortfolioLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <main>
      {children}
      {modal}
    </main>
  );
}
