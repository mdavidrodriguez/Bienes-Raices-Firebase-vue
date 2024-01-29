<script setup>
import { useRoute } from 'vue-router'
import { watch } from 'vue';

import { doc } from 'firebase/firestore';
import { useDocument, useFirestore } from 'vuefire';

import { propertyPrice } from '@/helpers'
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import useLocationMap from '@/composables/useLocationMap';

const { zoom, center } = useLocationMap()
const route = useRoute()
const db = useFirestore()
const docRef = doc(db, 'propiedades', route.params.id)
const propiedad = useDocument(docRef)

watch(propiedad, (propiedad) => {
    center.value = propiedad.ubicacion
})

</script>
<template>
    <v-card flat>
        <v-card-title class="mt-5 text-h4 text-center py-5 font-weight-bold">
            {{ propiedad?.titulo }}
        </v-card-title>
        <v-img :src="propiedad?.imagen" height="550" cover />
        <div class="bg-blue-grey-lighten-5 d-flex flex-column flex-md-row align-center">
            <v-card-text>
                Precio:
                <span class="font-weight-bold">{{ propertyPrice(propiedad?.precio) }}</span>
            </v-card-text>

            <v-card-text>
                Baños:
                <span class="font-weight-bold">{{ propiedad?.wc }}</span>
            </v-card-text>
            <v-card-text>
                Estacionamiento:
                <span class="font-weight-bold">{{ propiedad?.estacionamiento }}</span>
            </v-card-text>
            <v-card-text>
                Habitaciones:
                <span class="font-weight-bold">{{ propiedad?.habitaciones }}</span>
            </v-card-text>
        </div>
        <v-row>
            <v-col cols="12" md="8">
                <div class="text-pre-wrap py-10">
                    {{ propiedad?.descripcion }}
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div class="py-10" style="height: 600px;">
                    <LMap v-model:zoom="zoom" :center="center" :use-global-leaflet="false">
                        <LMarker :lat-lng="center">
                            <LPopup>{{ propiedad.titulo }}</LPopup>
                        </LMarker>
                        <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></LTileLayer>
                    </LMap>
                </div>
            </v-col>

        </v-row>
    </v-card>
</template>


<style>
.text-pre-wrap {
    white-space: pre-wrap;
}
</style>
