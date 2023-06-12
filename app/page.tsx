import Features from '@/components/Features';
import Hero from '@/components/Hero';
import NewsLetter from '@/components/NewsLetter';
import Products from '@/components/Products';
import Promotions from '@/components/Promotions';

export default function Home() {
    return (
        <main>
            <Hero />
            <Promotions />
            <Products />
            <Features />
            <NewsLetter />
        </main>
    );
}
