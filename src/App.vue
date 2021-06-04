<template>
    <Sidebar />
    <Navigation />
    <router-view />
</template>

<script>
import Sidebar from "./components/Sidebar";
import Navigation from "./components/Navigation";
export default {
    components: {
        Sidebar,
        Navigation,
    },
};
</script>
