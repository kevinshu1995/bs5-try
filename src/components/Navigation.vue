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
                <nav class="navbar-light bg-white">
                    <nav class="navbar-nav">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <router-link
                                    class="nav-link"
                                    :to="{ path: 'about' }"
                                >
                                    關於 About
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link
                                    class="nav-link"
                                    :to="{ name: 'Day1' }"
                                >
                                    Day 1
                                </router-link>
                            </li>
                            <!-- <li class="nav-item">
                                <router-link
                                    class="nav-link"
                                    :to="{ name: 'Day2' }"
                                >
                                    Day 2
                                </router-link>
                            </li> -->
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
};
</script>

<style scoped>
.sidebar-innerLinks-hoverStyle a:hover {
    color: #0d6efd;
}
</style>
