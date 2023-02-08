import { ThemeProvider } from 'next-themes';

const Index = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <button className="px-5 py-2 rounded-xl bg-orange-200 text-orange-500 text-lg font-medium hover:bg-orange-300 active:bg-orange-200 active:scale-95 duration-300">
        Hello, Next.js 13!
      </button>

      <div className=''>dddd</div>
    </div>
  );
};

export default Index;
