<template>
    <div>
        <button
            class="fixed-bottom btn btn-light rounded-pill ms-auto me-3 mb-3"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
            >
                <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
            </svg>
        </button>

        <div
            class="offcanvas offcanvas-end sidebar-innerLinks-hoverStyle"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
        >
            <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel" class="mb-0 mt-1 py-0">
                    <router-link
                        class="d-inline-block text-decoration-none text-dark fw-bold w-100 h-100 py-2"
                        to="/"
                    >
                        Kevin Hsu
                    </router-link>
                </h5>
                <button
                    type="button"
                    class="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
            </div>
            <div class="offcanvas-body">
                <h6 class="fw-bold">關於本站</h6>
                <div class="mb-8">
                    <p>
                        本站目前是拿來測試與學習 Bootstrap
                        5，所有的功能都是假的，不用擔心 :)
                    </p>
                    <p>本站的設計稿為六角學院提供，僅做為 BS5 切版練習。</p>
                </div>
                <h6 class="fw-bold">其他網頁作品</h6>
                <nav class="navbar-light bg-white">
                    <nav class="navbar-nav">
                        <ul class="nav flex-column">
                            <li
                                class="nav-item"
                                v-for="(website, index) in websites"
                                :key="`website-${index}`"
                            >
                                <a class="nav-link" :href="website.path">
                                    <i class="me-2 fas fa-link"></i>
                                    {{ website.name }}
                                </a>
                            </li>
                        </ul>
                    </nav>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import "@/style/all.scss";
export default {
    name: "Navigation",
    setup() {},
    data() {
        return {
            websites: [
                {
                    name: "個人網站",
                    path: "https://kevinshu1995.github.io/",
                },
                {
                    name: "部落格",
                    path: "https://kevinshu1995.github.io/blog",
                },
                {
                    name: "口罩地圖",
                    path: "https://kevinshu1995.github.io/maskmap",
                },
                {
                    name: "JS 地下城",
                    path: "https://kevinshu1995.github.io/hex_jsDungeon",
                },
            ],
        };
    },
};
</script>

<style scoped>
.sidebar-innerLinks-hoverStyle a:hover {
    color: #0d6efd;
}
</style>
