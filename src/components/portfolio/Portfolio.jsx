import { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
// import buytech from '../../../public/projects/buytech.png'
// import rentup from '../../../public/projects/rent.png'
// import nike from '../../../public/projects/nike.png'
// import omni from '../../../public/projects/omni.png'
const items = [
  {
    id: 1,
    title: 'Full Stack E-Commerce App',
    img: '/projects/buytech.png?url',
    desc: `
    BuyTech is an ecommerce platform for selling tech items like mice, computers, keyboards, and iPads.
Technologies Used:
    `,
    technologies: ['Next.js', 'MongoDB', 'Mongoose', 'MUI', 'SCSS'],
    features: `
  Landing Page:
  Hero Section:
  Showcases featured products.
  Why Choose Us:
  Highlights benefits like free shipping, money-back guarantee, online support, and flexible payment.
  Exclusive Discounts:
  Lists discounted items.
  Complete Collection:
  Displays all products.
  User Authentication:
  Login/Signup: Required for ordering.
  Orders Page: View order history.
  Admin Dashboard:
  Overview: Stats and revenue charts.
  Users Management: Add, update, delete, search, and paginate users.
  Products Management: Manage products with add, update, delete, search, and pagination.
  Categories Management: Add and delete categories.
  Orders Management: Update order status and delete orders.
  Settings: Update admin info.
  `,
    demoLink: 'https://buy-tech-app.vercel.app',
  },
  {
    id: 2,
    title: 'Rent Up',

    img: '/projects/rent.png?url',
    desc: `RentUp is a modern website designed to help you find your next home effortlessly. Built on React.js, it offers seamless browsing across sections, robust search functionalities, and detailed listings for apartments, houses, and rental properties. Simplify your search and discover your ideal living space with RentUp.  `,
    technologies: ['React.js', 'JavaScript (ES6+)', 'CSS'],
    features: `Advanced Search: Filter listings by location, price range, and property type.
Detailed Listings: Explore property details with photos and amenities.
Responsive Design: Access RentUp seamlessly across devices.
Discover your ideal living space effortlessly with RentUp's intuitive features and responsive interface.`,
    demoLink: 'https://rent-up-react-app.vercel.app',
  },
  {
    id: 3,
    title: 'Sneakers',
    img: '/projects/nike.png?url',

    desc: 'Explore the world of Nike shoes with our sleek and dynamic ecommerce landing page. Crafted with HTML and CSS, our site offers:',
    features: `Stylish Collections: Browse the latest Nike shoe collections with ease.
Responsive Design: Enjoy a seamless shopping experience on any device.
User-Friendly Navigation: Find your perfect pair quickly and effortlessly.`,
    technologies: ['HTML', 'CSS'],
    demoLink: 'https://nike-store-landing-page-phi.vercel.app',
  },
  {
    id: 4,
    title: 'Omnifood',
    img: '/projects/omni.png?url',

    desc: `Omni Food brings gourmet dining to your doorstep with a sophisticated and user-centric landing page. Whether you're craving a quick bite or planning a special occasion, Omni Food offers:

Exquisite Cuisine: Explore a diverse menu of gourmet dishes crafted by top chefs.
Effortless Ordering: Seamless online ordering with secure payment options.
Fast Delivery: Enjoy prompt delivery services to your doorstep.`,
    features: `Menu Exploration: Easily browse through a variety of gourmet dishes and beverages.
Order Tracking: Stay updated with real-time order status and delivery updates.
Promotions and Discounts: Access exclusive deals and discounts on selected items.
Customer Support: 24/7 support to assist with orders and inquiries.`,
    technologies: ['HTML', 'CSS', 'Responsive Design'],
    demoLink: 'https://food-landing-page-one.vercel.app',
  },
]

const Single = ({ item }) => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
  })

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

  return (
    <section>
      <div className='container' id='Portfolio'>
        <div className='wrapper'>
          <div className='imageContainer' ref={ref}>
            <img src={item.img} alt='' />
          </div>
          <motion.div className='textContainer' style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <h3>Features</h3>
            {item.features && <p className='features'> {item.features}</p>}
            <h3>Technologies</h3>
            <div className='skillsBox'>
              {item.technologies?.map((techItem) => {
                return (
                  <div key={techItem} className='skillsItem'>
                    {techItem}
                  </div>
                )
              })}
            </div>
            <a href={item.demoLink} target='_blank' rel='noopener noreferrer'>
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Portfolio = () => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className='progressBar'></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Portfolio
