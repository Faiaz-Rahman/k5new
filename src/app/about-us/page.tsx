import React from 'react'

export default function AboutUs() {
  return (
    <main
      className="max-w-7xl mx-auto px-4 py-12 text-left pl-[20px] 
                pt-24 pr-[20px]
                lg:pt-40 lg:px-6"
    >
      <h1 className="text-4xl font-bold mb-6">About Us</h1>

      <section className="mb-8">
        <p className="text-gray-800 leading-relaxed">
          Witty Worksheets is a fun educational platform that provides
          printable teaching worksheets and tasks for students from
          Kindergarten to Grade 5. The worksheets are interactive,
          unique, specially made, and of high quality—categorized by
          grade and topic for little learners. These highly effective
          and premium-quality worksheets are ideal for use as teaching
          tools in the classroom or at home by both teachers and
          parents.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-800 leading-relaxed">
          Our mission is to teach our little learners in a unique way
          that makes learning fun, engaging, and easily accessible.
          Our team specializes in designing and creating worksheets
          with vibrant, thought-provoking ideas and colorful themes
          that hold students' interest.
        </p>
        <p className="text-gray-800 leading-relaxed mt-4">
          Our main priority is to make learning independent with our
          unique and affordable worksheets designed for Kindergarten
          to Grade 5.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Goals</h2>
        <ul className="list-disc list-inside text-gray-800 leading-relaxed space-y-2">
          <li>
            We create an idea-based learning platform where anyone can
            learn independently and effortlessly.
          </li>
          <li>
            We help build potential in kids by supporting their
            adaptive learning styles.
          </li>
          <li>
            We provide free and premium worksheet materials
            categorized by both grade and topic, ensuring a
            user-friendly experience.
          </li>
          <li>
            We approach tasks creatively and explore all possible
            solutions to ensure thorough learning.
          </li>
          <li>
            Our content progresses from easy to difficult, ensuring a
            stepwise learning process.
          </li>
          <li>
            A skilled team manages our website, offering expertise
            across various subjects including mathematics, grammar,
            science, and vocabulary.
          </li>
          <li>
            Each worksheet undergoes a two-stage review process to
            guarantee accuracy and quality.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          How Worksheets and Workbooks Help Kids to Learn?
        </h2>
        <ul className="list-disc list-inside text-gray-800 leading-relaxed space-y-2">
          <li>
            Worksheets actively engage students through writing,
            drawing, and problem-solving, promoting hands-on learning.
          </li>
          <li>
            They encourage independent exploration, helping students
            fully grasp concepts before progressing.
          </li>
          <li>
            With answer keys or self-assessment sections, students
            receive instant feedback to correct mistakes and deepen
            understanding.
          </li>
          <li>
            Designed to foster critical thinking and problem-solving,
            worksheets also allow teachers to tailor content to
            students’ needs, enhancing learning opportunities.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Our Worksheet Builder Platform
        </h2>
        <p className="text-gray-800 leading-relaxed">
          We encourage and offer parents and teachers a creative space
          for crafting their own ideas into worksheets using our
          worksheet builder platform and actively support their
          children to achieve their full academic potential.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Store</h2>
        <p className="text-gray-800 leading-relaxed">
          Our premium and inexpensive worksheet resources include
          games, planners, and different learning activities.
          <br />
          <a href="/store" className="text-blue-600 hover:underline">
            Visit this Store from here.
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
        <p className="text-gray-800 leading-relaxed">
          The Witty Worksheets Team specializes in crafting visually
          appealing worksheets with vibrant designs and engaging
          themes to capture students’ interest.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Membership</h2>
        <p className="text-gray-800 leading-relaxed">
          By becoming a member, you can gain more options, save time,
          skip ads, make your own worksheets, and support Witty
          Worksheets!
        </p>
      </section>
    </main>
  )
}
