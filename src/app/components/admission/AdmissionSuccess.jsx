import { CheckCircle2 } from "lucide-react";

export default function AdmissionSuccess({
    onClose,
}) {
    return (
        <div className="overflow-y-auto px-6 py-14 text-center sm:px-10 sm:py-20">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                <CheckCircle2 className="h-8 w-8" />
            </div>

            <h3 className="mt-6 font-heading text-3xl font-semibold text-navy">
                Application Submitted!
            </h3>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-ink/60 sm:text-base">
                Thank you for applying to Eagles High School.
                Your application has been received successfully.
            </p>

            <div className="mx-auto mt-6 max-w-md rounded-2xl bg-navy/5 p-5">
                <p className="text-sm leading-6 text-ink/60">
                    Our admissions team will review the information
                    provided and get back to you with the next steps.
                    Further feedback will be sent to the email address
                    you provided in due course.
                </p>
            </div>

            <button
                type="button"
                onClick={onClose}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-navy/90"
            >
                Done
            </button>
        </div>
    );
}