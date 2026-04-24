import './globals.css';
import Nav from '@/components/Nav';

export const metadata = {
  title: 'USL — Thoughts & AI',
  description: 'USL — A personal blog and AI chatbot powered by Claude.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <footer>
          <span>© {new Date().getFullYear()} USL</span>
          <span>uslatha@gmail.com</span>
        </footer>
      </body>
    </html>
  );
}
