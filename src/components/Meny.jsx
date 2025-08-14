import { Dish } from "./Dish.jsx";
import styles from "./Meny.module.css"; //! imports the css module for styling

export const Meny = function ({ menyData = [] }) {
   const categories = ["Forrett", "Hovedrett", "Dessert"];
   return (
      <section className={styles.menuGrid}>
         <h1>MAT MENY</h1>
         {categories.map((kategori) => (
            <section
               key={kategori}
               className={styles.menuCategory}
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
