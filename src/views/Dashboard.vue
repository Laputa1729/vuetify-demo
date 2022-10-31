<template>
    <div class="dashboard">
        <h1 class="subtitle-1 grey--text">Dashboard</h1>

        <!--<v-row no-gutters justify="center">
            <p>Extra small (超小号) 占12格</p>
            <p>Medium (中号) 占6格</p>
            <v-flex xs4 md3>
                <v-btn class="success" outlined block>1</v-btn>
            </v-flex>
            <v-flex xs4 md3>
                <v-btn color="success" outlined block>2</v-btn>
            </v-flex>
        </v-row>-->

        <!-- fluid属性：铺满 -->
        <v-container class="my-5">

            <v-card flat class="pa-3">
                <v-row no-gutters>
                    <v-flex xs12 md6>
                        <div class="caption grey--text">Project title</div>
                        <div>Create a new website</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Person</div>
                        <div>The Net Ninja</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Due by</div>
                        <div>2022-10-31</div>
                    </v-flex>
                    <v-flex xs2 sm4 md2>
                        <div class="caption grey--text">Status</div>
                        <div>ongoing</div>
                    </v-flex>
                </v-row>
            </v-card>

        </v-container>
    </div>
</template>

<script>

export default {
    name: 'Dashboard',
    components: {},
}
</script>
