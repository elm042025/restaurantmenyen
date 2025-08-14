import { Dish } from "./Dish.jsx";

export const Meny = function ({ menyData = [] }) {
   const categories = ["Forrett", "Hovedrett", "Dessert"];
   return (
      <section className="menu-grid">
         {categories.map((kategori) => (
            <section
               key={kategori}
               className="menu-category"
            >
               <h2>{kategori}</h2>
               {menyData
                  .filter((dish) => dish.kategori === kategori)
                  .map((dish) => (
                     <Dish
                        key={dish.id}
                        {...dish}
                     />
                  ))}
            </section>
         ))}
      </section>
   );
};
