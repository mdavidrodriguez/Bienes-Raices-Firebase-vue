<script setup>
import { useForm, useField } from 'vee-validate'

const { handleSubmit } = useForm()

const items = [1, 2, 3, 4, 5]
const submit = handleSubmit((values) => {
    console.log(values);

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
            <v-text-field class="mb-5" label="Titulo Propiedad" />
            <v-file-input accept="image/jpeg/png" label="Fotografia" prepend-icon="mdi-camera" class="mb-5" />
            <v-text-field class="mb-5" label="Precio" />
            <v-row>
                <v-col cols="12" sm="4">
                    <v-select label="Habitaciones" class="mb-5" :items="items" />
                </v-col>
                <v-col cols="12" sm="4">
                    <v-select label="WC" class="mb-5" :items="items" />
                </v-col>
                <v-col cols="12" sm="4">
                    <v-select label="Lugares estacionamiento" class="mb-5" :items="items" />
                </v-col>
            </v-row>
            <v-textarea class="mb-5" label="Descripción"></v-textarea>
            <v-checkbox label="Alberca" />

            <v-btn color="pink-accent-3" block @click="submit">
                Agregar Propiedad
            </v-btn>

        </v-form>
    </v-card>
</template>

