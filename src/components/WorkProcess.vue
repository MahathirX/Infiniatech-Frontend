<template>
          <section class="work-process pt-130 pb-130">
        <div class="bg-img">
          <img src="@/assets/images/backgrounds/2.jpg" alt="background" />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-7">
              <div class="banners-wrapper sticky-top">
                <div class="tab-content mb-50">
                  <div class="tab-pane fade show active" id="tab1">
                    <div class="video__banner">
                      <img
                        src="@/assets/images/work-process/1.jpg"
                        class="rounded"
                        alt="banner"
                      />
                      <a
                        class="video__btn video__btn-white popup-video"
                        href="https://www.youtube.com/watch?v=nrJtHemSPW4"
                      >
                        <div class="video__player">
                          <i class="fa fa-play"></i>
                        </div>
                      </a>
                    </div>
                    <!-- /.video__banner -->
                  </div>
                  <div class="tab-pane fade" id="tab2">
                    <div class="video__banner">
                      <img
                        src="@/assets/images/work-process/2.jpg"
                        class="rounded"
                        alt="banner"
                      />
                      <a
                        class="video__btn video__btn-white popup-video"
                        href="https://www.youtube.com/watch?v=nrJtHemSPW4"
                      >
                        <div class="video__player">
                          <i class="fa fa-play"></i>
                        </div>
                      </a>
                    </div>
                    <!-- /.video__banner -->
                  </div>
                  <div class="tab-pane fade" id="tab3">
                    <div class="video__banner">
                      <img
                        src="@/assets/images/work-process/3.jpg"
                        class="rounded"
                        alt="banner"
                      />
                      <a
                        class="video__btn video__btn-white popup-video"
                        href="https://www.youtube.com/watch?v=nrJtHemSPW4"
                      >
                        <div class="video__player">
                          <i class="fa fa-play"></i>
                        </div>
                      </a>
                    </div>
                    <!-- /.video__banner -->
                  </div>
                  <div class="tab-pane fade" id="tab4">
                    <div class="video__banner">
                      <img
                        src="@/assets/images/work-process/4.jpg"
                        class="rounded"
                        alt="banner"
                      />
                      <a
                        class="video__btn video__btn-white popup-video"
                        href="https://www.youtube.com/watch?v=nrJtHemSPW4"
                      >
                        <div class="video__player">
                          <i class="fa fa-play"></i>
                        </div>
                      </a>
                    </div>
                    <!-- /.video__banner -->
                  </div>
                </div>
                <!-- /.tab-content -->
                <!-- <div
                  class="cta-banner mt-30 mb-30 d-flex flex-wrap align-items-center"
                >
                  <h4 class="cta__title my-3 pr-30">
                    We partner with brands to help them improve their Software
                    and IT services. Ready to start your next project? Drop us a
                    line or two at:
                    <a
                      href="/cdn-cgi/l/email-protection#cd89acb9acbea2abb98dfaa2bfa2a2abe3aea2a0"
                      ><span
                        class="__cf_email__"
                        data-cfemail="1551746174667a736155227a677a7a733b767a78"
                        >[email&#160;protected]</span
                      ></a
                    >
                  </h4>
                  <a href="#" class="btn btn__primary btn__primary-style2">
                    <span>Request Demo</span>
                    <i class="icon-arrow-right"></i>
                  </a>
                </div> -->
                <!-- /.cta-banner -->
              </div>
            </div>
            <!-- /.col-lg-7 -->
            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-5">
              <div class="heading mb-70">
                <h2 class="heading__subtitle color-primary">How We Works!!</h2>
                <h3 class="heading__title color-white">
                  Deliver Only Exceptional Quality, And Improve!
                </h3>
              </div>
              <nav class="nav nav-tabs">
                <!-- process Item #1 -->
                <a class="process-item active" data-toggle="tab" href="#tab1">
                  <div class="process-item__content">
                    <h4 class="process-item__title">Brainstorming</h4>
                    <p class="process-item__desc">
                      The first step is to take the projects data & think about
                      it to manage all aspects of your software @/assets including
                      maintenance.
                    </p>
                  </div>
                </a>
                <!-- /.process-item -->
                <!-- process Item #2 -->
                <a class="process-item" data-toggle="tab" href="#tab2">
                  <div class="process-item__content">
                    <h4 class="process-item__title">Concept Prototype</h4>
                    <p class="process-item__desc">
                      To know about the product, customers & competitors offer
                      integral communication services software @/assets.
                    </p>
                  </div>
                </a>
                <!-- /.process-item -->
                <!-- process Item #3 -->
                <a class="process-item" data-toggle="tab" href="#tab3">
                  <div class="process-item__content">
                    <h4 class="process-item__title">Design Layout</h4>
                    <p class="process-item__desc">
                      Start to work on the design taking with collected data,
                      we're responsible for our process and results.
                    </p>
                  </div>
                </a>
                <!-- /.process-item -->
                <!-- process Item #4 -->
                <a class="process-item" data-toggle="tab" href="#tab4">
                  <div class="process-item__content">
                    <h4 class="process-item__title">Evaluation</h4>
                    <p class="process-item__desc">
                      Reach a conclusion from the investigations about product
                      and we thank each of our great clients projects.
                    </p>
                  </div>
                </a>
                <!-- /.process-item -->
              </nav>
            </div>
            <!-- /.col-lg-5 -->
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