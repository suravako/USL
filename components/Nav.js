'use client';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href="/" className="nav-logo">
        U<span>S</span>L
      </Link>
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/chatbot">Chatbot</Link></li>
      </ul>
    </nav>
  );
}
