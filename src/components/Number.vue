<template>
    <span>
        {{ final_number }}
    </span>
</template>

<script>
export default {
    props: {
        number: {
            type: Number,
            require: true,
        },
        currency: {
            type: Boolean,
            default() {
                return false;
            },
        },
        prefix: {
            type: String,
            default() {
                return "";
            },
        },
    },
    setup() {},
    computed: {
        final_number() {
            const vm = this;
            if (vm.prefix) {
                return `${vm.prefix}${vm.numberWithCommas(vm.number)}`;
            } else {
                return this.currency
                    ? vm.numberWithDollerSign(vm.numberWithCommas(vm.number))
                    : this.numberWithCommas(this.number);
            }
        },
    },
    methods: {
        numberWithCommas(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        numberWithDollerSign(value) {
            return `$${value}`;
        },
    },
};
</script>
