import { FC } from "react";
import Button from "../button";

interface CardProps {
  id: string;
  image?: string;
  title?: string;
  description?: string;
  onDetail?: () => void;
}

const Card: FC<CardProps> = ({ id, image, title, description, onDetail }) => {
  return (
    <div id={id} className="border rounded-md shadow-sm p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <Button id="detail" onClick={onDetail} />
    </div>
  );
};

export default Card;
