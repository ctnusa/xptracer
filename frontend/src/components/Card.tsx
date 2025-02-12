interface CardProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

const Card = (props: CardProps) => {
  return (
    <div className={`bg-[#272953] text-white shadow-sm rounded-sm p-4 ${props.className}`}>
      <h2 className="text-xs text-center mb-1">{props.title}</h2>
      <div className="mt-2 ">{props.children}</div>
    </div>
  );
}

export default Card;