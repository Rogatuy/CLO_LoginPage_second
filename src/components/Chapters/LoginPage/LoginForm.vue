<script setup>
  import { reactive, ref } from 'vue';
  // Layouts
  import BaseEmail from '@/components/Chapters/LoginPage/BaseEmail.vue';
  import BasePassword from '@/components/Chapters/LoginPage/BasePassword.vue';
  // UI
  import BaseButton from '@/components/UI/buttons/BaseButton.vue';

  // Refs
  const isValid = ref(false);
  const hasErrors = ref(false);

  // Reactive
  const inputs = reactive({
    email: {
      valid: false,
      disabled: false,
    },
    password: {
      valid: false,
      disabled: false,
    },
  });

  const changeValidationEmail = (value) => {
    inputs.email.valid = value;
  }

  const changeValidationPassword = (value) => {
    inputs.password.valid = value;
  }

  const validateForm = () => {
    hasErrors.value = !inputs.email.valid || !inputs.password.valid;

    if (!hasErrors.value) {
      isValid.value = true;
      inputs.email.disabled = true;
      inputs.password.disabled = true;

      console.log('Форма валидна и отправлена');
    } else {
      console.log('Форма содержит ошибки и не отправлена');
    }
  };
</script>

<template>
  <form
    @submit.prevent="validateForm"
    class="login-form"
  >
    <div class="login-form__inner">
      <BaseEmail
        :disabled="inputs.email.disabled"
        @changeValidate="changeValidationEmail"
      >
      </BaseEmail>
      <BasePassword
        :disabled="inputs.password.disabled"
        @changeValidate="changeValidationPassword"
      >
      </BasePassword>
      <BaseButton
        type="submit"
        class="base-button"
        :disabled="isValid"
      >
        Войти
      </BaseButton>
    </div>
  </form>
</template>

<style lang="scss" scoped>
  .login-form {
    // .login-form__inner
    &__inner {
      display: flex;
      flex-direction: column;
    }
  }

  .base-button {
    margin-top: 8px;
  }
</style>
