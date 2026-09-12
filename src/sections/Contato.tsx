import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

export default function Contato() {
  return (
    <footer className="bg-surface-light dark:bg-[#150c14] pt-24 pb-12 overflow-hidden relative" id="contato">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
              É isso por enquanto
            </p>
            <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8">
              Tem um projeto ou proposta em mente? <br />
              Vamos conversar!
            </h2>
            <div className="flex flex-col sm:flex-row gap-8 mt-12 text-sm text-gray-600 dark:text-gray-400">
              <div>
                <p className="font-bold text-gray-900 dark:text-white mb-1">E-mail</p>
                <a
                  className="hover:text-primary transition-colors"
                  href="mailto:guilherme7lins@gmail.com"
                >
                  guilherme7lins@gmail.com
                </a>
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white mb-1">Telefone</p>
                <a
                  className="hover:text-primary transition-colors"
                  href="tel:+5513996043636"
                >
                  (13) 99604-3636
                </a>
              </div>
            </div>
          </div>
          <a
            className="mt-12 lg:mt-0 w-32 h-32 bg-primary rounded-full flex items-center justify-center text-white font-medium text-center hover:scale-110 transition-transform duration-300 shadow-xl z-20 hover:rotate-12"
            href="mailto:guilherme7lins@gmail.com"
          >
            Entre em <br />
            contato
          </a>
        </div>
        <hr className="border-gray-300 dark:border-gray-800 mb-12" />
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
            your friendly creative dev,
          </p>
          <div className="w-full lg:w-auto">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary lg:text-right">
              Links profissionais
            </p>
            <nav
              aria-label="Links profissionais"
              className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3 lg:w-auto"
            >
              <a
                className="group flex items-center justify-between gap-4 rounded-full border border-gray-300 bg-white/60 px-4 py-3 font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-light dark:border-gray-700 dark:bg-surface-dark/70 dark:text-white dark:hover:border-primary dark:focus-visible:ring-offset-[#150c14]"
                href="https://github.com/guilhermelins7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <FaGithub size={18} aria-hidden="true" />
                  </span>
                  GitHub
                </span>
                <span
                  className="material-symbols-outlined text-lg text-gray-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                  aria-hidden="true"
                >
                  arrow_outward
                </span>
              </a>
              <a
                className="group flex items-center justify-between gap-4 rounded-full border border-gray-300 bg-white/60 px-4 py-3 font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-light dark:border-gray-700 dark:bg-surface-dark/70 dark:text-white dark:hover:border-primary dark:focus-visible:ring-offset-[#150c14]"
                href="https://www.linkedin.com/in/guilherme-lins7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <FaLinkedin size={18} aria-hidden="true" />
                  </span>
                  LinkedIn
                </span>
                <span
                  className="material-symbols-outlined text-lg text-gray-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                  aria-hidden="true"
                >
                  arrow_outward
                </span>
              </a>
              <a
                className="group flex items-center justify-between gap-4 rounded-full border border-gray-300 bg-white/60 px-4 py-3 font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-light dark:border-gray-700 dark:bg-surface-dark/70 dark:text-white dark:hover:border-primary dark:focus-visible:ring-offset-[#150c14]"
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <FaFileDownload size={18} aria-hidden="true" />
                  </span>
                  Currículo
                </span>
                <span
                  className="material-symbols-outlined text-lg text-gray-400 transition-colors group-hover:text-primary"
                  aria-hidden="true"
                >
                  download
                </span>
              </a>
            </nav>
          </div>
        </div>
        <div className="mt-20 -mb-12 relative select-none">
          <h1 className="text-[8vw] md:text-[10vw] font-display font-black text-center leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-transparent dark:from-white dark:to-transparent opacity-10 dark:opacity-20 pointer-events-none">
            GUILHERME LINS DOS SANTOS
          </h1>
        </div>
      </div>
    </footer>
  );
}
