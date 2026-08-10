"use client";

import { motion } from "framer-motion";
import {
  Users,
  UtensilsCrossed,
  Speaker,
  ParkingCircle,
  LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Users,
    title: "Capacity for 500+",
    description: "Flexible seating and floor layouts for events of any scale.",
  },
  {
    icon: UtensilsCrossed,
    title: "In-House Catering",
    description: "Full catering and bar service tailored to your event.",
  },
  {
    icon: Speaker,
    title: "Full AV Setup",
    description: "Professional sound, lighting, and screens included.",
  },
  {
    icon: ParkingCircle,
    title: "Dedicated Parking",
    description: "Secure on-site parking for guests and vendors.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-2xl sm:text-3xl md:text-4xl leading-snug text-black"
        >
          Host an unforgettable event in a hall built for every occasion,
          with the service and setting Legend is known for.
        </motion.h2>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 inline-flex items-center gap-2 bg-black px-8 py-3 text-xs uppercase tracking-widest text-white transition hover:bg-neutral-800"
        >
          Enquire Now
          <span aria-hidden>→</span>
        </motion.a>
      </div>

      <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-x-8 gap-y-14 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="border-t border-neutral-200 pt-6 text-center sm:text-left"
            >
              <Icon strokeWidth={1} className="mx-auto h-8 w-8 text-black sm:mx-0" />
              <h3 className="mt-4 font-serif text-lg text-black">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      <p className="mt-16 text-center text-sm text-neutral-500">
        Should you need more information, please call:{" "}
        <a href="tel:+8441800XXXX" className="font-medium text-black">
          (+844) 1800 XXXX
        </a>
      </p>
    </section>
  );
}