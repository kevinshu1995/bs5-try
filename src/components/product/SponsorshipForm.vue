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
                    v-model="form.program"
                    :class="formValidation.program.class"
                >
                    <option selected disabled>請選擇一個方案</option>
                    <option value="1">都是假的，別期待甚麼</option>
                </select>
                <div class="invalid-feedback">
                    {{ formValidation.program.error }}
                </div>
            </div>
            <div class="mb-3">
                <label for="receiveName" class="form-label">
                    收件人姓名
                </label>
                <input
                    type="text"
                    v-model="form.receiveName"
                    id="receiveName"
                    class="form-control"
                    :class="formValidation.receiveName.class"
                />
                <div class="invalid-feedback">
                    {{ formValidation.receiveName.error }}
                </div>
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">
                    聯絡電話
                </label>
                <input
                    type="text"
                    v-model="form.phone"
                    id="phone"
                    class="form-control"
                    :class="formValidation.phone.class"
                />
                <div class="invalid-feedback">
                    {{ formValidation.phone.error }}
                </div>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">
                    聯絡信箱
                </label>
                <input
                    type="email"
                    v-model="form.email"
                    id="email"
                    class="form-control"
                    :class="formValidation.email.class"
                />
                <div class="invalid-feedback">
                    {{ formValidation.email.error }}
                </div>
            </div>
            <div class="mb-4">
                <label for="payment" class="form-label">付款方式</label>
                <select
                    v-model="form.payment"
                    id="payment"
                    class="form-select"
                    :class="formValidation.payment.class"
                    aria-label="payment"
                >
                    <option selected disabled>請選擇一個方案</option>
                    <option value="1">都是假的，別期待甚麼</option>
                </select>
                <div class="invalid-feedback">
                    {{ formValidation.payment.error }}
                </div>
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
            form: {
                program: "",
                receiveName: "",
                phone: "",
                email: "",
                payment: "",
            },
            formValidationClass: {
                program: "",
                receiveName: "",
                phone: "",
                email: "",
                payment: "",
            },
            formValidation: {
                program: {
                    class: "",
                    error: "請選擇方案好嗎?",
                },
                receiveName: {
                    class: "",
                    error: "為甚麼不輸入姓名?",
                },
                phone: {
                    class: "",
                    error: "留下你的電話。(還有錢 A_A)",
                },
                email: {
                    class: "",
                    error: "填一下吧，反正會進到垃圾信箱。",
                },
                payment: {
                    class: "",
                    error: "快給我錢!",
                },
            },
        };
    },
    methods: {
        submit() {
            const validationObject = this.setValidated();
            this.setValidationClass(validationObject);
            if (this.isValidated(validationObject)) {
                alert("恭喜你剛剛消費了 NTD$ 320,000 !");
                this.resetForm();
            }
        },
        setValidated() {
            const result = {};
            for (const key in this.form) {
                if (this.form[key] === "") {
                    result[key] = "error";
                }
            }
            return result;
        },
        isValidated(validationObject) {
            return Object.keys(validationObject).length === 0 ? true : false;
        },
        setValidationClass(validationObject) {
            const vm = this;
            for (const formName in vm.formValidation) {
                if (validationObject[formName] !== undefined) {
                    vm.formValidation[formName].class = "is-invalid";
                } else {
                    vm.formValidation[formName].class = "is-valid";
                }
            }
        },
        resetForm() {
            for (const key in this.form) {
                this.form[key] = "";
            }
            for (const key in this.formValidation) {
                this.formValidation[key].class = "";
            }
        },
    },
};
</script>
