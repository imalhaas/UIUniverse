<script lang="ts">
    export let data;

    let currentCategory = 'Todos';
    let portfolioItems = data.items;

    function changeCategory(newCategory: string) {
        currentCategory = newCategory;
        filterPortfolio();
    }

    function filterPortfolio() {
        portfolioItems = data.items.filter(item => {
            return item.category === currentCategory || currentCategory === 'Todos';
        });
    }
</script>

<section class="bg-gradient-to-r from-blue-500 to-purple-600 text-white min-h-screen flex flex-col">
    <div class="container mx-auto flex flex-col flex-grow">
        <!-- Categorias de Navegação -->
        <div class="flex py-4 mt-4 overflow-x-auto overflow-y-hidden md:justify-center border-b-2 border-orange-500">
            {#each data.categories as category}
                {#if currentCategory === category}
                    <button
                        class="h-12 px-8 py-2 text-sm text-center bg-transparent text-orange-400 border-b-2 border-blue-500">
                        {category}
                    </button>
                {:else}
                    <button
                        on:click={() => { changeCategory(category) }}
                        class="h-12 px-8 py-2 text-sm text-center bg-transparent text-gray-700 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-500">
                        {category}
                    </button>
                {/if}
            {/each}
        </div>

        <!-- Itens do Portfólio -->
        <div class="flex flex-col mt-4">
            {#each portfolioItems as {tittle, category, image, slug}}
                <section class="lg:flex lg:items-center mb-8">
                    <div class="lg:w-1/2">
                        <p class="text-lg tracking-wider font-light text-blue-300 uppercase">{category}</p>
                        <h2 class="mt-2 text-2xl font-arial">{tittle}</h2>
                    </div>
                    <div class="mt-4 lg:w-1/2 lg:mt-0">
                        <a href={`/portfolio/${slug}`}>
                            <img class="object-cover w-full h-64 rounded-lg md:h-96" src="{image}" alt="">
                        </a>
                    </div>
                </section>
            {/each}
        </div>
    </div>
</section>