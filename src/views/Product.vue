<template>
    <main class="product">
        <section class="bg-light py-10">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <Main />
                    </div>
                </div>
            </div>
        </section>
        <section
            class="tabContent border-bottom sticky-top index-product-nav bg-white"
        >
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="scroll-nav">
                            <ul class="nav">
                                <li
                                    class="nav-item me-2"
                                    v-for="(page, index) in tabPages"
                                    :key="`page-${index}`"
                                >
                                    <router-link
                                        class="nav-link"
                                        aria-current="page"
                                        :to="page.to"
                                    >
                                        {{ page.name }}
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-8 pt-8 pb-8">
                        <router-view :key="$route.fullPath" />
                        <Programs class="d-lg-none" />
                        <SponsorshipForm class="pt-8" />
                    </div>
                    <div class="col-12 col-lg-4 d-none d-lg-block pt-8 pb-8">
                        <Programs class="sticky-top index-programs" />
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer />
</template>

<script>
import Main from "@/components/product/Main";
import Programs from "@/components/product/Programs";
import SponsorshipForm from "@/components/product/SponsorshipForm";
import Footer from "@/components/Footer";
export default {
    name: "Product",
    components: {
        Main,
        Programs,
        SponsorshipForm,
        Footer,
    },
    data() {
        return {
            tabPages: [
                {
                    to: { path: "/product" },
                    name: "專案介紹",
                },
                {
                    to: { path: "/product/question" },
                    name: "常見問答",
                },
                {
                    to: { path: "/product/process" },
                    name: "目前進度",
                },
                {
                    to: { path: "/product/comment" },
                    name: "留言",
                },
            ],
        };
    },
};
</script>
