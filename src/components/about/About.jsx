import './About.scss'
import { motion } from 'framer-motion'

const About = () => {
  const skillItems = [
    // Programming Languages
    'Python',
    'Java',
    'C++',
    'PHP',
    'JavaScript',
    'TypeScript',

    // Frontend Frameworks and Libraries
    'React.js',
    'Next.js',
    'Redux',
    'Zustand',
    'Scss',
    'Tailwind css',
    'Framer Motion',

    // Backend Frameworks
    'Node.js',
    'Express.js',

    // Databases
    'MongoDB',
    'PostgreSQL',
    'Firebase',

    // Tools and Utilities
    'RESTful',
    'Webpack',
    'Vite',
    'Git',
    'Figma',
  ]

  const skillItemAnimation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  }

  return (
    <div className='aboutSection'>
      <h1 id='About'>About me</h1>
      <motion.div
        className='aboutBox'
        variants={{
          initial: {
            y: 500,
            opacity: 0,
          },
          animate: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.6,
              staggerChildren: 0.1,
            },
          },
        }}
        initial='initial'
        whileInView='animate'
      >
        <img src='/about.png' alt='sulaiman' />
        <div className='textBox'>
          <p>
            I&#39;ve been a web developer since 2019, with a strong affinity for
            JavaScript. Despite completing a four-year Computer Engineering
            program that lacked web development content, I pursued it
            independently. Through extensive self-study and project work,
            I&#39;ve become proficient in JavaScript. Now, I&#39;m passionate
            about sharing my knowledge. Leveraging both my formal education and
            self-taught expertise, I teach web development to university
            students at Khane Noor. It&#39;s immensely fulfilling to empower the
            next generation of developers on their journey.
          </p>
          <motion.h2  transition={{ delay: 0.2 }}>SKILLS</motion.h2>
          <motion.div className='skillsBox'>
            {skillItems.map((item, i) => {
              return (
                <motion.div
                  key={i}
                  className='skillsItem'
                  variants={skillItemAnimation}
                  initial='initial'
                  animate='visible'
                  custom={i}
                  whileInView='animate'
                >
                  {item}
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default About
