import Link from 'next/link';
import {Header} from "@/components/Header";
export default function Home() {
    return (
        <main>
            <Header></Header>
            <p>🔥 Let&apos;s get started! 🔥</p>
            <p><Link href="/about">About us</Link></p>
        </main>
    );
}
