/** @type {import('@sveltejs/kit').RequestHandler} */

let counter = 1000;

export async function get({ params }) {
      console.log(`fetching ${params.id}`);
      const result =  `The parameter is ${params.id}`

      return {
        body: {
         counter: counter++,
          result,
         
        }
    }
}