/** @type {import('@sveltejs/kit').RequestHandler} */

let counter = 1000;

export async function get({ params, locals }) {
      console.log(`fetching ${params.slug}`);
      const upSlug =  params.slug.toUpperCase() 

      return {
        body: {
         upSlug:  ` ${upSlug} ${counter}`,
          counter: counter++,
        }
    }
}