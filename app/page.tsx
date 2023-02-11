import { ThemeProvider } from 'next-themes';

function Index() {
  return (
    <div className="flex items-center justify-center h-screen">
      <button className="rounded-xl px-5 py-2 bg-orange-200 text-orange-500 text-lg font-medium hover:bg-orange-300 active:bg-orange-200 active:scale-95 duration-300">
        Hello, Next.js 13!
      </button>

      <div className="text-6xl text-[#fb0067]">
        222
      </div>
    </div>
  );
}

export default Index;
