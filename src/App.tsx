import Certificacoes from "./sections/Certificacoes"
import Contato from "./sections/Contato"
import Experience from "./sections/Experience"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Skills from "./sections/Skills"
import Sobre from "./sections/Sobre"
import Trabalho from "./sections/Trabalho"

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Sobre/>
      <Trabalho/>
      <Experience/>
      <Skills/>
      <Certificacoes/>
      <Contato/>
    </>
  )
}

export default App