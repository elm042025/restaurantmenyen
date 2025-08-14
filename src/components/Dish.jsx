import styles from "./Dish.module.css";

export const Dish = function ({ kategori, tittel, pris, ingredienser }) {
   return (
      <article>
         <section className={styles.dishHeaderPrice}>
            <h3>{tittel}</h3>
            <span>{pris}</span>
         </section>
         <p>{ingredienser}</p>
      </article>
   );
};
