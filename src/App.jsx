import { useState } from 'react'
import perfil from '/foto_perfil.jpg'
import html from '/html.png'
import css from '/css.png'
import js from '/js.webp'
import React from '/React.webp'
import php from '/php.png'
import mysql from '/mysql.png'
import MAMP from '/MAMP.png'
import tailwindcss from '/tailwindcss.png'
import laravel from '/laravel.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center mt-6">
          <img
            src={perfil}
            alt="Foto de perfil"
            className="size-16 h-32 rounded-full object-cover border-4 border-white shadow-md"
          />
      </div>

    
      <h2> Portafolio</h2>
      <h1> Jeidi Segura </h1> <br />
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
        <div className="habilidad"><p>React</p><img src={React} className="logo" alt="React" /></div>
        <div className="habilidad"><p>PHP</p><img src={php} className="logo" alt="PHP" /></div>
        <div className="habilidad"><p>MySQL</p><img src={mysql} className="logo" alt="MySQL" /></div>
        <div className="habilidad"><p>MAMP</p><img src={MAMP} className="logo" alt="MAMP" /></div>
        <div className="habilidad"><p>TailwindCSS</p><img src={tailwindcss} className="logo" alt="TailwindCSS" /></div>
        <div className="habilidad"><p>Laravel</p><img src={laravel} className="logo" alt="Laravel" /></div>
      </div>
    </>
  )
}

export default App
