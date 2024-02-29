import remarkGfm from "remark-gfm";
import emoji from "remark-emoji";
// @ts-ignore
import torchlight from "remark-torchlight";


const options = {
  mdxOptions: {
    remarkPlugins: [
      remarkGfm,
      [
        torchlight,
        {
          config: {
            theme: "monokuro-gray",
            options: {
              lineNumbers: false,
            },
          },
        },
      ],
      emoji,
    ],
  },
};

export default options;
