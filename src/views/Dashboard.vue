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
        <v-container class="my-10 px-10">

            <div class="row no-gutters mb-3">
                <v-tooltip top>
                    <template v-slot:activator="{ attrs, on }">
                        <v-btn text small color="grey" @click="sortBy('title')" v-bind="attrs" v-on="on">
                            <v-icon small left>mdi-folder</v-icon>
                            <span class="caption text-lowercase">By project name</span>
                        </v-btn>
                    </template>
                    <span>Sort projects by project name</span>
                </v-tooltip>

                <v-tooltip top>
                    <template v-slot:activator="{ attrs, on }">
                        <v-btn text small color="grey" @click="sortBy('person')" v-bind="attrs" v-on="on">
                            <v-icon small left>mdi-account</v-icon>
                            <span class="caption text-lowercase">By person</span>
                        </v-btn>
                    </template>
                    <span>Sort projects by person</span>
                </v-tooltip>
            </div>

            <v-card flat v-for="(project, index) in projects" :key="index">
                <v-row no-gutters :class="`pa-3 project ${ project.status }`">
                    <v-flex xs12 md6>
                        <div class="caption grey--text">Project title</div>
                        <div>{{ project.title }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Person</div>
                        <div>{{ project.person }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Due by</div>
                        <div>{{ project.due }}</div>
                    </v-flex>
                    <v-flex xs2 sm4 md2>
                        <div class="float-right">
                            <v-chip small :class="`${ project.status } white--text caption my-2`">{{ project.status }}</v-chip>
                        </div>
                    </v-flex>
                </v-row>
                <v-divider></v-divider>
            </v-card>

        </v-container>
    </div>
</template>

<script>

export default {
    name: 'Dashboard',
    data() {
        return {
            projects: [
                { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
                { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
                { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
                { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
            ]
        }
    },
    methods: {
        sortBy(mode) {
            this.projects.sort((a, b) => a[mode] < b[mode] ? -1 : 1);
        }
    },
    mounted() {
        // 接收方
        this.$bus.$on('hello', (data) => {
            this.projects.push(data);
        });
    },
    beforeDestroy() {
        // 解绑自定义事件，因为Vue.prototype.$bus永远存在，所有要手动解绑
        this.$bus.$off('hello');
    }
}
</script>

<style lang="scss" scoped>
.project {
  &.complete {
    border-left: 4px solid #3cd1c2;
  }
  &.ongoing {
    border-left: 4px solid orange
  }
  &.overdue {
    border-left: 4px solid tomato;
  }
}
.v-chip {
  &.complete {
    background: #3cd1c2;
  }
  &.ongoing {
    background: #ffaa2c;
  }
  &.overdue {
    background: #f83e70;
  }
}

</style>
