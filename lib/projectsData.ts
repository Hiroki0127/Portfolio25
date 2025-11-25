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
    shortDescription: "SwiftUI iOS application with Node.js/Express backend for managing wardrobe, building outfits, planning looks on a calendar, and sharing posts with the community.",
    thumbnail: "/projects/outfitease-thumbnail.png", 
    demoVideo: "https://youtu.be/_bSQ50m5GiE", 
    screenshots: [
      "/projects/outfitease-1.png",
      "/projects/outfitease-2.png",
      "/projects/outfitease-3.png",
      "/projects/outfitease-thumbnail.png"
    ],
    purpose: "OutfitEase solves the everyday challenge of wardrobe management and outfit planning. The app helps users digitize their wardrobe, create outfit combinations, plan looks on a calendar, and engage with a community of fashion enthusiasts. It combines practical organization tools with social features to make fashion management both functional and enjoyable.",
    goals: [
      "Build a comprehensive wardrobe management system with detailed clothing item tracking (brand, price, season, occasion)",
      "Enable users to create and manage outfits by combining clothing items with style tags and metadata",
      "Implement calendar-based outfit planning for scheduling looks on specific dates",
      "Create a community feed with posts, likes, comments, and user profiles with follower/following functionality",
      "Integrate weather data for context-aware outfit suggestions",
      "Provide secure authentication with email/password and Google Sign-In using JWT sessions"
    ],
    techStack: [
      {
        name: "SwiftUI & MVVM",
        description: "Native iOS frontend built with SwiftUI using MVVM architecture pattern. Features async/await for API calls, custom API client with retry logic, pull-to-refresh functionality, and token persistence. Achieved 97.76% unit test coverage."
      },
      {
        name: "Node.js & Express",
        description: "RESTful API backend with structured MVC architecture (controllers/models). Handles JWT authentication, request validation, error handling, and provides comprehensive endpoints for all app features including authentication, clothing management, outfits, community posts, and planning."
      },
      {
        name: "Supabase PostgreSQL",
        description: "Managed PostgreSQL database with session pooler for connection management. Uses SSL connections, array fields for tags, and includes a follow relationship join table. Database schema supports users, clothing items, outfits, posts, comments, likes, and outfit planning."
      },
      {
        name: "Cloudinary",
        description: "Cloud-based media storage for clothing item photos and outfit images. Handles direct base64 uploads from iOS client and provides secure URLs for image delivery with optimization."
      },
      {
        name: "Render",
        description: "Production hosting for the backend API. Free tier deployment with 50-60 second spin-up time handled gracefully by client-side retry logic and warm-up pings."
      },
      {
        name: "OpenWeather API",
        description: "Weather integration for providing context-aware outfit recommendations based on current and forecasted weather conditions."
      }
    ],
    problems: [
      {
        problem: "Render Free Tier Cold Starts: The backend takes 50-60 seconds to wake up on the free tier, causing timeout errors on first request.",
        solution: "Implemented client-side retry logic with exponential backoff and a warm-up ping mechanism. The iOS app shows a loading spinner during warm-up and automatically retries failed requests, providing a smooth user experience despite the cold start delay."
      },
      {
        problem: "Database Connection Issues: Initial connection to Supabase was failing with SSL certificate errors and IPv6 connectivity issues.",
        solution: "Configured Supabase session pooler (port 6543) to use IPv4 connections and set `sslmode=require` in the connection string. Updated database connection handler to properly handle SSL certificates with `rejectUnauthorized: false` for development."
      },
      {
        problem: "Image Upload Performance: Uploading multiple clothing item photos was slow and blocking the UI thread.",
        solution: "Implemented async image uploads with Cloudinary using base64 encoding directly from the iOS client. Added background processing for image optimization and thumbnail generation, ensuring the UI remains responsive during uploads."
      },
      {
        problem: "Data Synchronization: Users needed to manually refresh to see new community posts and updates.",
        solution: "Implemented pull-to-refresh functionality across all feed views and added automatic data refresh on view appearance. Used async/await patterns to ensure smooth data loading without blocking the main thread."
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

