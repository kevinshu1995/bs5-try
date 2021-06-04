<template>
    <div>
        <MediaCard
            class="card mb-5"
            main-img="store_img.jpg"
            :img-size="100"
            :img-class="[
                'rounded-circle',
                'border',
                'border-3',
                'border-primary',
                'overflow-hidden',
            ]"
            title="缺錢事務所"
            sub-title="已發起 1 個專案"
            content="需要點錢錢做些酷酷的東西，拜託各位乾爹乾媽囉！"
        >
            <div class="d-flex mt-3">
                <div class="me-auto d-flex">
                    <router-link
                        :to="{ path: '/blank' }"
                        :style="socialIconSize"
                        class="btn btn-secondary text-white rounded-circle d-flex justify-content-center align-items-center me-2"
                    >
                        <i class="fab fa-facebook-f"></i>
                    </router-link>
                    <router-link
                        :to="{ path: '/blank' }"
                        :style="socialIconSize"
                        class="btn btn-secondary text-white rounded-circle d-flex justify-content-center align-items-center me-2"
                    >
                        <i class="fab fa-youtube"></i>
                    </router-link>
                </div>
                <div>
                    <router-link
                        :to="{ path: '/blank' }"
                        class="btn btn-outline-secondary btn-sm fw-normal rounded-pill px-3"
                    >
                        <i class="mr-2 far fa-comment-dots"></i>
                        聯絡我們
                    </router-link>
                </div>
            </div>
        </MediaCard>
        <Note
            :card-class="[
                'border-primary',
                'border-4',
                'border-top-0',
                'border-bottom-0',
                'mb-3',
            ]"
            :card-body-class="['bg-light', 'py-2']"
        >
            <div class="fw-bold h5 text-center mb-0">
                選擇一個方案來支持
            </div>
        </Note>
        <div
            class="card mb-3"
            v-for="(program, index) in programs"
            :key="`program-${index}`"
        >
            <img
                :src="`${publicPath}/images/${program.img}`"
                class="card-img-top"
                alt=""
            />
            <div class="card-body">
                <p
                    class="card-text text-muted d-flex justify-content-between border-bottom pb-2 mt-n1 mb-2"
                >
                    <span>限時優惠</span>
                    <span>2 days 20:05:20</span>
                </p>
                <h5
                    class="card-title fw-bold letter-spacing-lg d-flex flex-column"
                >
                    <span class="mb-2">
                        {{ program.title }}
                    </span>
                    <Number
                        :number="program.pricing"
                        :currency="true"
                        :prefix="`NT$ `"
                        class="fw-bold fs-4 letter-spacing-sm font-baloo-tamma-2"
                    />
                </h5>
                <p class="card-text mb-2">
                    <span class="badge bg-gray text-secondary me-2">
                        已被贊助{{ program.status.sposoredCount }}次
                    </span>
                    <span class="badge bg-secondary">
                        限量
                        <span class="text-primary">
                            {{ program.status.totalItems }}
                        </span>
                        個
                    </span>
                </p>
                <p class="card-text">
                    {{ program.content }}
                </p>
                <router-link
                    :to="{ path: '/blank' }"
                    class="w-100 btn btn-primary"
                >
                    贊助此專案
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Number from "@/components/Number";
import MediaCard from "@/components/MediaCard";
import Note from "@/components/Note";
export default {
    name: "ProductPrograms",
    components: {
        Number,
        MediaCard,
        Note,
    },
    setup() {},
    data() {
        return {
            publicPath: process.env.BASE_URL,
            store: {
                name: "",
                programCount: 1,
                describe: "需要點錢錢做些酷酷的東西，拜託各位乾爹乾媽囉！",
                contact: {
                    facebook: "",
                    youtube: "",
                    mail: "",
                },
            },
            programs: [
                {
                    deadline: "", // 用靜態文字
                    img: "img.jpg",
                    title: "買一送一，只有兩百組別錯過",
                    content:
                        "受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。",
                    pricing: 1600,
                    status: {
                        sposoredCount: 88,
                        totalItems: 200,
                    },
                },
                {
                    deadline: "", // 用靜態文字
                    img: "img.jpg",
                    title: "買一送一，只有一百組別錯過",
                    content:
                        "受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。",
                    pricing: 3200,
                    status: {
                        sposoredCount: 23,
                        totalItems: 100,
                    },
                },
                // {
                //     deadline: "", // 用靜態文字
                //     img: "img.jpg",
                //     title: "買一送一，只有五十組別錯過",
                //     content:
                //         "受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。",
                //     pricing: 6400,
                //     status: {
                //         sposoredCount: 23,
                //         totalItems: 50,
                //     },
                // },
            ],
        };
    },
    computed: {
        socialIconSize() {
            const size = 30;
            return `width: ${size}px;height: ${size}px;`;
        },
    },
};
</script>
