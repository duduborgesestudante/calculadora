import './App.css'
import Calculadora from './components/Calculadora'
import Frase from './components/Frase'
import Mensagem from './components/Mensagem'

function Saudacao() {
  return (
    <h1>HelloWorld</h1>
  )
}
function App() {

  return (
    <>
      <Saudacao />
      <Mensagem texto='texto dahorinha' />
      <Frase frase='frase aleatoria maneira ' />
      <Calculadora />
    </>
  )
}

export default App
