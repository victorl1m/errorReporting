import { Poppins } from "next/font/google";

const font = Poppins({
  style: "normal",
  weight: "400",
  subsets: ["latin-ext"],
});

export default function MyApp({ Component, pageProps }: any) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  );
}
