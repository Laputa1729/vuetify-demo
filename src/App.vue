<template>
    <v-app>
        <!--<v-app-bar
            app
            dark
            height="150"
            class="indigo"
        >
            <div class="d-flex align-center">
                <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                    transition="scale-transition"
                    width="40"
                />
                <v-img
                    alt="Vuetify Name"
                    class="shrink mt-1 hidden-sm-and-down"
                    contain
                    min-width="100"
                    src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
                    width="100"
                />
            </div>

            <v-spacer></v-spacer>

            <v-btn
                href="https://github.com/vuetifyjs/vuetify/releases/latest"
                target="_blank"
                text
            >
                <span class="mr-2">Latest Release</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
        </v-app-bar>-->

        <Navbar></Navbar>
        <!-- 当使用 vue-router 时，建议将你的视图放在 v-main 内。 -->
        <v-main class="grey lighten-4">
            <div class="mx-4 mb-4">
                <router-view/>
            </div>
        </v-main>
    </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
    name: 'App',
    components: { Navbar },
    data() {
        return {
        }
    },
};
</script>
