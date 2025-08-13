export const Dish = function ({ kategori, tittel, pris, ingredienser }) {
   return (
      <article>
         <h3>{kategori}</h3>
         <h4>{tittel}</h4>
         <span>{pris}</span>
         <p>{ingredienser}</p>
      </article>
   );
};
