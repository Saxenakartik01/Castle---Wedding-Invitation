import Hero from "./components/Hero";
import Invite from "./components/Invite";
import BrideGroom from "./components/BrideGroom";
import Rsvp from "./components/Rsvp";
import ThingsToKnow from "./components/ThingsToKnow";
import Countdown from "./components/Countdown";
import Music from "./components/musix";
import JourneyDottedPath from "./components/JourneyDottedPath";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal();

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#0d0d10] bg-[radial-gradient(circle_at_50%_-10%,#2a2320_0%,#0d0d10_55%)] sm:py-8">
      <main className="relative mx-auto w-full max-w-[430px] overflow-hidden bg-black shadow-[0_30px_80px_rgba(0,0,0,0.7)] sm:rounded-[28px] sm:ring-1 sm:ring-white/10">
        <Music />
        <Hero />
        <div className="relative w-full">
          <JourneyDottedPath />
          <Invite />
          <BrideGroom />
          <ThingsToKnow />
          <Countdown />
        </div>
      </main>
    </div>
  );
}
