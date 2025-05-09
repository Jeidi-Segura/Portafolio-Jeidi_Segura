import { useState } from 'react'
import perfil from '/foto_perfil.jpg'
import html from '/html.png'
import css from '/css.png'
import js from '/js.webp'
import reactLogo from '/React.webp'
import php from '/php.png'
import mysql from '/mysql.png'
import MAMP from '/MAMP.png'
import tailwindcss from '/tailwindcss.png'
import laravel from '/laravel.png'
import juegoppt from '/juegoppt.png'
import sanrio from '/sanrio.png'
import dom from '/DOM.png'
import primeraapp from '/primeraapp.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div className="flex justify-center items-center w-16 h-16 mx-auto">
        <img
          src={perfil}
          alt="Foto de perfil" className="perfil-img rounded-full shadow-md" />
      </div>

      <h2>Portafolio</h2>
      <h1>Jeidi Segura</h1>
      <p>Hola, soy Jeidi Alexandra Segura Almario, tengo 18 años, nací y vivo actualmente en Garzón Huila.
        Me gusta mucho la música, el maquillaje y la tecnología. Me considero una persona responsable, honesta
        y trabajadora. Me gusta aprender cosas nuevas y siempre estoy dispuesta a ayudar a los demás.
      </p>
      <h2>Perfil profesional</h2>
      <p>Soy aprendiz SENA en el programa de Tecnología en Análisis y Desarrollo de Software, jornada mañana ficha número 2877292. Cuento con formación técnica en Sistemas. Actualmente me encuentro en proceso de adquirir y fortalecer conocimientos en áreas como programación, bases de datos y desarrollo de software. Me interesa aprender continuamente y aplicar lo aprendido en proyectos reales que me permitan crecer profesionalmente. Me considero una persona responsable, comprometida y con disposición para el trabajo en equipo.</p>

      <h2>Mis habilidades son:</h2>
      <div className="habilidades">
        <div className="habilidad"><p>HTML</p><img src={html} className="logo" alt="HTML" /></div>
        <div className="habilidad"><p>CSS</p><img src={css} className="logo" alt="CSS" /></div>
        <div className="habilidad"><p>JavaScript</p><img src={js} className="logo" alt="JavaScript" /></div>
        <div className="habilidad"><p>React</p><img src={reactLogo} className="logo" alt="React Logo" /></div>
        <div className="habilidad"><p>PHP</p><img src={php} className="logo" alt="PHP" /></div>
        <div className="habilidad"><p>MySQL</p><img src={mysql} className="logo" alt="MySQL" /></div>
        <div className="habilidad"><p>MAMP</p><img src={MAMP} className="logo" alt="MAMP" /></div>
        <div className="habilidad"><p>TailwindCSS</p><img src={tailwindcss} className="logo" alt="TailwindCSS" /></div>
        <div className="habilidad"><p>Laravel</p><img src={laravel} className="logo" alt="Laravel" /></div>
      </div>
      <h2>Proyectos</h2>
      <div class="card-container">
        <div class="project-card">
          <img src={juegoppt} alt="Imagen del proyecto" class="project-image" />
          <div class="project-content">
            <h2 class="project-title">Juegos Javascript</h2>
            <p class="project-description">
            El programa simula el juego de Piedra, Papel o Tijera entre el usuario y la computadora.Se deben cumplir estas reglas:

                El usuario elige entre "piedra", "papel" o "tijera".
                La computadora elige una opción de manera aleatoria.
                Se compara la elección del usuario con la de la computadora.
                No se puede ingresar un valor vacío.
                Se muestra quién gana o si hay un empate. Se valida que el usuario no ingrese valores vacíos o inválidos.
                Se da la opción de jugar nuevamente.

            </p>
            <a href="https://github.com/Jeidi-Segura/Juegos-Javascript-Jeidi" target="_blank" class="project-link">Ver en GitHub</a>
          </div>
        </div>
        <div class="project-card">
          <img src={sanrio} alt="Imagen del proyecto" class="project-image" />
          <div class="project-content">
            <h2 class="project-title">Sanrio Peluches</h2>
            <p class="project-description">
            Es una página web sencilla que presenta una colección de peluches inspirados en los personajes de Sanrio, como Hello 
            Kitty, My Melody y Cinnamoroll. Está desarrollado utilizando HTML, CSS y JavaScript, y su diseño se centra 
            en mostrar imágenes de los productos con un estilo visual atractivo.
            </p>
            <a href="https://github.com/Jeidi-Segura/Sanrio-Peluches" target="_blank" class="project-link">Ver en GitHub</a>
          </div>
        </div>
        <div class="project-card">
          <img src={ dom } alt="Imagen del proyecto" class="project-image" />
          <div class="project-content">
            <h2 class="project-title">Manejo del DOM</h2>
            <p class="project-description">
            Este proyecto es una práctica que realicé para mejorar mis habilidades en el manejo del DOMusando HTML, CSS y
             JavaScript. A través de diferentes ejemplos y ejercicios, exploro cómo seleccionar elementos, responder a
              eventos del usuario y modificar dinámicamente el contenido y estilo de una página web.
            </p>
            <a href="https://github.com/Jeidi-Segura/Manejo_DOM" target="_blank" class="project-link">Ver en GitHub</a>
          </div>
        </div>
        <div class="project-card">
          <img src={ primeraapp } alt="Imagen del proyecto" class="project-image" />
          <div class="project-content">
            <h2 class="project-title">Mi primera APP</h2>
            <p class="project-description">
            Es un proyecto inicial que desarrollé para familiarizarme con la creación de aplicaciones web utilizando React y Vite. Este proyecto me permitió 
            explorar la configuración básica de una aplicación React, comprender la estructura de archivos y practicar la implementación de componentes funcionales.
            </p>
            <a href="https://github.com/Jeidi-Segura/mi-primera-app" target="_blank" class="project-link">Ver en GitHub</a>
          </div>
        </div>

      </div>
      <footer className="footer">
        <h2 className="footer-title">Jeidi Alexandra Segura Almario</h2>
        <p className="footer-email">alexandraseguraalmario@gmail.com</p>

        <div className="footer-icons">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="footer-icon" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="footer-icon" />
          </a>
          <a href="https://wa.me/573233526807" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" className="footer-icon" />
          </a>
        </div>

        <p className="footer-copy">&copy; 2025 Jeidi Segura. Todos los derechos reservados.</p>
        <a href="https://github.com/Jeidi-Segura" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
      </footer>


    </>
  );
}


export default App
