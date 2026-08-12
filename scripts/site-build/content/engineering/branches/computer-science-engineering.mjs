import { buildLeafPage } from '../../../lib/leaf.mjs';

const faqs = [
  {
    q: 'Is CSE oversaturated now that seats have tripled?',
    a: 'The seat count has tripled, not the quality bar. Over 8 lakh CSE seats now exist nationally, which means quality varies enormously — a degree from a Tier-3 private college does not guarantee a software job without strong DSA skills and competitive programming practice on top of the coursework. The opportunity hasn\'t shrunk; the need to actually be good at it has grown.',
  },
  {
    q: 'Should I choose CSE if I don\'t enjoy coding?',
    a: 'No. This is the single most common mistake in branch selection — choosing CSE because "everyone is doing it," not because of genuine interest. If you dislike writing code or find debugging frustrating, CSE becomes a genuinely difficult four years, and the job market for non-coders within CSE is limited.',
  },
];

export const csePage = buildLeafPage({
  slug: 'engineering/branches/computer-science-engineering',
  title: 'Computer Science Engineering (CSE): Branch Guide, Salary & Careers | T.I.M.E. Madurai',
  description: 'What CSE actually involves — core subjects, career paths, real starting salaries by institution tier, and who genuinely fits this branch.',
  canonical: '/engineering/branches/computer-science-engineering/',
  courseLabel: 'JEE',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'Branches', href: '/engineering/branches/' }, { label: 'Computer Science Engineering' }],
  eyebrow: 'branch profile',
  heroTitle: 'Computer Science Engineering (CSE)',
  heroSubtitle: 'India\'s most sought-after branch — highest average salary, widest hiring base, and the most global opportunities of any engineering discipline.',
  stats: [
    { value: '8L+', label: 'CSE seats nationally' },
    { value: '₹25–50L', label: 'IIT median starting salary' },
    { value: '25%', label: 'Annual global demand growth' },
  ],
  toc: [
    { id: 'profile', label: 'Branch Profile' },
    { id: 'faqs', label: 'FAQs' },
  ],
  intro: 'From software development to artificial intelligence, cloud computing to cybersecurity — CSE graduates power the digital economy. It carries the highest average salary and widest hiring base of any engineering branch.',
  sections: [
    {
      id: 'profile',
      title: 'Branch profile',
      table: {
        columns: ['Aspect', 'Detail'],
        rows: [
          ['What you study', 'Algorithms, data structures, operating systems, databases, computer networks, software engineering, compilers'],
          ['Core subjects', 'DSA, DBMS, Operating Systems, Computer Networks, Software Engineering, Discrete Maths, Theory of Computation'],
          ['Skills required', 'Logical thinking, problem-solving, coding aptitude, mathematical reasoning, patience with debugging'],
          ['Career paths', 'Software Engineer, Full-Stack Developer, Data Scientist, ML Engineer, DevOps, Cybersecurity Analyst'],
          ['Top recruiters', 'Google, Microsoft, Amazon, Meta, Flipkart, Infosys, TCS, Zoho, Freshworks, Razorpay'],
          ['Starting salary', 'IITs: ₹25–50 LPA (median); NITs: ₹10–20 LPA; Private (top): ₹6–12 LPA; Private (average): ₹3.5–5 LPA'],
          ['Personality fit', 'Enjoys coding, math puzzles, logical challenges; comfortable at a computer for long hours'],
          ['Future demand (2030)', 'Very high — India targets 1 crore tech jobs by 2030'],
          ['Higher studies', 'M.Tech (IITs/NITs), MS abroad (USA, Canada, Germany), MBA (IIMs), PhD in CS'],
        ],
      },
      callout: {
        type: 'tip',
        label: 'Tamil Nadu tip',
        text: 'Zoho and Freshworks are global product companies headquartered in Chennai that recruit heavily from NIT Trichy, PSG Tech, and Anna University. Zoho in particular hires talented coders from any college who clear its rigorous coding tests — not just elite-college graduates.',
      },
    },
  ],
  faqs,
  faqTitle: 'CSE — quick answers',
  backLink: { label: 'all branches', href: '/engineering/branches/' },
  ctaHeading: 'Considering CSE but unsure if it fits you?',
  ctaSub: 'A quick aptitude conversation beats four years of second-guessing.',
});
