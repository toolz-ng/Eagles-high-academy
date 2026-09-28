import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ContactMap from "../components/contact/ContactMap";
import ContactCTA from "../components/contact/ContactCTA";

export default function ContactPage() {
    return (
        <>
            <ContactHero />

            <main>
                <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                    <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
                        <ContactInfo />
                        <ContactForm />
                    </div>
                </section>

                <ContactMap />

                <ContactCTA />
            </main>
        </>
    );
}