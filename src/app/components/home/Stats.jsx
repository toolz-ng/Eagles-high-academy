import { Award, Users, BookOpen, TrendingUp } from "lucide-react";

const stats = [
    { value: "30+", label: "Years of excellence", icon: Award },
    { value: "1,200+", label: "Students", icon: Users },
    { value: "85", label: "Teaching staff", icon: BookOpen },
    { value: "100%", label: "Exam pass rate", icon: TrendingUp },
];

export default function Stats() {
    return (
        <section className="bg-white/70 py-15">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map(({ value, label, icon: Icon }) => (
                        <div key={label} className="text-center">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-tint text-navy">
                                <Icon className="h-6 w-6" strokeWidth={1.5} />
                            </div>
                            <p className="mt-4 text-3xl sm:text-4xl font-display text-navy">
                                {value}
                            </p>
                            <p className="mt-1 text-sm text-ink/60">{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}