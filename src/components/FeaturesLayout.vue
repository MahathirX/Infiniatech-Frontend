<template>
  <section class="features-layout2 bg-overlay bg-overlay-secondary-gradient pt-130">
    <div class="bg-img">
      <img src="@/assets/images/banners/4.jpg" alt="background" />
    </div>
    <div class="container">
      <div class="row mb-40">
        <div class="col-sm-12 col-md-12 col-lg-5">
          <h2 class="heading__subtitle color-primary">
            Ensure High Availability of Your Services
          </h2>
          <h3 class="heading__title color-white">
            Improve Efficiency And Provide Better Experience By Our IT
            Solutions!
          </h3>
        </div>
        <!-- /col-lg-5 -->
        <div class="col-sm-12 col-md-12 col-lg-5 offset-lg-1">
          <p class="heading__desc color-gray">
            Trusted by the world's best organizations, for 15 years and
            running, it has been delivering smiles to hundreds of IT
            advisors, developers, users, and business owners. Easy solutions
            for all difficult IT problems to ensure high availability.
          </p>
          <div class="d-flex flex-wrap mt-40 mb-30">
            <a href="#" class="btn btn__primary btn__primary-style2 mr-30">
              <i class="icon-arrow-right"></i>
              <span>Get Started</span>
            </a>
            <a href="#" class="btn btn__white btn__outlined">Request A Demo</a>
          </div>
        </div>
        <!-- /.col-lg-6 -->
      </div>
      <!-- /.row -->
      <div class="row">
        <!-- Feature item #1 -->
        <div class="col-sm-6 col-md-6 col-lg-3">
          <div class="feature-item">
            <div class="feature__icon">
              <i class="icon-statistic"></i>
            </div>
            <h4 class="feature__title">Software Asset Management</h4>
            <p class="feature__desc" style="color: #848e9f;">
              Extend proven Tech best practices to HR, finance, and other
              service delivery.
            </p>
            <a href="#" class="btn__link">
              <i class="icon-arrow-right icon-outlined"></i>
              <span>Read More</span>
            </a>
          </div>
          <!-- /.feature-item -->
        </div>
        <!-- /.col-lg-3 -->
        <!-- Feature item #2 -->
        <div class="col-sm-6 col-md-6 col-lg-3">
          <div class="feature-item">
            <div class="feature__icon">
              <i class="icon-software"></i>
            </div>
            <h4 class="feature__title">Software License Management</h4>
            <p class="feature__desc" style="color: #848e9f;">
              Build dynamic request templates with associated workflows, and
              tasks.
            </p>
            <a href="#" class="btn__link">
              <i class="icon-arrow-right icon-outlined"></i>
              <span>Read More</span>
            </a>
          </div>
          <!-- /.feature-item -->
        </div>
        <!-- /.col-lg-3 -->
        <!-- Feature item #3 -->
        <div class="col-sm-6 col-md-6 col-lg-3">
          <div class="feature-item">
            <div class="feature__icon">
              <i class="icon-website"></i>
            </div>
            <h4 class="feature__title">Knowledge Base & Live Chat</h4>
            <p class="feature__desc" style="color: #848e9f;">
              Build dynamic request templates with associated workflows, and
              tasks.
            </p>
            <a href="#" class="btn__link">
              <i class="icon-arrow-right icon-outlined"></i>
              <span>Read More</span>
            </a>
          </div>
          <!-- /.feature-item -->
        </div>
        <!-- /.col-lg-3 -->
        <!-- Feature item #4 -->
        <div class="col-sm-6 col-md-6 col-lg-3">
          <div class="feature-item">
            <div class="feature__icon">
              <i class="icon-management"></i>
            </div>
            <h4 class="feature__title">Privileged Access Management</h4>
            <p class="feature__desc" style="color: #848e9f;">
              Extend proven Tech best practices to HR, finance, and other
              service delivery.
            </p>
            <a href="#" class="btn__link">
              <i class="icon-arrow-right icon-outlined"></i>
              <span>Read More</span>
            </a>
          </div>
          <!-- /.feature-item -->
        </div>
        <!-- /.col-lg-3 -->
      </div>
      <!-- /.row -->
      <div class="row">
        <div class="col-12 text-center mt-40">
          <p class="font-weight-bold color-white mb-0">
            Feel free to contact us, or you can call us any time
            <a href="tel:01637891095" class="color-white-hover">01637891095</a>
          </p>
        </div>
      </div>
    </div>
    <!-- /.container -->
  </section>
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