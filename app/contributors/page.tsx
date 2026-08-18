import ContributorCard from '../components/ContributorCard';
import type { ContributorProfile } from '../components/ContributorCard';

// Local curated contributor data. Live GitHub enrichment arrives in M5 —
// this list stays a static, proofread source for the UI.
const contributors: ContributorProfile[] = [
  {
    id: 'sam-carter',
    name: 'Samantha Carter',
    username: 'samcarter',
    bio: 'Full-stack engineer focused on developer tooling and plumb-pretty CI pipelines.',
    roles: ['Maintainer'],
    skills: ['TypeScript', 'Next.js', 'CI/CD'],
    badges: ['Core Team'],
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
  },
  {
    id: 'raj-patel',
    name: 'Raj Patel',
    username: 'rajpatel-dev',
    bio: 'Backend builder. Python, FastAPI, and databases that stay up at 3am.',
    roles: ['Reviewer'],
    skills: ['Python', 'FastAPI', 'PostgreSQL'],
    avatarUrl: 'https://i.pravatar.cc/150?img=32',
  },
  {
    id: 'maya-okafor',
    name: 'Maya Okafor',
    username: 'mayaokafor',
    bio: 'Frontend crafts UI systems with care for a11y and core web vitals.',
    roles: ['Community Lead'],
    skills: ['Accessibility', 'Design Systems'],
    badges: ['Top Contributor'],
  },
  {
    id: 'liam-nguyen',
    name: 'Liam Nguyen',
    username: 'liamnguyen',
    bio: 'Systems tinkerer exploring Rust, networking, and everything low-level.',
    roles: ['Contributor'],
    skills: ['Rust', 'Networking'],
  },
  {
    id: 'amina-hassan',
    name: 'Amina Hassan',
    username: 'aminahassan',
    bio: 'Data engineer turning messy datasets into boring, reliable pipelines.',
    roles: ['Contributor'],
    skills: ['Python', 'SQL', 'Airflow'],
    avatarUrl: 'https://i.pravatar.cc/150?img=47',
  },
  {
    id: 'daniel-ross',
    name: 'Daniel Ross',
    username: 'daniel-ross',
    bio: 'Docs nerd. Makes complex topics readable and contribution guides friendly.',
    roles: ['Writer'],
    skills: ['Technical Writing', 'Markdown'],
    badges: ['Doc Hero'],
  },
];

const ContributorsPage = () => {
  const featured = contributors[0];
  const rest = contributors.slice(1);

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">
        Contributors
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-gray-600">
        The people building, reviewing, and documenting Dev Collaboration Hub.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ContributorCard contributor={featured} variant="featured" />
        {rest.map((contributor) => (
          <ContributorCard key={contributor.id} contributor={contributor} />
        ))}
      </div>
    </section>
  );
};

export default ContributorsPage;
