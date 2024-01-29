import { computed, ref } from "vue";
import { collection } from "firebase/firestore";
import { useFirestore, useCollection } from "vuefire";

export default function usePropiedades() {
  const alberca = ref(false);

  const db = useFirestore();
  const propiedadesCollection = useCollection(collection(db, "propiedades"));

  const propiedadesFiltradas = computed(() => {
    return alberca.value
      ? propiedadesCollection.value.filter((propiedad) => propiedad.alberca)
      : propiedadesCollection.value;
  });
  return {
    alberca,
    propiedadesFiltradas,
    propiedadesCollection,
  };
}
