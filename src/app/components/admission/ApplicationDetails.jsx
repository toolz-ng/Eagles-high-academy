import { GraduationCap } from "lucide-react";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextArea";
import SectionHeading from "./SectionHeading";

const sessions = [
    "2026/2027",
    "2027/2028",
];

export default function ApplicationDetails({
    form,
    onChange,
}) {
    return (
        <section className="border-t border-black/10 pt-8">
            <SectionHeading
                icon={<GraduationCap className="h-5 w-5" />}
                title="Application Details"
                description="Select your preferred academic session."
            />

            <div className="grid gap-5 sm:grid-cols-2">
                <FormSelect
                    label="Academic Session"
                    name="academicSession"
                    value={form.academicSession}
                    onChange={onChange}
                    options={sessions}
                    required
                />

                <div className="sm:col-span-2">
                    <FormTextarea
                        label="Additional Information"
                        name="additionalInfo"
                        value={form.additionalInfo}
                        onChange={onChange}
                        placeholder="Tell us anything else you would like the admissions team to know..."
                        rows={4}
                    />
                </div>
            </div>
        </section>
    );
}