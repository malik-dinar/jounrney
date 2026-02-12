import { ChallengesSection } from "./src/pagecomponents/challenges";
import { Sample } from "./src/pagecomponents/sample";
import { Landing } from "./src/pagecomponents/landing";
import { VisionMissions } from "./src/pagecomponents/MissionVision";
import { WhyChoose } from "./src/pagecomponents/whyChoose";
import { JourneyOfHopeCore } from "./src/pagecomponents/journeyOfHopeCore";
import { JourneyOfHope } from "./src/pagecomponents/journeyofHope";
import { Contact } from "./src/pagecomponents/contact";
import RotatingGrid from "./src/pagecomponents/rotating";
import Departments from "./src/pagecomponents/departments";

export default function Home() {
  return (
    <main className="relative h-screen w-full">
    {/* <RotatingGrid/> */}

    <Landing/>
    <JourneyOfHopeCore/>
    <VisionMissions/>
    <ChallengesSection/>
    <WhyChoose/>
    <JourneyOfHope/>
    <Departments/>
    <Contact/>

    {/* <Sample/> */}
    </main>
  );
}
