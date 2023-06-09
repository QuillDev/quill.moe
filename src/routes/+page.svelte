<script lang="ts">
  import JavaIcon from "virtual:icons/logos/java";
  import JavaScriptIcon from "virtual:icons/logos/javascript";
  import TypeScriptIcon from "virtual:icons/logos/typescript-icon";
  import RustIcon from "virtual:icons/logos/rust";
  import ReactIcon from "virtual:icons/logos/react";
  import VueIcon from "virtual:icons/logos/vue";
  import SvelteIcon from "virtual:icons/logos/svelte-icon";
</script>

<section>
  <p class="text-5xl pt-5 text-center">QuillDev</p>

  <!-- Section -->
  <div
    class="text-center rounded-3xl mx-8 bg-bg-0 p-8 border-bg-2 border-2 border-solid mt-4"
  >
    <!-- Who am I? -->
    <div>
      <div class="text-left">
        <p class="text-5xl">Who is QuillDev?</p>
        <p class="text-2xl mt-4">
          Hello! I'm Robert Brunson aka QuillDev, a software engineer from North
          Carolina.
          <br />
          I specialize in game development and design, as well as designing
          <br />
          and implementing microservices.
        </p>
      </div>

      <br />
      <br />

      <!-- Experience Section -->
      <div>
        <p class="text-5xl text-center pb-4">Professional Experience</p>

        <!-- experience list -->
        <div class="text-2xl flex-col flex-wrap self-center border-bg-2">
          <table class="m-auto rounded-full border-2 border-bg-2">
            <tr>
              <th class="space-2 p-2">Technology</th>
              <th class="space-2 p-2">Experience</th>
            </tr>
            <tr>
              <td class="exp-li"><JavaIcon class="mr-2" /> Java</td>
              <td>4 years</td>
            </tr>
            <tr>
              <td class="exp-li"><JavaScriptIcon class="mr-2" /> JavaScript</td>
              <td>4 years</td>
            </tr>
            <tr>
              <td class="exp-li"><TypeScriptIcon class="mr-2" /> TypeScript</td>
              <td>4 years</td>
            </tr>
            <tr>
              <td class="exp-li"><ReactIcon class="mr-2" />React</td>
              <td>2 years</td>
            </tr>
            <tr>
              <td class="exp-li"><RustIcon class="fill-white mr-2" />Rust</td>
              <td>2 years</td>
            </tr>
            <tr>
              <td class="exp-li"><SvelteIcon class="mr-2" />Svelte</td>
              <td>1 year</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="postcss">
  .exp-li {
    @apply flex space-x-4 px-4 space-y-2 py-1;
  }
</style>
