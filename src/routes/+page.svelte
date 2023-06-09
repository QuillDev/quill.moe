<script lang="ts">
  import JavaIcon from "virtual:icons/logos/java";
  import JavaScriptIcon from "virtual:icons/logos/javascript";
  import TypeScriptIcon from "virtual:icons/logos/typescript-icon";
  import RustIcon from "virtual:icons/logos/rust";
  import ReactIcon from "virtual:icons/logos/react";
  import SvelteIcon from "virtual:icons/logos/svelte-icon";
  import KubernetesIcon from "virtual:icons/logos/kubernetes";


  import EmailIcon from "virtual:icons/bxs/envelope-open";

  // platforms
  import TwitterIcon from "virtual:icons/logos/twitter";
  import DiscordIcon from "virtual:icons/logos/discord-icon";
  import InstagramIcon from "virtual:icons/bxl/instagram";
</script>

<body>
  <section>
    <p class="text-7xl pt-5 text-center">QuillDev</p>

    <!-- Section -->
    <div class="chunk">
      <!-- Who am I? -->
      <div>
        <div class="text-center">
          <p class="text-5xl">Who is QuillDev?</p>
          <p class="text-2xl mt-4 m-auto w-4/6">
            Hello! I'm Robert Brunson aka QuillDev, a software engineer from
            North Carolina. I specialize in game development and design, as well
            as designing and implementing microservices.
          </p>
        </div>
      </div>
    </div>

    <div class="chunk">
      <!-- Experience Section -->
      <div>
        <p class="text-5xl text-center pb-4">Professional Experience</p>

        <!-- experience list -->
        <div class="text-xl border-bg-2">
          <table class="m-auto rounded-full border-2 border-bg-2">
            <tr>
              <th class="space-2 p-2">Technology</th>
              <th class="space-2 p-2">Experience</th>
            </tr>
            <tr>
              <td class="exp-item"><JavaIcon class="mr-2" /> Java</td>
              <td>4 years</td>
            </tr>
            <tr>
              <td class="exp-item"
                ><JavaScriptIcon class="mr-2" /> JavaScript</td
              >
              <td>4 years</td>
            </tr>
            <tr>
              <td class="exp-item"
                ><TypeScriptIcon class="mr-2" /> TypeScript</td
              >
              <td>4 years</td>
            </tr>
            <tr>
              <td class="exp-item"><ReactIcon class="mr-2" />React</td>
              <td>2 years</td>
            </tr>
            <tr>
              <td class="exp-item"><RustIcon class="fill-white mr-2" />Rust</td>
              <td>2 years</td>
            </tr>
            <tr>
              <td class="exp-item"><KubernetesIcon class="mr-2" />Kubernetes</td>
              <td>2 years</td>
            </tr>
            <tr>
              <td class="exp-item"><SvelteIcon class="mr-2" />Svelte</td>
              <td>1 year</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="chunk">
      <div class="text-5xl mb-4">Contact Me</div>

      <table class="m-auto">
        <a href="mailto:me@quill.moe">
          <div class="flex text-3xl">
            <EmailIcon class="mr-2" />
            <div>me@quill.moe</div>
          </div>
        </a>
        <a href="https://twitter.com/quilldev">
          <div class="flex text-3xl">
            <TwitterIcon class="mr-2" />
            <p>@quilldev</p>
          </div>
        </a>

        <a href="https://discord.com/channels/@me/217120695560306691">
          <div class="flex text-3xl">
            <DiscordIcon class="mr-2" />
            <p>@quilldev</p>
          </div>
        </a>
        <a href="https://instagram.com/quilldev">
          <div class="flex text-3xl">
            <InstagramIcon class="mr-2 text-white fill-white opacity-100" />
            <p>@quilldev</p>
          </div>
        </a>
      </table>
    </div>
  </section>
</body>

<style lang="postcss">
  body {
    @apply bg-rivals_lobby;
  }

  .chunk {
    @apply text-center 
    bg-bg-0 
    border-bg-2 
    border-2 
    border-solid 
    rounded-3xl
    opacity-90

    lg:mx-40
    lg:p-8
    mx-4
    p-4

    mt-4
    hover:opacity-100;
  }
  .exp-item {
    @apply flex space-x-4 px-4 space-y-2 py-1;
  }
</style>
