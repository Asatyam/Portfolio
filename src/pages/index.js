import Image from 'next/image'
import { Inter } from 'next/font/google'
import Skills from '@/Components/Skills'
import Projects from '@/Components/Projects'
import Contact from '@/Components/Contact'
import Welcome from '@/Components/Welcome'
import Navigation from '@/Components/Navigation'
import About from '@/Components/About'
import Footer from '@/Components/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=" text-white p-2 min-h-[100vh] bg-gradient-to-b from-blue-700 to-indigo-950">
      <Navigation />
      <Welcome />
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer />
    </main>
  );
}
