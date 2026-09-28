import ProgramCard from "./ProgramCard";
import { programs } from "./programs";

export default function AcademicExcellence() {
    return (
        <section className="bg-white py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Introduction */}
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                            Academic Excellence
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl lg:text-5xl">
                            Inspiring curious minds.{" "}
                            <span className="text-accent">
                                Building confident futures.
                            </span>
                        </h2>
                    </div>

                    <p className="mx-auto mt-4 max-w-2xl leading-7 text-navy/60 text-center">
                        We provide a supportive and challenging learning
                        environment designed to help every student discover
                        their strengths, develop their abilities, and prepare
                        confidently for the future.
                    </p>
                </div>

                {/* Programs */}
                <div className="mt-14">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-semibold text-navy">
                                Our Programmes
                            </p>

                            <p className="mt-1 text-sm text-navy/50">
                                Learning pathways designed for every stage.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {programs.map((program) => (
                            <ProgramCard
                                key={program.title}
                                title={program.title}
                                description={program.description}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}