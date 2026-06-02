export interface Project {
  title: string
  description: string
  tech: string[]
  githubUrl: string
  liveUrl?: string
}

export interface Experience {
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
}

export interface Education {
  degree: string
  institution: string
  location: string
  period: string
  gpa?: string
}

export interface SkillGroup {
  category: string
  skills: string[]
}
