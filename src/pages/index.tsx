// import { Copy, Trash } from "lucide-react";
import localFont from "next/font/local";
// import { useRef, useState } from "react";
import { useState } from "react";
import { Toaster, toast } from "sonner";


// const recientUrls = [
//   {
//     shortUrl: "shrtnr.app/D0rgpMzo",
//     longUrl: "https://www.google.com/search?sca_esv=ff698a007cca6e58&q=underneath&sa=X&ved=2ahUKEwicqoToqYKKAxVMCbkGHfpBMI4Q7xYoAHoECA4QAQ&biw=1440&bih=794&dpr=2"
//   }, {
//     shortUrl: "shrtnr.app/D0rgpMzo",
//     longUrl: "https://www.google.com/search?sca_esv=ff698a007cca6e58&q=underneath&sa=X&ved=2ahUKEwicqoToqYKKAxVMCbkGHfpBMI4Q7xYoAHoECA4QAQ&biw=1440&bih=794&dpr=2"
//   }, {
//     shortUrl: "shrtnr.app/D0rgpMzo",
//     longUrl: "https://www.google.com/search?sca_esv=ff698a007cca6e58&q=underneath&sa=X&ved=2ahUKEwicqoToqYKKAxVMCbkGHfpBMI4Q7xYoAHoECA4QAQ&biw=1440&bih=794&dpr=2"
//   }, {
//     shortUrl: "shrtnr.app/D0rgpMzo",
//     longUrl: "https://www.google.com/search?sca_esv=ff698a007cca6e58&q=underneath&sa=X&ved=2ahUKEwicqoToqYKKAxVMCbkGHfpBMI4Q7xYoAHoECA4QAQ&biw=1440&bih=794&dpr=2"
//   }, {
//     shortUrl: "shrtnr.app/D0rgpMzo",
//     longUrl: "https://www.google.com/search?sca_esv=ff698a007cca6e58&q=underneath&sa=X&ved=2ahUKEwicqoToqYKKAxVMCbkGHfpBMI4Q7xYoAHoECA4QAQ&biw=1440&bih=794&dpr=2"
//   }, {
//     shortUrl: "shrtnr.app/D0rgpMzo",
//     longUrl: "https://www.google.com/search?sca_esv=ff698a007cca6e58&q=underneath&sa=X&ved=2ahUKEwicqoToqYKKAxVMCbkGHfpBMI4Q7xYoAHoECA4QAQ&biw=1440&bih=794&dpr=2"
//   }, {
//     shortUrl: "shrtnr.app/D0rgpMzo",
//     longUrl: "https://www.google.com/search?sca_esv=ff698a007cca6e58&q=underneath&sa=X&ved=2ahUKEwicqoToqYKKAxVMCbkGHfpBMI4Q7xYoAHoECA4QAQ&biw=1440&bih=794&dpr=2"
//   }, {
//     shortUrl: "shrtnr.app/D0rgpMzo",
//     longUrl: "https://www.google.com/search?sca_esv=ff698a007cca6e58&q=underneath&sa=X&ved=2ahUKEwicqoToqYKKAxVMCbkGHfpBMI4Q7xYoAHoECA4QAQ&biw=1440&bih=794&dpr=2"
//   },
// ]

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

function isValidURL(str: string) {
  const pattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)?$/;
  return pattern.test(str);
}


export default function Home() {
  const [inputUrl, setInputUrl] = useState('');
  // const urlRef = useRef<HTMLAnchorElement>(null);

  const handleShortenLink = () => {
    if (inputUrl === "") return;
    if (!isValidURL(inputUrl)) {
      toast.error('Invalid URL');
      return;
    };
  }

  // const handleCopy = () => {
  //   if (urlRef.current) {
  //     const text = urlRef.current.innerText;

  //     navigator.clipboard.writeText(text)
  //       .then(() => toast.success('Successfuly copied'))
  //       .catch(() => toast.error('Something went wrong'));
  //   }
  // }

  return (
    <main className={`max-w-lg m-auto min-h-svh ${geistMono.variable} font-[family-name:var(--font-geist-mono)]`}>
      <Toaster />

      <header>
        <h1 className="pt-16 pb-6 text-center text-6xl font-bold">shrtnr</h1>
        <p className="text-center pb-12 text-balance">transform long links into sleek, shareable URLs in a snap. <mark>a fast and simple link shortener.</mark></p>
      </header>

      <section>
        <input
          className="border-black border-t-2 border-x-2  w-[100%] h-16 px-4 text-center focus:outline-none focus:bg-gray-50 transform-all"
          placeholder="https://long-link-goes-here.com"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value.trim())}
        />

        <div className="h-16 w-[100%] flex justify-center">
          <button
            onClick={handleShortenLink}
            className="w-full font-bold text-white border-2 border-black bg-black hover:bg-black/50 transition-colors">
            short it 🔗
          </button>
        </div>
      </section>

      {/* <section className="mb-16">
        {
          recientUrls.map(({ shortUrl, longUrl }) =>
            <div
              key={shortUrl}
              className="h-20 w-[100%] px-4 bg-gray-50 flex place-items-center justify-between gap-8 border-black/10 border-b border-x border-dashed"
            >
              <div className="flex flex-col w-[80%]">
                <a ref={urlRef} href={`${shortUrl}`} className="truncate">{shortUrl}</a>
                <a href={`${longUrl}`} className="truncate text-gray-400 text-xs">{longUrl}</a>
              </div>

              <div className="flex flex-row gap-4">
                <button className="text-black hover:scale-95 hover:text-black/50 transition-all" onClick={handleCopy}><Copy size={22} strokeWidth={1.2} absoluteStrokeWidth /></button>
                <button className="text-black hover:scale-95 hover:text-black/50 transition-all"><Trash size={22} strokeWidth={1.2} absoluteStrokeWidth /></button>
              </div>
            </div>
          )
        }
      </section> */}
    </main>
  );
}