import remarkGfm from 'remark-gfm';
import emoji from 'remark-emoji';
// @ts-ignore
import torchlight from 'remark-torchlight'; 

const torchlightOptions = {
  config: {
    theme: "monokuro-gray",
    options: {
      lineNumbers: false,          
    }
  }
}

const options = {
  mdxOptions: {
    remarkPlugins: [
      remarkGfm, 
      [torchlight, {
        config: {
          theme: "monokuro-gray",
          options: {
            lineNumbers: false,          
          }
        }
      }], 
      emoji
    ]
  }
}

export default options