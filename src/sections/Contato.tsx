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
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
            your friendly creative dev,
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all"
              href="https://github.com/guilhermelins7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all"
              href="https://www.linkedin.com/in/guilherme-lins7/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              className="w-10 h-10 rounded-full bg-white dark:bg-white text-black flex items-center justify-center hover:scale-110 transition-transform"
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download CV"
            >
              <FaFileDownload size={18} />
            </a>
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
