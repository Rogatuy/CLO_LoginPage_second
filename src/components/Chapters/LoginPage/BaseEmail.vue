<script setup>
  import { reactive } from 'vue';
  // UI
  import BaseInput from '@/components/UI/inputs/BaseInput.vue';
  //Utils
  import { getErrors } from '@/app/js/utils/utils.js';

  defineProps({
    disabled: Boolean
  });

  // Reactive
  const input = reactive({
    email: {
      value: '',
      valid: false,
      errors: [],
    }
  });

  const emits = defineEmits(["changeValidate"]);

  const emailRules = [
    {
      rule: (value) => value === '',
      text: 'Поле обязательно для заполнения'
    },
    {
      rule: (value) => !(/.+@.+\..+/i).test(value),
      text: 'Введите корректный email'
    }
  ];

  const changeValidateEmail = () => {
    input.email.errors = getErrors(input.email.value, emailRules);

    if (input.email.errors.length > 0) {
      input.email.valid = false;
    } else {
      input.email.valid = true;
    }

    emits("changeValidate", input.email.valid)
  }
</script>

<template>
  <BaseInput
    v-model="input.email.value"
    placeholder="Введите E-mail"
    type="email"
    name="email"
    label="Email"
    :isRequired=true
    :errors="input.email.errors"
    :disabled="disabled"
    :changeValidation="changeValidateEmail"
  />
</template>

<style lang="scss">
</style>
