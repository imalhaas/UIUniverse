<script>
    let isHovered = false;
  </script>
  
  <style>
    @keyframes wave-animation {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-1600px);
      }
    }
  
    .wave {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 150px;
      background: url('/wave.svg') repeat-x;
      animation: wave-animation 10s infinite linear;
    }
  
    .scroll-indicator {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      color: white;
      font-size: 1.2rem;
      animation: bounce 2s infinite;
    }
  
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px);
      }
      60% {
        transform: translateY(-5px);
      }
    }
  </style>
  
  <div class="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center h-screen flex flex-col items-center justify-center relative overflow-hidden">
    <h1 class="text-7xl font-extralight mb-12 hover:scale-110 hover:text-yellow-400 transition-transform transition-colors duration-300"
        on:mouseover={() => (isHovered = true)} 
        on:mouseout={() => (isHovered = false)}>
      Bem-vindo à UIUniverse
    </h1>
    <div class="flex flex items-center gap-4 mb-12">
      <a href="/portfolio" class="px-6 py-3 bg-red-500 text-white rounded-full text-lg font-extralight hover:bg-red-400 transition-colors duration-300">
        Ver Produtos
      </a>
      <a href="/sobre" class="px-6 py-3 bg-red-500 text-white rounded-full text-lg font-extralight hover:bg-red-400 transition-colors duration-300">
        Sobre Nós
      </a>
    </div>
    <div class="wave"></div>
   
  </div>
  
  
  
  