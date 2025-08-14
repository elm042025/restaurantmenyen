import { Dish } from "./Dish.jsx";
import styles from "./Meny.module.css"; //! imports the css module for styling

/*
reference for each obj in the menuData array
  {
    id: 1,
    tittel: "Spaghetti Bolognese",
    pris: "159 kr",
    ingredienser: "Spaghetti, kjøttsaus, parmesan",
    kategori: "Hovedrett",
  } 
*/

export const Meny = function ({ menyData = [] }) {
   const categories = ["Forrett", "Hovedrett", "Dessert"]; //! predefined categories for the menu
   return (
      <section className={styles.menuGrid}>
         <h1>MAT MENY</h1>
         {categories.map(
            (
               kategori //! ----------iterate over each category
            ) => (
               <section
                  key={kategori}
                  className={styles.menuCategory}
               >
                  <h2>{kategori}</h2>
                  {menyData //! --------------------filter the menu data by category
                     .filter((dish) => dish.kategori === kategori) //! ----------filter dishes by category
                     .map(
                        (
                           dish //! ----------map over the filtered dishes
                        ) => (
                           <Dish //! ------------Render <Dish /> component for each dish with that category
                              key={dish.id}
                              {...dish}
                           />
                        )
                     )}
               </section>
            )
         )}
      </section>
   );
};
