import "./globals.css";
import MainHeader from "@/components/main-header/main-header";

// metadata is propagated down to all nested pages. but page metadata will override this metadata
export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
