import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font-semibold text-center my-7">About me</h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-md text-gray-500 flex flex-col gap-6"
          >
            <p>
              Welcome to Nedžma's Corner! This space is crafted by Nedžma Brkić
              as a personal endeavor to articulate her insights and musings with
              the world. Nedžma is an enthusiastic developer who enjoys delving
              into various facets of technology, coding, and beyond.
            </p>
            <p>
              Within this blog, you'll discover a diverse array of articles and
              tutorials, published on a weekly basis, covering a wide spectrum
              of topics including web development, software engineering, and
              programming languages. With an insatiable thirst for knowledge,
              Nedžma is constantly exploring and embracing novel technologies,
              ensuring there's always something fresh and exciting to engage
              with.
            </p>
            <p>
              So, make sure to bookmark this page and return frequently to dive
              into the latest content and join Nedžma on her journey of
              continuous learning and discovery!
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
