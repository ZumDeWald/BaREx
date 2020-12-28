import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChecklistItem = ({ item, setItems, index }) => {
  const handleToggleDone = (index) => {
    setItems((items) => {
      let clone = [...items];
      item.done
        ? (clone[index] = { done: false, info: item.info })
        : (clone[index] = { done: true, info: item.info });
      return clone;
    });
  };

  return (
    <li
      className="pointer"
      onClick={() => {
        handleToggleDone(index);
      }}
    >
      {item.done ? (
        <FontAwesomeIcon icon={["far", "check-square"]} />
      ) : (
        <FontAwesomeIcon icon={["far", "square"]} />
      )}
      <span>{item.info}</span>
    </li>
  );
};

export default ChecklistItem;
