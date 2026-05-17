export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-surface-light dark:bg-surface-dark rounded-full blur-[100px]"></div>
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8 relative inline-block">
          <img
            alt="Profile Portrait"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl mx-auto transition-all duration-500"
            src="/src/assets/profile.jpg"
          />
          <div className="absolute bottom-4 right-4 bg-primary text-white p-2 rounded-full shadow-lg">
            <span className="material-icons text-xl">code</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tight leading-tight">
          Desenvolvedor<br/><span className="text-primary">Full-stack</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Apaixonado por criar soluções inovadoras e experiências digitais excepcionais por meio de tecnologia.
        </p>
        <div className="flex justify-center gap-4">
          <a
            className="group flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium transition-transform hover:-translate-y-1"
            href="#works"
          >
            Meus projetos
            <span className="material-icons group-hover:translate-x-1 transition-transform text-sm">
              arrow_forward
            </span>
          </a>
          <a
            className="flex items-center gap-2 px-8 py-4 border border-gray-300 dark:border-gray-700 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            href="#contact"
          >
            Entre em contato
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 w-full opacity-5 dark:opacity-10 pointer-events-none select-none">
        <div className="scrolling-text-container">
          <div className="scrolling-text text-[10rem] font-display font-black uppercase text-gray-900 dark:text-white">
            Plan Develop Review Test Deploy Plan Develop Test Review Deploy
          </div>
        </div>
      </div>
    </section>
  );
}
