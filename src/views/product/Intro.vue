<template>
    <div>
        <div class="mb-4">
            <img
                class="img-fluid"
                :src="`${publicPath}/images/p1.jpg`"
                alt=""
            />
        </div>
        <h3 class="h4 fw-bold ps-3 border-start border-4 border-primary">
            施了魔法的照片
        </h3>
        <p class="mb-4 lh-lg">
            受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，深青輪一物加，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它，地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。
        </p>
        <div class="mb-4">
            <img
                class="img-fluid"
                :src="`${publicPath}/images/p2.jpg`"
                alt=""
            />
        </div>
        <h3 class="h4 fw-bold ps-3 border-start border-4 border-primary">
            留下當下的美好
        </h3>
        <p class="lh-lg">
            受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，深青輪一物加，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它，地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。
        </p>
    </div>
</template>

<script>
export default {
    name: "ProductIntro",
    setup() {},
    data() {
        return {
            publicPath: process.env.BASE_URL,
        };
    },
};
</script>
