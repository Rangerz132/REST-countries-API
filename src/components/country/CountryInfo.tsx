const CountryInfo = (props: { title: string; info: any }) => {
  return (
    <div className="flex flex-row space-x-1">
      <span className="font-bold capitalize ">{props.title}:</span>
      <span className="line-clamp-1 text-ellipsis">{props.info}</span>
    </div>
  );
};

export default CountryInfo;
