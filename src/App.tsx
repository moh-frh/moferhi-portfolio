import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './components/theme/theme-provider'
import { Navbar } from './components/layout/navbar'
import { Footer } from './components/layout/footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

function App() {
  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <div className="relative min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 pt-16 pb-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

