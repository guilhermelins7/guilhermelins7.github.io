import ProjectCard from "../components/ProjectCard";

export default function Trabalho() {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark" id="trabalho">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Trabalhos em Destaque
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Uma seleção de projetos que refletem minha paixão por design e
              desenvolvimento, combinando criatividade e inovação.
            </p>
          </div>
          <a
            className="hidden md:flex items-center gap-2 text-primary font-medium hover:underline mt-4 md:mt-0"
            href="#sobre"
          >
            Mais sobre mim <span className="material-icons text-sm">north_east</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <ProjectCard
            title="Analytics Dashboard"
            category="SaaS • Data Visualization"
            media={
              <img
                alt="Dashboard Project"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk4N0c6RaW2u5qk3SAoKMLs0tspeeZCWCfEjYcm8dOwhBwEBlQW1XANwMincHTGOaG5JENeylvZF-Yydew2a4YLDHbAShR7dT53ISIzgk_rSdBAhIPuHi0gKk3bBPi7ytOQjKYseHG_GCjM8kJs4CNYnSXMJB1_T-_MfyNVGlN9oyK8kl2vgAAiY4WCQDi4U-KHhGCjsEQoTNC-oY2JRCMcE3ifUL-6zCYL4y5jRdlwkmShm3rvtMcjJMk9C7tGJ_YvWUS_Oqn91c"
              />
            }
          />
          <ProjectCard
            title="Winzee Chat App"
            category="Mobile App • Real-time Communication"
            media={
              <img
                alt="Abstract App Interface"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY4elXwuFggZw94Vl2SM3ju1n9Z4Frae29a37NC1dkQm-dBfEas6fwYea8238VnMMvPNQFhSLRTrydo02xHoTMI_MZSzV6Z_hxPBaER5GNCYXntlVfyEugAEHvu9jV1xCVoDKrHqRHFwu7kEnqHz6yiMwthlngZipnNKWydARQCdzXbQR8bjW1KYMM4K2Vj93qiafH6ATzVzHgFOKXZxSSLjq0bAUHOemfAmJ3K9rX0lbW9Gj7dOkP7dmGcLQQWnXvyjQ2Tzy4_t4"
              />
            }
          />
          <div className="md:mt-12">
            <ProjectCard
              title="Gemini Clone"
              category="Web App • AI Integration"
              media={
                <div className="w-full h-full flex items-center justify-center bg-black relative">
                  <div className="text-white text-6xl font-display">AI</div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-gray-800 opacity-90"></div>
                  <span className="material-icons text-8xl text-white relative z-10 animate-pulse">
                    smart_toy
                  </span>
                </div>
              }
            />
          </div>
          <div className="md:mt-12">
            <ProjectCard
              title="Task Master"
              category="Productivity • React Native"
              media={
                <div className="w-full h-full flex items-center justify-center bg-gray-900 relative">
                  <div
                    className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"
                  ></div>
                  <span className="material-icons text-8xl text-primary relative z-10">layers</span>
                </div>
              }
            />
          </div>
        </div>
        <div className="text-center mt-16">
          <button className="px-6 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-sm font-medium hover:bg-white dark:hover:bg-gray-800 transition-colors shadow-sm cursor-pointer">
            ● Explore mais
          </button>
        </div>
      </div>
    </section>
  );
}
