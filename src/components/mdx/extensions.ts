import remarkGfm from "remark-gfm";
import emoji from "remark-emoji";
// @ts-ignore
import rehypeHighlight from "rehype-highlight";

const options = {
  mdxOptions: {
    development: process.env.NODE_ENV === "development",
    remarkPlugins: [remarkGfm, emoji],
    rehypePlugins: [rehypeHighlight],
  },
};

export default options;
