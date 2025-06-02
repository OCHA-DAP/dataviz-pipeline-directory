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

  // Filter options
  let statusFilter = 'All';
  $: statusOptions = ['All', ...Array.from(new Set(sortedData.map(d => d.Status))).sort()];
  $: filteredData = sortedData.filter(d => {
    const matchesStatus = statusFilter === 'All' || d.Status === statusFilter;
    return matchesStatus;
  });

  onMount(() => {
    const div = document.getElementById('table-container');
    const rect = div.getBoundingClientRect();

    const viewportHeight = window.innerHeight;
    const availableHeight = viewportHeight - rect.top - 50;

    div.style.height = `${availableHeight}px`;
  });
</script>

<section>
  FILTER BY:
  <div class='filters'>
    <label>
      Status:
      <select bind:value={statusFilter}>
        {#each statusOptions as option}
          <option value={option}>{option}</option>
        {/each}
      </select>
    </label>
  </div>

  <div class="fixTableHead" id='table-container'>
    <table>
      <colgroup>
        <col style="width: 14%;" span="5">
        <col>
      </colgroup>
      <thead>
        <tr>
          <th class='sortable' on:click={sorter('Name')}>Name <i class='icon-sort'></i></th>
          <th class='sortable' on:click={sorter('Organization Name')}>Organization <i class='icon-sort'></i></th>
          <th class='sortable' on:click={sorter('Status')}>Status <i class='icon-sort'></i></th>
          <th>DPT focal point</th>
          <th>External contact</th>
          <th>Additional info</th>
        </tr>
      </thead>
      <tbody>
        {#each filteredData as row}
          <tr>
            <td><a href={row['Data series link']} target='_blank'>{row['Name']}</a></td>
            <td><a href={row['Organization link']} target='_blank'>{row['Organization Name']}</a></td>
            <td class={row['Status'].replace(/\s/g, '')}>{row['Status']}</td>
            <td>{row['DPT focal point']}</td>
            <td>
              {#if row['External contact email']}
                <a href="mailto:{row['External contact email']}">{row['External contact name']}</a>
              {:else}
                {row['External contact name']}
              {/if}
            </td>
            <td>{row['Additional info']}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  <p class='count'>Count: <b>{filteredData.length}</b></p>
</section>

<style>
.fixTableHead {
  height: auto;
  max-height: 75vh;
}
</style>