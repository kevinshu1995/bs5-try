<template>
    <div class="card" :class="cardClassJoin">
        <div class="card-body" :class="cardBodyClassJoin">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "Note",
    props: {
        cardClass: {
            type: Array,
            default() {
                return [];
            },
        },
        cardBodyClass: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    setup() {},
    computed: {
        cardClassJoin() {
            const defaultClass = [
                "border-primary",
                "border-3",
                "border-top-0",
                "border-end-0",
                "border-bottom-0",
            ];
            return this.cardClass.length > 0
                ? [...this.cardClass].join(" ")
                : [...defaultClass].join(" ");
        },
        cardBodyClassJoin() {
            const defaultClass = ["bg-white"];
            return this.cardBodyClass.length > 0
                ? [...this.cardBodyClass].join(" ")
                : [...defaultClass].join(" ");
        },
    },
};
</script>
