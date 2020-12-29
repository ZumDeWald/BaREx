import ChecklistItem from "./ChecklistItem";

const HomeView = ({ items, setItems }) => {
  return (
    <main>
      <section className="blue">
        <h2>This is the HOME view</h2>
        <ul className="home-items">
          {items.map((item, index) => (
            <ChecklistItem
              item={item}
              setItems={setItems}
              index={index}
              key={`Item - ${index}`}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default HomeView;
