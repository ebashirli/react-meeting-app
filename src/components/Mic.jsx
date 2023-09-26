// eslint-disable-next-line react/prop-types
function Mic({ status, className }) {
  if (status === "mute")
    return <img src="/buttomIcons/mic3.svg" alt="" className={className} />;
  if (status === "open")
    return <img src="/buttomIcons/mic1.svg" alt="" className={className} />;
  if (!status || status === "speaking")
    // speaking
    return (
      <div className="relative">
        <img src="/buttomIcons/mic1.svg" alt="" className={className} />
        <img
          src="/buttomIcons/mic2.svg"
          alt=""
          className={"absolute top-0 left-0 " + className}
        />
      </div>
    );
}

export default Mic;
