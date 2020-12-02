<script lang='tsx'>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'map-chart',
  data() {
    return {
      chart: {}
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const dom = document.querySelector('#map-chart') as HTMLDivElement | HTMLCanvasElement;

      this.chart = this.$echarts.init(dom);
    }
  },
  render () {
    return <div class="map-chart" id="map-chart"></div>;
  }
});
</script>

<style lang='scss'>

</style>
