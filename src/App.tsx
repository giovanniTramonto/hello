import './App.css'
import ProfileImage from './assets/profile-image-blue.jpg'

function App() {

  return (
    <>
      <section className="section">
        <img src={ProfileImage} className="profile-image" />
        <div>
          <h1>Hello World</h1>
          <p className="text">My name is Johannes Abendroth.<br />I am a Frontend-Developer based in Berlin and 41 years old</p>
        </div>
      </section>
    </>
  )
}

export default App
