export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'future-of-it-communications-2024',
    title: 'The Future of Integrated IT & Communications in 2024',
    excerpt: 'Discover how the convergence of technology and storytelling is shaping the modern business landscape.',
    content: `
      <p>The landscape of business is evolving faster than ever. In 2024, the siloed approach to IT and Communications is becoming a relic of the past. Modern organizations are realizing that technical infrastructure and strategic messaging are two sides of the same coin.</p>
      <br/>
      <h4 className="text-[20px] font-bold">The Convergence</h4>
      <p>Why does integration matter? Because a robust network is only as valuable as the communication it facilitates. Similarly, a brilliant PR strategy requires the digital platforms to reach its audience effectively. At CommIT Solutions, we see this synergy as the ultimate competitive advantage.</p>
      <br/>
      <h4 className="text-[20px] font-bold">Key Trends to Watch</h4>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>AI-Driven Communication:</strong> Leveraging AI to personalize brand messaging at scale.</li>
        <li><strong>Security-First Infrastructure:</strong> Building communication channels that are encrypted by default.</li>
        <li><strong>Remote Collaboration Tech:</strong> Moving beyond basic video calls to immersive digital workspaces.</li>
      </ul>
      <br/>
      <p>By unifying these elements, businesses can reduce friction, lower costs, and create a more resonant brand voice.</p>
    `,
    author: 'John Doe',
    date: 'May 15, 2024',
    category: 'Industry Trends',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800&h=400'
  },
  {
    id: '2',
    slug: 'cybersecurity-essentials-for-smes',
    title: 'Cybersecurity Essentials: Protecting Your SME',
    excerpt: 'Small businesses are frequent targets for cyberattacks. Learn the fundamental steps to secure your digital assets.',
    content: `
      <p>Cybersecurity is no longer just an "enterprise problem." Statistics show that small and medium-sized enterprises (SMEs) are increasingly targeted by hackers due to often having weaker defenses.</p>
      <br/>
      <h4 className="text-[20px] font-bold">The Minimum Viable Defense</h4>
      <p>Every SME should implement these basic measures immediately:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Multi-Factor Authentication (MFA):</strong> The single most effective way to prevent unauthorized access.</li>
        <li><strong>Employee Training:</strong> Humans are the weakest link; regular phishing simulations are vital.</li>
        <li><strong>Backup Strategy:</strong> Ensure you have offline, immutable backups of critical business data.</li>
      </ul>
      <br/>
      <p>CommIT Solutions specializes in helping SMEs build these defenses without the complexity of traditional enterprise security suites.</p>
    `,
    author: 'Michael Chen',
    date: 'June 10, 2024',
    category: 'Cybersecurity',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=400'
  },
  {
    id: '3',
    slug: 'impactful-digital-pr-strategy',
    title: 'Crafting an Impactful Digital PR Strategy',
    excerpt: 'How to move beyond simple press releases and build meaningful media relations in a digital world.',
    content: `
      <p>Traditional PR has transformed. In a world of 24/7 news cycles and social media dominance, your brand needs to be proactive, digital-native, and highly responsive.</p>
      <br/>
      <h4 className="text-[20px] font-bold">Storytelling in the Digital Age</h4>
      <p>A digital PR strategy involves more than just sending emails to journalists. It includes:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>SEO Integration:</strong> Ensuring your media mentions drive search authority.</li>
        <li><strong>Content Synergy:</strong> Aligning your PR stories with your blog and social media content.</li>
        <li><strong>Influencer Relations:</strong> Building trust with niche voices in your specific industry.</li>
      </ul>
      <br/>
      <p>Our communications team at CommIT Solutions focuses on creating multi-channel impact that lasts longer than a single news cycle.</p>
    `,
    author: 'Jane Smith',
    date: 'July 02, 2024',
    category: 'Communication',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=400'
  }
];
