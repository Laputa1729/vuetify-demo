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
            <v-card-text>123</v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'Popup',
}
</script>

<style>

</style>
