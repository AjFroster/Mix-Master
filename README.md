### Netlify
https://ajf-drink-lookup.netlify.app/


This React project is a cocktail discovery application that uses TheCocktailDB API to fetch and display information on various cocktails. Users can search for cocktails, view detailed information, and navigate between different pages such as the home, cocktail details, and newsletter sign-up.
Key Libraries & APIs:

    TheCocktailDB API: Provides the cocktail data, including drink names, ingredients, and instructions. The app uses endpoints like /search.php and /lookup.php to fetch lists of drinks and detailed cocktail information.
    React Query: Efficiently handles data fetching, caching, and synchronization with the API, ensuring a responsive user experience.
    React Router: Manages navigation between different pages (e.g., landing page, cocktail details, about).
    Axios: Sends API requests to TheCocktailDB for fetching cocktail data.
    React Toastify: Displays notifications, such as form submission feedback.

Features:

    Landing Page: Displays a list of cocktails based on user searches.
    Cocktail Detail Page: Fetches and shows detailed cocktail information, including ingredients and instructions.
    Newsletter Form (Demo): Allows users to "subscribe" to a newsletter. It is essentially a demo and only accepts the test@test.com email for submission purposes.

By using React Query and TheCocktailDB API, the app provides an interactive, efficient, and user-friendly cocktail discovery experience.
