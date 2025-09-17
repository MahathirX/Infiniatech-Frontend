<template>
    <!-- =========================
        Header 
    =========================== -->
    <header class="header header-light header-full">
        <nav class="navbar navbar-expand-lg sticky-navbar">
            <div class="container">
                <a class="navbar-brand" href="index.html">
                    <img src="@/assets/images/logo/infinia-logo-Custom-Update.png" class="logo-light" alt="logo">
                    <img src="@/assets/images/logo/infinia-logo-Custom-Update.png" class="logo-dark" alt="logo">
                </a>
                <button class="navbar-toggler" type="button">
                    <span class="menu-lines"><span></span></span>
                </button>
                <div class="header__top-right">
                    <ul class="list-unstyled d-flex justify-content-end align-items-center mb-0">
                        <!-- <li>
                            <div class="dropdown lang-dropdown">
                                <button class="dropdown-toggle lang-dropdown-toggle" id="langDropdown"
                                    data-toggle="dropdown">
                                    <i class="icon-map"></i><span>English</span>
                                </button>
                                <div class="dropdown-menu" aria-labelledby="langDropdown">
                                    <a class="dropdown-item" href="#">Spain</a>
                                    <a class="dropdown-item" href="#">France</a>
                                </div>
                            </div>
                        </li> -->
                        <li>
                            <ul class="navbar-actions list-unstyled mb-0 d-flex align-items-center">
                                <!-- <li class="d-none d-xl-block">
                                    <a href="request-quote.html" class="btn action__btn-contact">Request A Quote</a>
                                </li> -->
                                <!-- <li>
                                    <button class="action__btn action__btn-login open-login-popup">
                                        <i class="icon-user"></i><span>Login</span>
                                    </button>
                                </li> -->
                            </ul>
                            <!-- /.navbar-actions -->
                        </li>
                    </ul>
                </div>
                <!-- /.header-top-right -->
                <div class="collapse navbar-collapse" id="mainNavigation">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav__item has-dropdown">
                            <!-- <a href="#" data-toggle="dropdown" class="dropdown-toggle nav__item-link">Home</a> -->
                            <router-link to="/" data-toggle="dropdown" class="dropdown-toggle nav__item-link active">
                                Home
                            </router-link>
                            <ul class="dropdown-menu">
                                <li class="nav__item">
                                    <a href="index.html" class="nav__item-link">Home Main</a>
                                </li>
                                <!-- /.nav-item -->
                                <li class="nav__item">
                                    <a href="home-modern.html" class="nav__item-link">Home Modern</a>
                                </li>
                                <!-- /.nav-item -->
                                <li class="nav__item">
                                    <a href="home-classic.html" class="nav__item-link">Home Classic</a>
                                </li>
                                <!-- /.nav-item -->
                            </ul>
                            <!-- /.dropdown-menu -->
                        </li>
                        <!-- /.nav-item -->
                        <li class="nav__item has-dropdown">
                            <a href="#" data-toggle="dropdown" class="dropdown-toggle nav__item-link">Company</a>
                            <ul class="dropdown-menu">
                                <li class="nav__item">
                                    <a href="about-us.html" class="nav__item-link">About Us</a>
                                </li>
                                <!-- /.nav-item -->
                                <li class="nav__item">
                                    <a href="why-us.html" class="nav__item-link">Why Choose Us</a>
                                </li>
                                <!-- /.nav-item -->
                                <li class="nav__item">
                                    <a href="leadership-team.html" class="nav__item-link">Leadership Team</a>
                                </li>
                                <!-- /.nav-item -->
                                <li class="nav__item">
                                    <a href="awards.html" class="nav__item-link">Award & Recognition</a>
                                </li>
                                <!-- /.nav-item -->
                                <li class="nav__item">
                                    <a href="pricing.html" class="nav__item-link">Pricing & Plans</a>
                                </li>
                                <!-- /.nav-item -->
                                <li class="nav__item">
                                    <a href="faqs.html" class="nav__item-link">Help & FAQs</a>
                                </li>
                                <!-- /.nav-item -->
                                <li class="nav__item">
                                    <a href="careers.html" class="nav__item-link">Careers</a>
                                </li>
                                <!-- /.nav-item -->
                            </ul>
                            <!-- /.dropdown-menu -->
                        </li>
                        <!-- /.nav-item -->
                        <li class="nav__item has-dropdown">
                            <a href="#" data-toggle="dropdown" class="dropdown-toggle nav__item-link">IT Solutions</a>
                            <ul class="dropdown-menu wide-dropdown-menu">
                                <li class="nav__item">
                                    <div class="row mx-0">
                                        <div class="col-sm-6 dropdown-menu-col">
                                            <a href="it-solutions.html" class="nav__item-link dropdown-menu-title">IT
                                                Solutions</a>
                                            <ul class="nav flex-column">
                                                <li class="nav__item"><a class="nav__item-link"
                                                        href="it-solutions-single.html">IT
                                                        Management</a>
                                                </li>
                                                <!-- /.nav-item -->
                                                <li class="nav__item"><a class="nav__item-link"
                                                        href="it-solutions-single.html">Cyber
                                                        Security</a>
                                                </li>
                                                <!-- /.nav-item -->
                                                <li class="nav__item"><a class="nav__item-link"
                                                        href="it-solutions-single.html">Cloud
                                                        Computing</a>
                                                </li>
                                                <!-- /.nav-item -->
                                                <li class="nav__item"><a class="nav__item-link"
                                                        href="it-solutions-single.html">IT
                                                        Consulting</a>
                                                </li>
                                                <!-- /.nav-item -->
                                                <li class="nav__item"><a class="nav__item-link"
                                                        href="it-solutions-single.html">Software
                                                        Dev</a>
                                                </li>
                                                <!-- /.nav-item -->
                                                <li class="nav__item"><a class="nav__item-link"
                                                        href="it-solutions-single.html">IT Support</a>
                                                </li>
                                                <!-- /.nav-item -->
                                            </ul>
                                        </div>
                                        <!-- /.col-sm-6 -->
                                        <div class="col-sm-6 dropdown-menu-col">
                                            <a href="industries.html"
                                                class="nav__item-link dropdown-menu-title">Industries</a>
                                            <ul class="nav flex-column">
                                                <li class="nav__item"><a class="nav__item-link"
                                                        href="industries-single-industry.html">Education,
                                                        Non-Profit</a></li>
                                                <!-- /.nav-item -->
                                                <li class="nav__item"><a class="nav__item-link"
                                                        href="industries-single-industry.html">Accounting,
                                                        Finance</a></li>
                                                <!-- /.nav-item -->
                                                <li class="nav__item"><a class="nav__item-link"
                                                        href="industries-single-industry.html">Government &
                                                        Public</a></li>
                                                <!-- /.nav-item -->
                                                <li class="nav__item"><a class="nav__item-link"
                                                        href="industries-single-industry.html">Energy
                                                        &
                                                        Utilities</a></li>
                                                <!-- /.nav-item -->
                                                <li class="nav__item"><a class="nav__item-link"
                                                        href="industries-single-industry.html">Legal,
                                                        Law
                                                        Firms</a></li>
                                                <!-- /.nav-item -->
                                                <li class="nav__item"><a class="nav__item-link"
                                                        href="industries-single-industry.html">Manufacturing</a>
                                                </li>
                                                <!-- /.nav-item -->
                                            </ul>
                                        </div>
                                        <!-- /.col-sm-6 -->
                                    </div>
                                    <!-- /.row -->
                                </li>
                                <!-- /.nav-item -->
                            </ul>
                            <!-- /.dropdown-menu -->
                        </li>
                        <!-- /.nav-item -->
                        <li class="nav__item has-dropdown">
                            <a href="#" data-toggle="dropdown" class="dropdown-toggle nav__item-link">Case Studies</a>
                            <ul class="dropdown-menu">
                                <li class="nav__item">
                                    <a href="case-studies-grid.html" class="nav__item-link">Case Studies Grid</a>
                                </li>
                                <!-- /.nav-item -->
                                <li class="nav__item">
                                    <a href="case-studies-modern.html" class="nav__item-link">Case Studies Modern</a>
                                </li>
                                <!-- /.nav-item -->
                                <li class="nav__item">
                                    <a href="case-studies-classic.html" class="nav__item-link">Case Studies Classic</a>
                                </li>
                                <!-- /.nav-item -->
                                <li class="nav__item">
                                    <a href="case-studies-single.html" class="nav__item-link">Single Case Study</a>
                                </li>
                                <!-- /.nav-item -->
                            </ul>
                            <!-- /.dropdown-menu -->
                        </li>
                        <!-- /.nav-item -->
                        <li class="nav__item has-dropdown">
                            <a href="#" data-toggle="dropdown" class="dropdown-toggle nav__item-link active">Blog</a>
                            <ul class="dropdown-menu">
                                <li class="nav__item">
                                    <a href="blog.html" class="nav__item-link">Our Blog</a>
                                </li>
                                <!-- /.nav-item -->
                                <li class="nav__item">
                                    <a href="blog-single-post.html" class="nav__item-link">Single Blog Post</a>
                                </li>
                                <!-- /.nav-item -->
                            </ul>
                            <!-- /.dropdown-menu -->
                        </li>
                        <!-- /.nav-item -->
                        <li class="nav__item has-dropdown">
                            <a href="#" data-toggle="dropdown" class="dropdown-toggle nav__item-link">Features</a>
                            <ul class="dropdown-menu">
                                <li class="nav__item">
                                    <a href="coming-soon.html" class="nav__item-link">Coming Soon</a>
                                </li>
                                <!-- /.nav-item -->
                                <li class="nav__item">
                                    <a href="404.html" class="nav__item-link">404 Page</a>
                                </li>
                                <!-- /.nav-item -->
                                <li class="nav__item">
                                    <a href="#" class="nav__item-link  open-register-popup">Register</a>
                                </li>
                                <!-- /.nav-item -->
                                <li class="nav__item">
                                    <a href="#" class="nav__item-link  open-login-popup">Login</a>
                                </li>
                                <!-- /.nav-item -->
                            </ul>
                            <!-- /.dropdown-menu -->
                        </li>
                        <!-- /.nav-item -->
                        <li class="nav__item">
                            <!-- <a href="contact-us.html" class="nav__item-link">Contacts</a> -->
                              <router-link to="/contact" class="nav__item-link">Contacts</router-link>
                        </li>
                        <!-- /.nav-item -->
                    </ul>
                    <!-- /.navbar-nav -->
                    <button class="close-mobile-menu d-block d-lg-none"><i class="fas fa-times"></i></button>
                </div>
                <!-- /.navbar-collapse -->
                <div class="d-flex align-items-center">
                    <a href="#" class="action__btn action__btn-search ml-30"><i class="icon-search"></i></a>
                </div>
            </div>
            <!-- /.container -->
        </nav>
        <!-- /.navabr -->
    </header>
    <!-- /.Header -->
</template>

<script setup>
defineProps({
    msg: String
})
</script>


<style scoped>
#mainNavigation a {
    text-decoration: none;
}

/* Sticky Navbar Common Styles */
.sticky-navbar.is-sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    padding: 12px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    /* Default height */
    box-sizing: border-box;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
}

/* Add top padding to body to avoid overlap */
body {
    padding-top: 60px;
    /* Same as navbar height */
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .sticky-navbar.is-sticky {
        height: 55px;
        padding: 10px 15px;
        font-size: 14px;
    }

    body {
        padding-top: 55px;
        /* Match new height */
    }
}

/* Extra small devices (like iPhone SE) */
@media (max-width: 480px) {
    .sticky-navbar.is-sticky {
        height: 50px;
        padding: 8px 12px;
        font-size: 13px;
    }

    body {
        padding-top: 50px;
        text-decoration: none;
    }
}

/* Safe area for iPhone notch devices */
.sticky-navbar.is-sticky {
    padding-top: calc(12px + env(safe-area-inset-top));
}

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
</style>
