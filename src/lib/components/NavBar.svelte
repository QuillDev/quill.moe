<script lang="ts">
  import HomeIcon from "virtual:icons/bxs/home";
  import GithubIcon from "virtual:icons/bxl/github";
  import TwitterIcon from "virtual:icons/bxl/twitter";
</script>

<div class="nav-main">
  <!-- Left Aligned Items -->
  <div class="flex items-start mr-auto">
    <div class="nav-item"><a href="/"><HomeIcon /></a></div>
  </div>

  <!-- Right Aligned Items -->
  <div class="flex items-end">
    <!-- GitHub Social -->
    <div class="nav-item ml-auto">
      <a href="https://github.com/quilldev"> <GithubIcon /></a>
    </div>
    <!--Twitter Social -->
    <div class="nav-item ml-auto">
      <a href="https://twitter.com/quilldev"><TwitterIcon /></a>
    </div>
  </div>
</div>

<style lang="postcss">
  .nav-main {
    @apply flex
    items-start
    bg-bg-0;
  }

  .nav-item {
    @apply text-3xl 
    px-2 
    py-2 
    border-b-2
    border-bg-1
    hover:border-accent-0;
  }
</style>
