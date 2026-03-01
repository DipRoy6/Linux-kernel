const startupIntel = [
  {
    id: "fin-ai-ledgerflow",
    name: "LedgerFlow AI",
    sector: "FinTech",
    category: "AI-powered accounting automation",
    headquarters: "San Francisco, USA",
    stage: "Series B",
    website: "https://example.com/ledgerflow-ai",
    executives: [
      { name: "Maya Chen", title: "CEO", email: "maya.chen@ledgerflow.ai", linkedin: "https://linkedin.com/in/maya-chen-ledgerflow" },
      { name: "Arjun Patel", title: "CFO", email: "arjun.patel@ledgerflow.ai", linkedin: "https://linkedin.com/in/arjunpatelfinance" }
    ],
    employees: 220,
    businessResearch: "Targets SMB finance teams with autonomous bookkeeping workflows. Known for fast integrations with major banking APIs.",
    peerInsight: "Growing faster than most mid-market accounting startups, but faces pressure from embedded finance platforms adding similar features.",
    momentum: "High"
  },
  {
    id: "fin-paymesh",
    name: "PayMesh",
    sector: "FinTech",
    category: "Cross-border payments",
    headquarters: "London, UK",
    stage: "Series C",
    website: "https://example.com/paymesh",
    executives: [
      { name: "Elena Rossi", title: "CEO", email: "elena.rossi@paymesh.com", linkedin: "https://linkedin.com/in/elena-rossi-payments" },
      { name: "Kwame Boateng", title: "VP Partnerships", email: "kwame.boateng@paymesh.com", linkedin: "https://linkedin.com/in/kwameboateng" }
    ],
    employees: 410,
    businessResearch: "Focuses on low-fee remittances for emerging markets with local payout rails.",
    peerInsight: "Competes effectively on settlement speed; margin profile is tighter than larger global processors.",
    momentum: "Medium"
  },
  {
    id: "health-clinicloop",
    name: "ClinicLoop",
    sector: "HealthTech",
    category: "Virtual care operations",
    headquarters: "Boston, USA",
    stage: "Series A",
    website: "https://example.com/clinicloop",
    executives: [
      { name: "Dr. Nia Harper", title: "CEO", email: "nia.harper@clinicloop.com", linkedin: "https://linkedin.com/in/niaharper" },
      { name: "Tomás Almeida", title: "COO", email: "tomas.almeida@clinicloop.com", linkedin: "https://linkedin.com/in/tomasalmeida" }
    ],
    employees: 140,
    businessResearch: "Helps outpatient providers orchestrate appointments, labs, and remote follow-ups in one workflow.",
    peerInsight: "Winning in specialty clinics where implementation depth matters more than broad feature lists.",
    momentum: "High"
  },
  {
    id: "health-genepulse",
    name: "GenePulse",
    sector: "HealthTech",
    category: "Precision diagnostics",
    headquarters: "Berlin, Germany",
    stage: "Series B",
    website: "https://example.com/genepulse",
    executives: [
      { name: "Lars Hoffmann", title: "CEO", email: "lars.hoffmann@genepulse.de", linkedin: "https://linkedin.com/in/lars-hoffmann-bio" },
      { name: "Priya Nandakumar", title: "Chief Scientist", email: "priya.n@genepulse.de", linkedin: "https://linkedin.com/in/priya-nandakumar" }
    ],
    employees: 260,
    businessResearch: "Builds AI-assisted genetic screening kits for early oncology detection.",
    peerInsight: "Strong clinical partnerships, though regulatory timelines could delay broader rollout.",
    momentum: "Medium"
  },
  {
    id: "edtech-skillforge",
    name: "SkillForge",
    sector: "EdTech",
    category: "Workforce upskilling",
    headquarters: "Toronto, Canada",
    stage: "Series A",
    website: "https://example.com/skillforge",
    executives: [
      { name: "Avery Singh", title: "CEO", email: "avery.singh@skillforge.io", linkedin: "https://linkedin.com/in/averysingh" },
      { name: "Mina Farouk", title: "Head of Product", email: "mina.farouk@skillforge.io", linkedin: "https://linkedin.com/in/minafarouk" }
    ],
    employees: 95,
    businessResearch: "Delivers role-based learning paths tied to enterprise HR systems.",
    peerInsight: "Retention beats many course marketplaces due to cohort-based coaching.",
    momentum: "High"
  },
  {
    id: "edtech-labnest",
    name: "LabNest",
    sector: "EdTech",
    category: "Virtual science labs",
    headquarters: "Bengaluru, India",
    stage: "Seed",
    website: "https://example.com/labnest",
    executives: [
      { name: "Rahul Desai", title: "Founder & CEO", email: "rahul.desai@labnest.in", linkedin: "https://linkedin.com/in/rahuldesai" },
      { name: "Sophie Martin", title: "CTO", email: "sophie.martin@labnest.in", linkedin: "https://linkedin.com/in/sophiemartin" }
    ],
    employees: 55,
    businessResearch: "Creates simulation-driven lab modules for schools lacking physical lab infrastructure.",
    peerInsight: "Excellent product-market fit in cost-sensitive districts; monetization still evolving.",
    momentum: "Medium"
  },
  {
    id: "climate-carbontrace",
    name: "CarbonTrace",
    sector: "ClimateTech",
    category: "Emissions tracking SaaS",
    headquarters: "Amsterdam, Netherlands",
    stage: "Series A",
    website: "https://example.com/carbontrace",
    executives: [
      { name: "Noah van Dijk", title: "CEO", email: "noah@carbontrace.eu", linkedin: "https://linkedin.com/in/noahvandijk" },
      { name: "Leila Haddad", title: "VP Customer Success", email: "leila@carbontrace.eu", linkedin: "https://linkedin.com/in/leilahaddad" }
    ],
    employees: 130,
    businessResearch: "Provides supply-chain grade carbon accounting for manufacturing and retail brands.",
    peerInsight: "Demand tailwinds are strong as reporting standards tighten across the EU.",
    momentum: "High"
  },
  {
    id: "climate-gridsage",
    name: "GridSage",
    sector: "ClimateTech",
    category: "Grid optimization",
    headquarters: "Austin, USA",
    stage: "Series B",
    website: "https://example.com/gridsage",
    executives: [
      { name: "Daniel Brooks", title: "CEO", email: "daniel@gridsage.com", linkedin: "https://linkedin.com/in/danielbrooksenergy" },
      { name: "Yuki Tanaka", title: "Chief Revenue Officer", email: "yuki@gridsage.com", linkedin: "https://linkedin.com/in/yukitanaka" }
    ],
    employees: 210,
    businessResearch: "Optimizes utility dispatch using demand forecasting and distributed energy data.",
    peerInsight: "Long sales cycles persist, but utility pilots are converting to multi-year contracts.",
    momentum: "Medium"
  },
  {
    id: "saas-teamflow",
    name: "TeamFlowOS",
    sector: "Enterprise SaaS",
    category: "Workflow orchestration",
    headquarters: "New York, USA",
    stage: "Series C",
    website: "https://example.com/teamflowos",
    executives: [
      { name: "Grace Lim", title: "CEO", email: "grace@teamflowos.com", linkedin: "https://linkedin.com/in/gracelim" },
      { name: "Ethan Cole", title: "Head of Sales", email: "ethan@teamflowos.com", linkedin: "https://linkedin.com/in/ethancole" }
    ],
    employees: 520,
    businessResearch: "Offers cross-department process automation with no-code approvals and analytics.",
    peerInsight: "Strong enterprise penetration; differentiation hinges on integration depth.",
    momentum: "Medium"
  },
  {
    id: "saas-insightdeck",
    name: "InsightDeck",
    sector: "Enterprise SaaS",
    category: "Board reporting automation",
    headquarters: "Dublin, Ireland",
    stage: "Series A",
    website: "https://example.com/insightdeck",
    executives: [
      { name: "Ciara O'Neill", title: "CEO", email: "ciara@insightdeck.ai", linkedin: "https://linkedin.com/in/ciaraoneill" },
      { name: "Mohit Suri", title: "CTO", email: "mohit@insightdeck.ai", linkedin: "https://linkedin.com/in/mohitsuri" }
    ],
    employees: 88,
    businessResearch: "Converts fragmented KPI data into investor-ready reporting packages.",
    peerInsight: "Rapid adoption among CFO teams; some customers still prefer in-house BI stacks.",
    momentum: "High"
  },
  {
    id: "cyber-threatlattice",
    name: "ThreatLattice",
    sector: "Cybersecurity",
    category: "Threat intelligence",
    headquarters: "Tel Aviv, Israel",
    stage: "Series B",
    website: "https://example.com/threatlattice",
    executives: [
      { name: "Oren Levi", title: "CEO", email: "oren@threatlattice.io", linkedin: "https://linkedin.com/in/orenlevi" },
      { name: "Hana Kim", title: "Head of Research", email: "hana@threatlattice.io", linkedin: "https://linkedin.com/in/hanakimsec" }
    ],
    employees: 175,
    businessResearch: "Correlates global attack telemetry to help SOC teams prioritize response.",
    peerInsight: "High technical credibility, with competition from cloud-native security suites.",
    momentum: "High"
  },
  {
    id: "cyber-authforge",
    name: "AuthForge",
    sector: "Cybersecurity",
    category: "Identity and access",
    headquarters: "Seattle, USA",
    stage: "Series A",
    website: "https://example.com/authforge",
    executives: [
      { name: "Iris Walker", title: "CEO", email: "iris@authforge.com", linkedin: "https://linkedin.com/in/iriswalker" },
      { name: "Mateo Rivas", title: "VP Engineering", email: "mateo@authforge.com", linkedin: "https://linkedin.com/in/mateorivas" }
    ],
    employees: 120,
    businessResearch: "Delivers passwordless authentication for mid-market B2B software teams.",
    peerInsight: "Strong developer UX drives adoption; enterprise governance capabilities are still maturing.",
    momentum: "Medium"
  },
  {
    id: "agri-farmbyte",
    name: "FarmByte",
    sector: "AgriTech",
    category: "Crop analytics",
    headquarters: "Nairobi, Kenya",
    stage: "Seed",
    website: "https://example.com/farmbyte",
    executives: [
      { name: "Wanjiru Mugo", title: "CEO", email: "wanjiru@farmbyte.africa", linkedin: "https://linkedin.com/in/wanjiru" },
      { name: "Paulo Mendes", title: "Chief Agronomist", email: "paulo@farmbyte.africa", linkedin: "https://linkedin.com/in/paulomendes" }
    ],
    employees: 48,
    businessResearch: "Uses remote sensing and mobile advisories to improve smallholder yields.",
    peerInsight: "Impact metrics are compelling; distribution partnerships determine scaling speed.",
    momentum: "High"
  },
  {
    id: "agri-soilnova",
    name: "SoilNova",
    sector: "AgriTech",
    category: "Soil health biotech",
    headquarters: "São Paulo, Brazil",
    stage: "Series A",
    website: "https://example.com/soilnova",
    executives: [
      { name: "Camila Duarte", title: "CEO", email: "camila@soilnova.com", linkedin: "https://linkedin.com/in/camiladuarte" },
      { name: "João Ferraz", title: "Head of R&D", email: "joao@soilnova.com", linkedin: "https://linkedin.com/in/joaoferraz" }
    ],
    employees: 102,
    businessResearch: "Develops microbial treatments to restore soil productivity while lowering chemical inputs.",
    peerInsight: "Field trial success is promising; manufacturing scale-up remains capital intensive.",
    momentum: "Medium"
  },
  {
    id: "logi-routepilot",
    name: "RoutePilot",
    sector: "LogisticsTech",
    category: "Last-mile optimization",
    headquarters: "Chicago, USA",
    stage: "Series B",
    website: "https://example.com/routepilot",
    executives: [
      { name: "Marcus Hill", title: "CEO", email: "marcus@routepilot.com", linkedin: "https://linkedin.com/in/marcushill" },
      { name: "Ananya Ghosh", title: "COO", email: "ananya@routepilot.com", linkedin: "https://linkedin.com/in/ananyaghosh" }
    ],
    employees: 230,
    businessResearch: "Provides route planning and dynamic dispatch for e-commerce fleets.",
    peerInsight: "Operational savings are clear, but churn rises when fuel prices normalize.",
    momentum: "Medium"
  },
  {
    id: "logi-portmind",
    name: "PortMind",
    sector: "LogisticsTech",
    category: "Port operations AI",
    headquarters: "Singapore",
    stage: "Series A",
    website: "https://example.com/portmind",
    executives: [
      { name: "Jia Wei Tan", title: "CEO", email: "jiawei@portmind.sg", linkedin: "https://linkedin.com/in/jiaweitan" },
      { name: "Alicia Gomez", title: "Chief Data Officer", email: "alicia@portmind.sg", linkedin: "https://linkedin.com/in/aliciagomez" }
    ],
    employees: 115,
    businessResearch: "Uses predictive analytics to reduce berth delays and cargo bottlenecks.",
    peerInsight: "Securing government-linked contracts gives stability, but onboarding is slow.",
    momentum: "High"
  },
  {
    id: "retail-shopbeam",
    name: "ShopBeam",
    sector: "RetailTech",
    category: "Omnichannel personalization",
    headquarters: "Paris, France",
    stage: "Series A",
    website: "https://example.com/shopbeam",
    executives: [
      { name: "Amélie Durant", title: "CEO", email: "amelie@shopbeam.fr", linkedin: "https://linkedin.com/in/ameliedurant" },
      { name: "Vikram Malhotra", title: "VP Marketing", email: "vikram@shopbeam.fr", linkedin: "https://linkedin.com/in/vikrammalhotra" }
    ],
    employees: 90,
    businessResearch: "Combines store and online behavior to power real-time product recommendations.",
    peerInsight: "High conversion uplift for fashion clients; data privacy compliance is a core differentiator.",
    momentum: "High"
  },
  {
    id: "retail-shelfoptic",
    name: "ShelfOptic",
    sector: "RetailTech",
    category: "In-store computer vision",
    headquarters: "Seoul, South Korea",
    stage: "Series B",
    website: "https://example.com/shelfoptic",
    executives: [
      { name: "Jin Park", title: "CEO", email: "jin.park@shelfoptic.kr", linkedin: "https://linkedin.com/in/jinpark" },
      { name: "Helena Costa", title: "Head of Partnerships", email: "helena@shelfoptic.kr", linkedin: "https://linkedin.com/in/helenacosta" }
    ],
    employees: 190,
    businessResearch: "Monitors shelf availability and shopper behavior with edge AI cameras.",
    peerInsight: "Retail ROI is clear, but hardware deployment complexity slows expansion.",
    momentum: "Medium"
  }  ,
  {
    id: "hr-peoplemesh",
    name: "PeopleMesh",
    sector: "HRTech",
    category: "Talent intelligence",
    headquarters: "Denver, USA",
    stage: "Series A",
    website: "https://example.com/peoplemesh",
    executives: [
      { name: "Natalie Ford", title: "CEO", email: "natalie@peoplemesh.com", linkedin: "https://linkedin.com/in/natalieford" },
      { name: "Rohit Mehra", title: "Chief Product Officer", email: "rohit@peoplemesh.com", linkedin: "https://linkedin.com/in/rohitmehra" }
    ],
    employees: 110,
    businessResearch: "Uses skills graphing to help enterprises identify internal candidates for open roles.",
    peerInsight: "Good traction in large organizations with complex mobility programs.",
    momentum: "High"
  },
  {
    id: "hr-compzen",
    name: "CompZen",
    sector: "HRTech",
    category: "Compensation benchmarking",
    headquarters: "Sydney, Australia",
    stage: "Seed",
    website: "https://example.com/compzen",
    executives: [
      { name: "Olivia Hart", title: "CEO", email: "olivia@compzen.ai", linkedin: "https://linkedin.com/in/oliviahart" },
      { name: "Kaito Sato", title: "Head of Data", email: "kaito@compzen.ai", linkedin: "https://linkedin.com/in/kaitosato" }
    ],
    employees: 42,
    businessResearch: "Provides real-time pay band intelligence for fast-scaling startups.",
    peerInsight: "Useful niche positioning, but larger HR suites could add similar analytics.",
    momentum: "Medium"
  }

];

module.exports = { startupIntel };
