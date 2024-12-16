import { useContext } from "react";
import { FruitCard } from "./FruitCard";
import { TodoContext } from "../../providers/TodoContext";

export const FruitList = () => {
    const {fruitList} = useContext(TodoContext)
  return (
    <ul>
      {fruitList.map((fruit) => (
        <FruitCard key={fruit.id} fruit={fruit} />
      ))}
    </ul>
  );
};
