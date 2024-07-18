// import './Timeline.scss'
// const Timeline = () => {
//   return (
//     <ul className='timeline'>
//       <li className='timeline-event'>
//         <label className='timeline-event-icon'></label>
//         <div className='timeline-event-copy'>
//           <span className='timeline-event-thumbnail'>April 2011 - heute</span>
//           <h3>Geil,Danke! GmbH</h3>
//           <p>
//             <br /> Entwickeln von anspruchsvollen, animierten, responsive und
//             adaptive Webseiten mit HTML5, SCSS, jQuery; für alle Browser,
//             optimiert für Desktop, Notebook, Smartphones und Tablets (iOS,
//             Android, Windows).
//           </p>
//         </div>
//       </li>
//       <li className='timeline-event'>
//         <label className='timeline-event-icon'></label>
//         <div className='timeline-event-copy'>
//           <span className='timeline-event-thumbnail'>
//             November 2009 - März 2011
//           </span>
//           <h3>Freelancer</h3>
//           <p>
//             Konzeption, Design und Produktion von Digitalen Magazinen mit
//             InDesign, der Adobe Digital Publishing Suite und HTML5. Co-Autorin
//             der Fachbücher Digitales Publizieren für erschienen im
//             dpunkt.verlag.
//           </p>
//         </div>
//       </li>
//       <li className='timeline-event'>
//         <label className='timeline-event-icon'></label>
//         <div className='timeline-event-copy'>
//           <span className='timeline-event-thumbnail'>April 2011 - heute</span>
//           <h3>konplan gmbh</h3>
//           <p>
//             <br />
//             Konzeption und Modellierung von Systemen und APIs für Digital
//             Publishing und Entitlement nach SOA
//           </p>
//         </div>
//       </li>
//     </ul>
//   )
// }

// export default Timeline
import { motion } from 'framer-motion'
import './Timeline.scss'
const Timeline = () => {
  return (
    <div className='timelineMain'>
      <h3 className='head'>Work Experience Overview</h3>
      <div className='container'>
        <motion.ul>
          <motion.li
            variants={{
              initial: {
                x: -500,
                opacity: 0,
              },
              animate: {
                x: -30,
                opacity: 1,
                transition: {
                  duration: 0.8,
                  staggerChildren: 0.1,
                },
              },
            }}
            initial='initial'
            whileInView='animate'
          >
            <h3 className='heading'>Academic Tutor</h3>
            <p>
              Guided students in Web Development, Algorithms, Digital Logic, and
              Programming Fundamentals (C++,Java,JavaScript,React). Tailored
              teaching to enhance understanding and academic success.
            </p>
            <span className='date'>Mar 2021-Jan 2023</span>
            <span className='circle'></span>
          </motion.li>
          <motion.li
            variants={{
              initial: {
                x: 600,
                opacity: 0,
              },
              animate: {
                x: 30,
                opacity: 1,
                transition: {
                  duration: 0.8,
                  staggerChildren: 0.1,
                },
              },
            }}
            initial='initial'
            whileInView='animate'
          >
            <h3 className='heading'>Senior React.js Developer (Remote)</h3>
            <p>
              Developed a user-friendly NFT portfolio management app,
              integrating real-time data and diverse APIs. Revolutionized
              digital asset management with dynamic features and seamless
              collaboration.
            </p>
            <span className='date'>Jan 2023-Jan 2024</span>
            <span className='circle'></span>
          </motion.li>
          <motion.li
            variants={{
              initial: {
                x: -700,
                opacity: 0,
              },
              animate: {
                x: -30,
                opacity: 1,
                transition: {
                  duration: 0.8,
                  staggerChildren: 0.1,
                },
              },
            }}
            initial='initial'
            whileInView='animate'
          >
            <h3 className='heading'>Freelancing </h3>
            <p>
              Engaged in freelance work, offering diverse services to clients
              globally. Delivered top-notch solutions tailored to client needs,
              establishing a reputation for reliability and quality.
            </p>
            <span className='date'>Jan 2019-Sep 2024</span>
            <span className='circle'></span>
          </motion.li>
        </motion.ul>
      </div>
    </div>
  )
}

export default Timeline
