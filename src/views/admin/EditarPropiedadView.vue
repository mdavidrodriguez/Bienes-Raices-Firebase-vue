<script setup>
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { useFirestore, useDocument } from 'vuefire';
import { doc, updateDoc } from 'firebase/firestore';
import { useField, useForm } from 'vee-validate'
import "leaflet/dist/leaflet.css";
import {
    LMap,
    LTileLayer,
    LMarker
} from "@vue-leaflet/vue-leaflet";
import useImage from '@/composables/useImage'
import useLocationMap from '@/composables/useLocationMap'
import { validationSchema } from '@/validation/propiedadSchema'

const items = [1, 2, 3, 4, 5]

const { url, uploadImage, image } = useImage()
const { zoom, center, pin } = useLocationMap()

const { handleSubmit } = useForm({ validationSchema });

const titulo = useField('titulo')
const imagen = useField('imagen')
const precio = useField('precio')
const habitaciones = useField('habitaciones')
const wc = useField('wc')
const estacionamiento = useField('estacionamiento')
const descripcion = useField('descripcion')
const alberca = useField('alberca')
const route = useRoute()
const router = useRouter()
// Obtener la propiedad a editar
const db = useFirestore()
const docRef = doc(db, 'propiedades', route.params.id)
const propiedad = useDocument(docRef)

watch(propiedad, (propiedad) => {
    titulo.value.value = propiedad.titulo
    precio.value.value = propiedad.precio
    habitaciones.value.value = propiedad.habitaciones
    wc.value.value = propiedad.wc
    estacionamiento.value.value = propiedad.estacionamiento
    descripcion.value.value = propiedad.descripcion
    alberca.value.value = propiedad.alberca
    center.value = propiedad.ubicacion
})
const submit = handleSubmit(async values => {
    const { imagen, ...propiedad } = values
    if (image.value) {
        const data = {
            ...propiedad,
            imagen: url.value,
            ubicacion: center.value
        }
        await updateDoc(docRef, data);
    } else {
        const data = {
            ...propiedad,
            ubicacion: center.value
        }
        await updateDoc(docRef, data);
    }
    router.push({ name: 'admin-propiedades' })
})

</script>
<template>
    <h2 class="text-center text-h3 my-5 font-weight-bold">Editar Propiedad</h2>
    <v-card max-width="800" flat class="mx-auto my-10">
        <v-card-title class="mt-5">
            <h1 class="text-h4 font-weight-bold">Editar Propiedad</h1>
        </v-card-title>
        <v-card-subtitle>
            <p class="text-h5">Edita los detalles de la propiedad</p>
        </v-card-subtitle>

        <v-form class="mt-10">
            <v-text-field v-model="titulo.value.value" :error-messages="titulo.errorMessage.value" label="Titulo"
                class="mb-5"></v-text-field>

            <v-file-input v-model="imagen.value.value" :error-messages="imagen.errorMessage.value" accept="image/jpeg"
                prepend-icon="mdi-camera" label="Fotografía" class="mb-5" @change="uploadImage"></v-file-input>

            <div class="my-5">
                <p class="font-weight-bold">Imagen Actual:</p>
                <img v-if="image" class="w-50" :src="image">
                <!-- Optional channing -->
                <img v-else class="w-50" :src="propiedad?.imagen">
            </div>


            <v-text-field v-model="precio.value.value" :error-messages="precio.errorMessage.value" label="Precio"
                class="mb-5"></v-text-field>

            <v-row>
                <v-col cols="12" md="4">
                    <v-select label="Habitaciones" class="mb-5" :items="items" v-model="habitaciones.value.value"
                        :error-messages="habitaciones.errorMessage.value" />
                </v-col>

                <v-col cols="12" md="4">
                    <v-select label="WC" class="mb-5" :items="items" v-model="wc.value.value"
                        :error-messages="wc.errorMessage.value" />
                </v-col>

                <v-col cols="12" md="4">
                    <v-select label="Lugares Estacionamiento" class="mb-5" :items="items"
                        v-model="estacionamiento.value.value" :error-messages="estacionamiento.errorMessage.value" />
                </v-col>
            </v-row>

            <v-textarea v-model="descripcion.value.value" :error-messages="descripcion.errorMessage.value"
                label="Descripción" class="mb-5"></v-textarea>

            <v-checkbox v-model="alberca.value.value" label="Alberca"></v-checkbox>


            <h2 class="font-weight-bold text-center my-5">Ubicación</h2>
            <div class="pb-10">
                <div style="height:600px">
                    <LMap v-model:zoom="zoom" :center="center" :use-global-leaflet="false">
                        <LMarker :lat-lng="center" draggable @moveend="pin" />
                        <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></LTileLayer>
                    </LMap>
                </div>
            </div>

            <v-btn color="pink-accent-3" block @click="submit">
                Guardar Cambios
            </v-btn>
        </v-form>
    </v-card>
</template>

