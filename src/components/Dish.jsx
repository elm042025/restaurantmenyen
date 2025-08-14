export const Dish = function ({ kategori, tittel, pris, ingredienser }) {
   return (
      <article>
         <section className="dish-header-price">
            <h3>{tittel}</h3>
            <span>{pris}</span>
         </section>
         <p>{ingredienser}</p>
      </article>
   );
};
