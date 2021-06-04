<template>
    <li class="card">
        <div class="card-body">
            <div class="user">
                <div class="d-flex align-items-center mb-3">
                    <div
                        class="me-3"
                        :class="imgClassJoin"
                        :style="imgSizFormat"
                    >
                        <img :src="`${publicPath}/images/${mainImg}`" alt="" />
                    </div>
                    <div class="flex-grow-1">
                        <h5 class="fw-bold mb-1">
                            {{ title }}
                        </h5>
                        <p
                            class="letter-spacing-loose mb-0"
                            :class="subTitleClassJoin"
                        >
                            {{ subTitle }}
                        </p>
                    </div>
                </div>
                <p class="mb-0">
                    {{ content }}
                </p>
            </div>
            <slot></slot>
        </div>
    </li>
</template>

<script>
export default {
    name: "MediaCard",
    props: {
        mainImg: {
            type: String,
            require: true,
        },
        imgClass: {
            type: Array,
            default() {
                return [];
            },
        },
        imgSize: {
            type: Number,
            default() {
                return 60;
            },
        },
        title: {
            type: String,
            require: true,
        },
        subTitle: {
            type: String,
            require: true,
        },
        subTitleClass: {
            type: Array,
            default() {
                return [];
            },
        },
        content: {
            type: String,
            require: true,
        },
    },
    setup() {},
    data() {
        return {
            publicPath: process.env.BASE_URL,
        };
    },
    computed: {
        subTitleClassJoin() {
            const defaultClass = ["text-muted"];
            return this.subTitleClass.length > 0
                ? [...this.subTitleClass].join(" ")
                : [...defaultClass].join(" ");
        },
        imgClassJoin() {
            return [...this.imgClass].join(" ");
        },
        imgSizFormat() {
            return `width: ${this.imgSize}px;height: ${this.imgSize}px;`;
        },
    },
};
</script>
