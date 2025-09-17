<template>
  <footer class="footer bg-secondary">
    <div class="container">
      <div class="footer-top pt-50 pb-30">
        <div class="row">
          <div class="col-sm-4 col-md-2 col-lg-4">
            <img src="@/assets/images/logo/infiniatech-light-logo.svg" alt="logo" class="mb-30" />
          </div>
          <!-- /.col-lg-2 -->
          <div class="col-sm-8 col-md-4 col-lg-3">
            <h6 class="footer-top__title">
              Sign up for latest IT resources, news and insights from
              Datasoft!
            </h6>
          </div>
          <!-- /.col-lg-3 -->
          <div class="col-sm-12 col-md-6 col-lg-5">
            <form class="footer-form d-flex mb-0" @submit.prevent="submitSubscribe">
              <input type="text" class="form-control mr-20" placeholder="Your Email Address" v-model="form.email" />
              <button type="submit" class="btn btn__primary btn__primary-style2" :disabled="loading">
                <span>Subscribe</span>
                <i class="icon-arrow-right"></i>
              </button>
            </form>
          </div>

          <!-- /.col-lg-6 -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.footer-top -->
      <div class="footer-primary">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-3 footer-widget footer-widget-about">
            <div class="footer-widget__content">
              <div class="contact-info">
                <h6 class="footer-widget__title">Quick Contact</h6>
                <ul class="contact-list list-unstyled">
                  <li class="color-gray">
                    If you have any questions or need help, feel free to
                    contact with our team.
                  </li>
                  <li class="mt-20 mb-20">
                    <a href="tel:01061245741" class="phone-number">
                      <i class="icon-phone"></i> <span>01637891095</span>
                    </a>
                  </li>
                  <li class="color-body">
                    Star Center,House-2,(5th Floor)-Block-C,Road-138 Gulshan Avenue, Gulshan-1,Dhaka-1212
                  </li>
                </ul>
              </div>
              <!-- /.contact-info -->
              <ul class="social-icons list-unstyled mb-0">
                <li>
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                </li>
              </ul>
              <!-- /.social-icons -->
            </div>
            <!-- /.footer-widget__content -->
          </div>
          <!-- /.col-xl-2 -->
          <div class="col-sm-6 col-md-6 col-lg-2 offset-lg-1 footer-widget footer-widget-nav">
            <h6 class="footer-widget__title">Company</h6>
            <div class="footer-widget__content">
              <nav>
                <ul class="list-unstyled">
                  <li><a href="about-us.html">About Us</a></li>
                  <li><a href="leadership-team.html">Meet Our Team</a></li>
                  <li><a href="blog.html">News & Media</a></li>
                  <li><a href="projects-grid.html">Case Studies</a></li>
                  <li><a href="contacs.html">Contacts</a></li>
                  <li><a href="#">Investors</a></li>
                </ul>
              </nav>
            </div>
            <!-- /.footer-widget__content -->
          </div>
          <!-- /.col-lg-2 -->
          <div class="col-sm-6 col-md-6 col-lg-2 footer-widget footer-widget-nav">
            <h6 class="footer-widget__title">Solutions</h6>
            <div class="footer-widget__content">
              <nav>
                <ul class="list-unstyled">
                  <li><a href="#">IT Management</a></li>
                  <li><a href="#">Cyber Security</a></li>
                  <li><a href="#">Cloud Computing</a></li>
                  <li><a href="#">IT Consulting</a></li>
                  <li><a href="#">Software Dev</a></li>
                  <li><a href="#">IT Support</a></li>
                </ul>
              </nav>
            </div>
            <!-- /.footer-widget__content -->
          </div>
          <!-- /.col-lg-2 -->
          <div class="col-sm-6 col-md-6 col-lg-2 footer-widget footer-widget-nav">
            <h6 class="footer-widget__title">Resources</h6>
            <div class="footer-widget__content">
              <nav>
                <ul class="list-unstyled">
                  <li><a href="pricing.html">Pricing and plans</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="faqs.html">Help & FAQ</a></li>
                  <li><a href="contacs.html">Contact Us</a></li>
                  <li><a href="#">Site map</a></li>
                </ul>
              </nav>
            </div>
            <!-- /.footer-widget__content -->
          </div>
          <!-- /.col-lg-2 -->
          <div class="col-sm-6 col-md-6 col-lg-2 footer-widget footer-widget-nav">
            <h6 class="footer-widget__title">Download</h6>
            <div class="footer-widget__content">
              <a href="#" class="btn btn__white btn__download mb-20">
                <i class="fab fa-apple"></i>
                <span>App Store</span>
              </a>
              <a href="#" class="btn btn__white btn__download mb-20">
                <i class="fab fa-google-play"></i>
                <span>Google Play</span>
              </a>
            </div>
            <!-- /.footer-widget__content -->
          </div>
          <!-- /.col-lg-2 -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.footer-primary -->
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12 text-center pb-40">
          <span class="fz-14 text-white">&copy; 2025 Infinatech, All Rights Reserved. With Love by-</span>
          <a class="fz-14 color-primary" href="#">Infiniatech</a>
        </div>
        <!-- /.col-lg-12 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </footer>
</template>


<script>
import { toast } from "vue3-toastify"; // optional, 

export default {
  name: "Subscribe",
  data() {
    return {
      form: {
        email: '',
      },
      loading: false,
    };
  },
  methods: {
    async submitSubscribe() {
      this.loading = true;

      // Optional: simple client-side guard
      if (!this.form.email) {
        // use toast via global or imported toast
        (this.$toast || toast).error('Please enter your email address', { position: 'top-right' });
        this.loading = false;
        return;
      }

      try {
        // build payload: send website only if you added it to DB, otherwise remove
        const payload = {

          email: this.form.email,

        };

        const res = await this.$axios.post('/subscribe', payload);

        // Success toast (green) at right side
        (this.$toast || toast).success(res.data?.message || 'Submitted successfully!', {
          position: 'top-right'
        });

        // reset form
        this.form.email = '';

      } catch (err) {
        // build error message
        let msg = 'Submission failed!';
        if (err.response?.data?.message) msg = err.response.data.message;
        else if (err.response?.data?.errors) {
          msg = Object.values(err.response.data.errors).flat().join(' ');
        } else if (err.message) msg = err.message;

        // Error toast (red)
        (this.$toast || toast).error(msg, { position: 'top-right' });
      } finally {
        this.loading = false;
      }
    }
  }
}
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