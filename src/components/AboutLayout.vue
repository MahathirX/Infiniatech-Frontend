<template>
    <section class="about-layout2 pt-130 pb-90">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-5">
              <div class="about__img mb-40">
                <img src="@/assets/images/about/1.jpg" alt="about" />
                <blockquote class="blockquote mb-0">
                  <h4 class="blockquote__title">
                    You are helping to lead the charge; we can help you build on
                    your past successes and prepare for your great future.
                  </h4>
                  <span class="blockquote__author" style="color: #848e9f;">John Peter, Founder</span>
                </blockquote>
              </div>
              <!-- /.about-img -->
            </div>
            <!-- /.col-xl-5 -->
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 offset-xl-1">
              <div class="heading-layout2 mb-40">
                <h2 class="heading__subtitle">
                  Improve Efficiency and Provide Better Experiences!
                </h2>
                <h3 class="heading__title">
                  Keep Your Business Safe & Ensure High Availability.
                </h3>
              </div>
              <!-- /heading -->
              <div class="about-text-wrapper">
                <div class="about__Text">
                  <p class="font-weight-bold mb-30">
                    As one of the world's largest ITService Providers, our deep
                    pool of over 130 certified engineers and IT support staff
                    are ready to help.
                  </p>
                  <p>
                    Provide users with appropriate view and access permissions
                    to requests, problems, changes, contracts, @/assets,
                    solutions, and reports with our experienced professionals.
                  </p>
                </div>
                <a href="#" class="btn btn__primary btn__icon mt-30">
                  <span>Schedule An Appointment</span
                  ><i class="icon-arrow-right"></i>
                </a>
                <ul
                  class="list-items list-items-layout2 list-unstyled mb-0 mt-60"
                >
                  <li>Delivered in more than 450,000 client’s interactions</li>
                  <li>
                    Provided by experts to help challenge critical activities
                  </li>
                  <li>Complemented with peer perspectives and advice</li>
                </ul>
              </div>
            </div>
            <!-- /.col-xl-7 -->
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