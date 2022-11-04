<template>
    <nav>

        <!-- 消息条 -->
        <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
            <span>Awesome! You added a new project.</span>
            <template v-slot:action="{ attrs }">
                <v-btn
                    color="white"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar>

        <!-- App bars（应用栏） -->
        <!-- app属性用于围绕<v-main>动态调整布局，注意：app属性会自动应用position: fixed到布局元素上 -->
        <v-app-bar flat app>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>Ninja</span>
            </v-toolbar-title>
            <!-- 占位 -->
            <v-spacer></v-spacer>

            <!-- dropdown menu -->
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        text
                        color="grey"
                        v-bind="attrs"
                        v-on="on"
                    >
                        <v-icon left>mdi-chevron-down</v-icon>
                        <span>Menu</span>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                        v-for="(link, index) in links"
                        :key="index"
                        color="primary"
                        link
                        :to="link.route"
                    >
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-btn text color="grey">
                <span>Sign Out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer class="primary" app v-model="drawer">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <img src="/avatar-1.png" alt="">
                    </v-avatar>
                    <p class="white--text subtitle-1 mt-1">The Net Ninja</p>
                </v-flex>
                <v-flex class="mt-4 mb-3">
                    <Popup @projectAdded="snackbar = true"></Popup>
                </v-flex>
            </v-layout>

            <v-list>
                <!-- 标记为路由link -->
                <v-list-item v-for="(link, index) in links" :key="index" link :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                    </v-list-item-content>

                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import Popup from '@/components/Popup'

export default {
    name: 'Navbar',
    components: { Popup },
    data() {
        return {
            drawer: false,
            links: [
                { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
                { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
                { icon: 'mdi-account', text: 'Team', route: '/team' },
            ],
            snackbar: false
        }
    },
}
</script>

<style>

</style>
