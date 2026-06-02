import type { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'QuickBite - Food Delivery App',
    description:
      'Full-stack food delivery platform with restaurant browsing, cart management, and order tracking. Laravel REST API backend consumed by a React frontend.',
    tech: ['Laravel', 'React', 'MySQL', 'REST API'],
    githubUrl: 'https://github.com/Kia2002/QuickBite---aplikacija-za-dostavu-hrane',
  },
  {
    title: 'Fitness Training Booking',
    description:
      'Desktop application for booking personal training sessions with real-time client–trainer communication over Java Sockets.',
    tech: ['Java', 'MySQL', 'Client-Server Architecture'],
    githubUrl: 'https://github.com/Kia2002/Seminarski-rad---aplikacija-za-zakazivanje-treninga',
  },
  {
    title: 'Stock Price Trend Prediction',
    description:
      'Feed-forward neural network that predicts stock price trends from historical market data. Trained and evaluated with standard ML tooling.',
    tech: ['Python', 'Scikit-learn', 'NumPy', 'Pandas'],
    githubUrl: 'https://github.com/Kia2002/stock-trend-prediction-ffnn',
  },
  {
    title: 'Medical Appointment App',
    description:
      'Medical appointment management system handling patient scheduling, doctor availability, and full appointment lifecycle management.',
    tech: ['.NET', 'SQL Server', 'Agile / Scrum', 'Clean Architecture'],
    githubUrl: 'https://github.com/Kia2002/MedicalAppointmentApp',
  },
  {
    title: 'Harry Potter Characters',
    description:
      'Native iOS app for browsing Harry Potter characters with search and detailed character info. Built with SwiftUI and MVVM architecture using URLSession async/await, with no external dependencies.',
    tech: ['Swift', 'SwiftUI', 'MVVM', 'URLSession'],
    githubUrl: 'https://github.com/Kia2002/HarryPotterCharactersApp',
  },
]
