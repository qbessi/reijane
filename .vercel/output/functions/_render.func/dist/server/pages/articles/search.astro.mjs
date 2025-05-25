/* empty css                                    */
import { a as createAstro, c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_DrjHWHeI.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../../chunks/MainLayout_CpzKXNhi.mjs';
import { $ as $$ArticleCard } from '../../chunks/ArticleCard_CiJ6HRW2.mjs';
import { $ as $$SearchForm } from '../../chunks/SearchForm_Cav53F51.mjs';
import { g as getCollection } from '../../chunks/_astro_content_hLEa1Szu.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://positivustheme.vercel.app");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const query = Astro2.url.searchParams.get("query");
  const allBlogArticles = await getCollection("blog");
  const searchResults = allBlogArticles.filter((article) => {
    const titleMatch = article.data.title.toLowerCase().includes(query.toLowerCase());
    const bodyMatch = article.body.toLowerCase().includes(query.toLowerCase());
    const slugMatch = article.slug.toLowerCase().includes(query.toLowerCase());
    return titleMatch || bodyMatch || slugMatch;
  });
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Search Results" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20"> <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"> <a href="/articles" class="inline-flex items-center font-medium text-black hover:text-green my-4"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path> </svg> <span class="ml-1 font-bold text-lg">All Articles</span> </a> <br> ${renderComponent($$result2, "SearchForm", $$SearchForm, {})} <br> <h2 class="text-2xl pb-3 mt-6">Results For <strong>${query}</strong></h2> <div class="grid gap-8 lg:grid-cols-2"> ${searchResults.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> </div> </main> ` })}`;
}, "/home/super/Documents/reijane/src/pages/articles/search.astro", void 0);

const $$file = "/home/super/Documents/reijane/src/pages/articles/search.astro";
const $$url = "/articles/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
