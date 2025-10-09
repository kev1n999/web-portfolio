const pages = {
  home: `
<header
  class="flex justify-center flex-col items-center bg-neutral-800/70 h-[430px] w-[350px] md:w-[600px] rounded-[18px] border-white border-solid border-[1px]">
  <nav
    class="flex justify-center items-center bg-black border-solid border-[2px] border-neutral-700 rounded-[12px] w-[330px] md:w-[380px] h-[40px]">
    <ul class="flex flex-row gap-5 text-white">
      <li class="transition-colors duration-300 hover:text-neutral-400">
        <a href="#" data-page="home">Home</a>
      </li>
      <li class="transition-colors duration-300 hover:text-neutral-400">
        <a href="#" data-page="about">About</a>
      </li>
      <li class="transition-colors duration-300 hover:text-neutral-400">
        <a href="#" data-page="skills">Skills</a>
      </li>
    </ul>
  </nav>

  <div class="flex justify-center p-10 pb-4">
    <img src="./assets/profile.jpg" alt="my-photo" class="size-30 rounded-full border-black border-solid border-2" />
  </div>
  <div>
    <h1 class="text-3xl font-mono text-white flex justify-center">
      <img
        src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=24&pause=1000&color=black&width=250&lines=Hi!%2C+I'm+Kevin!;"
        alt="" class="pl-[40px]" />
    </h1>
  </div>
  <div>
    <p class="text-slate-400 text-lg text-center">Developer</p>
  </div>

  <div class="flex justify-center gap-1 p-2">
    <div class="icon">
      <a href="https://github.com/kev1n999">
        <img src="./assets/icons/github.png" alt=""
          class="size-10 transform transition duration-75 hover:scale-95 cursor-pointer" /></a>
    </div>

    <div class="icon">
      <a href="https://discord.com/users/1284623028323483715">
        <img src="./assets/icons/discord.png" alt=""
          class="size-10 transform transition duration-75 hover:scale-95 cursor-pointer" /></a>
    </div>

    <div class="icon">
      <a href="https://linkedin.com/in/kevin-fdev">
        <img src="./assets/icons/linkedin.png" alt=""
          class="size-10 transform transition duration-75 hover:scale-95 cursor-pointer" /></a>
    </div>
  </div>

  <div>
    <h3 class="text-neutral-500">Developed by Kevin</h3>
  </div>
</header>
`,

  about: `
<header
  class="flex gap-5 justify-center flex-col items-center bg-neutral-800/70 h-[650px] md:h-[540px] w-[400px] md:w-[650px] rounded-[18px] border-white border-solid border-[1px]">
  <nav
    class="flex justify-center items-center bg-black border-solid border-[2px] border-neutral-700 rounded-[12px] w-[380px] h-[40px]">
    <ul class="flex flex-row gap-5 text-white">
      <li class="transition-colors duration-300 hover:text-neutral-400">
        <a href="#" data-page="home">Home</a>
      </li>
      <li class="transition-colors duration-300 hover:text-neutral-400">
        <a href="#" data-page="about">About</a>
      </li>
      <li class="transition-colors duration-300 hover:text-neutral-400">
        <a href="#" data-page="skills">Skills</a>
      </li>
    </ul>
  </nav>

  <div class="">
    <img class="h-40 w-max rounded-[20px] border-white border-solid border-[1px]" src="./assets/banner.gif" alt="" />
  </div>

  <div class="flex justify-center flex-col text-center">
    <h1 class="text-white font-extrabold text-3xl pb-[12px]">About me</h1>
    <p class="tracking-tighter font-mono text-white flex justify-center">
      Olá! Me chamo Kevin, tenho 17 anos e atualmente sou estudante
      autodidata de Programação/TI, além de estar completando o 3° Ano do
      Ensino Médio. Sou um jovem apaixonado por tecnologia e desenvolvimento
      de sofware/soluções para variados tipos de problemas, faço alguns
      freelas de vez em quando :)
    </p>
  </div>
  <div>
    <h3 class="text-neutral-500">Developed by Kevin</h3>
  </div>
</header>
`,

  skills: `
<header
  class="flex justify-center flex-col items-center bg-neutral-800/70 h-[710px] md:h-[490px] w-[380px] md:w-[600px] rounded-[18px] border-white border-solid border-[1px]">
  <nav
    class="flex mb-6 justify-center items-center bg-black border-solid border-[2px] border-neutral-700 rounded-[12px] h-[40px] w-[300px] md:w-[380px]">
    <ul class="flex flex-row gap-5 text-white">
      <li class="transition-colors duration-300 hover:text-neutral-400">
        <a href="#" data-page="home">Home</a>
      </li>
      <li class="transition-colors duration-300 hover:text-neutral-400">
        <a href="#" data-page="about">About</a>
      </li>
      <li class="transition-colors duration-300 hover:text-neutral-400">
        <a href="#" data-page="skills">Skills</a>
      </li>
    </ul>
  </nav>

  <div class="flex flex-col md:flex-row justify-center items-center gap-5">
    <div class="bg-neutral-900 h-full w-[250px] rounded-[20px] border-solid border-[1px] border-white">
      <h1
        class="text-white font-extrabold text-3xl text-center pb-[10px] pt-[10px] bg-neutral-800 m-[5px] rounded-b-[12px]">
        Front-end
      </h1>

      <ul class="text-white text-center flex flex-col gap-2 items-start m-[16px]">
        <li class="flex flex-row gap-1 justify-center">
          <img src="./assets/icons/html-5.png" class="size-5" alt="" />
          <a href="">HTML5</a>
        </li>
        <li class="flex flex-row gap-1 justify-center">
          <img src="./assets/icons/css-3.png" class="size-5" alt="" />
          <a href="">CSS3</a>
        </li>
        <li class="flex flex-row gap-1 justify-center">
          <img src="./assets/icons/js.png" class="size-5" alt="" />
          <a href="">JavaScript</a>
        </li>
        <li class="flex flex-row gap-1 justify-center">
          <img src="./assets/icons/icons8-react-nativo-24.png" class="size-5" alt="" />
          <a href="">React.js(Estudando)</a>
        </li>
        <li class="flex flex-row gap-1 justify-center">
          <img src="./assets/icons/icons8-tailwind-css-48.png" class="size-5" alt="" />
          <a href="">Tailwindcss(Estudando)</a>
        </li>
      </ul>
    </div>
    <div class="bg-neutral-900 h-full rounded-[20px] w-[250px] border-solid border-[1px] border-white">
      <h1
        class="text-white font-extrabold text-3xl text-center pb-[10px] pt-[10px] bg-neutral-800 m-[5px] rounded-b-[12px]">
        Back-end
      </h1>
      <ul class="text-white text-center flex flex-col gap-2 items-start m-[16px]">
        <li class="flex flex-row gap-1 justify-center">
          <img src="./assets/icons/python.png" class="size-5" alt="" />
          <a href="">Python</a>
        </li>
        <li class="flex flex-row gap-1 justify-center">
          <img src="./assets/icons/js.png" class="size-5" alt="" />
          <a href="">JavaScript</a>
        </li>
        <li class="flex flex-row gap-1 justify-center">
          <img src="./assets/icons/typescript.png" class="size-5" alt="" />
          <a href="">TypeScript</a>
        </li>
        <li class="flex flex-row gap-1 justify-center">
          <img src="./assets/icons/node-js.png" class="size-5" alt="" />
          <a href="">Node.js</a>
        </li>
        <li class="flex flex-row gap-1 justify-center">
          <img src="./assets/icons/icons8-expresso-js-50.png" class="size-5 bg-white" alt="" />
          <a href="">Express.js(Básico)</a>
        </li>
        <li class="flex flex-row gap-1 justify-center">
          <img src="./assets/icons/sql-server.png" class="size-5 bg-white" alt="" />
          <a href="">SQL</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="pt-[16px]">
    <h3 class="text-neutral-500 mb-[6px]">Developed by Kevin</h3>
  </div>
</header>
`
}


const content = document.getElementById("pageContent");
const music = document.getElementById("bgMusic");
const playMusic = document.getElementById("toggleMusic");
let isPlaying = false;

playMusic.addEventListener("click", async () => {
  if (!isPlaying) {
    await music.play();
    playMusic.textContent = "🔇";
    isPlaying = true;
  } else {
    await music.pause();
    playMusic.textContent = "🔊";
    isPlaying = false;
  }
});

function attachNavEvents() {
  document.querySelectorAll("nav a").forEach((li) => {
    li.addEventListener("click", (e) => {
      e.preventDefault();
      const page = li.dataset.page;
      content.innerHTML = pages[page];
      attachNavEvents(); 
    });
  });
}

attachNavEvents();