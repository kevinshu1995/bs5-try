import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/mission",
        component: () =>
            import(/* webpackChunkName: "mission" */ "../views/Mission.vue"),
        children: [
            {
                path: "day1",
                name: "Day1",
                component: () =>
                    import(
                        /* webpackChunkName: "day1" */ "../views/mission/Day1.vue"
                    ),
            },
        ],
    },
    {
        path: "/blank",
        name: "Blank",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "blank" */ "../views/Blank.vue"),
    },
    {
        path: "/:pathMatch(.*)",
        redirect: "/Blank",
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: "active",
});

export default router;
