<template>
  <div class="header-bar clear-fix">
    <FoldSideMenu />
    <BreadCrumbs />
    <div class="header-right clear-fix">
      <FullScreen />
      <LangSelect />
      <GitHubLink />
      <UserAvatar />
    </div>
  </div>
</template>

<script>
import FoldSideMenu from '../../../components/FoldSideMenu/index.vue'
import BreadCrumbs from '../../../components/BreadCrumbs/index.vue'
import FullScreen from '../../../components/FullScreen/index.vue'
import LangSelect from '../../../components/LangSelect/index.vue'
import GitHubLink from '../../../components/GitHubLink/index.vue'
import UserAvatar from '../../../components/UserAvatar/index.vue'

export default {
  components: {
    FoldSideMenu,
    BreadCrumbs,
    FullScreen,
    LangSelect,
    GitHubLink,
    UserAvatar
  }
}
</script>

<style lang="less">
  .header-bar {
    height: 32px;
    padding: 16px 20px;
    .header-right {
      float: right;
      width: 200px;
    }
  }
</style>
