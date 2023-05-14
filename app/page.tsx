import Image from 'next/image';
import styles from './page.module.css';

export default function Index() {
  return (
    <main>
      <nav />
      <div className="mt-20">
        <h1 className="mb-3 cursor-pointer text-center text-4xl">LAPLACE</h1>
        <div className="cursor-pointer text-center">奶绿只是想偷偷睡一会</div>
      </div>
      <div className="absolute bottom-0 flex w-full justify-center">
        <Image
          className="left-0 right-0 m-auto"
          src="/milky-green-v1.avif"
          width={800}
          height={800}
        />
      </div>
    </main>
  );
}
