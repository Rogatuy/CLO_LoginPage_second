<script setup>
  defineProps({
    modelValue: String,
    placeholder: String,
    type: String,
    name: String,
    label: String,
    errors: Array,
    isRequired: Boolean,
    disabled: Boolean,
    changeValidation: Function
  });
</script>

<template>
  <div
    :class="{ error: errors.length > 0 }"
    class="base-input"
  >
    <input
      class="input"
      autocomplete="off"
      :type="type"
      :value="modelValue"
      :disabled="disabled"
      :required="isRequired"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="changeValidation"
    />
    <div
      class="input-label"
      :class="{ active: modelValue }"
    >
      {{ label }}<span>*</span>
    </div>
    <div class="input-errors">
      <p v-if="errors.length > 0">
        {{ errors[0] }}
      </p>
    </div>
    <slot name="icon-button" />
  </div>
</template>

<style lang="scss" scoped>
  .base-input {
    display: flex;
    flex-direction: column;
    gap: 3px;
    position: relative;
    width: 100%;

    &.error {
      & input {
        border-color: $red;

        @include hover {
          border-color: $red;
        }

        &:focus {
          border-color: $red;
        }
      }

      & .input-label {
        & span {
          color: $red;

          @include hover {
            color: $red;
          }
        }
      }
    }

    & .input {
      @include hover {
        & + .input-label {
          color: $dark-blue;
        }
      }

      &:focus {
        & + .input-label {
          transform: translateY(-11px);
          color: $dark-blue;
        }
      }

      &:disabled {
        & + .input-label {
          & span {
            color: $dark-gray;
          }
        }
      }
    }
  }

  .input {
    @include onest-r12;
    color: $dark-blue;
    padding: 19px 33px 5px 9px;
    min-height: 42px;
    background-color: $light-gray;
    border-radius: 9px;
    border: 1px solid $light-blue;
    box-shadow: 1px -1px 2px 0px rgba(238, 239, 239, 1),
      -1px 1px 2px 0px rgba(233, 234, 235, 1),
      inset -1px -1px 2px 0px rgba(221, 232, 249, 1),
      inset - 1px 1px 2px 0px rgba(221, 232, 249, 1);
    transition: all 0.3s ease-in-out;

    &::placeholder {
      color: transparent;
    }

    @include hover {
      border-color: $blue;
      box-shadow: 1px 1px 4px 0px rgba(214, 223, 237, 1),
        -1px -1px 2px 0px rgba(228, 241, 249, 1),
        1px -1px 2px 0px rgba(228, 241, 249, 1),
        -1px 1px 2px 0px rgba(228, 241, 249, 1),
        inset -1px -1px 2px 0px rgba(215, 231, 241, 1),
        inset 1px 1px 2px 0px rgba(215, 231, 241, 1);

      & + .input-label {
        color: $dark-blue;
      }
    }

    &:focus {
      box-shadow: 1px 1px 3px 0px rgba(225, 230, 237, 1),
        -1px -1px 2px 0px rgba(238, 239, 239, 1),
        1px -1px 2px 0px rgba(215, 231, 241, 1),
        -1px 1px 2px 0px rgba(225, 238, 246, 1),
        inset -1px -1px 2px 0px rgba(201, 218, 245, 1),
        inset 1px 1px 2px 0px rgba(201, 218, 245, 1);
      border-color: $blue;

      & + .input-label {
        transform: translateY(-11px);
        color: $dark-blue;
      }

      &::placeholder {
        opacity: 1;
        color: $dark-gray;
      }
    }

    &:disabled {
      border-color: $input-border-disabled;
      background-color: $input-bg-disabled;
      color: $dark-gray;
      pointer-events: none;
      box-shadow: none;

      & + .input-label {
        & span {
          color: $dark-gray;
        }
      }
    }
  }

  .input-label {
    position: absolute;
    top: 15px;
    left: 9px;
    @include onest-r10;
    color: $dark-gray;
    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
    pointer-events: none;

    &.active {
      transform: translateY(-11px);
    }

    & span {
      color: $blue;
    }
  }

  .input-errors {
    min-height: 21px;
    color: $red;
    @include onest-r10;
  }
</style>
