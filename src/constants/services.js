import React from "react"
import {
  FaCode,
  FaCogs,
  FaMobileAlt,
  FaDatabase,
  FaCloud,
  FaDollarSign,
} from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web design and development",
    text: `The work I provide is of highest quality, fully responsive, and tested in a wide range of devices. I take great care to ensure each project is well-documented and easily maintainable so you can enhance a website as your company grows.`,
  },
  {
    id: 2,
    icon: <FaMobileAlt className="service-icon" />,
    title: "mobile application  development",
    text: `Cross-platform apps built with efficiency and speed for Android and iOS at once.`,
  },
  {
    id: 3,
    icon: <FaCogs className="service-icon" />,
    title: "API Integration & Development",
    text: `REST and SOAP API integration. REST API development with Node.js and Loopback.`,
  },
  {
    id: 4,
    icon: <FaDatabase className="service-icon" />,
    title: "Database Design",
    text: `Database architectures in MongoDB, MySQL or PostgreSQL, always aiming for performance, scale and stability.`,
  },
  {
    id: 5,
    icon: <FaCloud className="service-icon" />,
    title: "Cloud Integration",
    text: `Deployment of NodeJS apps, ReactJS apps and databases to leading cloud platforms such as Heroku and Amazon AWS.`,
  },
  {
    id: 6,
    icon: <FaDollarSign className="service-icon" />,
    title: "Payment Gateway Integration",
    text: `Integration with the most popular Payment Gateways such as Mpesa,Stripe and Paypal..`,
  },
]
