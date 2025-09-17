<template>
        <div class="login-popup" id="register-popup">
        <div class="login-popup-wrapper">
          <form class="login-popup__form">
            <h3 class="login-popup__title">Register!</h3>
            <p class="login-popup__desc">
              Connect, organize and get things done to keep your IT business
              safe.
            </p>
            <div class="form-group mb-20">
              <i class="icon-mail input-icon"></i>
              <input type="text" class="form-control" placeholder="Email" />
            </div>
            <div class="form-group mb-20">
              <i class="icon-lock input-icon"></i>
              <input
                type="password"
                class="form-control"
                placeholder="********"
              />
            </div>
            <div
              class="d-flex align-items-center justify-content-between mb-20"
            >
              <div
                class="custom-control custom-checkbox d-flex align-items-center"
              >
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck2"
                />
                <label class="custom-control-label" for="customCheck2"
                  >I read & agree to <a href="#">Terms & Conditions</a></label
                >
              </div>
            </div>
            <button type="submit" class="btn btn__primary btn__block btn__xl">
              <span>Register</span>
              <i class="icon-arrow-right"></i>
            </button>
          </form>
          <div class="d-flex justify-content-center align-items-center mt-20">
            <span class="color-white fz-14 font-weight-bold"
              >Have An Account?</span
            >
            <button id="go-login" class="go-login fz-14 font-weight-bold">
              <span>Login Here</span><i class="icon-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
</template>


<script setup>
defineProps({
  msg: String
})
</script>



<style scoped>
.btn__primary {
  background-color: #0092ff;
  color: #fff
}

.btn__primary .icon-outlined {
  color: #091d3e;
  border: 1px solid #0092ff
}

.btn__primary:active,
.btn__primary:focus {
  background-color: #0092ff;
  color: #fff
}

.btn__primary .icon-arrow-left,
.btn__primary .icon-arrow-right {
  color: #0092ff;
  background-color: #fff
}

.btn__primary:hover {
  color: #fff
}

.btn__primary:hover .icon-arrow-left,
.btn__primary:hover .icon-arrow-right {
  color: #091d3e;
  background-color: #fff
}

.btn__primary.btn__outlined {
  background-color: transparent;
  border: 2px solid #0092ff;
  color: #0092ff
}

.btn__primary.btn__outlined .icon-arrow-left,
.btn__primary.btn__outlined .icon-arrow-right {
  color: #fff;
  background-color: #0092ff
}

.btn__primary.btn__outlined:hover {
  color: #fff;
  background-color: #0092ff
}

.btn__primary.btn__outlined:hover .icon-arrow-left,
.btn__primary.btn__outlined:hover .icon-arrow-right {
  color: #0092ff;
  background-color: #fff
}

.btn__primary-style2:before {
  background-color: #fff !important
}

.btn__primary-style2:hover {
  color: #091d3e
}

.btn__primary-style2:hover .icon-arrow-left,
.btn__primary-style2:hover .icon-arrow-right {
  color: #fff;
  background-color: #091d3e
}

.btn__secondary {
  background-color: #091d3e;
  color: #fff
}

.btn__secondary:before {
  background-color: #0092ff !important
}

.btn__secondary .icon-arrow-left,
.btn__secondary .icon-arrow-right {
  color: #091d3e;
  background-color: #fff
}

.btn__secondary:hover {
  color: #fff
}

.btn__secondary:hover .icon-arrow-left,
.btn__secondary:hover .icon-arrow-right {
  color: #0092ff
}

.btn__secondary:active,
.btn__secondary:focus {
  background-color: #222;
  color: #fff
}

.btn__secondary.btn__outlined {
  background-color: transparent;
  border: 2px solid #091d3e;
  color: #091d3e
}

.btn__secondary.btn__outlined .icon-arrow-left,
.btn__secondary.btn__outlined .icon-arrow-right {
  color: #fff;
  background-color: #091d3e
}

.btn__secondary.btn__outlined:hover {
  color: #fff;
  background-color: #091d3e
}

.btn__secondary.btn__outlined:hover .icon-arrow-left,
.btn__secondary.btn__outlined:hover .icon-arrow-right {
  color: #091d3e;
  background-color: #fff
}

.btn__secondary-style2:before {
  background-color: #fff !important
}

.btn__secondary-style2:hover {
  color: #091d3e
}

