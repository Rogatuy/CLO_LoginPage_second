<script setup>
</script>

<template>
  <div class="login-page-wrapper">
    <div class="login-page">
      <div class="login-page__inner">
        <div class="login-page__image login-image">
          <img class="login-image__logo" src="/assets/images/loginForm/logo.svg" alt="logo">
          <img class="login-image__logo-circle" src="/assets/images/loginForm/circle.png" srcset="/assets/images/loginForm/circle_2x.png 2x" alt="logo-circle">
        </div>
        <div class="login-page__content login-content">
          <div class="login-content__inner">
            <h2>Войти в систему</h2>
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-page-wrapper {
  display: grid;
  width: 100%;
  height: 100vh;

  @include media-small {
    min-width: 320px;
  }
}

.login-page {
  align-self: center;
  justify-self: center;
  transform: translateY(-20%);

  @media screen and (max-height: 560px) {
    align-self: center;
    justify-self: center;
    transform: none;
    min-height: 350px;
  }

  @include media-small {
    align-self: flex-start;
    justify-self: flex-start;
    transform: none;
    width: 100%;
  }

  // .login-page__inner
  &__inner {
    display: flex;
    width: 580px;
    height: 350px;
    background-color: $white;
    overflow: hidden;
    border-radius: 18px;
    box-shadow: 0px 5px 10px 2px rgba(125, 145, 174, 0.25),
                0px 2px 2px 0px rgba(125, 145, 174, 0.35),
                0px 0px 1px 0px rgba(125, 145, 174, 0.35);

    @include media-small {
      flex-direction: column;
      width: 100%;
      height: 100%;
      min-height: 100vh;
      box-shadow: none;
      border-radius: 0;
    }
  }

  // .login-page__image
  &__image {
    min-width: 174px;
    min-height: 100%;

    @include media-small {
      min-width: 320px;
    }
  }

  // .login-page__content
  &__content {
    width: 100%;
    height: 100%;
  }
}

.login-image {
  position: relative;
  width: 100%;
  max-width: 174px;
  min-height: 100%;
  padding: 28px 24px;
  overflow: hidden;
  background: linear-gradient(45.8deg, #091720 8.74%, #131C41 42.16%, #091720 79.3%, #121C3F 111.98%, #101D29 151.35%);

  @include media-small {
    max-width: 100%;
    min-height: 160px;
    padding: 12px 8px;
  }

  // .login-image__logo-circle
  &__logo-circle {
    position: absolute;
    bottom: -15px;
    left: -106px;

    @include media-small {
      left: unset;
      bottom: -67px;
      right: 0;
      width: 234px;
    }
  }
}

.login-content {
  // .login-content__inner
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 32px 80px 32px 24px;
    height: 100%;

    @include media-small {
      padding: 32px 8px;
    }
  }

  & h2 {
    @include futura-m24;
    color: $black;

    @include media-small {
      text-align: center;
    }
  }
}
</style>
