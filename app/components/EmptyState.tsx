import React from 'react';

interface EmptyStateProps {
  title?: string;
  description?: string;
  action?: React.ReactNode;
}

const EmptyState = ({
  title = 'Nothing here yet',
  description = 'There is no content to display.',
  action,
}: EmptyStateProps) => {
  return (
    <div
      role="status"
      className="flex w-full flex-col items-center justify-center px-6 py-16 text-center"
    >
      <div
        aria-hidden="true"
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
      >
        —
      </div>

      <h2 className="text-xl font-semibold text-black dark:text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-2 max-w-md text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      )}

      {action && <div className="mt-6">{action}</div>}
    </div>
  );
};

export default EmptyState;
