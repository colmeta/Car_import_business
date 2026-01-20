// Rebuild trigger
import { Building2, Briefcase, BarChart3, Users } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Corporate Solutions | AJ24 MOTORS',
    description: 'Fleet management and corporate vehicle sourcing solutions.',
};

export default function CorporatePage() {
    return (
        <main className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl text-center mb-16">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                        <span className="gradient-text">Corporate Fleet Solutions</span>
                    </h1>
                    <p className="text-xl text-slate-300">
                        Tailored vehicle acquisition for businesses and organizations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {solutions.map((solution, index) => (
                        <div key={index} className="glass-card p-8 hover:bg-white/5 transition-colors">
                            <div className="h-14 w-14 rounded-2xl bg-accent-400/10 flex items-center justify-center text-accent-400 mb-6">
                                <solution.icon className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                            <p className="text-slate-400 mb-6">{solution.description}</p>
                            <ul className="space-y-2">
                                {solution.features.map((feature, i) => (
                                    <li key={i} className="flex items-center space-x-2 text-sm text-slate-300">
                                        <div className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

const solutions = [
    {
        title: 'Executive Fleet',
        description: 'Premium vehicles for management and executive transport.',
        icon: Briefcase,
        features: ['Luxury SUVs', 'Armored Vehicles', 'Priority Sourcing'],
    },
    {
        title: 'Operational Fleet',
        description: 'Reliable workhorses for day-to-day business operations.',
        icon: Building2,
        features: ['Pickups & Vans', 'Bulk Ordering', 'Maintenance Packages'],
    },
    {
        title: 'Employee Programs',
        description: 'Vehicle financing and purchasing schemes for staff.',
        icon: Users,
        features: ['Salary Deductions', 'Lower Interest', 'Group Insurance'],
    },
];
