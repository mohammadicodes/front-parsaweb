import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
        <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}