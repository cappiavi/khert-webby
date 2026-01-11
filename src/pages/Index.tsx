import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Connect from "@/components/Connect";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Timeline />
        <Connect />
      </main>
    </div>
  );
};

export default Index;