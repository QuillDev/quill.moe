<script>
  import "./styles.css";
  import NavBar from "$lib/components/NavBar.svelte";
</script>

<div class="app">
  <NavBar />
  <main>
    <slot />
  </main>

  <footer />
</div>
