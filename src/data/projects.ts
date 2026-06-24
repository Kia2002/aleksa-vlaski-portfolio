import type { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'FootballIQ Scout',
    description:
      'ASP.NET Core 9 scouting API that answers natural language football queries via a hybrid RAG pipeline combining BM25, pgvector semantic search, and Reciprocal Rank Fusion over 3,000+ StatsBomb matches.',
    tech: ['.NET 9', 'RAG', 'pgvector', 'Clean Architecture'],
    githubUrl: 'https://github.com/Kia2002/FootballIQ',
    inProgress: true,
  },
  {
    title: 'Medical Appointment App',
    description:
      'Full-stack medical scheduling system for managing patients, doctors, and appointments, including slot-availability rules and natural-language booking powered by the OpenAI API. ASP.NET Core REST API backend with Clean Architecture, paired with a React/TypeScript frontend, built collaboratively in a 10-member Agile team.',
    tech: ['.NET 8', 'EF Core', 'SQL Server', 'React', 'TypeScript', 'OpenAI API'],
    githubUrl: 'https://github.com/Kia2002/MedicalAppointmentApp',
  },
  {
    title: 'Fitness Training Booking',
    description:
      'Desktop application for booking personal training sessions with real-time client–trainer communication over Java Sockets.',
    tech: ['Java', 'MySQL', 'Client-Server Architecture'],
    githubUrl: 'https://github.com/Kia2002/Seminarski-rad---aplikacija-za-zakazivanje-treninga',
  },
  {
    title: 'QuickBite - Food Delivery App',
    description:
      'Full-stack food delivery platform with restaurant browsing, cart management, and order tracking. Laravel REST API backend consumed by a React frontend.',
    tech: ['Laravel', 'React', 'MySQL', 'REST API'],
    githubUrl: 'https://github.com/Kia2002/QuickBite---aplikacija-za-dostavu-hrane',
  },
  {
    title: 'Stock Price Trend Prediction',
    description:
      'Feed-forward neural network that predicts stock price trends from historical market data. Trained and evaluated with standard ML tooling.',
    tech: ['Python', 'Scikit-learn', 'NumPy', 'Pandas'],
    githubUrl: 'https://github.com/Kia2002/stock-trend-prediction-ffnn',
  },
  {
    title: 'Harry Potter Characters',
    description:
      'Native iOS app for browsing Harry Potter characters with search and detailed character info. Built with SwiftUI and MVVM architecture using URLSession async/await, with no external dependencies.',
    tech: ['Swift', 'SwiftUI', 'MVVM', 'URLSession'],
    githubUrl: 'https://github.com/Kia2002/HarryPotterCharactersApp',
  },
]
