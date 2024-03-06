import Link from "next/link";

function BlogPage() {
  return (
    <main>
      <h1>Blog</h1>
      <p>
        <Link href="/blog/post-1">1 Post</Link>
      </p>
      <p>
        <Link href="/blog/post-2">2 Post</Link>
      </p>
    </main>
  );
}

export default BlogPage;
