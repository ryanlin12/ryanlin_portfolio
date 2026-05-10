export type WorkItem = {
  id: string;
  type: 'experience' | 'project';
  title: string;
  subtitle: string; // Company or Role
  location?: string;
  date: string;
  shortDescription: string;
  bullets: string[];
  tags: string[];
};

export const workItems: WorkItem[] = [
  {
    id: "schwab-swe",
    type: "experience",
    title: "Software Engineer",
    subtitle: "Charles Schwab",
    location: "Austin, Texas",
    date: "Sep 2023 - Present",
    shortDescription: "Developing full-stack features for Schwab's modernized Advisor Move Money platform, optimizing transaction times, and architecting RESTful APIs.",
    tags: ["Angular", "C# .NET", "RxJS", "Oracle DB", "Microservices"],
    bullets: [
      "Increased digital transfer adoption by 10% across 1.1M+ annual advisor transactions by developing features for Schwab's modernized Advisor Move Money platform using Angular and full-stack development.",
      "Reduced transaction processing time by 65% (46s → 16s) and increased success rates to 98.7% across 20K+ transactions by optimizing Angular application performance with RxJS, change detection tuning, and lazy loading.",
      "Executed blue-green deployments and managed release promotion and rollback across dev and QA environments on Pivotal Cloud Foundry for multiple Angular and C# .NET services, ensuring safe, low-risk, and zero-downtime releases.",
      "Architected multiple RESTful APIs, including a complex third-party cash journals gateway, by designing OpenAPI specifications and orchestrating data flows across gateway, transaction, and downstream services.",
      "Owned end-to-end delivery of a legacy check-deposit platform enhancement across UI, C# .NET APIs, Oracle DB, and CI/CD pipelines to support new contribution codes.",
      "Developed 16+ C# .NET REST APIs implementing core business logic and defect fixes while partnering with downstream services.",
      "Presented platform features to senior leadership to influence adoption strategy and mentored new engineers on MVC architecture fundamentals."
    ]
  },
  {
    id: "schwab-intern",
    type: "experience",
    title: "Software Engineering Intern",
    subtitle: "Charles Schwab",
    location: "Westlake, Texas",
    date: "Jun 2022 - Aug 2022",
    shortDescription: "Contributed to migrating a legacy monolith to a modular modern UI architecture and upgraded backend REST APIs.",
    tags: [".NET Core", "Angular", "Karma", "REST API"],
    bullets: [
      "Powered a platform now supporting 4.1M+ annual transactions by contributing to the migration from a legacy monolith to a modular, modern UI architecture.",
      "Upgraded .NET Core version across 20+ backend REST APIs, improving maintainability and aligning with Schwab's technology standards.",
      "Audited and reported unit test coverage across front-end Angular applications using Karma, improving visibility into testing gaps and overall code quality."
    ]
  },
  {
    id: "raytheon-drone",
    type: "project",
    title: "Raytheon Drone Competition",
    subtitle: "Lead Developer",
    date: "Sep 2022 - Apr 2023",
    shortDescription: "Designed and developed an autonomous UAV capable of detecting and neutralizing moving UGVs using computer vision.",
    tags: ["Python", "OpenCV", "Raspberry Pi", "Computer Vision", "ArduPilot"],
    bullets: [
      "Designed and developed an autonomous UAV capable of detecting and neutralizing moving UGVs using computer vision (OpenCV, ArUco markers) and onboard navigation algorithms.",
      "Built an onboard perception system on Raspberry Pi using Python, OpenCV, and an Intel RealSense depth camera, achieving 90%+ detection accuracy at 8 ft altitude with <10% false positives.",
      "Integrated vision output with a Pixhawk autopilot (ArduPilot) via MAVLink/UART, enabling real-time target localization and autonomous UAV navigation using RTK GPS (~1 m accuracy).",
      "Presented the system at multiple engineering showcases, including the Texas A&M Capstone Fair and statewide STEM outreach events."
    ]
  },
  {
    id: "ecen-ambassador",
    type: "project",
    title: "ECEN Student Ambassador",
    subtitle: "Texas A&M University",
    location: "College Station, TX",
    date: "Oct 2021 - Dec 2021",
    shortDescription: "Guided prospective engineering students and delivered presentations on the ECEN program.",
    tags: ["Leadership", "Public Speaking", "Mentorship"],
    bullets: [
      "Guided prospective and entry-level engineering students on pathways in Electrical & Computer Engineering.",
      "Delivered presentations on TAMU's ECEN program to prospective students and families."
    ]
  }
];
