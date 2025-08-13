import { Dish } from "./Dish.jsx";

export const Meny = function ({ menyData = [] }) {
   return (
      <section className="menu-grid">
         {menyData.map((dish) => (
            <Dish
               key={dish.id}
               {...dish}
            />
         ))}
      </section>
   );
};
