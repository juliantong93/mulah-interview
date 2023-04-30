<template>
  <div class="">
    <div class="contact-form-inputs">
      <select
        v-model="formData.prefix"
      >
        <option
          v-for="prefix in contact_prefixes"
          :key="'prefix_' + prefix.value"
        >
          {{ prefix.label }}
        </option>
      </select>
      <contact-input
        v-model="formData.contact"
        placeholder="Enter Mobile Number"
      />
    </div>
    <mulah-button class="submit-btn">Check Loyalty Points</mulah-button>
  </div>
</template>

<script>
export default {
    name: 'ContactNumForm',
}
</script>

<script setup>
import { reactive } from "vue";
import MulahButton from "@/components/MButton.vue"
import ContactInput from "@/components/ContactInput.vue";

const contact_prefixes = reactive([
    { label: '+60', value: '+60' },
    { label: '+62', value: '+62' },
])
const formData = reactive({
    prefix: '+60',
    contact: '',
})
</script>

<style lang="scss" scoped>
.contact-form-inputs {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 15px;
}

.submit-btn {
  margin-top: 50px;
  width: 100%;
}
</style>