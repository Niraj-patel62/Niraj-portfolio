import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../ThemeContext";

const CERTIFICATIONS = [
  {
    id: 1,
    image: "/certificates/cipherschools-java-oops.png",
    certificateUrl: "https://drive.google.com/file/d/1NLDz9qv6v28pIAnxft14WSpwEDPsbgo1/view?usp=sharing",
  },
  {
    id: 2,
    image: "/certificates/lpu-oops-iamneo.png",
    certificateUrl: "https://drive.google.com/file/d/16brRIJx3PNYc3vR1IIbi6CX6G5Ia7JCU/view?usp=sharing",
  },
  {
    id: 3,
    image: "/certificates/lpu-web-hackathon.png",
    certificateUrl: "https://drive.google.com/file/d/1Yb_cMHq1j4ty8OvApcJHWAhHPCFRmQ-C/view?usp=sharing",
  },
  {
    id: 4,
    image: "/certificates/lpu-dsa-iamneo.png",
    certificateUrl: "https://drive.google.com/file/d/1lYr2YVl5J_tuNxHlbjWpqdAHWnXhyOLR/view?usp=sharing",
  },
  {
    id: 5,
    image: "/certificates/coursera-software-engineering.png",
    certificateUrl: "https://coursera.org/verify/RNVTZXL97VWY",
  },
  {
    id: 6,
    image: "/certificates/infosys-computational-theory.png",
    certificateUrl: "https://verify.onwingspan.com",
  },
];

function CertificationCard({ cert, theme }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const showLoader = (cert.id === 1 || cert.id === 2) && !imageLoaded;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={`group relative flex h-full flex-col rounded-2xl border overflow-hidden backdrop-blur-xl transition-all duration-300 ${
        theme === "dark"
          ? "border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20"
          : "border-slate-200 bg-white hover:border-cyan-400 hover:shadow-xl"
      }`}
    >
      <div className="relative overflow-hidden h-56 bg-white">
        {showLoader && (
          <div className="absolute inset-0 animate-pulse bg-slate-200 dark:bg-slate-700" />
        )}
        <motion.img
          src={cert.image}
          alt="Certificate"
          className="w-full h-full object-contain p-2"
          style={{ opacity: imageLoaded ? 1 : 0 }}
          onLoad={() => setImageLoaded(true)}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-4">
        <motion.a
          href={cert.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`block text-center rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
            theme === "dark"
              ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-400 hover:to-purple-400 shadow-lg shadow-indigo-500/20"
              : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 shadow-lg"
          }`}
        >
          View certificate
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const { theme } = useTheme();

  return (
    <motion.section
      id="certifications"
      className={`${
        theme === "dark" ? "bg-slate-950/50" : "bg-slate-50"
      } py-16`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              className={`text-sm uppercase tracking-[0.2em] ${
                theme === "dark" ? "text-cyan-200" : "text-cyan-600"
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Achievements
            </motion.p>
            <motion.h2
              className={`text-3xl font-bold relative inline-block ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Certifications
              <motion.span
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "70%" }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </motion.h2>
          </motion.div>
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="h-full"
            >
              <CertificationCard cert={cert} theme={theme} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
