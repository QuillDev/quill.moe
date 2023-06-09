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
  import LinkedinIcon from "virtual:icons/logos/linkedin-icon";
  import CalendarIcon from "virtual:icons/bxs/calendar";
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
              <td class="exp-item"><KubernetesIcon class="mr-2" />Kubernetes</td
              >
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
      <div class="text-5xl text-center mb-4">Work History</div>
      <ol class="relative border-l border-gray-200 dark:border-gray-700">
        <li class="mb-10 ml-6">
          <span
            class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
          >
            <CalendarIcon class=" text-blue-500 text-xs" />
          </span>
          <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Super League Gaming - Full Stack Software Engineer <span
              class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3"
              >Current</span
            >
          </h3>
          <time
            class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >Started in August, 2022</time
          >
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            Moved from a contracted game developer position to a full time
            engineer at Super League Gaming.
          </p>
        </li>
        <li class="mb-10 ml-6">
          <span
            class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
          >
            <CalendarIcon class=" text-blue-500 text-xs" />
          </span>
          <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Super League Gaming - Game Developer
          </h3>
          <time
            class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >Started in August, 2021</time
          >
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            Developed games for the Minehut network as well as Twitch Rivals
            partnership projects.
          </p>
        </li>
        <li class="mb-10 ml-6">
          <span
            class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
          >
            <CalendarIcon class=" text-blue-500 text-xs" />
          </span>
          <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Havoc Games - Java Game Programmer
          </h3>
          <time
            class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >Started June 2020</time
          >
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            Developed game software & servers for Havoc Games gaming studio.
          </p>
        </li>
        <li class="ml-6">
          <span
            class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
          >
            <CalendarIcon class=" text-blue-500 text-xs" />
          </span>
          <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Liquake Development - Java Software Engineer
          </h3>
          <time
            class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >Started February 2019</time
          >
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            Decompiled and updated old software that was no longer
            supported/maintianed by the original maintainers.
          </p>
        </li>
      </ol>
    </div>

    <div class="chunk">
      <div class="text-5xl mb-4">Contact Me</div>
      <table class="m-auto">
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
        <a href="https://twitter.com/quilldev">
          <div class="flex text-3xl">
            <TwitterIcon class="mr-2" />
            <p>@quilldev</p>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/qdev">
          <div class="flex text-3xl">
            <LinkedinIcon class="mr-2" />
            <p>Robert Brunson</p>
          </div>
        </a>
        <a href="mailto:me@quill.moe">
          <div class="flex text-3xl">
            <EmailIcon class="mr-2" />
            <div>me@quill.moe</div>
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
