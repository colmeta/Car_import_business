import { Quote } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Testimonials | AJ24 MOTORS',
    description: 'See what our satisfied clients have to say.',
};

export default function TestimonialsPage() {
    return (
        <main className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold mb-8 text-white">Client Success Stories</h1>
                <div className="glass-card p-12 max-w-2xl mx-auto">
                    <Quote className="h-12 w-12 text-brand-400 mx-auto mb-6" />
                    <p className="text-xl text-slate-300 italic mb-6">
                        "The most transparent car buying experience I've ever had.
                        AJ24 MOTORS delivered exactly what they promised."
                    </p>
                    <p className="font-bold text-white">- Sarah K., Kampala</p>
                </div>
                <p className="mt-12 text-slate-500">More testimonials coming soon.</p>
            </div>
        </main>
    );
}
