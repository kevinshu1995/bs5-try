<template>
    <!-- Button trigger modal -->
    <button
        type="button"
        :class="stringBtnClass"
        data-bs-toggle="modal"
        :data-bs-target="`#modal-${compName}`"
    >
        {{ triggerBtnText }}
    </button>
</template>

<script>
export default {
    name: "LogButton",
    props: {
        btnClass: {
            type: Array,
            default() {
                return ["btn", "btn-primary"];
            },
        },
        triggerBtnText: {
            type: String,
            require: true,
        },
        compName: {
            type: String,
            require: true,
        },
    },
    computed: {
        stringBtnClass() {
            return this.btnClass.join(" ");
        },
    },
};
</script>