.btn__secondary-style2:hover .icon-arrow-left,
.btn__secondary-style2:hover .icon-arrow-right {
  color: #fff;
  background-color: #091d3e
}

.btn__white {
  background-color: #fff;
  color: #091d3e
}

.btn__white:active,
.btn__white:focus {
  background-color: #fff;
  color: #091d3e
}

.btn__white .icon-arrow-left,
.btn__white .icon-arrow-right {
  color: #fff;
  background-color: #091d3e
}

.btn__white:hover {
  color: #fff
}

.btn__white:hover .icon-arrow-left,
.btn__white:hover .icon-arrow-right {
  color: #091d3e;
  background-color: #fff
}

.btn__white.btn__outlined {
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff
}

.btn__white.btn__outlined .icon-arrow-left,
.btn__white.btn__outlined .icon-arrow-right {
  color: #0092ff;
  background-color: #fff
}

.btn__white.btn__outlined:hover {
  color: #0092ff;
  background-color: #fff
}

.btn__white.btn__outlined:hover .icon-arrow-left,
.btn__white.btn__outlined:hover .icon-arrow-right {
  color: #fff;
  background-color: #0092ff
}

.btn__white-style2 {
  color: #0092ff
}

.btn__white-style2 .icon-arrow-left,
.btn__white-style2 .icon-arrow-right {
  color: #fff;
  background-color: #0092ff
}

.btn__white-style2:before {
  background-color: #0092ff !important
}

.btn__white-style2:hover .icon-arrow-left,
.btn__white-style2:hover .icon-arrow-right {
  color: #0092ff;
  background-color: #fff
}

.btn {
  text-transform: capitalize;
  position: relative;
  z-index: 1;
  font-size: 15px;
  font-weight: 700;
  min-width: 170px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  padding: 0 15px;
  letter-spacing: 1px;
  border: 0;
  border-radius: 3px;
  overflow: hidden;
  -webkit-transition: all .3s linear;
  transition: all .3s linear
}

.btn__primary-style2 .icon-arrow-right {
  margin-right: 8px;
}


.btn__outlined {
  background-color: transparent
}

.btn__link {
  background-color: transparent;
  border-color: transparent;
  min-width: 0;
  line-height: 1;
  height: auto;
  padding: 0;
  border: none;
  border-radius: 0
}

.btn__link:active,
.btn__link:focus {
  background-color: transparent
}

.btn__link.btn__icon {
  height: auto;
  line-height: 1;
  padding: 0
}

.btn__link.btn__primary {
  color: #0092ff
}

.btn__link.btn__primary-style2:hover {
  color: #fff
}

.btn__link.btn__primary.btn__underlined {
  padding-bottom: 3px;
  border-bottom: 2px solid #0092ff
}

.btn__link.btn__primary:hover {
  color: #222
}

.btn__link.btn__primary:hover.btn__underlined {
  border-color: #091d3e
}

.btn__link.btn__secondary {
  color: #091d3e
}

.btn__link.btn__secondary .icon-arrow-left,
.btn__link.btn__secondary .icon-arrow-right {
  color: #fff;
  background-color: #091d3e
}

.btn__link.btn__secondary:hover {
  color: #0092ff
}

.btn__link.btn__secondary:hover .icon-arrow-left,
.btn__link.btn__secondary:hover .icon-arrow-right {
  background-color: #0092ff
}

.btn__link.btn__white {
  color: #fff
}

.btn__link.btn__white .icon-arrow-left,
.btn__link.btn__white .icon-arrow-right {
  color: #091d3e;
  background-color: #fff
}

.btn__link.btn__white.btn__underlined {
  padding-bottom: 3px;
  border-bottom: 2px solid #fff
}

.btn__link.btn__white:hover {
  color: #091d3e
}

.btn__link.btn__white:hover .icon-arrow-left,
.btn__link.btn__white:hover .icon-arrow-right {
  color: #fff;
  background-color: #091d3e
}

.btn__link.btn__white:hover.btn__underlined {
  border-color: #091d3e
}

.btn__block {
  width: 100%
}

.btn__icon {
  display: -ms-inline-flexbox;
  display: -webkit-inline-box;
  display: inline-flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 0 20px
}

.btn__icon i,
.btn__icon span {
  margin: 0 5px
}
</style>