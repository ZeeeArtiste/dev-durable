<script>
  export let question;
  export let response;
  let showResponse = false;

   $: if (question) {
    showResponse = false;
  }
</script>

<article aria-live="polite">
  <h1 id="questionHeading">Question : {question}</h1>
  <button
    class="button-19"
    on:click={() => showResponse = !showResponse}
    aria-expanded={showResponse}
    aria-controls="responseSection">
    {showResponse ? 'Masquer la Réponse' : 'Voir ma Réponse'}
  </button>
  {#if showResponse}
    <div class="response" id="responseSection" role="region" aria-labelledby="questionHeading">
      <p>{@html response}</p>
    </div>
  {/if}
</article>

<style>

  article{
    margin-bottom: 25px;
  }

    /* CSS */
    .button-19 {
      appearance: button;
      background-color: #1899D6;
      border: solid transparent;
      border-radius: 16px;
      border-width: 0 0 4px;
      box-sizing: border-box;
      color: #FFFFFF;
      cursor: pointer;
      display: inline-block;
      font-family: din-round,sans-serif;
      font-weight: 600;
      letter-spacing: .8px;
      line-height: 20px;
      margin: 0;
      outline: none;
      overflow: visible;
      padding: 13px 16px;
      text-align: center;
      text-transform: uppercase;
      touch-action: manipulation;
      transform: translateZ(0);
      transition: filter .2s;
      user-select: none;
      -webkit-user-select: none;
      vertical-align: middle;
      white-space: nowrap;
    }

    .button-19:after {
      background-clip: padding-box;
      background-color: #1CB0F6;
      border: solid transparent;
      border-radius: 16px;
      border-width: 0 0 4px;
      bottom: -4px;
      content: "";
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1;
    }

    .button-19:main,
    .button-19:focus {
      user-select: auto;
    }

    .button-19:hover:not(:disabled) {
      filter: brightness(1.1);
      -webkit-filter: brightness(1.1);
    }

    .button-19:disabled {
      cursor: auto;
    }

    .button-19:active {
      border-width: 4px 0 0;
      background: none;
    }
  .response {
    /* Styles pour la réponse */
  }
</style>
