import React from 'react';
import Button from './Button';

interface ErrorStateProps {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  onRetry?: () => void;
}

const ErrorState = ({
  title = 'Something went wrong',
  description = "We couldn't load this content. Please try again.",
  action,
  onRetry,
}: ErrorStateProps) => {
  return (
    <div
      role="alert"
      className="flex w-full flex-col items-center justify-center px-6 py-16 text-center"
    >
      <div
        aria-hidden="true"
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-xl text-red-600 dark:bg-red-950 dark:text-red-400"
      >
        !
      </div>

      <h2 className="text-xl font-semibold text-black dark:text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-2 max-w-md text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {onRetry && (
          <Button variant="primary" onClick={onRetry}>
            Try Again
          </Button>
        )}

        {action}
      </div>
    </div>
  );
};

export default ErrorState;
