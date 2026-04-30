import Link from 'next/link';
import { getPostsMeta } from '@/lib/posts';

export const metadata = { title: 'Blog — Luminary' };

export default function BlogPage() {
  const posts = getPostsMeta();

  return (
    <main>
      <section className="blog-hero">
        <p className="section-label">✦ Writing</p>
        <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
          All posts
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
          {posts.length} article{posts.length !== 1 ? 's' : ''} published
        </p>
      </section>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 3rem 8rem' }}>
        {posts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '6rem 0', color: 'var(--text-muted)', fontFamily: 'var(--mono)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
            No posts yet. Add a .md file to the /posts folder.
          </div>
        ) : (
          <div className="blog-grid">
            {posts.map(post => (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <article className="blog-card">
                  {post.tag && <p className="blog-card-tag">{post.tag}</p>}
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <p className="blog-card-meta">{post.date}</p>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
