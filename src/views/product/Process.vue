<template>
    <div>
        <div
            class="card overflow-hidden mb-3"
            v-for="(news, index) in process"
            :key="`process-${index}`"
        >
            <div class="row g-0">
                <div class="col-4">
                    <img
                        class="object-fit-cover h-100 img-fluid"
                        :src="`${this.publicPath}/${news.img}`"
                        alt=""
                    />
                </div>
                <div class="col-8">
                    <div class="card-body">
                        <h5 class="card-title mb-0">
                            <span class="fw-bold h6 mb-0">
                                {{ news.title }}
                            </span>
                        </h5>
                        <p class="card-text mb-2">
                            <span class="text-muted small">
                                {{ news.date }}
                            </span>
                        </p>
                        <p class="card-text mb-2">
                            <span class="text-muted small">
                                {{ news.content }}
                            </span>
                        </p>
                        <a
                            :href="news.link"
                            class="card-link text-decoration-none fw-bold small"
                        >
                            MORE
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductProcess",
    setup() {},
    data() {
        return {
            publicPath: process.env.BASE_URL,
            process: [
                {
                    img: `images/news01.jpg`,
                    title: "高雄體驗會｜免費參加送帆布袋",
                    date: "2021-6-20",
                    content:
                        "大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！",
                    link: "#",
                },
                {
                    img: `images/news02.jpg`,
                    title: "高雄體驗會｜免費參加送帆布袋",
                    date: "2021-6-20",
                    content:
                        "大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！",
                    link: "#",
                },
                {
                    img: `images/news03.jpg`,
                    title: "高雄體驗會｜免費參加送帆布袋",
                    date: "2021-6-20",
                    content:
                        "大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！",
                    link: "#",
                },
            ],
        };
    },
};
</script>
