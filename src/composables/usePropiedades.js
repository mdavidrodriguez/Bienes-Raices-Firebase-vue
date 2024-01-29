import { collection } from "firebase/firestore";
import { useFirestore, useCollection } from "vuefire";

export default function usePropiedades() {
  const db = useFirestore();

  const propiedadesCollection = useCollection(collection(db, "propiedades"));

  return {
    propiedadesCollection,
  };
}
