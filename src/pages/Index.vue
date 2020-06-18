<template>
  <q-pull-to-refresh @refresh="refresh">
    <q-page class="flex flex-center"> {{ content }} </q-page>
  </q-pull-to-refresh>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      content: "Main Page"
    };
  },
  beforeCreate:function(){},
  created:function(){
    console.log("start---------------------------------------------");
  },
  methods: {
    refresh(done) {
      setTimeout(() => {
        this.content="加载中。。。"
        setTimeout(() => {
            this.content="加载中完成!!!"
          done();
        }, 1000);
      }, 500);
    }
  }
};
</script>
