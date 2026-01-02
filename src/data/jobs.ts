


import type {Job, Department, QualificationLevel } from "../types/job";

export const departments: Department[] = [
  "Management",
  "Finance",
  "Human Resources",
  "Marketing",
  "Operations",
  "Engineering",
  "Support",
];

export const qualifications: QualificationLevel[] = [
  "First Degree",
  "HND",
  "OND",
  "WASC",
  "Technical",
];


export const jobs: Job[] = [
  {
    id: 1,
    title: "General Manager",
    department: "Management",
    qualification: "First Degree",
    experience: "10+ years",
    description: "Lead and oversee all company operations in the gas production industry.",
    requirements: [
      "Minimum First Degree",
      "10 years experience in gas or related industry",
      "Strong leadership skills",
      "NYSC completion certificate"
    ]
  },
  {
    id: 2,
    title: "Accountant",
    department: "Finance",
    qualification: "First Degree",
    experience: "5+ years",
    description: "Manage financial records and reporting for the organization.",
    requirements: [
      "First Degree in Accounting or related field",
      "5 years experience in private sector/manufacturing",
      "Professional certification preferred",
      "NYSC completion certificate"
    ]
  },
  {
    id: 3,
    title: "Account Officers",
    department: "Finance",
    qualification: "HND",
    experience: "3+ years",
    description: "Support accounting operations and financial documentation.",
    requirements: [
      "First Degree/HND in Accounting",
      "3 years working experience",
      "Proficiency in accounting software",
      "NYSC completion certificate"
    ]
  },
  {
    id: 4,
    title: "Human Resource Executive",
    department: "Human Resources",
    qualification: "First Degree",
    experience: "3+ years",
    description: "Manage HR functions including recruitment, training, and employee relations.",
    requirements: [
      "Degree in HR or related field",
      "3 years or more experience in similar position",
      "Strong interpersonal skills",
      "NYSC completion certificate"
    ]
  },
  {
    id: 5,
    title: "Secretary/Office Manager",
    department: "Human Resources",
    qualification: "First Degree",
    experience: "2-3 years",
    description: "Provide administrative support and manage office operations.",
    requirements: [
      "First Degree",
      "2-3 years working experience",
      "Excellent organizational skills",
      "NYSC completion certificate"
    ]
  },
  {
    id: 6,
    title: "Marketing Manager",
    department: "Marketing",
    qualification: "First Degree",
    experience: "5+ years",
    description: "Develop and implement marketing strategies to drive business growth.",
    requirements: [
      "Minimum First Degree/HND",
      "5 years in the industry",
      "Proven marketing track record",
      "NYSC completion certificate"
    ]
  },
  {
    id: 7,
    title: "Communication/Advert Manager",
    department: "Marketing",
    qualification: "HND",
    experience: "3+ years",
    description: "Manage corporate communications and advertising campaigns.",
    requirements: [
      "Degree/HND in Communications or Marketing",
      "3 years working experience",
      "Creative and strategic thinking",
      "NYSC completion certificate"
    ]
  },
  {
    id: 8,
    title: "Storekeeper",
    department: "Operations",
    qualification: "HND",
    experience: "3+ years",
    description: "Manage inventory and warehouse operations.",
    requirements: [
      "HND in relevant field",
      "3 years working experience",
      "Inventory management skills",
      "NYSC completion certificate"
    ]
  },
  {
    id: 9,
    title: "Sales/Marketing Officers",
    department: "Marketing",
    qualification: "OND",
    experience: "2-3 years",
    description: "Drive sales and support marketing initiatives.",
    requirements: [
      "OND minimum",
      "2-3 years working experience",
      "Strong communication skills",
      "NYSC completion certificate"
    ]
  },
  {
    id: 10,
    title: "Plant Manager",
    department: "Engineering",
    qualification: "First Degree",
    experience: "8+ years",
    description: "Oversee plant operations and production processes.",
    requirements: [
      "First Degree/HND in Engineering",
      "8 years in gas production",
      "Technical expertise",
      "NYSC completion certificate"
    ]
  },
  {
    id: 11,
    title: "Maintenance Manager",
    department: "Engineering",
    qualification: "First Degree",
    experience: "6+ years",
    description: "Lead maintenance operations and ensure equipment reliability.",
    requirements: [
      "First Degree/HND in Engineering",
      "6 years industry experience",
      "Strong technical background",
      "NYSC completion certificate"
    ]
  },
  {
    id: 12,
    title: "Production Engineers",
    department: "Engineering",
    qualification: "HND",
    experience: "2+ years",
    description: "Support production operations and process optimization.",
    requirements: [
      "First Degree/HND or WASC + 6 years",
      "2 years experience",
      "Engineering background",
      "NYSC completion certificate"
    ]
  },
  {
    id: 13,
    title: "Maintenance Technicians",
    department: "Engineering",
    qualification: "Technical",
    experience: "3+ years",
    description: "Perform equipment maintenance and repairs.",
    requirements: [
      "First Degree/HND in Technical field or WASC + 6 years",
      "3 years technical working experience",
      "Hands-on technical skills"
    ]
  },
  {
    id: 14,
    title: "Machine Operators",
    department: "Operations",
    qualification: "WASC",
    experience: "3+ years",
    description: "Operate and monitor production machinery.",
    requirements: [
      "Minimum WASC",
      "Up to 3 years technical work experience",
      "Machine operation skills"
    ]
  },
  {
    id: 15,
    title: "Drivers",
    department: "Support",
    qualification: "WASC",
    experience: "5+ years",
    description: "Transport goods and personnel safely.",
    requirements: [
      "WASC",
      "Minimum 5 years driving experience",
      "Valid driver's license"
    ]
  },
  {
    id: 16,
    title: "Security Officer",
    department: "Support",
    qualification: "WASC",
    experience: "Entry level",
    description: "Maintain security and safety of company premises.",
    requirements: [
      "WASC attempted",
      "Good physique",
      "Security training preferred"
    ]
  },
  {
    id: 17,
    title: "General Labour",
    department: "Support",
    qualification: "WASC",
    experience: "Entry level",
    description: "Provide general support for various operations.",
    requirements: [
      "WASC attempted or below",
      "Physical ability",
      "Willingness to learn"
    ]
  },
  {
    id: 18,
    title: "Truck Drivers",
    department: "Operations",
    qualification: "WASC",
    experience: "5+ years",
    description: "Operate heavy trucks for material transport.",
    requirements: [
      "Attempted WASC",
      "Up to 5 years experience",
      "Heavy vehicle license"
    ]
  },
  {
    id: 19,
    title: "Gardeners and Cleaners",
    department: "Support",
    qualification: "WASC",
    experience: "Entry level",
    description: "Maintain cleanliness and landscaping of company premises.",
    requirements: [
      "Attempted WASC or below",
      "Physical ability",
      "Attention to detail"
    ]
  }
];
