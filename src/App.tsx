import './App.css'

function App() {
  return (
    <div>
      <h1>Hello word</h1>
      <h2>Hello word</h2>

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quidem delectus adipisci voluptatibus veniam impedit rerum eaque facilis aliquam numquam asperiores ex exercitationem sunt, voluptas praesentium maiores nam ipsum cumque!</p>

      <input type="text" placeholder='Escribe tu nombre...' />

      <br />
      <br />

      <input type="password" placeholder='Escribe tu contraseña..' />

      <br />

      <button onClick={() => alert('Enviaste el formulario')}>Enviar</button>

      <br />

      <nav>Barra de navegacion</nav>

    </div>  

  )
}

export default App
