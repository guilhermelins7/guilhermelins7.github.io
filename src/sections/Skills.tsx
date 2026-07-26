import { FaReact, FaAngular, FaWordpress } from "react-icons/fa";

export default function Skills() {
  return (
    <section
      className="py-24 bg-background-light dark:bg-background-dark relative"
      id="skills"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Skills that fuel my passion
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Um conjunto de ferramentas completo que me permite dar vida às ideias, desde o refinamento do front-end até a robustez do back-end.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          <div
            className="bg-gray-50 dark:bg-surface-dark p-6 rounded-2xl md:col-span-2 md:row-span-2 border border-gray-100 dark:border-gray-700 hover:border-primary/50 transition-colors group"
          >
            <h3
              className="text-xl font-bold mb-2 group-hover:text-primary transition-colors"
            >
              Front-End Development
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
              Building engaging and user-friendly web interfaces using modern
              frameworks. Proficient in crafting responsive and accessible
              designs that delight users.
            </p>
            <div className="flex gap-4 mb-6">
              <div
                className="w-12 h-12 bg-[#61DAFB]/10 rounded-lg flex items-center justify-center text-[#61DAFB] text-3xl"
                title="React"
              >
                <FaReact />
              </div>
              <div
                className="w-12 h-12 bg-[#DD0031]/10 rounded-lg flex items-center justify-center text-[#DD0031] text-3xl"
                title="Angular"
              >
                <FaAngular />
              </div>
              <div
                className="w-12 h-12 bg-[#21759B]/10 rounded-lg flex items-center justify-center text-[#21759B] text-3xl"
                title="WordPress"
              >
                <FaWordpress />
              </div>
            </div>
          </div>
          <div
            className="bg-gray-50 dark:bg-surface-dark p-6 rounded-2xl md:col-span-1 md:row-span-1 border border-gray-100 dark:border-gray-700 hover:border-primary/50 transition-colors group flex flex-col justify-between"
          >
            <div className="flex gap-3">
              <div className="p-2 bg-blue-500/10 text-blue-500 rounded-md">
                <span className="material-icons text-base">palette</span>
              </div>
              <div className="p-2 bg-pink-500/10 text-pink-500 rounded-md">
                <span className="material-icons text-base">brush</span>
              </div>
            </div>
            <div>
              <h3
                className="font-bold mb-1 group-hover:text-primary transition-colors"
              >
                Styling &amp; Design
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Tailwind, Sass, Figma
              </p>
            </div>
          </div>
          <div
            className="bg-gray-50 dark:bg-surface-dark p-6 rounded-2xl md:col-span-1 md:row-span-2 border border-gray-100 dark:border-gray-700 hover:border-primary/50 transition-colors group"
          >
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div
                className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-2xl"
              >
                py
              </div>
              <div
                className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-2xl"
              >
                c++
              </div>
              <div
                className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-2xl"
              >
                java
              </div>
              <div
                className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-2xl"
              >
                ts
              </div>
            </div>
            <h3
              className="font-bold mb-1 group-hover:text-primary transition-colors"
            >
              Languages
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Polyglot programmer adaptable to any stack.
            </p>
          </div>
          <div
            className="bg-gray-50 dark:bg-surface-dark p-6 rounded-2xl md:col-span-1 md:row-span-1 border border-gray-100 dark:border-gray-700 hover:border-primary/50 transition-colors group flex flex-col justify-between"
          >
            <div className="flex gap-3">
              <span
                className="material-icons text-green-500 bg-green-500/10 p-2 rounded-md"
                >storage</span
              >
              <span
                className="material-icons text-blue-500 bg-blue-500/10 p-2 rounded-md"
                >cloud</span
              >
            </div>
            <div>
              <h3
                className="font-bold mb-1 group-hover:text-primary transition-colors"
              >
                Database
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                PostgreSQL, MongoDB
              </p>
            </div>
          </div>
          <div
            className="bg-gray-50 dark:bg-surface-dark p-6 rounded-2xl md:col-span-1 md:row-span-2 border border-gray-100 dark:border-gray-700 hover:border-primary/50 transition-colors group"
          >
            <div className="flex flex-wrap gap-2 mb-8">
              <span
                className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded text-xs"
                >Node.js</span
              >
              <span
                className="px-2 py-1 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded text-xs"
                >Django</span
              >
              <span
                className="px-2 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 rounded text-xs"
                >GraphQL</span
              >
            </div>
            <h3
              className="font-bold mb-2 group-hover:text-primary transition-colors"
            >
              Back-End Dev
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Developing robust server-side logic and scalable APIs.
            </p>
          </div>
          <div
            className="bg-gray-50 dark:bg-surface-dark p-6 rounded-2xl md:col-span-2 md:row-span-1 border border-gray-100 dark:border-gray-700 hover:border-primary/50 transition-colors group flex items-center justify-between"
          >
            <div>
              <h3
                className="font-bold mb-1 text-xl group-hover:text-primary transition-colors"
              >
                Cloud &amp; DevOps
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                AWS, Docker, CI/CD Pipelines
              </p>
            </div>
            <div className="flex gap-3">
              <span className="material-icons text-3xl text-orange-500"
                >cloud_queue</span
              >
              <span className="material-icons text-3xl text-blue-400"
                >settings_suggest</span
              >
            </div>
          </div>
          <div
            className="bg-gray-900 text-white dark:bg-white dark:text-gray-900 p-6 rounded-2xl md:col-span-1 md:row-span-1 border border-gray-100 dark:border-gray-700 flex flex-col justify-center items-center text-center group"
          >
            <span className="material-icons text-4xl text-primary mb-2"
              >psychology</span
            >
            <h3 className="font-bold">Soft Skills</h3>
            <p className="text-xs opacity-70 mt-1">Leadership, Problem Solving</p>
          </div>
        </div>
      </div>
    </section>
  );
}