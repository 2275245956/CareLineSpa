<template>
  <div id="q-baseInfo">
    <!-- <div class="q-pa-md">
      <q-toolbar class="bg-primary text-white">
        <q-btn flat round dense icon="menu" class="q-mr-sm" />
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
        </q-avatar>

        <q-toolbar-title class="tb-title">Quasar Framework</q-toolbar-title>

        <q-btn flat round dense icon="whatshot" />
      </q-toolbar>
    </div> -->

    <div class="photodiv">
      <img class="HeadPhoto" src="~assets/tx.jpg" />
    </div>
    <div class="q-pa-md">
      <div class="row no-wrap items-center q-mt-md q-pa-sm bd-bt">
        <q-item-label>氏名</q-item-label>
        <q-space></q-space>
        <div>102</div>
      </div>
    </div>

    <div class="q-pa-md">
      <div class="row no-wrap items-center q-mt-md q-pa-sm bd-bt">
        <q-item-label>姓</q-item-label>
        <q-space></q-space>
        <div>102</div>
      </div>
    </div>

    <div class="q-pa-md">
      <div class="row no-wrap items-center q-mt-md q-pa-sm bd-bt">
        <q-item-label>生年月日</q-item-label>
        <q-space></q-space>
        <div>1927-02-02</div>
      </div>
    </div>

    <div class="q-pa-md">
      <div class="row no-wrap items-center q-mt-md q-pa-sm bd-bt">
        <q-item-label>性别</q-item-label>
        <q-space></q-space>
        <div>男</div>
      </div>
    </div>

    <div class="q-pa-md">
      <div class="row no-wrap items-center q-mt-md q-pa-sm bd-bt">
        <q-item-label>血液型</q-item-label>

        <q-space></q-space>
        <div></div>
      </div>
    </div>

    <div class="q-pa-md">
      <div class="row no-wrap items-center q-mt-md q-pa-sm bd-bt">
        <q-item-label>郵編番号</q-item-label>
        <q-space></q-space>
        <div></div>
      </div>
    </div>

    <div class="q-pa-md">
      <div class="row no-wrap items-center q-mt-md q-pa-sm bd-bt">
        <q-item-label>電話番号</q-item-label>
        <q-space></q-space>
        <div></div>
      </div>
    </div>

    <div class="q-pa-md">
      <div class="row no-wrap items-center q-mt-md q-pa-sm bd-bt">
        <q-item-label>電話番号</q-item-label>
        <q-space></q-space>
        <div></div>
      </div>
    </div>

    <div class="q-pa-md">
      <div class="row no-wrap items-center q-mt-md q-pa-sm bd-bt">
        <q-item-label>連絡先</q-item-label>
        <q-space></q-space>
        <div></div>
      </div>
    </div>

    <div class="q-pa-md">
      <div class="row no-wrap items-center q-mt-md q-pa-sm bd-bt">
        <q-item-label>xxxxx</q-item-label>
        <q-space></q-space>
        <div></div>
      </div>
    </div>

    <div class="q-pa-md">
      <div class="row no-wrap items-center q-mt-md q-pa-sm bd-bt">
        <q-item-label>現住所</q-item-label>

        <q-space></q-space>

        <div></div>
      </div>
    </div>
  

    <div class="q-pa-md">
      <div class="row no-wrap items-center q-mt-md q-pa-sm bd-bt">
        <q-item-label>登錄事業所</q-item-label>

        <q-space></q-space>

        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "baseInfo",

  components: {},

  data() {
    return {};
  }
};
</script>
<style scoped lang="scss">

.tb-title {
  text-align: center;
}
.photodiv {
  height: 150px;
  text-align: center;
  .HeadPhoto {
    height: 100%;
  }
}

.bd-bt {
  border-bottom: 1px solid #e3e3e3;
}
.q-pa-md {
  padding: 0;
}
.q-mt-md {
  margin-top: 12px;
}

</style>

