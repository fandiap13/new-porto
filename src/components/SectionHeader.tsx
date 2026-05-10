interface SectionHeaderProps {
  label: string;
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ label, title }) => {
  return (
    <div className="w-full mx-auto md:max-w-4xl flex flex-col items-center justify-center mb-16 lg:mb-28 text-center">
      <p className="px-4 py-1.5 rounded-full bg-text-muted/20">{label}</p>
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-medium mt-5">
        {title}
      </h1>
    </div>
  );
};

export default SectionHeader;
