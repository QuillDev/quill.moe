<script lang="ts">
  let x: number = 5;
</script>

<section>
  <div class="text-center">
    <h1 class="text-3xl">
      Welcome to Svelte!
      <br />Current Count: {x}
    </h1>

    <button class="border-2 p-2 bg-gray-950 text-white" on:click={() => x++}>Some button</button>
  </div>
</section>

<style lang="postcss">
</style>
