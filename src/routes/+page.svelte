<script>
    const idade = 25;

</script>
<h1>Inínio</h1>

{#if idade > 20 && idade <30}
<p>Idade está entre 20 e 30</p>
{:else}
<p>Maior que 30</p>
{/if}



