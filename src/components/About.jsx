import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Palette, Rocket } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: <Code2 size={32} />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices"
    },
    {
      icon: <Palette size={32} />,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces users love"
    },
    {
      icon: <Rocket size={32} />,
      title: "Performance",
      description: "Building fast, optimized applications for the best experience"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                alt="Profile"
                className="relative rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">Full Stack Developer & AI Enthusiast</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              I'm currently pursuing a Bachelor of Science in Data Science at IIT Madras and a B.Tech in Computer Science (AI/ML) at Polaris School of Technology. I specialize in building intelligent AI-powered applications and full-stack web solutions using the MERN stack.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              As a Hacktoberfest 2025 Super Contributor, I'm passionate about open-source development, automation, and creating innovative solutions that bridge AI and real-world applications. I love turning complex problems into elegant, scalable solutions.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-2 flex justify-center">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
