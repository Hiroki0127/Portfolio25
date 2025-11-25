export interface Project {
  slug: string
  title: string
  shortDescription: string
  thumbnail?: string
  demoVideo?: string
  screenshots?: string[]
  purpose: string
  goals: string[]
  techStack: {
    name: string
    description: string
  }[]
  problems: {
    problem: string
    solution: string
  }[]
  github: string
  demo?: string
}

export const projects: Project[] = [
  {
    slug: "outfitease",
    title: "OutfitEase",
    shortDescription: "Fashion outfit management app with Node.js backend and iOS frontend, helping users organize and plan their wardrobe.",
    thumbnail: "/projects/outfitease-thumbnail.png", 
    demoVideo: "https://youtu.be/_bSQ50m5GiE", 
    screenshots: [
      "/projects/outfitease-1.png",
      "/projects/outfitease-2.png",
      "/projects/outfitease-3.png"
    ],
    purpose: "OutfitEase was created to solve the everyday problem of deciding what to wear. Many people struggle with outfit planning, often forgetting what clothes they own or how to mix and match items effectively. This app aims to digitize your wardrobe and provide smart suggestions for outfit combinations.",
    goals: [
      "Create an intuitive interface for users to catalog their clothing items",
      "Implement outfit suggestion algorithm based on weather and occasions",
      "Build a cross-platform solution with iOS frontend and Node.js backend",
      "Enable users to plan outfits in advance and track their favorite combinations"
    ],
    techStack: [
      {
        name: "Swift & SwiftUI",
        description: "Used for building the native iOS frontend with modern declarative UI patterns, providing smooth animations and responsive user experience."
      },
      {
        name: "Node.js & Express",
        description: "Backend API server handling user authentication, data storage, and outfit recommendation logic."
      },
      {
        name: "PostgreSQL",
        description: "Relational database for storing user profiles, clothing items, and outfit combinations with complex relationships."
      },
      {
        name: "AWS S3",
        description: "Cloud storage for user-uploaded photos of clothing items, ensuring scalable and reliable image hosting."
      }
    ],
    problems: [
      {
        problem: "Image Processing Performance: Initial implementation had slow upload times when users added multiple clothing items, causing poor UX.",
        solution: "Implemented client-side image compression before upload and added background processing for thumbnail generation, reducing upload times by 70%."
      },
      {
        problem: "Data Synchronization: Users experienced data conflicts when using the app on multiple devices simultaneously.",
        solution: "Implemented optimistic UI updates with conflict resolution using timestamps and version control, ensuring smooth multi-device experience."
      },
      {
        problem: "Outfit Recommendation Algorithm: Initial random suggestions weren't relevant to users' style preferences.",
        solution: "Developed a machine learning model that learns from user's favorite combinations and outfit selections, improving recommendation relevance by analyzing color compatibility and style patterns."
      }
    ],
    github: "https://github.com/Hiroki0127/OutfitEase"
  },
  {
    slug: "toeic-learning-assistant",
    title: "ToeicLearningAssistant",
    shortDescription: "An AI-powered study app designed to help learners prepare for the TOEIC exam with flashcards, progress tracking, and modern AI techniques.",
    thumbnail: "/projects/toeic-thumbnail.png",
    demoVideo: "",
    screenshots: [
      "/projects/toeic-1.png",
      "/projects/toeic-2.png",
      "/projects/toeic-3.png"
    ],
    purpose: "The TOEIC exam is crucial for many students and professionals, but traditional study methods can be inefficient and demotivating. This app leverages AI to create a personalized learning experience that adapts to each user's strengths and weaknesses, making TOEIC preparation more effective and engaging.",
    goals: [
      "Develop an adaptive learning system that focuses on user's weak areas",
      "Integrate AI for generating contextual practice questions and explanations",
      "Create an engaging UI that encourages daily practice and habit formation",
      "Track detailed progress metrics to show measurable improvement over time"
    ],
    techStack: [
      {
        name: "TypeScript & React",
        description: "Frontend built with TypeScript for type safety and React for component-based architecture, ensuring maintainable and scalable code."
      },
      {
        name: "Node.js & Express",
        description: "Backend server handling user authentication, progress tracking, and API integrations with AI services."
      },
      {
        name: "OpenAI API",
        description: "Integrated for generating contextual vocabulary explanations, example sentences, and adaptive practice questions."
      },
      {
        name: "MongoDB",
        description: "NoSQL database storing user progress, flashcard decks, and learning analytics with flexible schema for rapid iteration."
      },
      {
        name: "Chart.js",
        description: "Data visualization library for displaying progress charts and performance analytics."
      }
    ],
    problems: [
      {
        problem: "AI Response Latency: Initial implementation caused noticeable delays when generating explanations, disrupting the learning flow.",
        solution: "Implemented response caching for common queries and added optimistic UI with skeleton loaders. Also used streaming responses for real-time feedback during generation."
      },
      {
        problem: "Spaced Repetition Algorithm: Standard flashcard intervals weren't optimal for TOEIC-specific vocabulary retention.",
        solution: "Customized the SM-2 algorithm based on TOEIC difficulty levels and user performance data, resulting in 40% better retention rates in user testing."
      },
      {
        problem: "Cost Management: OpenAI API costs were becoming prohibitive during peak usage.",
        solution: "Implemented intelligent prompt caching, batch processing for similar queries, and a hybrid approach using local models for simple tasks while reserving API calls for complex explanations."
      }
    ],
    github: "https://github.com/Hiroki0127/ToeicLearningAssistant"
  },
  {
    slug: "tasty-compass",
    title: "TastyCompass",
    shortDescription: "iOS restaurant discovery app built with SwiftUI and Node.js backend featuring location-based search, user reviews, favorites, and Google Places integration.",
    thumbnail: "/projects/tastycompass-thumbnail.png",
    demoVideo: "",
    screenshots: [
      "/projects/tastycompass-1.png",
      "/projects/tastycompass-2.png",
      "/projects/tastycompass-3.png"
    ],
    purpose: "Finding the perfect restaurant can be overwhelming with so many options. TastyCompass simplifies restaurant discovery by combining location-based search, personalized recommendations, and community reviews to help users find great dining experiences nearby.",
    goals: [
      "Build a seamless location-based restaurant search experience",
      "Integrate Google Places API for comprehensive restaurant data",
      "Implement user review and rating system for community insights",
      "Create favorites and save functionality for future reference",
      "Design an intuitive SwiftUI interface with smooth navigation"
    ],
    techStack: [
      {
        name: "SwiftUI",
        description: "Modern iOS UI framework for building responsive and animated interfaces with declarative syntax, providing smooth user experience."
      },
      {
        name: "Node.js & Express",
        description: "RESTful API server managing user data, reviews, favorites, and acting as a proxy for Google Places API calls."
      },
      {
        name: "Google Places API",
        description: "Provides comprehensive restaurant information including photos, ratings, reviews, hours, and location data."
      },
      {
        name: "Core Location",
        description: "iOS framework for accessing user location and calculating distances to nearby restaurants."
      },
      {
        name: "PostgreSQL",
        description: "Database for storing user profiles, custom reviews, favorites, and cached restaurant data."
      },
      {
        name: "MapKit",
        description: "Apple's mapping framework for displaying restaurant locations and providing navigation capabilities."
      }
    ],
    problems: [
      {
        problem: "API Rate Limits: Google Places API has strict rate limits and costs per request, causing issues during testing and peak usage.",
        solution: "Implemented aggressive caching strategy with Redis, storing restaurant data for 24 hours and using batch requests. Also added pagination to reduce unnecessary API calls."
      },
      {
        problem: "Location Permission UX: Many users denied location permissions, breaking the core app functionality.",
        solution: "Redesigned the permission flow with clear value proposition before requesting access. Added fallback manual location entry and search by city/neighborhood for users who decline permissions."
      },
      {
        problem: "Map Performance: Loading hundreds of restaurant markers caused UI lag and poor performance.",
        solution: "Implemented marker clustering for dense areas and lazy loading that only fetches restaurants in the visible map region. Added virtualization for list view to handle large datasets efficiently."
      },
      {
        problem: "Offline Experience: App was unusable without internet connection.",
        solution: "Built offline-first architecture with Core Data for local storage of favorites and previously viewed restaurants. Users can browse saved places and view cached information without connectivity."
      }
    ],
    github: "https://github.com/Hiroki0127/TastyCompass"
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug)
}

