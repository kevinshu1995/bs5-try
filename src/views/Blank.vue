<template>
    <div class="home py-12">
        <h1 class="display-5 text-primary text-center mb-8">
            目前還沒有這頁啦~
            <br />
            快按下方的按鈕離開吧!
        </h1>
        <div class="d-flex justify-content-center align-items-center">
            <router-link
                :to="{ path: '/product' }"
                class="btn btn-primary me-3"
            >
                逃離黑洞 GO!
            </router-link>
            <a
                class="btn btn-secondary text-white"
                href="https://github.com/kevinshu1995/bs5-try"
            >
                View This repository on Github
            </a>
        </div>
    </div>
</template>
