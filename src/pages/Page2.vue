<template>

  <q-layout
    style="height:'auto';"
  >

   <q-page-container>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="mails">
          <mails />
        </q-tab-panel>

        <q-tab-panel name="alarms">
          <alarms />
        </q-tab-panel>

        <q-tab-panel name="baseInfo">
          <baseInfo />
        </q-tab-panel>
      </q-tab-panels>
    </q-page-container>
    
    <q-footer class="footMenu">
        <q-tabs v-model="tab" dense class="bg-grey-3 tblist" align="justify">
          <q-tab name="mails" icon="mail" label="Mails" />
          <q-tab name="alarms" icon="mail" label="Alarms" />
          <q-tab name="baseInfo" icon="mail" label="基本信息" />
          <q-tab name="alert" icon="mail" label="alert" />
          <q-tab name="alert1" icon="mail" label="alert1" />
          <q-tab name="alert2" icon="mail" label="alert2" />
          <q-tab name="alert3" icon="mail" label="alert3" />
        </q-tabs>
    </q-footer>

   
  </q-layout>
</template>

<script>
import mails from "../pages/options/mail.vue";
import alarms from "../pages/options/alarm.vue";
import baseInfo from "../pages/options/baseInfo.vue";

export default {
  name: "Page2",
  components: {
    mails,
    alarms,
    baseInfo
  },
  data() {
    return {
      tab: "mails"
    };
  },
  methods: {}
};
</script>
<style>
.q-pa-md {
  padding: 0px;
}
 .footMenu{
     color: black;
 }
</style>
