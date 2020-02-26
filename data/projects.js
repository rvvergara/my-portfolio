export default [
  {
    id: 1,
    title: 'FacialBook',
    subtitle: 'A Facebook Clone Written on Rails',
    repository: 'https://github.com/rvvergara/facialbook',
    demoLink: 'https://facials.herokuapp.com/',
    technologies: ['Ruby', 'Ruby On Rails', 'JQuery', 'Bootstrap', 'PostgreSQL'],
    description: `
      <p>In this project, I and my coding partner used Ruby on Rails to clone Facebook.</p>
      <p>The app was built on pure Rails. With jQuery some of the button effects were created.</p>
      <strong>Features</strong>
      <ol>
        <li>User signup and signin (with Remember Me) and creation of Profile (with Profile picture uploading)</li>
        <li>Sending, Accepting, Cancelling and Deleting (Rejecting) Friend Requests
        </li>
        <li>Removing Friends</li>
        <li>Showing a user's friends and mutual friends with other users</li>
        <li>Newsfeed and Timeline</li>
        <li>Posting on the newsfeed, on one's own timeline and on a friend's timeline (allows image uploading)</li>
        <li>Editing and Deleting authored posts</li>
        <li>Commenting on posts or other comments</li>
        <li>Editing and deleting comments</li>
        <li>Liking and Unliking posts and comments</li>
        <li>Showing Like count</li>
        <li>Signup/Signin using actual Facebook account</li>
      </ol>
    `,
    screenshots: [
      {
        original: 'https://tinyimg.io/i/BV83QcX.png',
        thumbnail: 'https://tinyimg.io/i/BV83QcX.png',
        caption: 'Homepage for visitors',
      },
      {
        original: 'https://tinyimg.io/i/cUyAuEg.png',
        thumbnail: 'https://tinyimg.io/i/cUyAuEg.png',
        caption: 'Sign up page',
      },
      {
        original: 'https://tinyimg.io/i/c0rUIhV.png',
        thumbnail: 'https://tinyimg.io/i/c0rUIhV.png',
        caption: 'User newsfeed',
      },
      {
        original: 'https://tinyimg.io/i/6Xn4yHI.png',
        thumbnail: 'https://tinyimg.io/i/6Xn4yHI.png',
        caption: 'User making a post',
      },
      {
        original: 'https://tinyimg.io/i/R5XW1l9.png',
        thumbnail: 'https://tinyimg.io/i/R5XW1l9.png',
        caption: 'User profile page',
      },
      {
        original: 'https://tinyimg.io/i/ANOu3OX.png',
        thumbnail: 'https://tinyimg.io/i/ANOu3OX.png',
        caption: 'User friends list page',
      },
    ],
  },
  {
    id: 2,
    title: 'Bookstore CMS Next App',
    subtitle: 'Written in NextJS with Redux and JWT Authentication',
    repository: 'https://github.com/rvvergara/bookstore-cms-next-app',
    demoLink: 'https://bookstore-cms-next-app.herokuapp.com',
    technologies: ['NextJS', 'React', 'Redux', 'Jest', 'JSON Web Token', 'SASS'],
    description: `
      <p>A Simple Books content-management-system built using NextJS and Redux</p>
      <p>Connects to a backend Rails JSON API for data reading and writing.</p>
      <strong>Features</strong>
      <ol>
        <li>User signup and signin (utilizes JSON Web Token)</li>
        <li>User can either be a regular user or an admin user</li>
        <li>Admin users can search books from the Google API and add to the app's library</li>
        <li>SuperAdmin (owner) can set user priveleges (admin or regular user)</li>
        <li>Regular users can search books available in the library.</li>
        <li>Regular users can add books to their collections from the library.</li>
        <li>Regular users can update the currently read page on each of their collection items.</li>
        <li>Regular users can remove books from their collections.</li>
      </ol>
    `,
    screenshots: [
      {
        original: 'https://tinyimg.io/i/8CH2vWV.png',
        thumbnail: 'https://tinyimg.io/i/8CH2vWV.png',
        caption: 'Login page',
      },
      {
        original: 'https://tinyimg.io/i/ScmHYm5.png',
        thumbnail: 'https://tinyimg.io/i/ScmHYm5.png',
        caption: 'Sign up page',
      },
      {
        original: 'https://tinyimg.io/i/2UOUoCU.png',
        thumbnail: 'https://tinyimg.io/i/2UOUoCU.png',
        caption: 'Collection page',
      },
      {
        original: 'https://tinyimg.io/i/YH118iL.png',
        thumbnail: 'https://tinyimg.io/i/YH118iL.png',
        caption: 'Updating currently read page',
      },
      {
        original: 'https://tinyimg.io/i/kW0fsYE.png',
        thumbnail: 'https://tinyimg.io/i/kW0fsYE.png',
        caption: 'User management page for admins',
      },
      {
        original: 'https://tinyimg.io/i/GFhDdK8.png',
        thumbnail: 'https://tinyimg.io/i/GFhDdK8.png',
        caption: 'Book search results page',
      },
    ],
  },
  {
    id: 3,
    title: 'Battleship',
    subtitle: 'Classic Strategy Board Game recreated using plain vanilla JavaScript',
    repository: 'https://github.com/rvvergara/battleship',
    demoLink: 'https://ryto-battleship-game.netlify.com/',
    technologies: ['JavaScript', 'Jest', 'Webpack'],
    description: `
    <p>This project utilizes the factory and module architecture pattern. This is also the first project where I showcase my Jest skills.</p>
    <strong>Features:</strong>
    <ol>
      <li>User plays against an artificial intelligence</li>
      <li>User can drag and drop his/her ships to desired position and orientation.</li>
      <li>Enemy ships are set in random positions.</li>
    </ol>
    `,
    screenshots: [
      {
        original: 'https://tinyimg.io/i/SSGkvss.png',
        thumbnail: 'https://tinyimg.io/i/SSGkvss.png',
        caption: 'Left side is user board, right side is the AI board',
      },
      {
        original: 'https://tinyimg.io/i/ifuoTq9.png',
        thumbnail: 'https://tinyimg.io/i/ifuoTq9.png',
        caption: 'Ships turn red when hit',
      },
      {
        original: 'https://tinyimg.io/i/CWxblly.png',
        thumbnail: 'https://tinyimg.io/i/CWxblly.png',
        caption: 'Computer beats you',
      },
    ],
  },
  {
    id: 4,
    title: 'Flight Booker',
    subtitle: 'A simple app to book flights built with Rails',
    technologies: ['Ruby', 'Ruby On Rails', 'PostgreSQL', 'Bootstrap', 'RSpec'],
    repository: 'https://github.com/rvvergara/flight-booker',
    demoLink: 'https://flight-booker-121618.herokuapp.com/',
    description: `
      <p>This rails app is a simple showcase of utilizing the power of Rails forms.</p>
      <strong>Features:</strong>
      <ol>
        <li>Users can search flights based on departure and arrival airports and flight dates.</li>
        <li>Users can select flights based on search results.</li>
        <li>Users can fill out a booking form.</li>
        <li>Users can edit booking form for flights.</li>
      </ol>
    `,
    screenshots: [
      {
        original: 'https://tinyimg.io/i/qshh4rc.png',
        thumbnail: 'https://tinyimg.io/i/qshh4rc.png',
        caption: 'Homepage',
      },
      {
        original: 'https://tinyimg.io/i/KVnCp2W.png',
        thumbnail: 'https://tinyimg.io/i/KVnCp2W.png',
        caption: 'User can select which flight to book',
      },
      {
        original: 'https://tinyimg.io/i/fTmDzWr.png',
        thumbnail: 'https://tinyimg.io/i/fTmDzWr.png',
        caption: 'User then fills out his/her details in the booking form',
      },
      {
        original: 'https://tinyimg.io/i/IDrKaem.png',
        thumbnail: 'https://tinyimg.io/i/IDrKaem.png',
        caption: 'User gets confirmation receipt for the booking',
      },
    ],
  },
  {
    id: 5,
    title: 'React Calculator',
    subtitle: 'A simple calculator app built with React',
    technologies: ['React', 'SASS', 'JavaScript', 'Flexbox'],
    repository: 'https://github.com/rvvergara/react-calculator',
    demoLink: 'https://ryto-react-calculator.netlify.com/',
    description: `
    <p>In this react app, I showcased basic usage of React hooks as well as fundamental mathematical logic building.</p>
    <strong>Features</strong>
    <ol>
      <li>All basic arithmetic operations</li>
      <li>Error message when division by zero is attempted</li>
      <li>Highly responsive design</li>
    </ol>
    `,
    screenshots: [
      {
        original: 'https://tinyimg.io/i/T5rsCik.png',
        thumbnail: 'https://tinyimg.io/i/T5rsCik.png',
        caption: 'Clean design',
      },
      {
        original: 'https://tinyimg.io/i/CRUd3kw.png',
        thumbnail: 'https://tinyimg.io/i/CRUd3kw.png',
        caption: 'Screen shows what operation is happening',
      },
      {
        original: 'https://tinyimg.io/i/qDD5Gsx.png',
        thumbnail: 'https://tinyimg.io/i/qDD5Gsx.png',
        caption: 'Shows an error message on screen when division by zero is attempted',
      },
    ],
  },
  {
    id: 6,
    title: 'React Weather App',
    subtitle: 'Weather data fetching application built with React',
    technologies: ['React', 'Bootstrap', 'SASS'],
    repository: 'https://github.com/rvvergara/react-weather-app',
    demoLink: 'https://react-weather-app-rvv.netlify.com/',
    description: `
      <p>Uses the OpenWeather API to fetch weather data from selected cities all over the world.</p>
      <p>A previous version of this project was build using vanilla JavaScript and Pug for page templating. But React has proven to be a simpler solution.</p>
      <strong>Features</strong>
      <ol>
        <li>Search term autocompletion.</li>
        <li>Error message for when a city cannot be found.</li>
      </ol>
    `,
    screenshots: [
      {
        original: 'https://tinyimg.io/i/TKKF7ha.png',
        thumbnail: 'https://tinyimg.io/i/TKKF7ha.png',
        caption: '',
      },
      {
        original: 'https://tinyimg.io/i/FrqWkIl.png',
        thumbnail: 'https://tinyimg.io/i/FrqWkIl.png',
        caption: 'Autocomplete city name',
      },
      {
        original: 'https://tinyimg.io/i/oXL8htj.png',
        thumbnail: 'https://tinyimg.io/i/oXL8htj.png',
        caption: 'City cannot be found error message',
      },
    ],
  },
];
