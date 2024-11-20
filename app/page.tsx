import Link from 'next/link'
import { BookOpen, Code, Users, Calendar, Mail } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-700">Core Immersive Academy</div>
            <div className="flex space-x-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link href="#about" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link href="#books" className="text-gray-600 hover:text-gray-900">Books</Link>
              <Link href="#courses" className="text-gray-600 hover:text-gray-900">Courses</Link>
              <Link href="#workshops" className="text-gray-600 hover:text-gray-900">Workshops</Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-2">Welcome to Core Immersive Academy</h1>
            <p className="text-xl mb-8">Learn. Build. Launch. Repeat.</p>
            <Link href="https://learn.coreimmersive.com" className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">
              Start Learning Now
            </Link>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About Us</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              Core Immersive Academy is dedicated to teaching disruptive technologies like AI, VR/AR, and Blockchain. 
              Our mission is to empower learners with cutting-edge skills, leveraging industry experts and innovative 
              platforms like No Code AI and AI Co-pilots such as Cursor and Vercel.
            </p>
          </div>
        </section>

        <section id="books" className="bg-gray-100 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <BookCard 
                title="NFTs for Business" 
                description="A practical guide for harnessing digital assets."
                url="https://link.springer.com/book/10.1007/978-1-4842-9777-3"
              />
              <BookCard 
                title="Generative AI for Executives" 
                description="A strategic roadmap for your organization."
                url="https://link.springer.com/book/9798868809491"
              />
              <BookCard 
                title="Generative AI in Education" 
                description="A guide for parents and teachers."
                url="https://link.springer.com/book/10.1007/979-8-8688-0844-9?sap-outbound-id=C9CC4486401C03D15B5F5830B2E37E554CD7F8ED"
              />
            </div>
          </div>
        </section>

        <section id="courses" className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Courses</h2>
            <p className="text-gray-600 mb-8">Access our cutting-edge courses and start your journey in disruptive technologies.</p>
            <Link href="https://learn.coreimmersive.com" className="bg-blue-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
              View Courses
            </Link>
          </div>
        </section>

        <section id="workshops" className="bg-gray-100 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Community Workshops</h2>
            <p className="text-gray-600 text-center mb-8">
              We offer workshops for middle school, high school, and college students to introduce them to emerging technologies.
            </p>
            <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Upcoming Workshops</h3>
                <ul className="text-gray-600">
                  <li className="mb-2">Introduction to AI (Middle School)</li>
                  <li className="mb-2">VR/AR Development Basics (High School)</li>
                  <li>Blockchain Fundamentals (College)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Us</h2>
            <div className="max-w-md mx-auto">
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your Message"></textarea>
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 Core Immersive Academy. All rights reserved.</p>
          <p className="mt-2">Finalist at the Maryland Institute College of Art Upstart competition</p>
        </div>
      </footer>
    </div>
  )
}

function BookCard({ title, description, url }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
        Learn More
      </a>
    </div>
  )
}