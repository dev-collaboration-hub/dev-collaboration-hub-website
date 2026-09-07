import type { ReactNode } from 'react';

interface CardProps {
  children?: ReactNode;
  title?: string;
  subtitle?: string;
  image?: string;
  icon?: ReactNode;
  footer?: ReactNode;
  href?: string;
  variant?: 'default' | 'outlined' | 'elevated';
  className?: string;
}

export default function Card({
  children,
  title,
  subtitle,
  image,
  icon,
  footer,
  href,
  variant = 'default',
  className = '',
}: CardProps) {
  const variants = {
    default: 'border-gray-200 bg-white',
    outlined: 'border-blue-200 bg-white',
    elevated: 'border-gray-200 bg-white shadow-md',
  };

  const content = (
    <>
      {(image || icon) && (
        <div className="mb-4">
          {image ? (
            <img
              src={image}
              alt=""
              className="h-40 w-full rounded-lg object-cover"
            />
          ) : (
            <div
              aria-hidden="true"
              className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600"
            >
              {icon}
            </div>
          )}
        </div>
      )}

      {(title || subtitle) && (
        <header>
          {title && (
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          )}

          {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
        </header>
      )}

      {children && (
        <div className="mt-4 text-sm leading-relaxed text-gray-600">
          {children}
        </div>
      )}

      {footer && (
        <footer className="mt-6 border-t border-gray-100 pt-4">{footer}</footer>
      )}
    </>
  );

  const baseStyles = `flex h-full flex-col rounded-xl border p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${variants[variant]} ${
    href
      ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
      : ''
  } ${className}`;

  if (href) {
    return (
      <a href={href} className={baseStyles}>
        {content}
      </a>
    );
  }

  return <article className={baseStyles}>{content}</article>;
}
