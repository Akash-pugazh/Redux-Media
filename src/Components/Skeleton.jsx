import classNames from "classnames";

const Skeleton = ({ count, className }) => {
  const outerClassNames = classNames(
    "relative",
    "overflow-hidden",
    "bg-gray-200",
    "rounded",
    "mb-2",
    className,
  );
  const innerClassNames = classNames(
    "animate-shimmer",
    "absolute",
    "inset-0",
    "-translate-x-full",
    "bg-gradient-to-r",
    "from-gray-200",
    "via-white",
    "to-gray-200",
    className,
  );

  const renderSkeletons = Array(count)
    .fill(0)
    .map((el, idx) => {
      return (
        <div key={idx} className={outerClassNames}>
          <div className={innerClassNames} />
        </div>
      );
    });

  return <div>{renderSkeletons}</div>;
};

export default Skeleton;
