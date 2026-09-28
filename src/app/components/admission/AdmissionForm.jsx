"use client";

import StudentInformation from "./StudentInformation";
import GuardianInformation from "./GuardianInformation";
import ApplicationDetails from "./ApplicationDetails";
import ApplicationFee from "./ApplicationFee";
import { Loader2 } from "lucide-react";

export default function AdmissionForm({
    form,
    loading,
    onChange,
    onSubmit,
}) {
    return (
        <form
            onSubmit={onSubmit}
            className="overflow-y-auto"
        >
            <div className="space-y-8 p-5 sm:p-7">

                <StudentInformation
                    form={form}
                    onChange={onChange}
                />

                <GuardianInformation
                    form={form}
                    onChange={onChange}
                />

                <ApplicationDetails
                    form={form}
                    onChange={onChange}
                />

                <ApplicationFee
                    form={form}
                    onChange={onChange}
                />

                {/* Submit */}
                <div className="flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-md text-xs leading-5 text-ink/50">
                        By submitting this application, you confirm
                        that the information provided is accurate to
                        the best of your knowledge.
                    </p>

                    <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-navy px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-navy/90 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Submitting...
                            </>
                        ) : (
                            "Submit Application"
                        )}
                    </button>
                </div>
            </div>
        </form>
    );
}