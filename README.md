# Server Side Rendering Example

## run below commands in sequence

In the project directory, build your project first:

### `npm run build`

Then Run below command to start the server 
### `npm run ssr`

Open browser and open app localhost:8080

press ctrl + u or right click and view source to verify html is rendered inside index.html

or you can validate by opening network tab and check response of index.html file

Server Side Rendering will provide the faster first contentful paint but it doesn't' provide a faster Time to Interactive
means HTML will be loaded on the page first but javascript handlers will not be attached to that HTML.
Handlers will only get attached once js bundle is loaded & processed. This process is called Hydration. 
React will check the current DOM Nodes & hydrate the node with corresponding js.
