import './globals.css';
import { Sora } from 'next/font/google';
import Footer from '@/components/Footer';
import { Header } from '@/components/Header';
import { Providers } from './redux/provider';

const inter = Sora({ subsets: ['latin'] });

export const metadata = {
    title: 'Dine Market',
    description: 'Shop your quality products',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Providers>
                <body className={`${inter.className}`}>
                    <div className="container scroll-smooth">
                        <Header />
                        {children}
                    </div>
                    <Footer />
                </body>
            </Providers>
        </html>
    );
}
