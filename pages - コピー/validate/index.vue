<template>
  <div>
    <h1>vee-validate</h1>
    <div id="app">
  <p>
    <h4>use data-vv-as</h4>
    <input v-validate.initial="'required|alpha'" type="text" name="num01" placeholder="not use">
    <br>
    <span v-if="errors.has('num01')">{{ errors.first('num01') }}</span>
  </p>
  <p>
    <input v-validate="'alpha'" data-vv-as="フォーム氏" type="text" name="vvNum01" placeholder="use data-vv-as">
    <br>
    <span v-if="errors.has('vvNum01')">{{ errors.first('vvNum01') }}</span>
  </p>
   <p>
    <h4>use data-vv-delay</h4>
    <input v-validate="'alpha'" type="text" name="num02" placeholder="not use">
    <br>
    <span v-if="errors.has('num02')">{{ errors.first('num02') }}</span>
  </p>
  <p>
    <input v-validate="'alpha'" data-vv-delay="3000" type="text" name="vvNum02" placeholder="use data-vv-as">
    <br>
    <span v-if="errors.has('vvNum02')">{{ errors.first('vvNum02') }}</span>
  </p>
  <p>
    <h4>use data-vv-name</h4>
    <input v-validate="'alpha'" type="text" name="num03" placeholder="not use">
    <br>
    <span v-if="errors.has('num03')">{{ errors.first('num03') }}</span>
  </p>
  <p>
    <input v-validate="'alpha'" data-vv-name="customName" type="text" name="vvNum01" placeholder="use data-vv-name">
    <br>
    <span v-if="errors.has('customName')">{{ errors.first('customName') }}</span>
  </p>
  <v-btn color="success" :disabled="(errors.length)">Success</v-btn>
</div>
</div>
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch("qiitas/qiitasActi");
  },
  data() {
    return {
      num1: "",
      num2: ""
    };
  }
};
</script>