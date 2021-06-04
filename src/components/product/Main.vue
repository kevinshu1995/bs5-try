<template>
    <div class="row">
        <div class="col-12">
            <h6 class="mb-1">
                <span class="badge bg-secondary fw-normal">
                    魔法科技
                </span>
            </h6>
            <h1 class="product-main-title fw-bold mb-4">
                拍出會動的照片｜LivePhotos 魔法拍立得
            </h1>
        </div>
        <div class="col-12 col-lg-7 mb-4 mb-lg-0">
            <img
                class="img-fluid"
                style="border-radius:2rem"
                :src="`${publicPath}/images/product_image.jpg`"
                alt="Product image"
            />
        </div>
        <div class="col-12 col-lg-5">
            <div class="row">
                <div class="col-12 mb-4">
                    <div class="money d-flex flex-column">
                        <h6 class="text-muted small d-flex mb-1">
                            <span class="me-1">目標</span>
                            <Number
                                :number="product.money.target"
                                :currency="true"
                            />
                        </h6>
                        <h2 class="mb-4">
                            <Number
                                :number="product.money.current"
                                :currency="true"
                                class="fw-bold"
                            />
                        </h2>
                        <div class="progress rounded-pill">
                            <div
                                class="progress-bar bg-primary"
                                role="progressbar"
                                :style="`width: ${moneyProgress.percent};`"
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                <span class="text-content">
                                    {{ moneyProgress.percent }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 mb-3">
                    <h6 class="text-muted small d-flex mb-3">
                        <span class="me-1">贊助人數</span>
                    </h6>
                    <h5 class="h2 fw-bold d-flex">
                        <span class="me-2">1374</span>
                        <span>人</span>
                    </h5>
                </div>
                <div class="col-6 mb-3">
                    <h6 class="text-muted small d-flex mb-3">
                        <span class="me-1">募資倒數</span>
                    </h6>
                    <h5 class="h2 fw-bold d-flex">
                        <span class="me-2">
                            27
                        </span>
                        <span>
                            天
                        </span>
                    </h5>
                </div>
                <div class="col-12 mb-3">
                    <div class="d-flex flex-wrap">
                        <span
                            class="d-flex align-items-center me-4"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="認證標章"
                        >
                            <span class="">
                                <img
                                    style="width:24px;"
                                    :src="
                                        `${publicPath}/images/icon_good01.svg`
                                    "
                                    alt=""
                                />
                            </span>
                            <span class="ms-3 d-lg-none">認證標章</span>
                        </span>
                        <span
                            class="d-flex align-items-center me-4"
                            data-bs-toggle="tooltip"
                            title="品質保證"
                        >
                            <span class="">
                                <img
                                    style="width:24px;"
                                    :src="
                                        `${publicPath}/images/icon_good02.svg`
                                    "
                                    alt=""
                                />
                            </span>
                            <span class="ms-3 d-lg-none">品質保證</span>
                        </span>
                        <span
                            class="d-flex align-items-center me-4"
                            data-bs-toggle="tooltip"
                            title="原生創意"
                        >
                            <span class="">
                                <img
                                    style="width:24px;"
                                    :src="
                                        `${publicPath}/images/icon_good03.svg`
                                    "
                                    alt=""
                                />
                            </span>
                            <span class="ms-3 d-lg-none">原生創意</span>
                        </span>
                        <span
                            class="d-flex align-items-center me-4"
                            data-bs-toggle="tooltip"
                            title="人氣王"
                        >
                            <span class="">
                                <img
                                    style="width:24px;"
                                    :src="
                                        `${publicPath}/images/icon_good04.svg`
                                    "
                                    alt=""
                                />
                            </span>
                            <span class="ms-3 d-lg-none">人氣王</span>
                        </span>
                    </div>
                </div>
                <div class="col-12 mb-4">
                    <Note>
                        專案募資中！
                        <br />
                        在 2021/06/14 23:59 募資結束前，您都可以贊助我們！
                    </Note>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary w-100 py-2 mb-2">
                        <span class="h5 fw-bold">
                            贊助專案
                        </span>
                    </button>
                    <div class="w-100">
                        <div class="d-flex mx-n2">
                            <div class="flex-grow-1 px-2">
                                <button
                                    class="btn btn-outline-secondary border-2 w-100 py-2"
                                >
                                    <div
                                        class="d-flex justify-content-center align-items-center h5 mb-0 fw-bold"
                                    >
                                        <span class="me-2">
                                            <i class="fas fa-heart"></i>
                                        </span>
                                        <span>追蹤專案</span>
                                    </div>
                                </button>
                            </div>
                            <div class="flex-grow-1 px-2">
                                <button
                                    class="btn btn-outline-secondary border-2 w-100 py-2"
                                >
                                    <div
                                        class="d-flex justify-content-center align-items-center h5 mb-0 fw-bold"
                                    >
                                        <span class="me-2">
                                            <i class="fas fa-share-alt"></i>
                                        </span>
                                        <span>分享</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Tooltip } from "bootstrap/dist/js/bootstrap.esm.min.js";
import Number from "@/components/Number";
import Note from "@/components/Note";
export default {
    name: "ProductMain",
    components: {
        Number,
        Note,
    },
    setup() {},
    data() {
        return {
            publicPath: process.env.BASE_URL,
            product: {
                money: {
                    target: 600000,
                    current: 280047,
                },
            },
        };
    },
    computed: {
        moneyProgress() {
            const vm = this;
            const num = this.clamp(
                vm.product.money.current / vm.product.money.target,
                0,
                1
            ).toFixed(3);
            return {
                num: num,
                percentNum: `${num * 100}`,
                percent: `${num * 100}%`,
            };
        },
    },
    mounted() {
        //inti tooltip
        Array.from(
            document.querySelectorAll('[data-bs-toggle="tooltip"]')
        ).forEach(tooltipNode => new Tooltip(tooltipNode));
    },
    methods: {
        clamp(value, min, max) {
            return Math.min(Math.max(value, min), max);
        },
    },
};
</script>
