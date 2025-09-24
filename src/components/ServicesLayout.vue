<template>
<section class="services-layout1 services-carousel pb-100">
        <div class="bg-img">
          <img src="@/assets/images/backgrounds/5.png" alt="backgrounds" />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
              <div class="heading text-center mb-50">
                <h2 class="heading__subtitle">
                  Nationwide Service, Local Expertise
                </h2>
                <h3 class="heading__title">
                  Offer The Latest Software And Solutions To Our customers!
                </h3>
              </div>
              <!-- /.heading -->
            </div>
            <!-- /.col-lg-6 -->
          </div>
          <!-- /.row -->
          <div class="row">
            <div class="col-12">
              <div
                class="slick-carousel"
                data-slick='{"slidesToShow": 3, "slidesToScroll": 3, "arrows": false, "dots": false, "responsive": [ {"breakpoint": 992, "settings": {"slidesToShow": 2}}, {"breakpoint": 767, "settings": {"slidesToShow": 2}}, {"breakpoint": 480, "settings": {"slidesToShow": 1}}]}'
              >
                <!-- service item #1 -->
                <div class="service-item">
                  <div class="service__icon">
                    <i class="icon-server"></i>
                  </div>
                  <!-- /.service__icon -->
                  <h4 class="service__title">
                    IT Management <br />
                    Services
                  </h4>
                  <div class="service__content">
                    <p class="service__desc">
                      IT management service that manages and oversees the IT of
                      organization responsible for network and operations which
                      includes data communication.
                    </p>
                    <a href="it-solutions-single.html" class="btn btn__primary">
                      <span>Read More</span>
                      <i class="icon-arrow-right"></i>
                    </a>
                  </div>
                  <!-- /.service-content -->
                </div>
                <!-- /.service-item -->
                <!-- service item #2 -->
                <div class="service-item">
                  <div class="service__icon">
                    <i class="icon-cloud"></i>
                  </div>
                  <!-- /.service__icon -->
                  <h4 class="service__title">
                    Cyber Security<br />
                    Services
                  </h4>
                  <div class="service__content">
                    <p class="service__desc">
                      Drive your business and manage risk with a global industry
                      leader in cybersecurity, cloud, and managed security
                      services and extend your team with leading experts.
                    </p>
                    <a href="it-solutions-single.html" class="btn btn__primary">
                      <span>Read More</span>
                      <i class="icon-arrow-right"></i>
                    </a>
                  </div>
                  <!-- /.service-content -->
                </div>
                <!-- /.service-item -->
                <!-- service item #3 -->
                <div class="service-item">
                  <div class="service__icon">
                    <i class="icon-hosting"></i>
                  </div>
                  <!-- /.service__icon -->
                  <h4 class="service__title">
                    Cloud Computing<br />
                    Services
                  </h4>
                  <div class="service__content">
                    <p class="service__desc">
                      Cloud computing is the on-demand availability of computer
                      system resources, especially data storage and computing
                      power, without direct active management
                    </p>
                    <a href="it-solutions-single.html" class="btn btn__primary">
                      <span>Read More</span>
                      <i class="icon-arrow-right"></i>
                    </a>
                  </div>
                  <!-- /.service-content -->
                </div>
                <!-- /.service-item -->
                <!-- service item #4 -->
                <div class="service-item">
                  <div class="service__icon">
                    <i class="icon-technician"></i>
                  </div>
                  <!-- /.service__icon -->
                  <h4 class="service__title">
                    IT Consulting <br />
                    Services
                  </h4>
                  <div class="service__content">
                    <p class="service__desc">
                      Trying to solve all your IT challenges internally can
                      become costly and a major distraction, Leveraging
                      knowledgeable IT consulting firms like ushelps your
                      business.
                    </p>
                    <a href="it-solutions-single.html" class="btn btn__primary">
                      <span>Read More</span>
                      <i class="icon-arrow-right"></i>
                    </a>
                  </div>
                  <!-- /.service-content -->
                </div>
                <!-- /.service-item -->
                <!-- service item #5 -->
                <div class="service-item">
                  <div class="service__icon">
                    <i class="icon-programming"></i>
                  </div>
                  <!-- /.service__icon -->
                  <h4 class="service__title">
                    Software Dev<br />
                    Services
                  </h4>
                  <div class="service__content">
                    <p class="service__desc">
                      With shorter product cycles, rapid innovation, and mergers
                      contributing to constant change, you are faced with making
                      business decisions every day to advance your mission.
                    </p>
                    <a href="it-solutions-single.html" class="btn btn__primary">
                      <span>Read More</span>
                      <i class="icon-arrow-right"></i>
                    </a>
                  </div>
                  <!-- /.service-content -->
                </div>
                <!-- /.service-item -->
                <!-- service item #6 -->
                <div class="service-item">
                  <div class="service__icon">
                    <i class="icon-programming"></i>
                  </div>
                  <!-- /.service__icon -->
                  <h4 class="service__title">
                    Backup & Recovery<br />
                    Services
                  </h4>
                  <div class="service__content">
                    <p class="service__desc">
                      While you can’t predict unexpected events, we’ll ensure
                      the right precautions are in place to minimize downtime
                      and keep you moving in the right direction.
                    </p>
                    <a href="it-solutions-single.html" class="btn btn__primary">
                      <span>Read More</span>
                      <i class="icon-arrow-right"></i>
                    </a>
                  </div>
                  <!-- /.service-content -->
                </div>
                <!-- /.service-item -->
              </div>
              <!-- /.carousel -->
            </div>
            <!-- /.col-12 -->
          </div>
          <!-- /.row -->
          <div class="row">
            <div class="col-12 text-center">
              <p class="text__link mt-20 mb-0">
                Working hard to earn our customers’ trust.
                <a
                  href="/" @click.prevent="goReload('/')"
                  class="btn btn__secondary btn__link mx-1"
                >
                  <span>Explore All Services</span>
                  <i class="icon-arrow-right icon-outlined"></i>
                </a>
              </p>
            </div>
            <!-- /.col-lg-6 -->
          </div>
        </div>
        <!-- /.container -->
      </section>
</template>

<script setup>
function goReload(path) {
  window.location.href = path // hard reload
}
</script>

<style scoped>


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
    min-width: 161px;
    height: 46px;
    line-height: 41px;
    text-align: center;
    padding: 0px 2px;
    letter-spacing: 1px;
    border: 0;
    border-radius: 3px;
    overflow: hidden;
    -webkit-transition: all .3s linear;
    transition: all .3s linear;
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