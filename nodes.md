Notes

- Started at like 7:45 let's say

- As far as approach, I'm going with NextJS as I've been hearing of it a lot lately and this presents a chance to check it out.
I'm familiar with React though have been working more on the back-end the last couple of years. Spent a little time at the beginning of my career working with Rails and hoping to see the same kind of convention and ease in setting up basic web apps 

- Starting by identify the structure of the data, the api, and the data fetching. Will move on secondly to the presentation of said data. 

- I used copilot to create the TS definitions by navigating to the API endpoint in the browser and copy/pasting into Copilot. 

- Used copilot again to generate boilerplate code mapping over the House instances and displaying them in an unstyled list. Seeing the the array of sworn member is returning URLS which presumably need to be hit to get the character's data. First time using Next.js, over to the docs to see how props are passed to child components, created a child compoent "SwornMember.tsx"

- The Houses resource from the API (https://anapioficeandfire.com/api/houses) is paginated by default to 10 results, for these 10 houses please display a list of all of their Sworn Members grouped by house

I take this to mean just like 

house
-----

- sworn member 1
- sworn member 2

Per the response JSON. 

- restarted using the nextui component library cli out of laziness


- Ran into difficulty getting the client component "Accordion" to render, weird error. Some googling and came upon a gh issue
that shed light on the matter. turns out that the According doesn't work with this "servercomponent" of next.js, the 
"use client" directive must be used and the style of data fetching as well. 

- switch paradigm and switch to loading data via the react hooks useState and useEffect  


- okay, finally figured out the whole server/client component, data is rendering nicely using the UI library. code looks clean due to eslint's auto-correct. I notice some of the houses don't have Sworn Member, so I'm going to filter those out. 


- okay, few minutes on the last touches. adding the "no sworn members" for houses without members, everything is loading properly. 