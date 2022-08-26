<template>
  <li class="listItem">
    <span class="label">{{ carLabel }}</span>
    <span class="value">{{ carValue }}</span>
  </li>
</template>

<script>
export default {
  props: {
    carLabel: {
      type: String,
      default: "",
    },
    carValue: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
.label {
  font-weight: 600;
  margin-right: 30px;
  width: 50%;
  display: block;
  float: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.line {
  height: 0.7px;
  width: 100%;
}
.listItem {
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  overflow: hidden;
  line-height: 28px;
  border-top: 1px solid #f0f0f0;
  font-size: 12px;
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
}
</style>