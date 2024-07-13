<script setup>
  defineProps({
    isPasswordShow: Boolean,
    isDisabled: Boolean,
    onClick: Function,
  });
</script>

<template>
  <button
    type="button"
    class="button-show"
    @click="onClick"
    :class="{ show : isPasswordShow }"
    :disabled="isDisabled"
  ></button>
</template>

<style lang="scss" scoped>
  .button-show {
    position: absolute;
    right: 9px;
    top: 10px;
    display: block;
    width: 24px;
    height: 24px;
    background: url('assets/images/icons/eye.svg');
    background-repeat: no-repeat;
    background-position: center;

    &.show {
      background: url('assets/images/icons/eye-close.svg');
      background-repeat: no-repeat;
      background-position: center;
    }

    &:disabled {
      pointer-events: none;
    }
  }
</style>
