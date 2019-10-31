<template>
  <div class="navbar-menu">
        <ul>
          <li
            v-for="(item, index) in showMenu"
            :key="index"
            :class="nav === item.url ? 'isActive' : ''"
            @click="goPath(item.url)"
          >
            <el-badge
              v-if="item.tag === 'case' && item.number !== 0"
              class="index-b block"
              :value="item.number"
              :max="99"
            >
              <div class="menu-img">
                <img class="default" :src="item.default" />
                <img class="hover" :src="item.hover" />
              </div>
            </el-badge>
            <div v-else class="menu-img">
              <img class="default" :src="item.default" />
              <img class="hover" :src="item.hover" />
            </div>
            <div class="menu-label" v-text="item.title"></div>
          </li>
        </ul>
      </div>
</template>

<script>
export default {

}
</script>

<style>

</style>