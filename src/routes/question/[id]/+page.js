import { error } from "@sveltejs/kit";
import questions from "$lib/json/questions.json";

/** @type {import('./$types').PageLoad} */ export function load({ params }) {
  const questionData = questions.find((q) => q.id.toString() === params.id);
  if (questionData) {
    return { questionData };
  }
  throw error(404, "Not found");
}
