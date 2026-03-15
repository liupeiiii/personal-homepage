"use client";

import { motion, type Variants } from "framer-motion";
import HeroCard from "@/components/cards/HeroCard";
import SkillsCard from "@/components/cards/SkillsCard";
import AboutCard from "@/components/cards/AboutCard";
import ContactCard from "@/components/cards/ContactCard";
import WorkCard from "@/components/cards/WorkCard";
import ResearchCard from "@/components/cards/ResearchCard";
import HobbyCard from "@/components/cards/HobbyCard";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cellVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cells = [
  { id: "hero",     Component: HeroCard,     cls: "bento-hero" },
  { id: "skills",   Component: SkillsCard,   cls: "bento-skills" },
  { id: "about",    Component: AboutCard,    cls: "bento-about" },
  { id: "contact",  Component: ContactCard,  cls: "bento-contact" },
  { id: "work",     Component: WorkCard,     cls: "bento-work" },
  { id: "research", Component: ResearchCard, cls: "bento-research" },
  { id: "hobby",    Component: HobbyCard,    cls: "bento-hobby" },
] as const;

export default function BentoGrid() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "48px 24px",
      }}
    >
      <motion.div
        className="bento-grid"
        style={{ width: "100%", maxWidth: "1000px" }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {cells.map(({ id, Component, cls }) => (
          <motion.div
            key={id}
            className={`bento-cell ${cls}`}
            variants={cellVariants}
          >
            <Component />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
