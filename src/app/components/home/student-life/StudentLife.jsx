import ActivityCard from "./ActivityCard";
import { activities } from "./activities";

export default function StudentLife() {
    return (
        <section className="bg-tint py-20" id="student-life">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-2xl text-center">
                <p className="text-accent font-semibold text-sm">Student life</p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-navy">
                    Learning doesn&apos;t stop when the{" "}
                    <span className="text-accent">bell rings.</span>
                </h2>
                <p className="mt-4 text-ink/70">
                    From sports and creative arts to clubs, trips, and leadership
                    opportunities, students have plenty of ways to discover their
                    interests, build friendships, and create lasting memories.
                </p>
                </div>

                {/* Activities */}
                <div className="mt-12 space-y-6">
                <ActivityCard {...activities[0]} featured />

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {activities.slice(1).map((activity) => (
                    <ActivityCard key={activity.title} {...activity} />
                    ))}
                </div>
                </div>
            </div>
        </section>
    );
}