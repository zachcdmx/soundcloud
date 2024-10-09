- Went with NextJS as a way to try out the new framework as I've been hearing about it a lot. This probably wouldn't have been terribly hard to put together
with an html page and a script element. That said, really like the automatic inclusion of ESLint.

- I started by tackling the backend. First step was creating types for the data. I opened the website in the chrome browser and copy/pasted the returned data into 
Copilot to create Interfaces for them. 

- From there, I made the actual fetch call. I promptly see that the swornMembers property is an array of urls, imaginably urls containing the information of the characters. I update the type definition to include the transformed response, map over the houses and their sworn members to populate the data. Given the scope of the task, up front loading of all the data seems more than suffucient. 

- Then ran into problems with the Server/Client components, a concept I hadn't explicitly come acrss of yet. Specifically, as I'm not much for the CSS, I reached for a component library, NextUI. They had a cli options to spin up a project pre-configured so rather than those time in the config, i use the CLI to create a new project and copy/paste the main files in. The import Accordion was failing, turns out that it isn't supported with the server side components. Client side comcponents don't support async/await syntax. Do I rewrite the fetch calls using useEffect and useState with callbacks? 

- I did, but quickly abandoned it whne I realized that a server child can call a child client component, and pass it the data fetched cleanly using the es6 async/await syntax. 

- From there just a matter of some conditional rendering, whether the character is dead or not, has sworn memvers or not, etc. 