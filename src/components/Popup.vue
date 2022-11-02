<template>
    <v-dialog max-width="600">
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                text
                class="success"
                v-bind="attrs"
                v-on="on"
            >
                Add new project
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <h2>Add a New Project</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="myForm">
                    <v-text-field
                        :rules="inputRules"
                        prepend-icon="mdi-folder"
                        label="Title"
                        v-model="title"
                    ></v-text-field>
                    <v-textarea
                        prepend-icon="mdi-pencil"
                        label="Information"
                        v-model="content"
                    ></v-textarea>

                    <v-menu max-width="290">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                :value="formattedDate"
                                :rules="dateRules"
                                prepend-icon="mdi-calendar-range"
                                label="Due date"
                                v-bind="attrs"
                                v-on="on"
                                readonly
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="due"
                        ></v-date-picker>
                    </v-menu>

                    <v-btn text class="success mt-3" @click="submit">Add project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import { format, parseISO } from 'date-fns'

export default {
    name: 'Popup',
    data() {
        return {
            title: '',
            content: '',
            due: null,
            inputRules: [
                v => !!v || 'Name is required',
                v => v.length >= 3 || 'Minimum length is 3 characters.'
            ],
            dateRules: [
                v => !!v || 'Date is required',
            ]
        }
    },
    methods: {
        submit() {
            if (this.$refs.myForm.validate()) {
                console.log(this.title, this.content)
            }
        }
    },
    computed: {
        formattedDate() {
            return this.due ? format(parseISO(this.due), 'Do MMM yyyy') : '';
        }
    }
}
</script>

<style>

</style>
