<template>
  <div @click="getMenuTYpe(menuType)">
    <q-item clickable tag="div">
      <q-item-section v-if="icon" avatar>
        <q-icon :name="icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ title }} -- {{ menuType }}</q-item-label>
        <q-item-label caption>
          {{ caption }}
        </q-item-label>
      </q-item-section>
    </q-item>
    <q-separator color="orange" inset />
  </div>
</template>

<script>
export default {
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ""
    },

    menuType: {
      type: String,
      default: "#"
    },

    icon: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {
    getMenuTYpe(type) {
      switch (type) {
        case "0":
          //当前页面不跳转
          if (this.$router.currentRoute.name != "page1") {
            this.$router.replace("/page1");
          }
          break;
        case "1":
          if (this.$router.currentRoute.name != "page2") {
              this.$router.replace("/page2");
          }
          break;
        case "2":
          alert(type);
          break;
        case "3":
          alert(type);
          break;
        case "4":
          alert(type);
          break;
        case "5":
          alert(type);
          break;
      }
    }
  }
};
</script>
