<template>
  <div class="qwer">
    <InputText v-if="type === 'text'" :value="value" :placeholder="placeholder" @input="$emit('input', $event)"><slot></slot></InputText>
    <Select v-if="type === 'select'" :value="value" :options="selectOptions" @input="$emit('input', $event)"><slot></slot></Select>
    <RadioButton v-if="type === 'radio'" :value="value" :options="radioOptions" :name="radioName" @input="$emit('input', $event)"><slot></slot></RadioButton>
    <Checkbox v-if="type === 'checkbox'" :value="value" @input="$emit('input', $event)"><slot></slot></Checkbox>
  </div>
</template>

<script>
  import InputText from '../core/InputText.vue'
  import Select from './Select.vue'
  import RadioButton from '../core/RadioButton.vue'
  import Checkbox from '../core/FilterCheckbox.vue'

  export default {
    name: "Control",
    components: {
      InputText,
      Select,
      RadioButton,
      Checkbox
    },
    props: {
      type: String,
      value: [String, Boolean],
      placeholder: String,
      radioOptions: Array,
      selectOptions: Array,
      radioName: String

    },
  }
</script>

<style scoped lang="scss">
  .qwer {
    display: inline-block;
  }

</style>