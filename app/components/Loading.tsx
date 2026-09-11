import React from 'react';

interface LoadingProps {
  title?: string;
  description?: string;
  action?: React.ReactNode;
}

const Loading = ({
  title = 'Loading',
  description = 'Please wait while we load the content.',
  action,
}: LoadingProps) => {
  return (
    <div
      role="status"
      className="flex w-full flex-col items-center justify-center px-6 py-16 text-center"
    >
      <div
        aria-hidden="true"
        className="mb-5 h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"
      />

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

export default Loading;
