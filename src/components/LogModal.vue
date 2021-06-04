<template>
    <!-- Modal -->
    <div
        class="modal fade"
        :id="`modal-${compName}`"
        tabindex="-1"
        :aria-labelledby="`modal-${compName}`"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" :id="`modalLabel-${compName}`">
                        {{ triggerBtnText }}
                    </h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label
                                :for="`form-account-${compName}`"
                                class="form-label"
                            >
                                帳號
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                :autocomplete="accountAutocomplete"
                                :id="`form-account-${compName}`"
                            />
                        </div>
                        <div class="mb-3">
                            <label
                                :for="`form-password-${compName}`"
                                class="form-label"
                            >
                                密碼
                            </label>
                            <input
                                type="password"
                                class="form-control"
                                :autocomplete="passwordAutocomplete"
                                :id="`form-password-${compName}`"
                            />
                        </div>
                        <a
                            v-if="isLogin"
                            href="#"
                            class="d-inline-block text-muted text-decoration-none me-auto mb-3"
                        >
                            忘記密碼
                        </a>
                        <button
                            type="button"
                            class="btn btn-primary btn-lg rounded-pill py-2 w-100"
                        >
                            {{ triggerBtnText }}
                        </button>
                    </form>
                </div>
                <div v-if="isLogin" class="modal-footer flex-column">
                    <p class="title-side-border-gray w-100">
                        <span class="px-3">
                            還沒有帳號？
                            <a href="#" class="text-decoration-none">
                                註冊一個帳號
                            </a>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "LogModal",
    props: {
        compName: {
            type: String,
            require: true,
        },
        triggerBtnText: {
            type: String,
            require: true,
        },
        action: {
            type: String,
            default() {
                return "login";
            },
        },
    },
    computed: {
        isLogin() {
            return this.action === "login";
        },
        isRegister() {
            return this.action === "register";
        },
        accountAutocomplete() {
            return `username`;
        },
        passwordAutocomplete() {
            return this.isLogin ? `current-password` : `new-password`;
        },
    },
};
</script>
