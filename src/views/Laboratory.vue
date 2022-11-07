<template>
    <div class="laboratory">
        <h1 class="subtitle-1 grey--text">Laboratory</h1>

        <v-container class="my-5">
            <div style="width: 800px; margin: 0 auto;">
                <v-row class="ma-0">
                    <v-col cols="12" sm="6" class="text-center">
                        <v-btn color="error" class="text-none" @click="nClickCount++">Normal Click</v-btn>
                    </v-col>
                    <v-col cols="12" sm="6" class="text-center">
                        <v-btn color="primary" class="text-none" @click="dClickFn(111, $event)">Debounce Click(500ms)</v-btn>
                    </v-col>
                </v-row>
                <v-row class="ma-0">
                    <v-col cols="12" sm="6">
                        <h1 class="text-center text-h3">{{ nClickCount }}</h1>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <h1 class="text-center text-h3">{{ dClickCount }}</h1>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row class="ma-0">
                    <v-col cols="12" sm="6" class="text-center">
                        <h2 class="mb-3">Normal Input</h2>
                        <input type="text" placeholder="" v-model="nInputValue">
                        <p class="mt-4 mb-0">{{ nInputValue || '--' }}</p>
                    </v-col>
                    <v-col cols="12" sm="6" class="text-center">
                        <h2 class="mb-3">Debounce Input(500ms)</h2>
                        <input type="text" placeholder="" v-model="dInputValue" @input="dInputFn">
                        <p class="mt-4 mb-0">{{ finalInputValue || '--' }}</p>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <div class="text-center mt-6">
                    <p v-for="(item, index) in 10" :key="index">Hello World!</p>
                    <div v-html="appendedHtml"></div>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
import debounce from '@/utils/debounce'
import throttle from '@/utils/throttle'

export default {
    name: 'Laboratory',
    data() {
        return {
            nClickCount: 0,
            dClickCount: 0,
            nInputValue: '',
            dInputValue: '',
            finalInputValue: '',
            appendedHtml: '',
        }
    },
    methods: {
        dClickFn: debounce(function (x, e) {
            console.log(arguments);
            this.dClickCount++;
        }, 1000),

        dInputFn: debounce(function () {
            console.log(arguments);
            this.finalInputValue = this.dInputValue;
        }, 1000),

        scrollFn: throttle(function () {
            this.appendedHtml += `<p class="red">New Html...${ new Date().getTime() }</p>`;
        }, 2000)
    },
    mounted() {
        window.addEventListener('scroll', this.scrollFn, true);
    },
    destroyed() {
        window.removeEventListener('scroll', this.scrollFn, true);
    },
}
</script>

<style lang="scss" scoped>
.laboratory {
  input {
    border: 1px solid;
  }
}
</style>
