import { buildLeafPage } from '../../../lib/leaf.mjs';

const faqs = [
  {
    q: 'What\'s the difference between Data Science Engineering and the AI/ML branch?',
    a: 'They overlap heavily and, at many colleges, are effectively the same programme under different names. Where both exist separately, Data Science tends to weight statistics, data engineering, and analytics more heavily, while AI/ML weights deep learning and model architecture more heavily — but check each college\'s actual syllabus rather than assuming from the name alone.',
  },
  {
    q: 'Can I do well in Data Science without being a strong coder?',
    a: 'You need solid programming fundamentals (Python especially) at minimum, but the field also rewards strong statistics and domain-analysis skills — it\'s not purely a coding contest the way competitive-programming-heavy CSE roles can be. Comfort with maths and structured reasoning matters as much as raw coding speed.',
  },
];

export const dataSciencePage = buildLeafPage({
  slug: 'engineering/branches/data-science',
  title: 'Data Science Engineering: Branch Guide, Salary & Careers | T.I.M.E. Madurai',
  description: 'What Data Science Engineering covers, how it differs from AI/ML and CSE, realistic salaries, and who fits this analytics-heavy branch.',
  canonical: '/engineering/branches/data-science/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'Branches', href: '/engineering/branches/' }, { label: 'Data Science' }],
  eyebrow: 'branch profile',
  heroTitle: 'Data Science Engineering',
  heroSubtitle: 'Statistics, data engineering, and machine learning combined — one of the newest branches, with heavy overlap with AI/ML at most colleges.',
  stats: [
    { value: '₹6–15L', label: 'Top-institute starting range' },
    { value: 'High overlap', label: 'With AI/ML and CSE (Data Science specialisation)' },
  ],
  toc: [
    { id: 'profile', label: 'Branch Profile' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'Data Science Engineering trains students to extract insight and build predictive systems from large datasets — a discipline that sits between statistics, software engineering, and applied machine learning.',
  sections: [
    {
      id: 'profile',
      title: 'Branch profile',
      table: {
        columns: ['Aspect', 'Detail'],
        rows: [
          ['What you study', 'Statistics & probability, data structures, machine learning, data engineering, big data systems, data visualisation'],
          ['Core subjects', 'Probability & Statistics, Machine Learning, Data Warehousing, Big Data Analytics, Data Visualisation'],
          ['Skills required', 'Strong maths/statistics foundation, Python/R programming, structured analytical thinking'],
          ['Career paths', 'Data Analyst, Data Engineer, Data Scientist, Business Intelligence Engineer, ML Engineer'],
          ['Top recruiters', 'Deloitte, Accenture, Mu Sigma, Flipkart, Swiggy, banks\' analytics divisions, consulting firms'],
          ['Starting salary', 'Top institutes: ₹6–15 LPA; Average private colleges: ₹3.5–6 LPA'],
          ['Personality fit', 'Enjoys finding patterns in numbers, comfortable moving between statistics and code, curiosity-driven'],
          ['Future demand (2030)', 'Very high — data-driven decision-making has become standard across nearly every industry, not just tech'],
          ['Higher studies', 'MS in Data Science/Analytics abroad, M.Tech in CSE with a Data Science specialisation, MBA (Business Analytics)'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'Chennai\'s strong analytics and consulting presence (Deloitte, Accenture, several GCCs/global capability centres) means Data Science graduates from TN colleges don\'t need to relocate to Bangalore for their first analytics role — a genuine local advantage over some other emerging branches.',
      },
    },
  ],
  faqs,
  faqTitle: 'Data Science — quick answers',
  backLink: { label: 'all branches', href: '/engineering/branches/' },
  ctaHeading: 'Comparing Data Science against AI/ML or core CSE?',
  ctaSub: 'A counsellor can help you read past the branch name to the actual syllabus.',
});
