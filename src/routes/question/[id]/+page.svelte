<script>
  import QuestionReponse from '$lib/components/QuestionReponse.svelte';
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<QuestionReponse question={data.questionData.question} response={data.questionData.response} />
<a href="/" aria-label="Retour à la page d'accueil">Retour à la page d'accueil</a>


<style>
  a{
    text-decoration: none;
  }
</style>