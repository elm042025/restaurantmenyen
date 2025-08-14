import { meny } from "./data/MenyData.js"; //! imports the data from a folder imitating an api
import { Meny } from "./components/Meny.jsx"; //! imports the Meny component

export default function App() {
   return (
      <>
         <Meny menyData={meny} />
      </>
   );
}
