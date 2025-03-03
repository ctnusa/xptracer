interface CardProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

const Card = (props: CardProps) => {
  return (
    <div className={`text-secondary bg-quaternary shadow-sm rounded-sm p-4 ${props.className}`}>
      <h2 className=" text-center mb-1">{props.title}</h2>
      <div className="mt-2 ">{props.children}</div>
    </div>
  );
}

export default Card;