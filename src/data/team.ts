export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'john-doe',
    name: 'John Doe',
    role: 'CEO & Founder',
    bio: 'With over 20 years of experience in the IT sector, John leads CommIT Solutions with a vision to integrate technology and communication seamlessly.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    id: 'jane-smith',
    name: 'Jane Smith',
    role: 'Head of Communication',
    bio: 'Jane is a master of storytelling and PR. She ensures that every client story is told with clarity, impact, and authenticity.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    id: 'michael-chen',
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    bio: 'Michael oversees all technical operations, ensuring that our IT solutions are cutting-edge, secure, and scalable.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    id: 'sarah-williams',
    name: 'Sarah Williams',
    role: 'Creative Director',
    bio: 'Sarah leads our creative team, bringing brands to life through stunning visuals and innovative design strategies.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=400'
  }
];
