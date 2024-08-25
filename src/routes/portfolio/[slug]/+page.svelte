<script lang="ts">
    export let data;

    const item = data.items.find(obj => obj.slug === data.slug)
</script>

<h1>{item?.tittle,item?.category}</h1>