import { getPost, getPostsMeta } from '@/lib/posts';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getPostsMeta();
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return { title: `${post.meta.title} — Luminary` };
}

export default function PostPage({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <main>
      <div className="blog-hero">
        {post.meta.tag && <p className="section-label">✦ {post.meta.tag}</p>}
        <h1>{post.meta.title}</h1>
        <p className="meta">{post.meta.date}</p>
      </div>
      <article className="blog-content">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
      <div style={{ textAlign: 'center', paddingBottom: '6rem' }}>
        <Link href="/blog" className="btn btn-secondary">← All posts</Link>
      </div>
    </main>
  );
}
