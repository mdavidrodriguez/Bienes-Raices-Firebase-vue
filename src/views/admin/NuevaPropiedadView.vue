<script setup>
import { useForm, useField } from 'vee-validate'
import { validationSchema, imageSchema } from '@/validation/propiedadSchema'
import { collection, addDoc } from "firebase/firestore";
import { useFirestore } from 'vuefire'
import { useRouter } from 'vue-router';


const items = [1, 2, 3, 4, 5]
const db = useFirestore()
const router = useRouter()

const { handleSubmit } = useForm({
    validationSchema: {
        ...validationSchema,
        ...imageSchema
    }
})

const titulo = useField('titulo')
const imagen = useField('imagen')
const precio = useField('precio')
const habitaciones = useField('habitaciones')
const wc = useField('wc')
const estacionamiento = useField('estacionamiento')
const descripcion = useField('descripcion')
const alberca = useField('alberca', null, {
    initialValue: false
})

const submit = handleSubmit(async (values) => {
    const { imagen, ...propiedad } = values;

    const docRef = await addDoc(collection(db, "propiedades"), {
        ...propiedad
    });
    if (docRef.id) {
        router.push({ name: 'admin-propiedades' })
    }

})

</script>
<template>
    <v-card max-width="800" flat class="mx-auto my-10">
        <v-card-title class="text-h4 font-weight-bold" tag="h3">
            Nueva Propiedad
        </v-card-title>
        <v-card-subtitle class="text-h5 py-5">
            Crea una nueva Propiedad llenando el siguiente formulario
        </v-card-subtitle>
        <v-form class="mt-10">
            <v-text-field class="mb-5" label="Titulo Propiedad" v-model="titulo.value.value"
                :error-messages="titulo.errorMessage.value" />
            <v-file-input accept="image/jpeg/png" label="Fotografia" prepend-icon="mdi-camera" class="mb-5"
                v-model="imagen.value.value" :error-messages="imagen.errorMessage.value" />
            <v-text-field class="mb-5" label="Precio" v-model="precio.value.value"
                :error-messages="precio.errorMessage.value" />
            <v-row>
                <v-col cols="12" sm="4">
                    <v-select label="Habitaciones" class="mb-5" :items="items" v-model="habitaciones.value.value"
                        :error-messages="habitaciones.errorMessage.value" />
                </v-col>
                <v-col cols="12" sm="4">
                    <v-select label="WC" class="mb-5" :items="items" v-model="wc.value.value"
                        :error-messages="wc.errorMessage.value" />
                </v-col>
                <v-col cols="12" sm="4">
                    <v-select label="Lugares estacionamiento" class="mb-5" :items="items"
                        v-model="estacionamiento.value.value" :error-messages="estacionamiento.errorMessage.value" />
                </v-col>
            </v-row>
            <v-textarea class="mb-5" label="Descripción" v-model="descripcion.value.value"
                :error-messages="descripcion.errorMessage.value"></v-textarea>
            <v-checkbox label="Alberca" v-model="alberca.value.value" :error-messages="alberca.errorMessage.value" />

            <v-btn color="pink-accent-3" block @click="submit">
                Agregar Propiedad
            </v-btn>

        </v-form>
    </v-card>
</template>

