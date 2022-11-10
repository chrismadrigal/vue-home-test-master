## Oliver Space Take-Home Instructions

Your mission, if you choose to accept it, is to build out a mock of a product reviews flow.
This includes a page for users to browse products, and a product detail page where users can read reviews and add their own.

REQUIREMENTS:
- Match this figma document as closely as possible https://www.figma.com/file/PEXoYYihVaoiEm7URhyLft/ENG-Test?node-id=0%3A1
- Create a page where a user can view all of the products
    - This page should also display the price for each product
    - The user should be able to sort by price
- Create a page where a user can see reviews of a given product with the following information:
    - Their name (the author)
    - A star rating
    - location
    - The body of the review (a longer paragraph)

Please spend 2 hours completing this task to whatever extent you can finish, but don't
go over time. The expectation is NOT that you will get through all of the requirements, so please add notes on anything else you would have done with more time. Feel free to use any third-party libraries that you find helpful. Please spend some of your time on styling - since we are a consumer-facing company, we care about UI quality. It's ok to sacrifice some functionality for looks (though we leave it up to you to determine what you want to trade off).

## Running the app
Install JSON server(If not installed) `npm install -g json-server`
Start the mock JSON server on port 3004 using `json-server --watch db.json`
Start the vue app on port 3000 using `npm run serve`
You can then make requests to http://localhost:3004/products, http://localhost:3004/reviews or http://localhost:3004/products/:id/reviews using axios, or any of your preferred methods

More info on json-server [here](https://www.npmjs.com/package/json-server)

This project was bootstrapped with [vue cli](https://cli.vuejs.org/guide/creating-a-project.html#vue-create).

Best of luck! Feel free to email <a href="mailto:frontend-eng@oliver.space">frontend-eng@oliver.space</a> if you have any questions while you're completing the exercise. We're happy to help :)


## Notes
Here is a list of a few more things that I would have liked to add/improve on the app, but I did not have time:

- Better caching for subsequent API requests when filtering or navigating to products.
- Add error handling for API requests and form posts.
- Better validation handling for the reviews creation.
- Decouple a few instances of code using composables. EJ: the form POST logic.
- Add more layout styles for reviews mobile sliders.
- Custom `<select>` component for filtering products.
- Animations for product filtering and page transitions.
- Add Vuex Store to manage data.
- Auto-scroll to reviews after creating one.
- Better font matching. This [google font Assistant](https://fonts.google.com/specimen/Assistant) didn't match the one in Figma.
