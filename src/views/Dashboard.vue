<template>
    <div class="dashboard">
        <h1 class="subtitle-1 grey--text">Dashboard</h1>

        <!-- fluid属性：铺满 -->
        <v-container class="my-5">

            <v-layout row no-gutters>
                <!-- Extra small (超小号) 占12格 -->
                <!-- Medium (中号) 占6格 -->
                <v-flex xs12 md6>
                    <v-btn class="primary" outlined block>1</v-btn>
                </v-flex>
                <v-flex xs4 md2>
                    <v-btn color="primary" outlined block>2</v-btn>
                </v-flex>
                <v-flex xs4 md2>
                    <v-btn color="primary" outlined block>3</v-btn>
                </v-flex>
                <v-flex xs4 md2>
                    <v-btn color="primary" outlined block>4</v-btn>
                </v-flex>
            </v-layout>

            <v-row no-gutters justify="center">
                <v-flex xs4 md3>
                    <v-btn class="success" outlined block>1</v-btn>
                </v-flex>
                <v-flex xs4 md3>
                    <v-btn color="success" outlined block>2</v-btn>
                </v-flex>
            </v-row>

        </v-container>
    </div>
</template>

<script>

export default {
    name: 'Dashboard',
    components: {},
}
</script>
