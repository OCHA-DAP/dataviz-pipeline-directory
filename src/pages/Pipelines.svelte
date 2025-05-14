<script>
  import { onMount } from 'svelte';
  import { sort } from '../lib/Sort.svelte';
  import cronstrue from 'cronstrue';

  export let data;
  
  let sortBy = {col: 'Date created', ascending: false};
  
  // Format data to add readable cron schedules
  $: formattedData = data?.map(d => {
    let readableSchedule;
    try {
      readableSchedule = d.Schedule ? cronstrue.toString(d.Schedule, { verbose: true }) : d.Schedule;
    } catch (e) {
      readableSchedule = d.Schedule;
    }

    return { ...d, readableSchedule };
  }) ?? [];


  // Sort data by column
  $: sortedData = sort(formattedData, sortBy.col, sortBy);
  $: sorter = (column) => {
    if (sortBy.col == column) {
      sortBy.ascending = !sortBy.ascending
    } else {
      sortBy.col = column
      sortBy.ascending = true
    }

    sortedData = sort(formattedData, column, sortBy);
  }

  // Filter options
  let typeFilter = 'All';
  let statusFilter = 'All';
  $: typeOptions = ['All', ...Array.from(
    new Set(data.flatMap(d => d.Type?.split(',').map(t => t.trim()).filter(Boolean) || []))
  ).sort()];
  $: statusOptions = ['All', ...Array.from(new Set(sortedData.map(d => d.Status))).sort()];


  $: filteredData = sortedData.filter(d => {
    const rowTypes = d.Type?.split(',').map(t => t.trim()) || [];
    const matchesType = typeFilter === 'All' || rowTypes.includes(typeFilter);
    const matchesStatus = statusFilter === 'All' || d.Status === statusFilter;
    return matchesType && matchesStatus;
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
      Type:
      <select bind:value={typeFilter}>
        {#each typeOptions as option}
          <option value={option}>{option}</option>
        {/each}
      </select>
    </label>

    <label>
      Status:
      <select bind:value={statusFilter}>
        {#each statusOptions as option}
          <option value={option}>{option}</option>
        {/each}
      </select>
    </label>
  </div>

  <div class='fixTableHead' id='table-container'>
    <table>
      <colgroup>
        <col style="width: 8%;" span="11">
        <col>
      </colgroup>
      <thead>
        <tr>
          <th class='sortable' on:click={sorter('Name')}>Name <i class='icon-sort'></i></th>
          <th>Status</th>
          <th>Type</th>
          <th>DSys owner</th>
          <th>DPT/ DSci focal point</th>
          <th class='sortable' on:click={sorter('Date completed')}>Date completed <i class='icon-sort'></i></th>
          <th class='sortable' on:click={sorter('Date retired')}>Date retired <i class='icon-sort'></i></th>
          <th>Run location</th>
          <th>Schedule</th>
          <th>Duration</th>
          <th>Pcoded</th>
          <th>Additional info</th>
        </tr>
      </thead>
      <tbody>
        {#each filteredData as row}
          <tr>
            <td><a href={row['Scraper repository']} target='_blank'>{row['Name']}</a></td>
            <td class={row['Status'].replace(/\s/g, '')}>{row['Status']}</td>
            <td>{row['Type']}</td>
            <td>
              {#if row['Owner email']}
                <a href="mailto:{row['Owner email']}">{row['DSys Owner']}</a>
              {:else}
                {row['DSys Owner']}
              {/if}
            </td>
            <td>{row['DPT/ DSci focal point']}</td>
            <td>{row['Date completed']}</td>
            <td>{row['Date retired']}</td>
            <td>
              {#if row['Run URL']}
                <a href={row['Run URL']} target='_blank'>{row['Run location']}</a>
              {:else}
                {row['Run location']}
              {/if}
            </td>
            <td>{row['readableSchedule']}</td>
            <td>{row['Duration']}</td>
            <td>{row['P-coded']}</td>
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
    overflow-x: hidden;
    overflow-y: auto;
  }
  .fixTableHead thead th {
    position: sticky;
    top: 0;
  }
  .filters {
    padding: 8px 0 16px;
  }
  .filters label {
    margin-right: 20px;
  }
  .filters select {
    margin-left: 8px;
  }
  table {
    table-layout: fixed;
    width: 100%;
  }
</style>