<script setup>
  defineProps({
    type: String,
    disabled: Boolean,
  });
</script>

<template>
  <button
    class="base-button"
    :type="type"
    :disabled="disabled"
  >
  <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
  .base-button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: max-content;
    padding: 13px 12px;
    border-radius: 9px;
    @include onest-b12;
    color: $white;
    transition: 0.3s ease-in-out;
    z-index: 1;

    @include media-small {
      max-width: 100%;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 9px;
      background: $blue;
      box-shadow: -1px 1px 1px 0px rgba(225, 236, 246, 1),
        1px 1px 2px 0px rgba(225, 227, 229, 1),
        inset 1px -1px 2px 0px rgba(7, 145, 225, 1),
        inset -1px 1px 2px 0px rgba(7, 145, 225, 1);

      opacity: 1;
      z-index: -1;
      transition: opacity 0.3s ease-in-out;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 9px;
      background: $btn-bg-hover;
      box-shadow: -1px 1px 1px 0px rgba(225, 236, 246, 1),
        1px 1px 2px 0px rgba(206, 212, 219, 1);
      opacity: 0;
      z-index: -1;
      transition: opacity 0.3s ease-in-out;
    }

    @include hover {
      &::after {
        opacity: 1;
      }
    }

    &:focus {
      &::after {
        box-shadow: inset 1px -1px 3px 0px rgba(1, 133, 210, 1),
          inset -1px -1px 6px 0px rgba(18, 159, 242, 1),
          inset 1px 1px 6px 0px rgba(11, 103, 170, 1),
          -1px 1px 1px 0px rgba(225, 227, 229, 1);
        opacity: 1;
      }
    }

    &:active {
      &::after {
        box-shadow: 0px 1px 3px 0px rgba(125, 145, 174, 0.35),
          0px 3px 5px 0px rgba(125, 145, 174, 0.2);
        opacity: 1;
      }
    }

    &:disabled {
      color: $dark-gray;
      pointer-events: none;

      &::after {
        background: $btn-bg-disabled;
        box-shadow: inset -2px 2px 3px 0px rgba(156, 157, 166, 1),
          inset 1px -1px 1px 0px rgba(168, 169, 179, 1),
          inset -3px -3px 6px 0px rgba(166, 167, 177, 1),
          inset 3px 3px 6px 0px rgba(153, 155, 163, 1),
          -1px 1px 1px 0px rgba(233, 233, 233, 1);
        opacity: 1;
      }
    }
  }
</style>
