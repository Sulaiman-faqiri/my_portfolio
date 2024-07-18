import { useRef } from 'react'
import './services.scss'
import { motion, useInView } from 'framer-motion'

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
}

const Services = () => {
  const ref = useRef()

  const isInView = useInView(ref, { margin: '-100px' })

  return (
    <motion.div
      className='services'
      variants={variants}
      initial='initial'
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={'animate'}
    >
      <motion.div className='textContainer' variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className='titleContainer' variants={variants}>
        <div className='title'>
          <img src='/people.webp' alt='' />
          <h1 id='Services'>
            <motion.b whileHover={{ color: 'orange' }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className='title'>
          <h1>Business.</h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className='listContainer' variants={variants}>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Developing Custom Web Applications</h2>
          <p>
            I create tailored web applications to streamline processes and
            empower decision-making, driving efficiency and innovation for our
            brand.
          </p>

          <motion.a href={`#Contact`}>Go</motion.a>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Optimizing Website Performance</h2>
          <p>
            I focus on enhancing our website&#39;s speed and navigation,
            ensuring a seamless user experience to drive engagement and
            conversions.
          </p>
          <motion.a href={`#Contact`}>Go</motion.a>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Implementing SEO Best Practices</h2>
          <p>
            I optimize our website&#39;s structure and content to improve search
            engine visibility, attracting targeted traffic and expanding our
            online presence.
          </p>
          <motion.a href={`#Contact`}>Go</motion.a>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Integrating E-commerce Functionality</h2>
          <p>
            I seamlessly integrate secure payment gateways and optimize shopping
            experiences, fostering customer satisfaction and driving revenue
            growth.
          </p>
          <motion.a href={`#Contact`}>Go</motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services
