<script lang="ts">
  export let text = "";
  export let updateMs = 200;

  let idx = 0;
  let current = "";
  let forward = true;

  let update = () => {
    if (idx > text.length || (idx <= 0 && !forward)) {
      forward = !forward;
    }
    current = text.slice(0, idx);

    idx += forward ? 1 : -1;

    setTimeout(update, updateMs);
  };

  update();
  console.info("yo");
</script>

<section>
  {current}
</section>
