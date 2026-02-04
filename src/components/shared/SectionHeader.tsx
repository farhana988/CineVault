const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <div className="relative text-center my-8 xl:my-12">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-0.5 w-20 bg-linear-to-r from-primary to-secondary opacity-30 mx-4"></div>
      </div>

      {/* Title */}
      <h2 className="relative text-2xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary animate-gradient-x">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-2 text-gray-500 dark:text-gray-400 text-xs md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
