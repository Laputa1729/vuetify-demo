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
                <v-form class="px-3">
                    <v-text-field
                        prepend-icon="mdi-folder"
                        label="Title"
                        v-model="title"
                    ></v-text-field>
                    <v-textarea
                        prepend-icon="mdi-pencil"
                        label="Information"
                        v-model="content"
                    ></v-textarea>

                    <v-btn text class="success mt-3" @click="submit">Add project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'Popup',
    data() {
        return {
            title: '',
            content: ''
        }
    },
    methods: {
        submit() {
            console.log(this.title, this.content)
        }
    }
}
</script>

<style>

</style>
