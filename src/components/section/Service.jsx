import SectionHeader from '../ui/SectionHeader';

export default function Service() {
    return (
        <section className="py-20">
            <SectionHeader 
                title="Services" 
                subtitle="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:" 
            />
            <div className="grid md:grid-cols-2 gap-10">
                <ServiceCard title="Search engine optimization" variant="gray" />
                <ServiceCard title="Pay-per-click advertising" variant="lime" />
                <ServiceCard title="Social Media Marketing" variant="dark" />
                <ServiceCard title="Email Marketing" variant="lime" />
            </div>
        </section>
    );
}