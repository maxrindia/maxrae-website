import { NotchedProjectCard } from "@/components/ui/notched-project-card";

/* Three cards, one per device (desktop, phone, tablet), and three
   confessions from a designer who would rather not build her own cards. */

export default function Demo() {
  return (
    <div className="grid w-full max-w-6xl gap-x-5 gap-y-12 p-6 min-[700px]:grid-cols-3 lg:gap-x-8 lg:p-8">
      {/* desktop: the window runs off the bottom-right corner */}
      <NotchedProjectCard
        href="#"
        title="Ctrl+C, Ctrl+V, Ship"
        description="A landing page built in the time it took my coffee to cool. Searched 21st.dev, found a card, pasted it. Nobody needs to know."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
        badge="2026"
        tags={["Copy-paste", "Speedrun"]}
        monochrome
        accent="#00bba7"
      />
      {/* phone: rises out of the bottom edge, its foot cropped */}
      <NotchedProjectCard
        href="#"
        title="The Button I Didn't Design"
        description="Three weeks agonising over a border radius. Then I found one on 21st.dev that was already perfect. Therapy is expensive, components are free."
        image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80"
        badge="2025"
        tags={["Self-care", "Zero effort"]}
        monochrome
        accent="#00bba7"
      />
      {/* tablet: stands in the bottom-right corner, running off both edges */}
      <NotchedProjectCard
        href="#"
        title="Dashboard, Eventually"
        description="Planned to build it from scratch this weekend. Installed it from 21st.dev in one command instead, then took a well-deserved nap."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
        badge="2024"
        tags={["Nap-driven", "With AI"]}
        monochrome
        accent="#00bba7"
      />
    </div>
  );
}
