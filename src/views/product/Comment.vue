<template>
    <div>
        <Note :cardBodyClass="['bg-light']">
            只有本專案的贊助者才可以留言哦，如果有任何專案相關的問題，歡迎<a
                class="text-decoration-none"
                href="#"
            >
                聯絡提案人！
            </a>
        </Note>
        <ul class="pt-4 list-unstyled">
            <MediaCard
                class="card mb-3"
                v-for="(comment, index) in comments"
                :key="`comment-${index}`"
                :main-img="comment.comment.user.img"
                :title="comment.comment.user.name"
                :sub-title="comment.comment.user.time"
                :content="comment.comment.content"
            >
                <div class="card border-0 mt-3" v-if="comment.reply">
                    <div class="card-body bg-light">
                        <h5 class="text-support small mb-2">提案者回覆</h5>
                        <p class="mb-1">
                            {{ comment.reply.content }}
                        </p>
                        <p class="text-end small mb-0">
                            --- by
                            <template v-if="comment.reply.character">{{
                                comment.reply.character
                            }}</template>
                            <template v-else>匿名的客服</template>
                        </p>
                    </div>
                </div>
            </MediaCard>
        </ul>
    </div>
</template>

<script>
import Note from "@/components/Note";
import MediaCard from "@/components/MediaCard";
export default {
    name: "ProductComment",
    components: {
        Note,
        MediaCard,
    },
    setup() {},
    data() {
        return {
            publicPath: process.env.BASE_URL,
            comments: [
                {
                    comment: {
                        user: {
                            name: "廖小杰",
                            img: "user_img01.jpg",
                        },
                        time: "2020年5月22日 11:32",
                        content:
                            "晚上起床上廁所看到照片裡的人一直動其實有點恐怖，希望可以有暫停或是定時的功能！",
                    },
                    reply: {
                        content:
                            "你要嘛起床的時候開燈，要嘛給我們更多錢開發啊！",
                        character: "",
                    },
                },
                {
                    comment: {
                        user: {
                            name: "卡阿伯",
                            img: "user_img02.jpg",
                        },
                        time: "2020年5月22日 11:32",
                        content: "希望有更多花色可以選擇！我女兒最近喜歡綠色",
                    },
                    reply: {
                        content: "加啦，哪次不加",
                        character: "好人設計師",
                    },
                },
                {
                    comment: {
                        user: {
                            name: "賈師",
                            img: "user_img02.jpg",
                        },
                        time: "2020年5月22日 11:32",
                        content:
                            "可以做個相簿功能嗎？拍出好看的影片再讓我們選擇要印出哪一張這樣",
                    },
                    reply: {
                        content: "鼻要",
                        character: "厭世工程師",
                    },
                },
                {
                    comment: {
                        user: {
                            name: "俊俊",
                            img: "user_img02.jpg",
                        },
                        time: "2020年5月22日 11:32",
                        content: "test123 看一下我是不是真的可以留言",
                    },
                    reply: {
                        content: "你以為是你的個版? 我也測試能不能把你刪掉。",
                        character: "易怒小編",
                    },
                },
            ],
        };
    },
};
</script>
