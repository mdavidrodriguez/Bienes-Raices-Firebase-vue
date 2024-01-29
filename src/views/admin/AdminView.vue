<script setup>
import usePropiedades from '@/composables/usePropiedades'
const { propiedadesCollection } = usePropiedades()
</script>
<template>
    <h2 class="text-center text-h3 my-5 font-weight-bold">Admin Panel</h2>
    <v-btn color="blue" variant="flat" :to="{ name: 'nueva-propiedad' }">
        Nueva Propiedad
    </v-btn>
    <v-card class="mx-auto mt-10" flat>
        <v-list>
            <v-list-item v-for="propiedad in propiedadesCollection" key="propiedad.id">
                <template v-slot:prepend>
                    <v-list-item-media start="true">
                        <img width="180" :src="propiedad.imagen" alt="">
                    </v-list-item-media>
                </template>
                <v-list-item-title>
                    {{ propiedad.titulo }}
                </v-list-item-title>
                <v-list-item-subtitle>{{ propiedad.precio }}</v-list-item-subtitle>

                <template v-slot:append>
                    <v-btn color="info" variant="flat" class="mr-2">
                        Editar
                    </v-btn>
                    <v-btn color="red-darken-3" variant="flat">
                        Eliminar
                    </v-btn>
                </template>


            </v-list-item>
        </v-list>
    </v-card>
</template>

