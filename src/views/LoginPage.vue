<script>
import { reactive, onMounted } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import { useUserStore } from '../stores/useUserStore';
import FormFieldset from '../components/Forms/FormFieldset.vue';

export default {
    components: {
        FormFieldset,
    },
    setup() {

        // Form state
        const form = reactive({
            email: 'support.bnt@gmail.com',
            password: 'aaaaaa',
        });
        const userStore = useUserStore();

        // Validations
        const rules = {

            email: { required, email },
            password: { required },

        };

        const v$ = useVuelidate(rules, form);
        onMounted(async () => {
            await userStore.reAuthUser();
        });
        // Login method
        const onLogin = async () => {
            const isValid = await v$.value.$validate();
            if (!isValid) return;

            try {
                await userStore.onLogin(form);

            } catch (error) {
                console.error('Login failed:', error);
            }
        };



        return {
            form,
            v$,
            onLogin,
        };
    },
};
</script>


<template>
    <div class="formContainer">
        <article>
            <form @submit.prevent="onLogin">
                <FormFieldset title="Email" :errors="v$.email.$errors">
                    <input v-model="form.email" type="text" placeholder="Enter email" />
                </FormFieldset>

                <FormFieldset title="Password" :errors="v$.password.$errors">
                    <input v-model="form.password" type="password" placeholder="Enter password" />
                </FormFieldset>

                <button class="primary" type="submit">Login</button>
            </form>
        </article>
    </div>

</template>








<style scoped>
.formContainer {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.formContainer article {
    width: 100%;
    max-width: 500px;
}
</style>
