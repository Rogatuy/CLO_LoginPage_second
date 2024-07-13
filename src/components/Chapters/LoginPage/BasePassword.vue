<script setup>
  import { reactive, ref } from 'vue';
  // UI
  import BaseInput from '@/components/UI/inputs/BaseInput.vue';
  import EyeButton from '@/components/UI/buttons/EyeButton.vue';
  //Utils
  import { getErrors } from '@/app/js/utils/utils.js';

  defineProps({
    disabled: Boolean
  });

  // Reactive
  const input = reactive({
    password: {
      value: '',
      valid: false,
      errors: [],
    }
  });

  const showPassword = ref(false);

  const emits = defineEmits(["changeValidate"]);

  const passwordRules = [
    {
      rule: (value) => value === '',
      text: 'Поле обязательно для заполнения'
    },
    {
      rule: (value) => !(/^(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*[^a-zA-Zа-яА-Я\d]).+$/).test(value),
      text: 'Пароль должен содержать как минимум одну строчную букву, одну заглавную букву и один специальный символ'
    }
  ];

  const changeValidatePassword = () => {
    input.password.errors = getErrors(input.password.value, passwordRules);

    if (input.password.errors.length > 0) {
      input.password.valid = false;
    } else {
      input.password.valid = true;
    }

    emits("changeValidate", input.password.valid)
  }

</script>

<template>
  <BaseInput
    v-model="input.password.value"
    placeholder="Введите пароль"
    :type="showPassword ? 'text' : 'password'"
    name="password"
    label="Пароль"
    :isRequired=true
    :errors="input.password.errors"
    :disabled="disabled"
    :changeValidation="changeValidatePassword"
  >
    <template v-slot:icon-button>
      <EyeButton
        :isPasswordShow="showPassword"
        :isDisabled="disabled"
        @click="() => (showPassword = !showPassword)"
      />
    </template>
  </BaseInput>
</template>

<style lang="scss">

</style>
