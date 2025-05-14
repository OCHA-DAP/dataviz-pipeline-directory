<script>
  import Papa from 'papaparse'
  import DataVisualizations from './pages/DataVisualizations.svelte'
  import Pipelines from './pages/Pipelines.svelte'
  import PartnerPipelines from './pages/PartnerPipelines.svelte'

  let vizData = [];
  Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vRqBuIYkkzFIMlq541njH9S9mO-nda40sab-AMP4tlhcWFiZt0QrcXOVS44ALJtDW17yu53vyhbUEuY/pub?gid=0&single=true&output=csv', {
    header: true,
    download: true,
    complete: function(results) {
      vizData = results.data
    }
  })

  let pipelineData = [];
  Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vRqBuIYkkzFIMlq541njH9S9mO-nda40sab-AMP4tlhcWFiZt0QrcXOVS44ALJtDW17yu53vyhbUEuY/pub?gid=934366997&single=true&output=csv', {
    header: true,
    download: true,
    complete: function(results) {
      pipelineData = results.data
    }
  })

  let partnerPipelineData = [];
  Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vRqBuIYkkzFIMlq541njH9S9mO-nda40sab-AMP4tlhcWFiZt0QrcXOVS44ALJtDW17yu53vyhbUEuY/pub?gid=2122600624&single=true&output=csv', {
    header: true,
    download: true,
    complete: function(results) {
      partnerPipelineData = results.data
    }
  })

  $: tabs = [{name: 'Pipelines'}, {name: 'Partner Pipelines'}, {name: 'Data Visualizations'}];
  $: activeTab = 0;

</script>

<main>
  <div class='header'>
    <h1>Data Systems Directory</h1>
    <a href="https://centre.humdata.org" target="_blank" rel="noreferrer"> 
      <img src="images/centreforHumdata_green_TransparentBG.png" class="logo" alt="Centre for Humanitarian Data Logo" />
    </a>
  </div>
  <a href='https://docs.google.com/spreadsheets/d/1T_ylCD9j6BYnz6T1uBmRHv0ftz0zLTQLTYucJgYiTZ4' target='_blank'>DIRECTORY DATA</a>

  <div class='tabs'>
    {#each tabs as tab, idx}
      <div class='tab' class:active={idx === activeTab} on:click={() => (activeTab = idx)}>
        {tab.name}
      </div>
    {/each}
  </div>

  {#each tabs as tab, idx}
    {#if idx === activeTab}
      {#if idx===0}
        <Pipelines data={pipelineData} />
      {:else if idx===1}
        <PartnerPipelines data={partnerPipelineData} />
      {:else}
        <DataVisualizations data={vizData} />
      {/if}
    {/if}
  {/each}

</main>

<style>
  .logo {
    height: 3.5em;
  }
  .header {
    display: flex;
  }
  .header a {
    margin-left: auto;
    margin-top: auto;
  }
  .tabs {
    border-bottom: 3px solid #EEE;
    display: flex;
    flex-flow: row;
    height: 50px;
    margin-top: 10px;
    justify-content: center;
  }
  .tab {
    border-bottom: 3px solid #EEE;
    color: #999;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    line-height: 50px;
    height: 50px;
    padding: 0 32px;
  }
  .tab.active {
    border-bottom: 3px solid #F05449;
    color: #000;
  }
  .tab:hover {
    border-bottom: 3px solid #F05449;
    color: #000;
  }
</style>
