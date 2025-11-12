import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    { name: "React.js", icon: "⚛️", color: "from-blue-400 to-cyan-400" },
    { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-700" },
    { name: "MongoDB", icon: "🍃", color: "from-green-600 to-green-800" },
    { name: "Python", icon: "🐍", color: "from-blue-500 to-yellow-500" },
    { name: "JavaScript", icon: "🟨", color: "from-yellow-400 to-yellow-600" },
    { name: "TypeScript", icon: "🔷", color: "from-blue-500 to-blue-700" },
    { name: "OpenAI API", icon: "🤖", color: "from-purple-500 to-pink-600" },
    { name: "Selenium", icon: "🧪", color: "from-green-400 to-teal-600" },
    { name: "Java", icon: "☕", color: "from-red-500 to-orange-600" },
    { name: "MySQL", icon: "🗄️", color: "from-blue-600 to-cyan-600" },
    { name: "Git & GitHub", icon: "📦", color: "from-orange-500 to-red-600" },
    { name: "Docker", icon: "🐳", color: "from-blue-400 to-blue-600" },
  ]

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div className="text-5xl mb-3 text-center">{skill.icon}</div>
                <h3 className="text-center font-semibold text-gray-800 dark:text-gray-200">
                  {skill.name}
                </h3>
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Always learning and exploring new technologies to stay ahead of the curve
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
