<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          CareLine
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <!-- 头像 登录信息 -->
        <q-item-section>
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar3.jpg" />
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>11111</q-item-label>
              <q-item-label caption>
                1231
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-item-section>
        <!-- 菜单项 -->
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink";
import api from "../boot/apiHelper"

export default {
  name: "MainLayout",
  components: {
    EssentialLink
  },

  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: "MenuItem0",
          caption: "quasar.dev",
          icon: "school",
          menuType: "0"
        },
        {
          title: "MenuItem1",
          caption: "github.com/quasarframework",
          icon: "code",
          menuType: "1"
        },
        {
          title: "MenuItem2",
          caption: "chat.quasar.dev",
          icon: "chat",
          menuType: "2"
        },
        {
          title: "MenuItem3",
          caption: "forum.quasar.dev",
          icon: "record_voice_over",
          menuType: "3"
        },
        {
          title: "MenuItem4",
          caption: "@quasarframework",
          icon: "rss_feed",
          menuType: "4"
        },
        {
          title: "MenuItem5",
          caption: "@QuasarFramework",
          icon: "public",
          menuType: "5"
        },
        {
          title: "MenuItem6",
          caption: "Community Quasar projects",
          icon: "favorite",
          menuType: "6"
        }
      ]
    };
  },
  created: function() {
    var param = {
      loginId: "fwq",
      password: "fwq"
    };
    api.Login(param)
      .then(function(data) {
        debugger;
        if(data!=undefined && data !=null){
           window.localStorage.setItem('token', data.MessageValue.Token);
        }
        console.log(data)
      });
  }
};
</script>
