/**
 * ==============================================================================
 * HARSHIL GARG — PORTFOLIO CONFIGURATION & DATA SOURCE
 * ==============================================================================
 * This file serves as the centralized content management configuration for
 * Harshil Garg's personal portfolio. 
 *
 * HOW TO UPDATE:
 * - To add your contact links (GitHub, LinkedIn, Email), simply update the fields
 *   in the `contact` section below. Empty links ("") are automatically hidden.
 * - To add or edit projects, modify the `projects` array.
 * - To add certifications, add items to the `certifications` array.
 * - To update skills or creative tools, edit the respective arrays.
 * ==============================================================================
 */

const PORTFOLIO_DATA = {
  // ----------------------------------------------------------------------------
  // 1. Personal & Academic Information
  // ----------------------------------------------------------------------------
  personal: {
    fullName: "Harshil Garg",
    shortName: "Harshil",
    tagline: "Computer Science Student • Creative Media • Aspiring Engineer",
    degree: "B.Tech in Computer Science Engineering",
    university: "JECRC University",
    location: "Jaipur, Rajasthan, India",
    
    // Exact requested professional introduction
    introduction: `Hi, I'm Harshil Garg, a Computer Science student at JECRC University with an interest in technology, creative problem-solving, and entrepreneurship.

Alongside my academic journey, I've explored creative media production, digital marketing, and AI-assisted website development through my work with Harshil Media and personal projects.

I'm focused on strengthening my technical foundation, learning through practical projects, and growing into a capable engineer.`,

    // Exact requested career goal
    careerGoal: "My goal is to become a good engineer by continuously learning, developing strong technical skills, and gaining practical experience. I want to build a solid foundation in Computer Science and apply what I learn to meaningful projects and real-world problems.",

    // Professional Interests (presented as learning directions, not claims of expertise)
    interests: [
      { name: "Software Development", icon: "code" },
      { name: "Artificial Intelligence", icon: "cpu" },
      { name: "Web Development", icon: "globe" },
      { name: "Creative Media Production", icon: "film" },
      { name: "Digital Marketing", icon: "trending-up" },
      { name: "Entrepreneurship", icon: "briefcase" },
      { name: "Practical Problem-Solving", icon: "check-circle" }
    ]
  },

  // ----------------------------------------------------------------------------
  // 2. Entrepreneurial Experience (Harshil Media)
  // ----------------------------------------------------------------------------
  entrepreneurship: {
    businessName: "Harshil Media",
    category: "Creative Media and Digital Marketing",
    website: "https://harshil-media.lovable.app",
    badge: "Active Initiative",
    description: "Harshil Media is a creative media initiative focused on helping businesses communicate their products, services, and promotions through short-form videos and digital marketing creatives.",
    
    // Core activities carried out through Harshil Media
    activities: [
      {
        title: "Promotional Videos & Reels",
        desc: "Creating short-form video content and Instagram Reels tailored to highlight products and brand offerings."
      },
      {
        title: "Video Concepts & Scripting",
        desc: "Developing engaging promotional scripts, hook structures, and visual concepts for campaigns."
      },
      {
        title: "Marketing Campaign Ideation",
        desc: "Brainstorming creative marketing concepts and offer-driven promotional campaigns for retail clients."
      },
      {
        title: "Social Media Creatives",
        desc: "Designing posters, banners, and digital creatives for brand announcements and product highlights."
      },
      {
        title: "Social Media Services Exploration",
        desc: "Exploring and refining end-to-end social media management strategies for local businesses."
      },
      {
        title: "Client Discussions & Deliverables",
        desc: "Leading requirement gatherings, managing revision cycles, and delivering content within set deadlines."
      }
    ],

    // Editable verified results slots (kept honest: empty by default until confirmed)
    verifiedResults: [
      // Example to enable later:
      // { label: "Campaign Focus", value: "Retail & Local Commerce" }
    ]
  },

  // ----------------------------------------------------------------------------
  // 3. Creative Tools
  // ----------------------------------------------------------------------------
  creativeTools: [
    {
      name: "Adobe Premiere Pro",
      role: "Video editing and short-form promotional content",
      level: "Practical Familiarity",
      tag: "Video Production",
      icon: "premiere"
    },
    {
      name: "Adobe Photoshop",
      role: "Graphic design, posters, banners, and image editing",
      level: "Practical Familiarity",
      tag: "Design & Creatives",
      icon: "photoshop"
    },
    {
      name: "Adobe After Effects",
      role: "Explored for motion graphics and visual enhancements",
      level: "Beginner Familiarity",
      tag: "Motion & Effects",
      icon: "aftereffects"
    },
    {
      name: "CapCut",
      role: "Video editing tool explored for fast-paced short-form content",
      level: "Practical Familiarity",
      tag: "Short-Form Video",
      icon: "capcut"
    }
  ],

  // ----------------------------------------------------------------------------
  // 4. Technology & Learning
  // ----------------------------------------------------------------------------
  technologyLearning: {
    // Distinct Category 1: Skills Currently Being Learned
    currentlyLearning: [
      {
        name: "C++ & Data Structures & Algorithms",
        desc: "Strengthening algorithmic thinking, problem-solving, and computational complexity."
      },
      {
        name: "Python Programming",
        desc: "Developing familiarity with Python syntax, scripting, and practical logic."
      },
      {
        name: "AI Fundamentals & Prompt Engineering",
        desc: "Understanding core AI principles and applying prompt engineering for productivity and learning."
      },
      {
        name: "Web Development",
        desc: "Building structured web applications, responsive interfaces, and practical software."
      }
    ],

    // Distinct Category 2: Tools Previously Used & Coursework
    toolsUsed: [
      {
        name: "C Programming",
        category: "Coursework Language",
        desc: "Used in undergraduate computer science coursework for foundational programming concepts."
      },
      {
        name: "Perplexity",
        category: "AI Research",
        desc: "Applied for fast technical fact-finding, research assistance, and concept clarification."
      },
      {
        name: "NotebookLM",
        category: "Study & Synthesis",
        desc: "Used for structuring study notes, synthesizing technical documents, and coursework review."
      },
      {
        name: "Gamma",
        category: "Presentations",
        desc: "Utilized for structuring clean presentations, visual ideation, and project pitches."
      },
      {
        name: "Lovable",
        category: "AI-Assisted Web Builder",
        desc: "Explored for rapid website generation, iterative UI ideation, and digital presence creation."
      }
    ],

    // Distinct Category 3: Demonstrable Through Projects
    demonstrableInProjects: [
      {
        name: "Website Deployment & Hosting",
        desc: "Deploying and managing live digital projects across platforms like Vercel and Lovable."
      },
      {
        name: "AI-Assisted Development",
        desc: "Using modern AI tools to accelerate prototyping, code organization, and feature exploration."
      },
      {
        name: "UI Structuring & Responsive Design",
        desc: "Creating accessible, responsive interfaces that function across mobile, tablet, and desktop."
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // 5. Projects
  // ----------------------------------------------------------------------------
  projects: [
    {
      id: "harshil-media-web",
      title: "Harshil Media Website",
      category: "Business Website / Digital Presence",
      badge: "Live Website",
      status: "completed",
      isPublished: true,
      url: "https://harshil-media.lovable.app",
      description: "A digital presence for Harshil Media, a creative media initiative focused on promotional videos, short-form content, and digital marketing creatives.",
      ownerRole: "Founder & Creative Lead • Website Design & Ideation",
      toolsUsed: ["Lovable (AI-Assisted Web Builder)", "Responsive Web UI", "Digital Presence"],
      features: [
        "Business showcase for creative media services",
        "Highlighting short-form video and promotional content offerings",
        "Clean, responsive interface deployed live on the web"
      ],
      note: "Built using the Lovable AI-assisted web platform to establish a rapid, functional business presence."
    },
    {
      id: "retail-marketing-campaigns",
      title: "Retail Marketing Campaigns",
      category: "Creative Media / Marketing",
      badge: "Client Collaboration",
      status: "in-progress",
      isPublished: true,
      url: "", // Empty: no external link currently
      description: "Promotional content and marketing concepts developed for retail businesses, combining short-form video production, creative storytelling, and offer-based campaign ideas.",
      ownerRole: "Concept Ideation • Video Scripting • Content Production",
      toolsUsed: ["Adobe Premiere Pro", "Photoshop", "Instagram Reels", "Campaign Ideation"],
      features: [
        "Scripting promotional hooks and offer announcements",
        "Producing short-form vertical videos for social media engagement",
        "Drafting promotional banner concepts and creative assets"
      ],
      clientContext: "Potential client work includes Roop Watches & Mobiles (subject to confirmation and permission to display specific creative assets publicly).",
      editableNotice: "Campaign performance statistics and verified client deliverables will be attached as formal permissions are finalized."
    },
    {
      id: "teacher-planner-app",
      title: "Teacher Planner Website",
      category: "Web Development / Personal Project",
      badge: "Web Concept & Workspace",
      status: "in-progress",
      isPublished: true,
      url: "", // Set to live URL or GitHub repo when ready
      description: "A website concept designed to help teachers organize lesson plans, teaching schedules, academic dates, and availability.",
      ownerRole: "Computer Science Undergraduate Project",
      toolsUsed: ["React", "Vite", "Tailwind CSS", "JavaScript"],
      features: [
        "Teacher dashboard concept for daily overview",
        "Weekly schedule & timetable management structure",
        "Lesson planning interface for subject organization",
        "Academic calendar & event dates tracker",
        "Free periods & availability management module",
        "Responsive, mobile-friendly interface"
      ],
      note: "Developed as a practical web application project to solve academic scheduling and lesson planning workflow challenges."
    },
    {
      id: "digital-product-catalog",
      title: "Digital Product Catalog",
      category: "Digital Content / Commercial Project",
      badge: "In Progress / Subject to Confirmation",
      status: "pending-verification",
      isPublished: true, // Displayed with honest 'In Progress / Unconfirmed' status as requested
      url: "",
      description: "Digital catalog work involving the organization and presentation of product information and imagery.",
      ownerRole: "Catalog Layout & Asset Organization",
      toolsUsed: ["Graphic & Layout Tools", "Asset Organization"],
      features: [
        "Structuring commercial product specifications and images",
        "Formatting visual catalog layouts for client review"
      ],
      verificationNotice: "Status: In Progress / Under Review. Catalog details (including the Urban Fry Homes catalog) remain in progress pending confirmation of the final completion status."
    }
  ],

  // ----------------------------------------------------------------------------
  // 6. Education
  // ----------------------------------------------------------------------------
  education: {
    degree: "B.Tech in Computer Science Engineering",
    institution: "JECRC University",
    location: "Jaipur, Rajasthan, India",
    statusBadge: "Undergraduate Student",
    description: "Pursuing an undergraduate engineering curriculum focused on computing principles, algorithms, software fundamentals, and practical engineering problem-solving.",
    // Future editable fields (kept empty/honest until confirmed)
    period: "", // e.g., "202X – 202X"
    coursework: [
      "Data Structures & Algorithms (Currently Learning)",
      "C Programming Fundamentals",
      "Object-Oriented Programming Principles",
      "Computer Science Core Curriculum"
    ]
  },

  // ----------------------------------------------------------------------------
  // 7. Certifications & Achievements
  // ----------------------------------------------------------------------------
  certifications: {
    // Honest statement as strictly required
    placeholderMessage: "I'm continuing to learn and build practical experience. Verified certifications and achievements will be added here as I earn them.",
    
    // Future verified items can be appended to this list
    // If empty ([]), the UI cleanly displays the honest placeholder + an interactive 'Add Certification' blueprint
    items: [
      // Example schema for future additions:
      // {
      //   name: "Certification Title",
      //   issuer: "Issuing Organization (e.g. NPTEL / Coursera / HackerRank)",
      //   date: "Month Year",
      //   credentialUrl: "https://...",
      //   image: ""
      // }
    ]
  },

  // ----------------------------------------------------------------------------
  // 8. Contact Information & Professional Links
  // ----------------------------------------------------------------------------
  contact: {
    location: "Jaipur, Rajasthan, India",
    institution: "JECRC University",
    
    // Empty links are AUTOMATICALLY hidden from public buttons in the UI
    // Fill them in whenever you are ready:
    email: "",         // e.g. "harshil.garg@example.com"
    github: "",        // e.g. "https://github.com/your-username"
    linkedin: "",      // e.g. "https://linkedin.com/in/your-profile"
    
    // Business website (linked separately as an existing venture)
    businessWebsite: {
      name: "Harshil Media",
      url: "https://harshil-media.lovable.app",
      description: "Creative Media & Digital Marketing Initiative"
    }
  }
};

// Export for module environments if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
