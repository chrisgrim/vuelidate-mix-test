<template>
    <div>
        <input
            type="text" 
            v-model="title">
        <div v-if="$v.title.$error" class="validation-error">
            <p class="error" v-if="!$v.title.required">Please add a title.</p>
        </div>
    </div>
</template>

<script>
    import { required } from 'vuelidate/lib/validators';

    export default {

        data() {
            return {
                title: ''
            }
        },

        validations: {
            title: {
                required
            }
        },
    }
</script>