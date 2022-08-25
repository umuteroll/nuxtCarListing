<template>
  <li class="listItem">
    <span class="label">İLAN NO:</span>
    <span class="value">1231234123512</span>
  </li>
</template>

<script>
export default {
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