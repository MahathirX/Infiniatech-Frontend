<template>
    <!-- ========================= 
            Google Map
    =========================  -->
    <section class="google-map py-0">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.452193538965!2d90.4078!3d23.7925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b0d0f9b7a1%3A0xabcdef123456789!2sGulshan%20Plaza%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1693856234567!5m2!1sen!2sbd"
            width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>

    <!-- /.GoogleMap -->

    <!-- ==========================
        contact layout 1
    =========================== -->
    <section class="contact-layout1 pt-0 mt--100">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="contact-panel d-flex flex-wrap">
                        <div class="contact-panel__info">
                            <div class="bg-img"><img src="@/assets/images/backgrounds/3.jpg" alt="banner"></div>
                            <div class="contact-block">
                                <h5 class="contact-block__title">Our Location</h5>
                                <ul class="contact-block__list list-unstyled">
                                    <li>Star Center,House-2,(5th Floor)-Block-C,Road-138</li>
                                    <li>Gulshan Avenue, Gulshan-1,Dhaka-1212</li>
                                </ul>
                            </div>
                            <!-- /.contact-panel__info__block -->
                            <div class="contact-block">
                                <h5 class="contact-block__title">Quick Contact</h5>
                                <ul class="contact-block__list list-unstyled">
                                    <li><a href="#"></a>Email:
                                        <a href="mailto:info@infiniatechltd.com" class="__cf_email__" data-cfemail="#">info@infiniatechltd.com</a>
                                    </li>
                                    <li><a href="#"></a>Support:
                                        <a href="mailto:support@infiniatechltd.com" class="__cf_email__"
                                            data-cfemail="4d092c392c1e222b390d7a223f22222b632e2220">support@infiniatechltd.com</a>
                                    </li>
                                </ul>
                            </div>
                            <!-- /.contact-panel__info__block -->
                            <div class="contact-block">
                                <h5 class="contact-block__title">Opening Hours</h5>
                                <ul class="contact-block__list list-unstyled">
                                    <li>Saturday - Thursday</li>
                                    <li>10:00 AM - 06:00 PM</li>
                                </ul>
                            </div>
                            <!-- /.contact-panel__info__block -->
                            <p class="color-white mb-20">If you have any questions or need help, feel free to contact
                                with our team.
                            </p>
                            <a href="tel:01637891095" class="phone-number">
                                <i class="icon-phone"></i> <span>01637891095</span>
                            </a>
                        </div>
                        <form class="contact-panel__form" id="contactForm" @submit.prevent="submitContact">
                            <!-- Name -->
                            <div class="form-group">
                                <input v-model="form.name" type="text" class="form-control" placeholder="Name" required>
                            </div>
                            <!-- Email -->
                            <div class="form-group">
                                <input v-model="form.email" type="email" class="form-control" placeholder="Email"
                                    required>
                            </div>
                            <!-- Phone -->
                            <div class="form-group">
                                <input v-model="form.phone" type="text" class="form-control" placeholder="Phone">
                            </div>
                            <!-- Message -->
                            <div class="form-group">
                                <textarea v-model="form.message" class="form-control"
                                    placeholder="Describe your inquiry!" required></textarea>
                            </div>

                            <button type="submit" class="btn btn__primary btn__icon btn__xhight mt-10"
                                :disabled="loading">
                                   Submit Request
                                <i class="icon-arrow-right"></i>
                            </button>
                        </form>

                    </div>
                </div>
                <!-- /.col-lg-6 -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container -->
    </section>
    <!-- /.contact layout 1 -->

    <!-- ==========================
       Contact Info
    ============================ 
    <section class="contact-info pt-0 pb-70">
        <div class="container">
            <div class="row">
             Contact panel #1 
                <div class="col-sm-12 col-md-4 col-lg-4">
                    <div class="contact-info-box">
                        <h4 class="contact__info-box-title">London Office</h4>
                        <ul class="contact__info-list list-unstyled">
                            <li>Email: <a
                                    href="/cdn-cgi/l/email-protection#064267726755696072463169746969602865696b"><span
                                        class="__cf_email__"
                                        data-cfemail="4501243124162a233105722a372a2a236b262a28">[email&#160;protected]</span></a>
                            </li>
                            <li>Address: 2307 Beverley Rd Brooklyn, NY</li>
                            <li>Phone: <a href="tel:5565454117">55 654 541 17</a></li>
                            <li>Hours: Mon-Fri: 8am – 7pm</li>
                        </ul>
                       
                    </div>
                  
                </div>
            

              Contact panel #2 
                <div class="col-sm-12 col-md-4 col-lg-4">
                    <div class="contact-info-box">
                        <h4 class="contact__info-box-title">Berlin Office</h4>
                        <ul class="contact__info-list list-unstyled">
                            <li>Email: <a
                                    href="/cdn-cgi/l/email-protection#d094b1a4b183bfb6a490e7bfa2bfbfb6feb3bfbd"><span
                                        class="__cf_email__"
                                        data-cfemail="6f2b0e1b0e3c00091b2f58001d000009410c0002">[email&#160;protected]</span></a>
                            </li>
                            <li>Address: 2307 Beverley Rd Brooklyn, NY</li>
                            <li>Phone: <a href="tel:5565454117">55 654 541 17</a></li>
                            <li>Hours: Mon-Fri: 8am – 7pm</li>
                        </ul>
                       
                    </div>
                   
                </div>
               
                <div class="col-sm-12 col-md-4 col-lg-4">
                    <div class="contact-info-box">
                        <h4 class="contact__info-box-title">Manchester Office</h4>
                        <ul class="contact__info-list list-unstyled">
                            <li>Email: <a
                                    href="/cdn-cgi/l/email-protection#b3f7d2c7d2e0dcd5c7f384dcc1dcdcd59dd0dcde"><span
                                        class="__cf_email__"
                                        data-cfemail="a0e4c1d4c1f3cfc6d4e097cfd2cfcfc68ec3cfcd">[email&#160;protected]</span></a>
                            </li>
                            <li>Address: 2307 Beverley Rd Brooklyn, NY</li>
                            <li>Phone: <a href="tel:5565454117">55 654 541 17</a></li>
                            <li>Hours: Mon-Fri: 8am – 7pm</li>
                        </ul>
                        
                    </div>
                   
                </div>
             
            </div>
          
        </div>
      
    </section>-->
    <!---Contact Info -->

</template>

<script>
import { toast } from "vue3-toastify"; // optional, 

export default {
    name: "Contact",
    data() {
        return {
            form: {
                name: '',
                email: '',
                phone: '',
                message: ''
            },
            loading: false,
        };
    },
    methods: {
        async submitContact() {
            this.loading = true;

            // Optional: simple client-side guard
            if (!this.form.name || !this.form.email || !this.form.message) {
                // use toast via global or imported toast
                (this.$toast || toast).error('Please fill required fields (name, email, phone, message).', { position: 'top-right' });
                this.loading = false;
                return;
            }

            try {
                // build payload: send website only if you added it to DB, otherwise remove
                const payload = {
                    name: this.form.name,
                    email: this.form.email,
                    phone: this.form.phone,
                    message: this.form.message
                };

                const res = await this.$axios.post('/contact-messages', payload);

                // Success toast (green) at right side
                (this.$toast || toast).success(res.data?.message || 'Submitted successfully!', {
                    position: 'top-right'
                });

                // reset form
                this.form = { name: '', email: '', phone: '', website: '', message: '' };

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
</script>>

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
