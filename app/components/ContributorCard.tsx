'use client';

import { useState } from 'react';

export interface ContributorProfile {
  id: string;
  name: string;
  username: string;
  bio?: string;
  avatarUrl?: string;
  roles?: string[];
  skills?: string[];
  badges?: string[];
}

interface ContributorCardProps {
  contributor: ContributorProfile;
  variant?: 'default' | 'featured';
  className?: string;
}

const githubProfileUrl = (username: string) => `https://github.com/${username}`;

const getInitials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('');

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700">
    {children}
  </span>
);

export default function ContributorCard({
  contributor,
  variant = 'default',
  className = '',
}: ContributorCardProps) {
  const {
    id,
    name,
    username,
    bio,
    avatarUrl,
    roles = [],
    skills = [],
    badges = [],
  } = contributor;
  const isFeatured = variant === 'featured';
  const [avatarFailed, setAvatarFailed] = useState(false);
  const showImage = Boolean(avatarUrl) && !avatarFailed;
  const showLink = Boolean(username);

  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-xl border bg-white p-6 ${
        isFeatured
          ? 'border-blue-600/60 shadow-lg shadow-blue-600/10 ring-1 ring-blue-600/20'
          : 'border-gray-200'
      } ${className}`}
    >
      {isFeatured && (
        <span className="absolute right-4 top-4 rounded-full bg-blue-600 px-2.5 py-0.5 text-xs font-semibold text-white">
          Featured
        </span>
      )}

      <div className="flex items-center gap-4">
        {showImage ? (
          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={avatarUrl}
              alt=""
              width={64}
              height={64}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setAvatarFailed(true)}
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <div
            aria-hidden="true"
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-lg font-semibold text-white"
          >
            {getInitials(name)}
          </div>
        )}

        <div className="min-w-0">
          <h3
            title={name}
            className={`truncate font-semibold text-gray-900 ${
              isFeatured ? 'text-xl' : 'text-lg'
            }`}
          >
            {name}
          </h3>
          <p className="truncate text-sm text-gray-500" title={`@${username}`}>
            @{username}
          </p>
        </div>
      </div>

      {bio && (
        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-600">
          {bio}
        </p>
      )}

      {badges.length > 0 && (
        <ul
          className="mt-4 flex flex-wrap gap-2"
          aria-label={`Badges for ${name}`}
        >
          {badges.map((badge) => (
            <li
              key={`${id}-badge-${badge}`}
              className="rounded-full bg-gray-900 px-2.5 py-0.5 text-xs font-medium text-white"
            >
              {badge}
            </li>
          ))}
        </ul>
      )}

      {roles.length > 0 && (
        <ul
          className="mt-4 flex flex-wrap gap-2"
          aria-label={`Roles for ${name}`}
        >
          {roles.map((role) => (
            <li
              key={`${id}-role-${role}`}
              className="rounded-full border border-blue-100 bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700"
            >
              {role}
            </li>
          ))}
        </ul>
      )}

      {skills.length > 0 && (
        <ul
          className="mt-3 flex flex-wrap gap-2"
          aria-label={`Skills for ${name}`}
        >
          {skills.map((skill) => (
            <li key={`${id}-skill-${skill}`}>
              <Chip>{skill}</Chip>
            </li>
          ))}
        </ul>
      )}

      {showLink && (
        <a
          href={githubProfileUrl(username)}
          target="_blank"
          rel="noreferrer"
          aria-label={`GitHub profile of ${name}`}
          className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
        >
          GitHub profile
          <svg
            className="h-3.5 w-3.5"
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M6 3h7v7" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M13 3 6.5 9.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.5 13H3.5a.5.5 0 0 1-.5-.5V6.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      )}
    </article>
  );
}
