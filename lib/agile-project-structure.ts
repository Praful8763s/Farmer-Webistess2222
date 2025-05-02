/**
 * Agile Project Structure for Local Farmer Marketplace
 *
 * This file outlines the Agile methodology implementation for the project.
 * It's organized into sprints, user stories, and tasks following Scrum practices.
 */

// Sprint Planning
export const sprintPlan = {
  currentSprint: {
    number: 3,
    goal: "Enhance user experience with AI assistance and improve security",
    startDate: "2023-05-01",
    endDate: "2023-05-14",
    stories: [
      {
        id: "US-301",
        title: "Implement AI chatbot for customer support",
        description:
          "As a user, I want to get instant help via an AI chatbot so that I can quickly find answers to my questions",
        points: 8,
        acceptance: [
          "Chatbot responds to product inquiries",
          "Chatbot provides information about farmers",
          "Chatbot can handle basic order status questions",
          "UI is responsive and accessible",
        ],
        tasks: [
          { id: "T-3011", title: "Create chat UI component", assignee: "UI Developer", status: "Completed" },
          { id: "T-3012", title: "Integrate OpenAI API", assignee: "Backend Developer", status: "Completed" },
          {
            id: "T-3013",
            title: "Train AI with marketplace context",
            assignee: "AI Specialist",
            status: "In Progress",
          },
          { id: "T-3014", title: "Test chatbot with common user queries", assignee: "QA Engineer", status: "Pending" },
        ],
      },
      {
        id: "US-302",
        title: "Implement authentication middleware",
        description:
          "As a developer, I want to create reusable middleware for authentication so that protected routes are secure",
        points: 5,
        acceptance: [
          "Middleware protects dashboard routes",
          "Unauthorized access redirects to login",
          "Session management works correctly",
          "Rate limiting for API endpoints",
        ],
        tasks: [
          { id: "T-3021", title: "Create middleware.ts file", assignee: "Backend Developer", status: "Completed" },
          { id: "T-3022", title: "Implement authentication logic", assignee: "Backend Developer", status: "Completed" },
          {
            id: "T-3023",
            title: "Add rate limiting for API routes",
            assignee: "Backend Developer",
            status: "In Progress",
          },
          { id: "T-3024", title: "Test middleware with various scenarios", assignee: "QA Engineer", status: "Pending" },
        ],
      },
      {
        id: "US-303",
        title: "Fix navigation and routing",
        description: "As a user, I want all navigation links to work correctly so that I can easily move between pages",
        points: 3,
        acceptance: [
          "All navbar links redirect to correct pages",
          "Mobile navigation works properly",
          "State-based farmer filtering works",
        ],
        tasks: [
          { id: "T-3031", title: "Update navbar component", assignee: "UI Developer", status: "Completed" },
          { id: "T-3032", title: "Fix mobile navigation", assignee: "UI Developer", status: "Completed" },
          { id: "T-3033", title: "Test all navigation paths", assignee: "QA Engineer", status: "In Progress" },
        ],
      },
    ],
    dailyStandups: [
      {
        date: "2023-05-01",
        updates: [
          {
            member: "UI Developer",
            yesterday: "Finished product card component",
            today: "Starting chat UI",
            blockers: "None",
          },
          {
            member: "Backend Developer",
            yesterday: "API endpoint documentation",
            today: "Middleware setup",
            blockers: "None",
          },
          {
            member: "AI Specialist",
            yesterday: "Research on OpenAI integration",
            today: "Start implementation",
            blockers: "API key approval",
          },
        ],
      },
      // More standup records would be here
    ],
  },
  backlog: [
    {
      id: "US-401",
      title: "Implement payment processing",
      description: "As a user, I want to pay for my orders online so that I can complete purchases",
      points: 13,
      priority: "High",
    },
    {
      id: "US-402",
      title: "Add product reviews",
      description: "As a user, I want to leave reviews for products I've purchased",
      points: 8,
      priority: "Medium",
    },
    {
      id: "US-403",
      title: "Create farmer analytics dashboard",
      description: "As a farmer, I want to see analytics about my product sales",
      points: 8,
      priority: "Medium",
    },
  ],
  completedSprints: [
    {
      number: 1,
      goal: "MVP with basic marketplace functionality",
      stories: ["US-101", "US-102", "US-103", "US-104"],
      velocity: 18,
      startDate: "2023-04-03",
      endDate: "2023-04-16",
    },
    {
      number: 2,
      goal: "Enhance product browsing and farmer profiles",
      stories: ["US-201", "US-202", "US-203"],
      velocity: 16,
      startDate: "2023-04-17",
      endDate: "2023-04-30",
    },
  ],
}

// Agile ceremonies
export const agileCeremonies = {
  sprintPlanning: {
    frequency: "Every two weeks",
    duration: "2 hours",
    participants: ["Product Owner", "Scrum Master", "Development Team"],
    purpose: "Plan the work for the upcoming sprint",
  },
  dailyStandup: {
    frequency: "Daily",
    duration: "15 minutes",
    participants: ["Development Team", "Scrum Master"],
    purpose: "Synchronize activities and create a plan for the next 24 hours",
  },
  sprintReview: {
    frequency: "End of each sprint",
    duration: "1 hour",
    participants: ["Product Owner", "Scrum Master", "Development Team", "Stakeholders"],
    purpose: "Demonstrate completed work and gather feedback",
  },
  sprintRetrospective: {
    frequency: "End of each sprint",
    duration: "1 hour",
    participants: ["Development Team", "Scrum Master"],
    purpose: "Reflect on the past sprint and identify improvements",
  },
  backlogRefinement: {
    frequency: "Weekly",
    duration: "1 hour",
    participants: ["Product Owner", "Development Team"],
    purpose: "Review and refine backlog items for future sprints",
  },
}

// Agile metrics
export const agileMetrics = {
  velocity: {
    description: "Average number of story points completed per sprint",
    currentAverage: 17,
    trend: "Increasing",
  },
  burndownChart: {
    description: "Visual representation of work left to do versus time",
    currentSprint: {
      planned: [40, 35, 30, 25, 20, 15, 10, 5, 0],
      actual: [40, 38, 32, 28, 25, 20, null, null, null], // null for future days
    },
  },
  cycleTime: {
    description: "Average time to complete a user story",
    current: "3.5 days",
    target: "3 days",
  },
  defectRate: {
    description: "Number of bugs found per story point",
    current: 0.3,
    target: 0.2,
  },
}
