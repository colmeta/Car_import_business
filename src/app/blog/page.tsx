import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog | AJ24 MOTORS',
    description: 'Latest news and updates from the automotive world.',
};

export default function BlogPage() {
    return (
        <main className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold mb-8 text-white">Importers Journal</h1>
                <div className="glass-card p-12 max-w-2xl mx-auto">
                    <p className="text-xl text-slate-300">
                        Our team is preparing high-quality content to keep you informed about
                        import regulations, new market trends, and vehicle reviews.
                    </p>
                    <p className="mt-8 text-brand-400 font-semibold">Stay tuned for our first post!</p>
                </div>
            </div>
        </main>
    );
}
