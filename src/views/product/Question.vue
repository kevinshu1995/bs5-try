<template>
    <div class="question">
        <div
            class="card mb-3"
            v-for="(question, index) in questions"
            :key="`question-${index}`"
        >
            <div
                class="card-header bg-white border-bottom-0 ps-3 pe-4 py-3"
                :class="{ collapsed: index !== 0 }"
                role="button"
                data-bs-toggle="collapse"
                :data-bs-target="`#question-${index}`"
                aria-expanded="false"
                :aria-controls="`question-${index}`"
            >
                <div class="d-flex align-items-center">
                    <div class="badge bg-primary text-content py-2 px-2 me-3">
                        <span class="h6 fw-bold">
                            {{ `Q${index + 1}` }}
                        </span>
                    </div>
                    <span>{{ question.question }}</span>
                    <span class="ms-auto">
                        <i class="arrow fas fa-chevron-up"></i>
                    </span>
                </div>
            </div>
            <div
                class="collapse card-body text-muted border-top border-bottom-0 lh-lg py-0 ps-11"
                :class="{ show: index === 0 }"
                :id="`question-${index}`"
            >
                <div class="py-3">
                    <p class="mb-0">
                        {{ question.answer }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductQuestion",
    setup() {},
    data() {
        return {
            questions: [
                {
                    question: "影片拍完之後可以編輯嗎？",
                    answer:
                        "可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！",
                },
                {
                    question: "有提供保固或維修服務嗎？",
                    answer: "沒有 :)",
                },
                {
                    question: "補充包底片要去哪裡購買呢？",
                    answer: "www.google.com 這邊可以查喔。",
                },
                {
                    question: "印出來的拍立得照片需要充電嗎？",
                    answer: "你知道你在問甚麼嗎？？？",
                },
                {
                    question: "運送方式及付款方式有哪些呢？",
                    answer: "多啦A夢會送過去，貨到付款。",
                },
                {
                    question: "退換貨方式及規則",
                    answer: "誰准你退換貨的？小孩生了可以換的嗎？",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.question {
    .card {
        overflow: hidden;
        transition: box-shadow 0.2s;
        &:hover {
            box-shadow: 0 0 8px 0 rgba(73, 72, 70, 0.15);
        }
    }
    .collapsed {
        .arrow {
            transform: rotate(180deg);
        }
    }
    .arrow {
        transition: transform 0.2s;
    }
}
</style>
