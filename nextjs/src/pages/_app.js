import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="flex justify-center">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
