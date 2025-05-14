<script>
  import { onMount } from 'svelte';
  import { sort } from '../lib/Sort.svelte';
  export let data;
  
  let sortBy = {col: 'Date created', ascending: false};

  $: sortedData = sort(data, sortBy.col, sortBy);

  $: sorter = (column) => {
    if (sortBy.col == column) {
      sortBy.ascending = !sortBy.ascending
    } else {
      sortBy.col = column
      sortBy.ascending = true
    }

    sortedData = sort(sortedData, column, sortBy);
  }

  onMount(() => {
    const div = document.getElementById('table-container');
    const rect = div.getBoundingClientRect();

    const viewportHeight = window.innerHeight;
    const availableHeight = viewportHeight - rect.top - 50;

    div.style.height = `${availableHeight}px`;
  });
</script>

<section>
  <div class='fixTableHead' id='table-container'>
    <table>
      <colgroup>
        <col style='width: 10%;' span='8'>
        <col>
      </colgroup>
      <thead>
        <tr>
          <th class='sortable' on:click={sorter('Name')}>Name <i class='icon-sort'></i></th>
          <th class='sortable' on:click={sorter('Status')}>Status <i class='icon-sort'></i></th>
          <th>Owner</th>
          <th class='sortable' on:click={sorter('Date created')}>Date created <i class='icon-sort'></i></th>
          <th class='sortable' on:click={sorter('Date retired')}>Date retired <i class='icon-sort'></i></th>
          <th>Code</th>
          <th>Scraper</th>
          <th>Datasheet</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {#each sortedData as row}
          <tr>
            <td>
              {#if row['Link']}
                <a href={row['Link']} target='_blank'>{row['Name']}</a>
              {:else}
                {row['Name']}
              {/if}
            </td>
            <td class={row['Status'].replace(/\s/g, '')}>{row['Status']}</td>
            <td>
              {#if row['Owner email']}
                <a href="mailto:{row['Owner email']}">{row['Owner']}</a>
              {:else}
                {row['Owner']}
              {/if}
            </td>
            <td>{row['Date created']}</td>
            <td>{row['Date retired']}</td>
            <td>
              {#if row['Code repository']}
                <a href={row['Code repository']} target='_blank'>Code</a>
              {/if}
            </td>
            <td>
              {#if row['Scraper repository']}
                <a href={row['Scraper repository']} target='_blank'>Scraper</a>
              {/if}
            </td>
            <td>
              {#if row['Data sheet']}
                <a href={row['Data sheet']} target='_blank'>Datasheet</a>
              {/if}
            </td>
            <td>{row['Notes']}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  <p class='count'>Count: <b>{sortedData.length}</b></p>
</section>

<style>  
.fixTableHead {
  height: auto;
  max-height: 75vh;
}
</style>