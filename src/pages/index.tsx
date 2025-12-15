import HeroSection from "@/components/HeroSection";
import MyHead from "@/components/MyHead";
import Navbar from "@/components/Navbar";
import FeatureSection from "@/components/FeatureSection";
import styled from "styled-components";
import HowItWorksSection from "@/components/HowItWorksSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PriceSection";

const HomeDetails = styled.div`
    .navigation {
        li {
            color: var(--primary);
            transition: all ease-in-out 3s;

            :hover {
                color: var(--secundary);
            }

            img {
                width: 100px;
            }
        }
    }

    .hero {
        min-height: 100vh;
    }
`;

export default function Home() {
    return (
        <>
            <MyHead />
            <HomeDetails>
                <Navbar />
                <HeroSection />
                <FeatureSection />
                <HowItWorksSection />
                <PricingSection />
                <CTASection />
                <Footer />
            </HomeDetails>
        </>
    );
}
