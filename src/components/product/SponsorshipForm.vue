<template>
    <div class="sponsorshipForm">
        <div class="mb-3">
            <div class="w-100 text-center mb-2">
                <img :src="`${publicPath}/images/icon_heart.svg`" alt="" />
            </div>
            <h2 class="title-side-border-primary fs-5 fw-bold">
                <span class="px-3">贊助方案</span>
            </h2>
        </div>
        <form>
            <div class="mb-3">
                <label for="program" class="form-label">贊助方案</label>
                <select
                    id="program"
                    name="program"
                    class="form-select"
                    aria-label="program"
                >
                    <option selected disabled>請選擇一個方案</option>
                    <option value="1">都是假的，別期待甚麼</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="receiveName" class="form-label">
                    收件人姓名
                </label>
                <input type="text" class="form-control" id="receiveName" />
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">
                    聯絡電話
                </label>
                <input type="text" class="form-control" id="phone" />
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">
                    聯絡信箱
                </label>
                <input type="email" class="form-control" id="email" />
            </div>
            <div class="mb-4">
                <label for="payment" class="form-label">付款方式</label>
                <select id="payment" class="form-select" aria-label="payment">
                    <option selected disabled>請選擇一個方案</option>
                    <option value="1">都是假的，別期待甚麼</option>
                </select>
            </div>
            <div class="d-flex justify-content-center">
                <input
                    type="submit"
                    @click.prevent="submit"
                    class="btn btn-primary rounded-pill flex-grow-1 flex-lg-grow-0 px-lg-8"
                    value="贊助專案"
                />
            </div>
        </form>
    </div>
</template>

<script>
export default {
    setup() {},
    data() {
        return {
            publicPath: process.env.BASE_URL,
        };
    },
    methods: {
        submit() {
            alert("恭喜你剛剛消費了 NTD$ 320,000 !");
        },
    },
};
</script>
