import dynamic from "next/dynamic";
import { Banner } from "./sections/Banner";
import { WhoWeAre } from "./sections/WhoWeAre";

const WhyChoose = dynamic(() => import("./sections/WhyChoose").then(m => m.WhyChoose));
const Services = dynamic(() => import("./sections/Services").then(m => m.Services));
const Steps = dynamic(() => import("./sections/Steps").then(m => m.Steps));
const ClientReviews = dynamic(() => import("./sections/ClientReviews").then(m => m.ClientReviews));
const Achievements = dynamic(() => import("./sections/Achievements").then(m => m.Achievements));

export default function About() {
    return (
        <>

            <Banner />
            <WhoWeAre />

            <WhyChoose />
            <Services />
            <Steps />
            <ClientReviews />
            <Achievements />
        </>
    );
}