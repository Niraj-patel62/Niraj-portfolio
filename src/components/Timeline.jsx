import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

const milestones = [
  { year: "2023 – Present", title: "Bachelor of Technology – CSE", desc: "Lovely Professional University, Punjab | CGPA: 6.02" },
  { year: "—", title: "Intermediate", desc: "Sita Ram +2 High School, Bihar | 72%" },
  { year: "—", title: "Matriculation", desc: "Ramkrishna Vivekanand Vidya Mandir, Bihar | 63%" },
];

export default function Timeline() {
  const { theme } = useTheme();
  return (
    <section id="timeline" className="mx-auto max-w-6xl px-6 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
        <p className={`text-sm uppercase tracking-[0.25em] ${theme === 'dark' ? 'text-indigo-300' : 'text-indigo-600'}`}>Background</p>
        <h2 className={`mt-2 text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Education</h2>
      </motion.div>
      <div className="mt-8 relative">
        <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 ${theme==='dark' ? 'bg-white/10' : 'bg-black/10'}`} />
        <div className="space-y-8">
          {milestones.map((m, idx) => (
            <motion.div key={m.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="relative md:flex md:items-center">
              <div className="md:w-1/2 md:text-right pr-6">
                <div className={`font-semibold ${theme === 'dark' ? 'text-indigo-300' : 'text-indigo-600'}`}>{m.year}</div>
              </div>
              <div className={`absolute left-2 md:left-[calc(50%-8px)] w-4 h-4 rounded-full bg-indigo-500 border-2 ${theme==='dark' ? 'border-white/20' : 'border-black/10'}`} />
              <div className="md:w-1/2 md:pl-6 mt-2 md:mt-0">
                <div className={theme === 'dark' ? 'font-semibold text-white' : 'font-semibold text-slate-900'}>{m.title}</div>
                <div className={`text-sm ${theme==='dark' ? 'text-slate-400' : 'text-slate-600'}`}>{m.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
