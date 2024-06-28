import { useState } from "react";

interface DatailsProps {
  details: string;
}

const Details = ({ details }: DatailsProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const firstSentence = details.split(/(?<=\.)\s/)[0];

  const handleToggleDatails = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      {isOpen ? <p>{details}</p> : <p>{firstSentence}</p>}
      <button onClick={handleToggleDatails}>
        {isOpen ? "Скрыть" : "Показать подробнее"}
      </button>
    </>
  );
};

export default Details;
