const SectionTitle = ({ heading, subheading }) => {
  return (
    <div className="text-center my-10">
      <h3 className="text-red-500 text-3xl lg:text-5xl font-bold tracking-wide">{heading}</h3>
      <p className="text-gray-400 lg:text-lg mt-2 tracking-wide">{subheading}</p>
    </div>
  );
};

export default SectionTitle;
