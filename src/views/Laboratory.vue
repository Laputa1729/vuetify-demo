<template>
    <div class="laboratory">
        <h1 class="subtitle-1 grey--text">Laboratory</h1>

        <v-container class="my-5">
            <div style="width: 800px; margin: 0 auto;">
                <v-row class="ma-0">
                    <v-col cols="12" sm="6" class="text-center">
                        <v-btn color="error" class="text-none" @click="nValue++">Normal Click</v-btn>
                    </v-col>
                    <v-col cols="12" sm="6" class="text-center">
                        <v-btn color="primary" class="text-none" @click="abc">Debounce Click(500ms)</v-btn>
                    </v-col>
                </v-row>
                <v-row class="ma-0">
                    <v-col cols="12" sm="6">
                        <h1 class="text-center text-h3">{{ nValue }}</h1>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <h1 class="text-center text-h3">{{ dValue }}</h1>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row class="ma-0">
                    <v-col cols="12" sm="6" class="text-center">
                        <h2 class="mb-3">Normal Input</h2>
                        <input type="text" placeholder="">
                    </v-col>
                    <v-col cols="12" sm="6" class="text-center">
                        <h2 class="mb-3">Debounce Input(500ms)</h2>
                        <input type="text" placeholder="">
                    </v-col>
                </v-row>
                <v-divider></v-divider>
            </div>
        </v-container>
    </div>
</template>

<script>
import debounce from '@/utils/debounce'

export default {
    name: 'Laboratory',
    data() {
        return {
            nValue: 0,
            dValue: 0,
            abc: debounce((e) => {
                this.dValue++;
            }, 1000)
        }
    },
    methods: {
        testFn() {
            debounce((e) => {
                this.dValue++;
            }, 1000);
        },

        /* debounce: (fn, delay) => {
            let timeoutId;

            return function (...args) {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }

                timeoutId = setTimeout(() => {
                    fn(...args);
                }, delay);
            }
        } */
    }
}
</script>

<style lang="scss" scoped>
.laboratory {
  input {
    border: 1px solid;
  }
}
</style>
