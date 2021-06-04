<template>
    <nav
        class="navbar navbar-expand-lg sticky-top navbar-light bg-white border-bottom border-primary border-5"
    >
        <div class="container-fluid">
            <router-link class="navbar-brand" :to="{ path: '/product' }">
                <img
                    style="max-height:40px;"
                    :src="`${publicPath}/images/logo.jpg`"
                    alt=""
                />
            </router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul
                    class="navbar-nav navigation-nav-links-spacing me-auto mb-2 mb-lg-0"
                >
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ path: '/blank' }"
                            >關於</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ path: '/blank' }"
                            >挖寶</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ path: '/blank' }"
                            >我有個大膽的想法</router-link
                        >
                    </li>
                </ul>
                <div class="d-flex ms-8 ms-lg-0">
                    <LogButton
                        :btnClass="[
                            'btn',
                            'btn-primary',
                            'flex-grow-1',
                            'me-3',
                            'px-5',
                        ]"
                        :triggerBtnText="triggerBtnText('login')"
                        compName="login"
                    />
                    <LogButton
                        :btnClass="[
                            'btn',
                            'btn-outline-secondary',
                            'flex-grow-1',
                            'px-5',
                        ]"
                        :triggerBtnText="triggerBtnText('register')"
                        compName="register"
                    />
                </div>
            </div>
        </div>
    </nav>
    <!-- Modals needs to be wrap directly in root element (#app) -->
    <LogModal
        compName="login"
        :triggerBtnText="triggerBtnText('login')"
        action="login"
    />
    <LogModal
        compName="register"
        :triggerBtnText="triggerBtnText('register')"
        action="register"
    />
</template>

<script>
import LogButton from "./LogButton";
import LogModal from "./LogModal";
export default {
    components: {
        LogButton,
        LogModal,
    },
    setup() {},
    data() {
        return {
            publicPath: process.env.BASE_URL,
        };
    },
    methods: {
        triggerBtnText(action) {
            switch (action) {
                case "login":
                    return "登入";
                case "register":
                    return "註冊";
                default:
                    return "binded action error";
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.navigation-nav-links-spacing .nav-item {
    margin-left: 3rem;
}
</style>
