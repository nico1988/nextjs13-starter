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
    </main>
  );
}
