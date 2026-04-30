import Link from 'next/link';
import { getPostsMeta } from '@/lib/posts';

export default async function Home() {
  const posts = getPostsMeta();
  const recent = posts.slice(0, 3);

  return (
    <main>
      <section className="hero">
        <p className="hero-label">✦ Personal space on the internet</p>
        <h1>
          Ideas worth<br />
          <em>writing</em> about.
        </h1>
        <p className="hero-sub">
          A home for essays, experiments, and conversations — with a Claude-powered chatbot to explore ideas together.
        </p>
        <div className="hero-cta">
          <Link href="/blog" className="btn btn-primary">Read the blog →</Link>
          <Link href="/chatbot" className="btn btn-secondary">Talk to the AI</Link>
        </div>
      </section>

      <hr className="divider" />

      {recent.length > 0 && (
        <section className="section">
          <p className="section-label">✦ Recent</p>
          <h2 className="section-title">Latest writing</h2>
          <div className="blog-grid">
            {recent.map(post => (
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
        </section>
      )}
    </main>
  );
}
