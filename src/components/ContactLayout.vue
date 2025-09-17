<template>
  <section class="contact-layout2 py-0">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="contact-panel d-flex flex-wrap">
            <div class="stats-banner contact-panel__info d-flex flex-column justify-content-between">
              <div class="bg-img">
                <img src="@/assets/images/backgrounds/1.jpg" alt="banner" />
              </div>
              <div class="slick-carousel carousel-dots-light counters-light mb-40"
                data-slick='{"slidesToShow": 1, "arrows": false, "dots": true, "speed": 700}'>
                <div class="counter-item">
                  <h4 ref="counter1" class="counter color-white">0</h4>
                  <p class="counter__desc">
                    Projects And Software Developed in 2021
                  </p>
                </div>
                <!-- /.counter-item -->
                <div class="counter-item">
                  <h4 ref="counter2" class="counter color-white">0</h4>
                  <p class="counter__desc">
                    Projects And Software Developed in 2021
                  </p>
                </div>

                <!-- /.counter-item -->
              </div>
              <!-- /.slick-carousel -->
              <div>
                <h4 class="stats-banner__ttile mb-20">
                  As one of the world's largest IT Service Providers, our
                  deep pool of certified engineers and IT staff are ready to
                  help you to keep business safe & ensure high availability.
                </h4>
                <a href="industries.html" class="btn btn__white btn__link">
                  <span>Customers’ Stories</span>
                  <i class="icon-arrow-right icon-outlined"></i>
                </a>
              </div>
            </div>
            <!-- /.stats-banner-->
            <form class="contact-panel__form" method="post" action="@/assets/php/contact.php" id="contactForm">
              <div class="row">
                <div class="col-sm-12">
                  <h4 class="contact-panel__title">Request A Quote</h4>
                  <p class="contact-panel__desc mb-20">
                    Our deep pool of certified engineers and IT staff are
                    ready to help you to keep your IT business safe & ensure
                    high availability.
                  </p>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-6">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Name" id="contact-name" name="contact-name"
                      required />
                  </div>
                </div>
                <!-- /.col-lg-6 -->
                <div class="col-sm-6 col-md-6 col-lg-6">
                  <div class="form-group">
                    <input type="email" class="form-control" placeholder="Email" id="contact-email" name="contact-email"
                      required />
                  </div>
                </div>
                <!-- /.col-lg-6 -->
                <div class="col-sm-6 col-md-6 col-lg-6">
                  <div class="form-group">
                    <select class="form-control">
                      <option value="1">Inquiry</option>
                      <option value="2">case study</option>
                    </select>
                  </div>
                </div>
                <!-- /.col-lg-6 -->
                <div class="col-sm-6 col-md-6 col-lg-6">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Phone" id="contact-Phone" name="contact-phone"
                      required />
                  </div>
                </div>
                <!-- /.col-lg-6 -->
                <div class="col-12">
                  <div class="form-group">
                    <textarea class="form-control" placeholder="Describe your inquirey!" id="contact-message"
                      name="contact-message"></textarea>
                  </div>
                  <button type="submit" class="btn btn__secondary btn__icon btn__xhight mt-10">
                    <span>Submit Request</span>
                    <i class="icon-arrow-right"></i>
                  </button>
                  <div class="contact-result"></div>
                </div>
                <!-- /.col-lg-12 -->
              </div>
              <!-- /.row -->
            </form>
            <!-- /.contact-panel__form -->
          </div>
        </div>
        <!-- /.col-lg-6 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const counter1 = ref(null);
const counter2 = ref(null);

function animateCounter(el, target, duration = 2000) {
  let start = 0;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    el.innerText = Math.floor(progress * target).toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }
  requestAnimationFrame(step);
}

onMounted(() => {
  const options = {
    threshold: 0.4,
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target === counter1.value) {
          animateCounter(counter1.value, 6154, 2000);
        }
        if (entry.target === counter2.value) {
          animateCounter(counter2.value, 6154, 2500);
        }
        obs.unobserve(entry.target);
      }
    });
  }, options);

  if (counter1.value) observer.observe(counter1.value);
  if (counter2.value) observer.observe(counter2.value);
});
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