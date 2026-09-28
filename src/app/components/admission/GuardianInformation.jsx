import { Users } from "lucide-react";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import SectionHeading from "./SectionHeading";

export default function GuardianInformation({
    form,
    onChange,
}) {
    return (
        <section className="border-t border-black/10 pt-8">
            <SectionHeading
                icon={<Users className="h-5 w-5" />}
                title="Parent / Guardian Information"
                description="Provide the parent or guardian's details."
            />

            <div className="grid gap-5 sm:grid-cols-2">
                <FormInput
                    label="Parent / Guardian Name"
                    name="guardianName"
                    value={form.guardianName}
                    onChange={onChange}
                    placeholder="Enter full name"
                    required
                />

                <FormInput
                    label="Relationship"
                    name="relationship"
                    value={form.relationship}
                    onChange={onChange}
                    placeholder="e.g. Father, Mother, Guardian"
                    required
                />

                <FormInput
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="Enter phone number"
                    required
                />

                <FormInput
                    label="Email Address"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="you@example.com"
                    required
                />

                <div className="sm:col-span-2">
                    <FormTextArea
                        label="Residential Address"
                        name="address"
                        value={form.address}
                        onChange={onChange}
                        placeholder="Enter residential address"
                        rows={3}
                        required
                    />
                </div>
            </div>
        </section>
    );
}