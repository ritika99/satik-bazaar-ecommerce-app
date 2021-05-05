import {Header} from "./header";
import {Collection} from "./collection";

export const category = ["Face", "Eyes", "Lips", "Brushes"];
export const brands = ["Maybelline", "M.A.C", "Lakme", "L'Oreal Paris"];

export function Home() {
  
  return (
    <div className="margin-top">
      <Header />
      <Collection heading={"Featured Collection"} collection={category} />
      <Collection heading={"In the spotlight"} collection={brands} />
    </div>
  );
}
