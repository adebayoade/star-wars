type HeadingProps = {
  title?: string;
  size?: 'base' | 'sm' | 'md' | 'lg';
  className?: string;
};

export default function Heading({
  title = 'Default Title',
  size = 'base',
  className,
}: HeadingProps) {
  return (
    <h1
      className={`${
        size === 'lg'
          ? 'text-4xl font-bold'
          : size === 'md'
          ? 'text-2xl font-semibold'
          : size === 'sm'
          ? 'text-xs font-medium'
          : size === 'base'
          ? 'text-base text-[#A4A7B7]'
          : ''
      } ${className && className}`}
    >
      {title}
    </h1>
  );
}
