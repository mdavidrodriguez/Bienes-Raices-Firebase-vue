import { ref } from "vue";

export default function useLocationMap() {
  const zoom = ref(17);
  const center = ref([10.4196088, -73.5836538]);
  function pin(e) {
    const marker = e.target.getLatLng();
    center.value = [marker.lat, marker.lng];
    console.log(center.value);
  }
  return {
    zoom,
    center,
    pin,
  };
}
