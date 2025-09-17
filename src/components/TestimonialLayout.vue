<template>
          <section
        class="testimonials testimonials-layout1 testimonials-has-bottom-img"
      >
        <div class="bg-img">
          <img src="@/assets/images/backgrounds/4.png" alt="backgrounds" />
        </div>
        <img
          src="@/assets/images/testimonials/testimonials-group.png"
          alt="testimonials"
          class="testimonials-bottom-img"
        />
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="testimonials-wrapper">
                <div class="heading">
                  <h3 class="heading__title color-primary">
                    1500 Satisfied Users Over The Globe
                  </h3>
                </div>
                <!-- /.heading -->
                <div
                  class="slick-carousel"
                  data-slick='{"slidesToShow": 1, "arrows": false, "dots": true, "speed": 700}'
                >
                  <!-- Testimonial #1 -->
                  <div class="testimonial-item">
                    <h3 class="testimonial__title">
                      If you’re looking for a rewarding career and the chance to
                      make an impact, you’ve come to the right place. We will
                      transform your business through our techniques!
                    </h3>
                    <div class="testimonial__meta d-flex align-items-center">
                      <div class="testimonial__thmb mr-20">
                        <img
                          src="@/assets/images/testimonials/thumbs/1.png"
                          alt="author thumb"
                        />
                      </div>
                      <!-- /.testimonial-thumb -->
                      <div>
                        <h4 class="testimonial__meta-title">John Peter</h4>
                        <p class="testimonial__meta-desc">7oroof Inc</p>
                      </div>
                    </div>
                    <!-- /.testimonial-meta -->
                  </div>
                  <!-- /. testimonial-item -->
                  <!-- Testimonial #2 -->
                  <div class="testimonial-item">
                    <h3 class="testimonial__title">
                      My project was a simple & small task, but the persistence
                      and determination turned it into an awesome and great
                      project which make me happy.
                    </h3>
                    <div class="testimonial__meta d-flex align-items-center">
                      <div class="testimonial__thmb mr-20">
                        <img
                          src="@/assets/images/testimonials/thumbs/2.png"
                          alt="author thumb"
                        />
                      </div>
                      <!-- /.testimonial-thumb -->
                      <div>
                        <h4 class="testimonial__meta-title">Ahmed Abdallah</h4>
                        <p class="testimonial__meta-desc">Web Inc</p>
                      </div>
                    </div>
                    <!-- /.testimonial-meta -->
                  </div>
                  <!-- /. testimonial-item -->
                </div>
                <p class="text__link mt-50 mb-30">
                  Trusted By The World's <a href="#">Best Organizations</a>
                </p>
                <div
                  class="slick-carousel"
                  data-slick='{"slidesToShow": 5, "arrows": false, "dots": false, "autoplay": true,"autoplaySpeed": 2000, "infinite": true, "responsive": [ {"breakpoint": 992, "settings": {"slidesToShow": 4}}, {"breakpoint": 767, "settings": {"slidesToShow": 3}}, {"breakpoint": 480, "settings": {"slidesToShow": 2}}]}'
                >
                  <div class="client">
                    <img src="@/assets/images/clients/1.png" alt="client" />
                    <img src="@/assets/images/clients/1.png" alt="client" />
                  </div>
                  <!-- /.client -->
                  <div class="client">
                    <img src="@/assets/images/clients/2.png" alt="client" />
                    <img src="@/assets/images/clients/2.png" alt="client" />
                  </div>
                  <!-- /.client -->
                  <div class="client">
                    <img src="@/assets/images/clients/3.png" alt="client" />
                    <img src="@/assets/images/clients/3.png" alt="client" />
                  </div>
                  <!-- /.client -->
                  <div class="client">
                    <img src="@/assets/images/clients/4.png" alt="client" />
                    <img src="@/assets/images/clients/4.png" alt="client" />
                  </div>
                  <!-- /.client -->
                  <div class="client">
                    <img src="@/assets/images/clients/5.png" alt="client" />
                    <img src="@/assets/images/clients/5.png" alt="client" />
                  </div>
                  <!-- /.client -->
                  <div class="client">
                    <img src="@/assets/images/clients/6.png" alt="client" />
                    <img src="@/assets/images/clients/6.png" alt="client" />
                  </div>
                  <!-- /.client -->
                  <div class="client">
                    <img src="@/assets/images/clients/7.png" alt="client" />
                    <img src="@/assets/images/clients/7.png" alt="client" />
                  </div>
                  <!-- /.client -->
                </div>
                <!-- /.carousel -->
              </div>
            </div>
            <!-- /.col-lg-12 -->
          </div>
          <!-- /.row -->
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