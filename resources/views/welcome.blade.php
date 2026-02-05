<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>Curriculum - High Contrast Dark Variant</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
    <script id="tailwind-config">
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        "primary": "#c4594b",
                        "charcoal": "#1A1A1B",
                        "pop-yellow": "#fdf57e",
                        "pop-orange": "#f0b96b",
                        "warm-accent": "#75233d",
                    },
                    fontFamily: {
                        "display": ["Lexend", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
    <style type="text/tailwindcss">
        body {
            font-family: 'Lexend', sans-serif;
            background-color: #1A1A1B;
        }
        .glass-nav {
            background: rgba(26, 26, 27, 0.85);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(253, 245, 126, 0.1);
        }
        .hero-bg {
            background-color: #1A1A1B;
        }
        .custom-timeline::before {
            background: linear-gradient(to bottom, transparent, #f0b96b33, transparent);
        }
    </style>
</head>

<body class="text-white selection:bg-primary/40">
    <header class="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div class="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="size-10 bg-primary rounded-lg flex items-center justify-center text-white">
                    <span class="material-symbols-outlined">terminal</span>
                </div>
                <h2 class="text-pop-yellow text-xl font-bold tracking-tight">DevPortfolio</h2>
            </div>
            <nav class="hidden md:flex items-center gap-10">
                <a class="text-white/80 hover:text-pop-yellow transition-colors text-sm font-semibold" href="#about">About</a>
                <a class="text-white/80 hover:text-pop-yellow transition-colors text-sm font-semibold" href="#skills">Skills</a>
                <a class="text-white/80 hover:text-pop-yellow transition-colors text-sm font-semibold" href="#experience">Experience</a>
                <a class="text-white/80 hover:text-pop-yellow transition-colors text-sm font-semibold" href="#projects">Projects</a>
            </nav>
            <button class="bg-primary hover:brightness-110 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20">
                Contact Me
            </button>
        </div>
    </header>
    <main>
        <section class="hero-bg pt-32 pb-20 lg:pt-48 lg:pb-32" id="about">
            <div class="max-w-[1200px] mx-auto px-6">
                <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div class="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col gap-8">
                        <div class="space-y-4">
                            <span class="inline-block px-4 py-1.5 rounded-full bg-pop-orange/20 text-pop-orange text-sm font-bold uppercase tracking-wider border border-pop-orange/30">Available for Hire</span>
                            <h1 class="text-pop-yellow text-5xl lg:text-7xl font-black leading-tight tracking-tight">
                                Full Stack <br /><span class="text-pop-orange">Laravel</span> Developer
                            </h1>
                            <p class="text-white/70 text-lg lg:text-xl leading-relaxed max-w-xl">
                                Building robust, scalable web applications with a focus on modern PHP ecosystems and elegant, user-centric design.
                            </p>
                        </div>
                        <div class="flex flex-wrap gap-4">
                            <button class="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all">
                                View Projects
                            </button>
                            <button class="bg-white/5 border-2 border-pop-yellow/20 text-pop-yellow px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                                Download CV
                            </button>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
                        <div class="relative">
                            <div class="absolute -top-4 -left-4 w-full h-full border-4 border-pop-orange rounded-2xl"></div>
                            <div class="relative w-72 h-72 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-pop-orange shadow-2xl">
                                <img alt="Professional portrait" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm3C4NmT1uroornwDFiyKaioSqfxFwhiFXPxZf0CCWN7kOWjSDIm0q34VlX-bxdo6WesoR9cbW0XvHWHgq1KCAF7Gsb6NvcTU6zsSRxcdUiJ9G9LIG0eKYPdq24R-NoByAkrI2AKQtWld4PUP6p29gc0-nRQglASVBRD9O0i9B9UWlTCie09Gv_dS9jq_euZOosSRgcYpR4XYubII2WSLHa3SsODBzGGk87dHcy_vbdwJw_waVZKi7VROe33_5WvKVj5qbsQ0NuvmP" />
                            </div>
                            <div class="absolute -bottom-6 -right-6 bg-charcoal p-4 rounded-xl shadow-2xl border border-pop-yellow/20">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 bg-pop-yellow/10 rounded-full flex items-center justify-center text-pop-yellow">
                                        <span class="material-symbols-outlined">code</span>
                                    </div>
                                    <div>
                                        <p class="text-xs font-bold text-white/50 uppercase">Experience</p>
                                        <p class="text-sm font-black text-pop-yellow">8+ Years Dev</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-black/20 py-24" id="skills">
            <div class="max-w-[1200px] mx-auto px-6">
                <div class="flex flex-col items-center text-center mb-16">
                    <h2 class="text-pop-yellow text-3xl lg:text-4xl font-black mb-4">Technical Stack</h2>
                    <div class="w-20 h-1.5 bg-primary rounded-full"></div>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div class="bg-charcoal p-8 rounded-2xl border border-white/5 flex flex-col items-center gap-4 hover:border-pop-yellow/30 transition-all group">
                        <div class="size-16 bg-white/5 rounded-2xl flex items-center justify-center text-pop-yellow group-hover:scale-110 transition-transform">
                            <span class="material-symbols-outlined text-4xl">php</span>
                        </div>
                        <h3 class="font-bold text-pop-yellow">Laravel</h3>
                    </div>
                    <div class="bg-charcoal p-8 rounded-2xl border border-white/5 flex flex-col items-center gap-4 hover:border-pop-yellow/30 transition-all group">
                        <div class="size-16 bg-white/5 rounded-2xl flex items-center justify-center text-pop-yellow group-hover:scale-110 transition-transform">
                            <span class="material-symbols-outlined text-4xl">database</span>
                        </div>
                        <h3 class="font-bold text-pop-yellow">MySQL &amp; PostgreSQL</h3>
                    </div>
                    <div class="bg-charcoal p-8 rounded-2xl border border-white/5 flex flex-col items-center gap-4 hover:border-pop-yellow/30 transition-all group">
                        <div class="size-16 bg-white/5 rounded-2xl flex items-center justify-center text-pop-yellow group-hover:scale-110 transition-transform">
                            <span class="material-symbols-outlined text-4xl">javascript</span>
                        </div>
                        <h3 class="font-bold text-pop-yellow">Vue.js / Inertia</h3>
                    </div>
                    <div class="bg-charcoal p-8 rounded-2xl border border-white/5 flex flex-col items-center gap-4 hover:border-pop-yellow/30 transition-all group">
                        <div class="size-16 bg-white/5 rounded-2xl flex items-center justify-center text-pop-yellow group-hover:scale-110 transition-transform">
                            <span class="material-symbols-outlined text-4xl">css</span>
                        </div>
                        <h3 class="font-bold text-pop-yellow">Tailwind CSS</h3>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-24 max-w-[1200px] mx-auto px-6" id="experience">
            <div class="flex flex-col mb-16">
                <h2 class="text-pop-yellow text-3xl lg:text-4xl font-black mb-4">Professional Journey</h2>
                <div class="w-20 h-1.5 bg-primary rounded-full"></div>
            </div>
            <div class="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-pop-orange/30 before:to-transparent">
                <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div class="flex items-center justify-center w-10 h-10 rounded-full border-2 border-charcoal bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <span class="material-symbols-outlined text-sm">work</span>
                    </div>
                    <div class="w-[calc(100%-4rem)] md:w-[45%] bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-pop-orange/30 transition-colors">
                        <div class="flex items-center justify-between space-x-2 mb-1">
                            <div class="font-bold text-pop-yellow">Senior Laravel Developer</div>
                            <time class="font-display text-sm font-bold text-pop-orange bg-pop-orange/10 px-3 py-1 rounded-full">2021 - Present</time>
                        </div>
                        <div class="text-pop-orange/80 font-semibold text-sm mb-3">TechInnovate Solutions</div>
                        <p class="text-white/60 text-sm leading-relaxed">Leading the migration of legacy PHP systems to Laravel 10, optimizing database performance, and architecting RESTful APIs used by thousands of users daily.</p>
                    </div>
                </div>
                <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div class="flex items-center justify-center w-10 h-10 rounded-full border-2 border-charcoal bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <span class="material-symbols-outlined text-sm">laptop_mac</span>
                    </div>
                    <div class="w-[calc(100%-4rem)] md:w-[45%] bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-pop-orange/30 transition-colors">
                        <div class="flex items-center justify-between space-x-2 mb-1">
                            <div class="font-bold text-pop-yellow">Full Stack Engineer</div>
                            <time class="font-display text-sm font-bold text-pop-orange bg-pop-orange/10 px-3 py-1 rounded-full">2018 - 2021</time>
                        </div>
                        <div class="text-pop-orange/80 font-semibold text-sm mb-3">Creative Web Agency</div>
                        <p class="text-white/60 text-sm leading-relaxed">Developed bespoke E-commerce solutions using Laravel and Vue.js. Managed deployment pipelines and maintained server infrastructure on AWS.</p>
                    </div>
                </div>
                <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div class="flex items-center justify-center w-10 h-10 rounded-full border-2 border-charcoal bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <span class="material-symbols-outlined text-sm">school</span>
                    </div>
                    <div class="w-[calc(100%-4rem)] md:w-[45%] bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-pop-orange/30 transition-colors">
                        <div class="flex items-center justify-between space-x-2 mb-1">
                            <div class="font-bold text-pop-yellow">Junior Developer</div>
                            <time class="font-display text-sm font-bold text-pop-orange bg-pop-orange/10 px-3 py-1 rounded-full">2016 - 2018</time>
                        </div>
                        <div class="text-pop-orange/80 font-semibold text-sm mb-3">StartUp Hub</div>
                        <p class="text-white/60 text-sm leading-relaxed">Assisted in the development of modular features, bug fixing, and unit testing using PHPUnit. Collaborated in Agile environments.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-black py-24" id="projects">
            <div class="max-w-[1200px] mx-auto px-6">
                <div class="flex flex-col items-center text-center mb-16">
                    <h2 class="text-pop-yellow text-3xl lg:text-4xl font-black mb-4">Featured Projects</h2>
                    <div class="w-20 h-1.5 bg-primary rounded-full"></div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div class="group bg-charcoal rounded-3xl overflow-hidden border border-white/10 hover:border-pop-yellow/50 transition-all">
                        <div class="aspect-video bg-cover bg-center overflow-hidden" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD1N78pxkriQLRS5sTcEX1gr1RwpZc51iAKew1BVwNoLShkUc8AvZMyRbWCP_Qp--EDooshTH91IkBjuxCx9XL-ySMoCe3U3YbRbzIno-f6_hWaqNq9Fy1oTeoG9mLaR9DqAHyK4i8atbXgAuSW3pzn4HbL5etk7Yd2GWH-lznTh_RqtXs8TUltkvIcIKx72Gpoh6SmOTLZo2Tmy9JVskv51rU2dkyM3zOI1WoI5PWWA_gzmAyfIKL_2rYsolBn2Eo99sKylQHjc3bN');">
                            <div class="w-full h-full bg-charcoal/40 group-hover:bg-charcoal/0 transition-all duration-500"></div>
                        </div>
                        <div class="p-8">
                            <h3 class="text-2xl font-bold mb-3 text-pop-yellow">SaaS Management Platform</h3>
                            <p class="text-white/60 mb-6 leading-relaxed">A complete multi-tenant dashboard built with Laravel, Spark, and Vue 3. Features subscription handling and real-time analytics.</p>
                            <div class="flex flex-wrap gap-2 mb-8">
                                <span class="text-xs font-bold px-3 py-1 bg-primary/20 text-primary rounded-full border border-primary/20">Laravel</span>
                                <span class="text-xs font-bold px-3 py-1 bg-primary/20 text-primary rounded-full border border-primary/20">Vue 3</span>
                                <span class="text-xs font-bold px-3 py-1 bg-primary/20 text-primary rounded-full border border-primary/20">Tailwind</span>
                            </div>
                            <a class="inline-flex items-center gap-2 text-pop-orange font-bold hover:underline" href="#">
                                Explore Project <span class="material-symbols-outlined">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                    <div class="group bg-charcoal rounded-3xl overflow-hidden border border-white/10 hover:border-pop-yellow/50 transition-all">
                        <div class="aspect-video bg-cover bg-center overflow-hidden" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDggm4-9MRgDHl7OapNnan9bC4ozB3tdTP_J_RxiIOKIIvKHb7WrUASrc_G8Zys_tbarbwTJqL5JfUY6Lhvvldxb8CnUxNSPUocoobbTI7jPMMmV7vR5Di-LeHj9Y637hceP_lDuKKQBBb7vK0S-vchMuFUIpr4V_UoKjsy9MP_mcB-THvZgTCwzEiDT0jTB5OH7Er-EjTzn53cBCX4i_eNO7u7fL5dNNOMsPIBjW09_XgWx5wngFXuJ1linOiPMlSjiu9jW_8CG-RE');">
                            <div class="w-full h-full bg-charcoal/40 group-hover:bg-charcoal/0 transition-all duration-500"></div>
                        </div>
                        <div class="p-8">
                            <h3 class="text-2xl font-bold mb-3 text-pop-yellow">Headless E-commerce</h3>
                            <p class="text-white/60 mb-6 leading-relaxed">High-performance storefront using Laravel as a GraphQL API and Next.js on the frontend. Fully integrated with Stripe.</p>
                            <div class="flex flex-wrap gap-2 mb-8">
                                <span class="text-xs font-bold px-3 py-1 bg-pop-orange/10 text-pop-orange rounded-full border border-pop-orange/20">GraphQL</span>
                                <span class="text-xs font-bold px-3 py-1 bg-pop-orange/10 text-pop-orange rounded-full border border-pop-orange/20">Next.js</span>
                                <span class="text-xs font-bold px-3 py-1 bg-pop-orange/10 text-pop-orange rounded-full border border-pop-orange/20">Redis</span>
                            </div>
                            <a class="inline-flex items-center gap-2 text-pop-orange font-bold hover:underline" href="#">
                                Explore Project <span class="material-symbols-outlined">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer class="bg-charcoal py-12 border-t border-white/10">
        <div class="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div class="flex items-center gap-3">
                <div class="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                    <span class="material-symbols-outlined text-sm">terminal</span>
                </div>
                <h2 class="text-pop-yellow text-lg font-bold">DevPortfolio</h2>
            </div>
            <p class="text-white/40 text-sm">© 2024 Modern Curriculum. Crafted with Passion.</p>
            <div class="flex items-center gap-6">
                <a class="text-pop-orange hover:text-pop-yellow transition-colors" href="#"><span class="material-symbols-outlined">share</span></a>
                <a class="text-pop-orange hover:text-pop-yellow transition-colors" href="#"><span class="material-symbols-outlined">mail</span></a>
                <a class="text-pop-orange hover:text-pop-yellow transition-colors" href="#"><span class="material-symbols-outlined">link</span></a>
            </div>
        </div>
    </footer>

</body>

</html>
