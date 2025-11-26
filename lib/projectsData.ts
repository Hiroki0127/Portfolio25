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
      "/projects/outfitease-4.png"
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
    shortDescription: "A full-stack web application for TOEIC exam preparation featuring an AI-powered assistant with RAG (Retrieval-Augmented Generation) and Knowledge Graph integration to generate practice questions grounded in actual TOEIC content.",
    thumbnail: "/projects/toeic-thumbnail.png",
    demoVideo: "",
    screenshots: [
      "/projects/toeic-learning-assistant1.png",
      "/projects/toeic-learning-assistant2.png",
      "/projects/toeic-learning-assistant3.png",
      "/projects/toeic-learning-assistant4.png"
    ],
    purpose: "Most TOEIC study apps use generic AI responses that don't match the actual exam format. This application solves that problem by using RAG to retrieve relevant context from official TOEIC questions and flashcards stored in the database, then generates practice questions that match the format, vocabulary, and style of the real exam. The Knowledge Graph automatically enhances responses with related vocabulary concepts and grows organically from user interactions.",
    goals: [
      "Implement RAG system that retrieves relevant TOEIC content from database to ground AI responses",
      "Build Knowledge Graph that automatically grows from user interactions and enhances AI responses",
      "Create AI assistant that generates Part 5, 6, and 7 practice questions matching real exam format",
      "Develop comprehensive progress tracking with XP-based leveling system, study streaks, and analytics",
      "Implement smart flashcard recommendations based on weak areas, spaced repetition, and knowledge graph relationships",
      "Build real-time notification system for achievements, study streaks, and reminders"
    ],
    techStack: [
      {
        name: "Next.js & TypeScript",
        description: "Frontend built with Next.js for server-side rendering and TypeScript for type safety. Deployed on Vercel with automatic deployments from GitHub."
      },
      {
        name: "Node.js & Express",
        description: "RESTful API backend with structured MVC architecture. Handles authentication, AI services, RAG queries, and all business logic. Deployed on Render with automatic database migrations."
      },
      {
        name: "PostgreSQL & Prisma",
        description: "Relational database for storing users, flashcards, quizzes, study sessions, and Knowledge Graph nodes/relationships. Prisma ORM provides type-safe database access and migrations."
      },
      {
        name: "Groq API",
        description: "AI service for generating practice questions, vocabulary explanations, and general chat. Integrated with RAG system to ensure responses match TOEIC format and style."
      },
      {
        name: "RAG System",
        description: "Custom Retrieval-Augmented Generation system that loads all flashcards and questions into memory on startup, then retrieves relevant context to ground AI responses in actual TOEIC content."
      },
      {
        name: "Knowledge Graph",
        description: "Auto-growing graph of vocabulary relationships. Automatically creates nodes from flashcards and relationships from study patterns. Enhances AI responses and powers smart recommendations."
      },
      {
        name: "Zustand",
        description: "State management for frontend, providing clean separation of concerns and easy testing with proper mocking strategies."
      }
    ],
    problems: [
      {
        problem: "RAG Implementation: Ensuring AI-generated questions match actual TOEIC format and style rather than generic English questions.",
        solution: "Implemented custom RAG system that retrieves relevant context from database and uses structured prompts that enforce correct formatting (e.g., Part 6 must have 4 questions numbered 1-4, realistic business documents). Knowledge Graph automatically enhances responses with related vocabulary concepts."
      },
      {
        problem: "Test Mocking: Tests were making real API calls and database connections, causing failures and costs.",
        solution: "Implemented comprehensive mocking: Prisma client mocking with proper hoisting, Groq SDK mocking to prevent real API calls, Zustand store mocking for frontend tests. Achieved 88% test coverage (68/74 tests passing) with proper isolation of all external dependencies."
      },
      {
        problem: "Conversation History: Maintaining full conversation context like ChatGPT while staying within token limits.",
        solution: "Implemented token-aware trimming: estimate tokens (~4 chars per token), keep system prompt and most recent 20 messages, trim oldest messages if approaching limit. Maintains context while preventing token overflow."
      },
      {
        problem: "Knowledge Graph Integration & Auto-Growth: Enhancing AI responses with vocabulary relationships while allowing the graph to grow organically from user interactions.",
        solution: "Integrated Knowledge Graph queries into RAG service to automatically enhance AI responses. Implemented auto-growth system that creates nodes from flashcards and relationships from study patterns. Relationships strengthen based on co-study frequency and definition similarity. Graceful fallback if Knowledge Graph data is unavailable."
      },
      {
        problem: "Leveling System: Creating a fair XP-based leveling system that rewards various study activities.",
        solution: "Designed multi-factor XP system: flashcards studied (10 XP), correct answers (5 XP), quiz attempts (50 XP base + score-based bonus), study streaks (20 XP per day), study time (1 XP per minute). Provides balanced progression that rewards consistent study habits."
      },
      {
        problem: "Study Session Tracking: Accurately tracking study time and preventing inflated totals from bad data.",
        solution: "Track actual start/end times for sessions, filter out invalid durations (zero or negative) in calculations. Provide scripts to analyze and fix historical data. Ensures accurate progress metrics."
      }
    ],
    github: "https://github.com/Hiroki0127/ToeicLearningAssistant",
    demo: "https://toeic-learning-assistant-frontend-a.vercel.app/"
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

