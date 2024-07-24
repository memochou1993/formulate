<script setup lang="ts">
import { computed, ref } from 'vue';
import { FormValidator } from '../dist';

const form = ref();

const validator = new FormValidator();

const rules = computed(() => {
  return validator
    .defineField('Title')
    .required()
    .getMessageRules();
})
</script>

<template>
  <div>
    <v-app>
      <v-container>
        <v-form ref="form">
          <v-text-field
            variant="outlined"
            label="Title"
            :rules="rules"
          />
        </v-form>
        <div class="d-flex justify-end">
          <v-btn variant="outlined" @click="form.validate()">
            Submit
          </v-btn>
        </div>
      </v-container>
    </v-app>
  </div>
</template>
