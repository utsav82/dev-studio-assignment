
const SVG = ({ href, svg, text }) => {
  return (
    <div href={href} className="flex flex-col justify-center items-center">
      <img src={svg} alt={text} className="w-6 h-6" />
      <div>{text}</div>
    </div>
  );
};

export default SVG;
