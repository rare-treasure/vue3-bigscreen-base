<template>
  <svg class="svg-icon" :class="className" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'svg-icon',
  props: {
    icon: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    size: [String, Number]
  },
  setup(props) {
    const iconName = computed(() => {
      return `#icon-${props.icon}`
    })

    const sizeStyles = computed(() => {
      const haveSize = props.size ? `${props.size}px` : false;
      
      return {
        fontSize: haveSize,
        width: haveSize,
        height: haveSize,
      };
    })

    return {
      iconName,
      sizeStyles
    }
  },
});
</script>

<style lang='scss'>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
