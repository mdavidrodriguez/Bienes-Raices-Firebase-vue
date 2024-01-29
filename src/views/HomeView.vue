<script setup>
import usePropiedades from '@/composables/usePropiedades'
import Propiedad from '@/components/Propiedad.vue'
import { propertyPrice } from '@/helpers'
const { alberca, propiedadesCollection, propiedadesFiltradas } = usePropiedades()

</script>

<template>
  <h1 class="text-center text-h3 font-weight-bold my-5">Nuestrar Propiedades</h1>
  <v-card flat class="py-10">
    <v-card-title class="text-h5">
      Busqueda
      <v-checkbox label="Alberca" v-model="alberca">

      </v-checkbox>
    </v-card-title>
    <v-row>
      <Propiedad v-for="propiedad in propiedadesFiltradas" :key="propiedad.id" :propiedad="propiedad"
        :price="propertyPrice" />
    </v-row>
  </v-card>
</template>
