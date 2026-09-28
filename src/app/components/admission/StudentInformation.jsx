import { User } from "lucide-react";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

const classes = [
    "Nursery 1",
    "Nursery 2",
    "Nursery 3",
    "Primary 1",
    "Primary 2",
    "Primary 3",
    "Primary 4",
    "Primary 5",
    "Primary 6",
    "JSS 1",
    "JSS 2",
    "JSS 3",
    "SS 1",
    "SS 2",
    "SS 3",
];

export default function StudentInformation({
    form,
    onChange,
}) {
    return (
        <section>
            <SectionHeading
                icon={<User className="h-5 w-5" />}
                title="Student Information"
                description="Tell us about the student applying."
            />

            <div className="grid gap-5 sm:grid-cols-2">
                <FormInput
                    label="Student Full Name"
                    name="studentName"
                    value={form.studentName}
                    onChange={onChange}
                    placeholder="Enter student's full name"
                    required
                />

                <FormInput
                    label="Date of Birth"
                    name="dateOfBirth"
                    type="date"
                    value={form.dateOfBirth}
                    onChange={onChange}
                    required
                />

                <FormSelect
                    label="Gender"
                    name="gender"
                    value={form.gender}
                    onChange={onChange}
                    options={["Male", "Female"]}
                    required
                />

                <FormSelect
                    label="Class Applying For"
                    name="classApplyingFor"
                    value={form.classApplyingFor}
                    onChange={onChange}
                    options={classes}
                    required
                />

                <div className="sm:col-span-2">
                    <FormInput
                        label="Previous / Current School"
                        name="previousSchool"
                        value={form.previousSchool}
                        onChange={onChange}
                        placeholder="Enter school name"
                    />
                </div>
            </div>
        </section>
    );
}

function SectionHeading({
    icon,
    title,
    description,
}) {
    return (
        <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy/5 text-navy">
                {icon}
            </div>

            <div>
                <h3 className="font-heading text-xl font-semibold text-navy">
                    {title}
                </h3>

                <p className="text-xs text-ink/50">
                    {description}
                </p>
            </div>
        </div>
    );
}