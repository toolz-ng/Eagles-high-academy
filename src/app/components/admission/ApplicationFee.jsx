import { CreditCard, Upload } from "lucide-react";
import FormInput from "./FormInput";
import SectionHeading from "./SectionHeading";

export default function ApplicationFee({
    form,
    onChange,
}) {
    return (
        <section className="border-t border-black/10 pt-8">
            <SectionHeading
                icon={<CreditCard className="h-5 w-5" />}
                title="Application Fee"
                description="Provide your payment details for review."
            />

            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm font-medium text-ink/60">
                            Application Fee
                        </p>

                        <p className="mt-1 font-heading text-3xl font-semibold text-navy">
                            ₦20,000
                        </p>
                    </div>

                    <div className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-navy shadow-sm">
                        Required
                    </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-ink/60">
                    Please make the required payment and provide
                    your payment reference and screenshot for the
                    admissions team's review.
                </p>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <FormInput
                    label="Payment Reference / Transaction ID"
                    name="paymentReference"
                    value={form.paymentReference}
                    onChange={onChange}
                    placeholder="Enter payment reference"
                    required
                />

                <div>
                    <label
                        htmlFor="paymentScreenshot"
                        className="mb-2 block text-sm font-medium text-navy"
                    >
                        Payment Screenshot
                    </label>

                    <label
                        htmlFor="paymentScreenshot"
                        className="flex min-h-[48px] cursor-pointer items-center gap-3 rounded-xl border border-dashed border-black/15 bg-white px-4 text-sm text-ink/50 transition hover:border-accent hover:bg-accent/5"
                    >
                        <Upload className="h-4 w-4 shrink-0" />

                        <span className="truncate">
                            {form.paymentScreenshot
                                ? form.paymentScreenshot.name
                                : "Choose screenshot"}
                        </span>

                        <input
                            id="paymentScreenshot"
                            name="paymentScreenshot"
                            type="file"
                            accept="image/*"
                            onChange={onChange}
                            className="hidden"
                        />
                    </label>
                </div>
            </div>
        </section>
    );
}