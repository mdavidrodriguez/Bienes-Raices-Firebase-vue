<script setup>
import { useForm, useField } from 'vee-validate'
import { useAuthStore } from '../stores/auth'

import { loginSchema as validationSchema } from '../validation/loginSchema'
const { handleSubmit } = useForm({ validationSchema })
const auth = useAuthStore()

const email = useField('email')
const password = useField('password')

const submit = handleSubmit((values) => {
    auth.login(values)
})
</script>

<template>
    <v-card flat max-width="600" class="mx-auto my-10">
        <v-card-title class="text-h4 font-weight-bold" tag="h3">
            Iniciar Sesion
        </v-card-title>
        <v-card-subtitle class="text-h5">
            Inicia sesion con tu cuenta
        </v-card-subtitle>
        <v-alert v-if="auth.hasError" type="error" :title="auth.errorMsg" class="my-5"></v-alert>
        <v-form class="mt-5">
            <v-text-field type="email" label="Email" bg-color="blue-grey-accent-5" v-model="email.value.value"
                :error-messages="email.errorMessage.value" class="mb-3" />
            <v-text-field type="password" label="Password" bg-color="blue-grey-accent-5" v-model="password.value.value"
                :error-messages="password.errorMessage.value" class="mb-3" />
            <v-btn block color="pink-accent-3" @click="submit">
                Iniciar Sesión
            </v-btn>

        </v-form>
    </v-card>
</template>
