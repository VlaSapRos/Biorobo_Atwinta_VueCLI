<template lang="pug">
button( :class='skin' @click="$store.commit(methodName)")
</template>

<script>
export default {
  props: {
    skin: '',
    methodName: '',

  }
}
</script>
