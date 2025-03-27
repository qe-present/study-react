import Link from "next/link";

export default function BlogPostPage({params}) {
    const {slug}= params;
    return <main>
        <h1> Blog Post</h1>
        <p>{slug}</p>
    </main>
}