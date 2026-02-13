import { ChallengesSection } from "./src/pagecomponents/challenges";
import { Sample } from "./src/pagecomponents/sample";
import { Landing } from "./src/pagecomponents/landing";
import { VisionMissions } from "./src/pagecomponents/MissionVision";
import { WhyChoose } from "./src/pagecomponents/whyChoose";
import { JourneyOfHopeCore } from "./src/pagecomponents/journeyOfHopeCore";
import { JourneyOfHope } from "./src/pagecomponents/journeyofHope";
import { Contact } from "./src/pagecomponents/contact";
import Departments from "./src/pagecomponents/departments";
import { Navbar } from "./src/pagecomponents/navbar";

export default function Home() {
  return (
    <main className="relative h-screen w-full">
    <Navbar/>
    <Landing/>
    <JourneyOfHopeCore/>
    <VisionMissions/>
    <ChallengesSection/>
    <WhyChoose/>
    <JourneyOfHope/>
    <Departments/>
    <Contact/>
    </main>
  );
}
