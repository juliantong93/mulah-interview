<template>
  <div class="input-wrapper">
    <input
      :value="props.modelValue"
      :placeholder="props.placeholder"
      @input="handleChange"
      type="number"
      min="0"
      max="999999999"
    />
    <span class="check-icon" :class="{ 'is-valid': isValid }"></span>
  </div>
</template>

<script>
export default {
    name: 'ContactInput',
}
</script>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps(['modelValue', 'placeholder'])
const emits = defineEmits(['update:modelValue'])

function handleChange(e) {
    emits('update:modelValue', e.target.value)
}

const isValid = computed(() => {
    console.log(props.modelValue.length)
    return props.modelValue.length === 9
})
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.input-wrapper {
  position: relative;
}

input {
  width: 100%;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type=number] {
  -moz-appearance:textfield; /* Firefox */
}

.check-icon {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  display: inline-block;
  background: $grey;

  &.is-valid {
    background: $green;
  }
}
</style>