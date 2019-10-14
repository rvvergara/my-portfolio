export default [
  {
    id: 1,
    title: 'FacialBook',
    subtitle: 'A Facebook Clone Written on Rails',
    repository: 'httpss://github.com/rvvergara/facialbook',
    demoLink: 'httpss://facials.herokuapp.com/',
    technologies: ['ruby', 'ruby on rails', 'jquery', 'bootstrap'],
    description: `
      <p>In this project, I and my coding partner used Ruby on Rails to clone Facebook.</p>
      <p>The app was built on pure Rails. With jQuery some of the button effects were created.</p>
      <h3>Features</h3>
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
        photo: 'https://tinyimg.io/i/lej8jW1.png',
        thumbnail: 'https://tinyimg.io/i/lej8jW1.png',
        caption: 'Homepage for visitors',
      },
      {
        photo: 'https://tinyimg.io/i/ejAbYVz.png',
        thumbnail: 'https://tinyimg.io/i/ejAbYVz.png',
        caption: 'Sign up page',
      },
      {
        photo: 'https://tinyimg.io/i/1JpQqAQ.png',
        thumbnail: 'https://tinyimg.io/i/1JpQqAQ.png',
        caption: 'User newsfeed',
      },
      {
        photo: 'https://tinyimg.io/i/vasZvJJ.png',
        thumbnail: 'https://tinyimg.io/i/vasZvJJ.png',
        caption: 'User making a post',
      },
      {
        photo: 'https://tinyimg.io/i/YhQUQdL.png',
        thumbnail: 'https://tinyimg.io/i/YhQUQdL.png',
        caption: 'User profile page',
      },
      {
        photo: 'https://tinyimg.io/i/iUsuM4i.png',
        thumbnail: 'https://tinyimg.io/i/iUsuM4i.png',
        caption: 'User friends list page',
      },
    ],
  },
  {
    id: 2,
    title: 'Bookstore CMS Next App',
    subtitle: 'Written in NextJS with Redux and JWT Authentication',
    repository: 'httpss://github.com/rvvergara/bookstore-cms-next-app',
    demoLink: 'httpss://bookstore-cms-next-app.herokuapp.com',
    technologies: ['next js', 'react', 'redux', 'jest', 'sass'],
    description: `
      <p>A Simple Books content-management-system built using NextJS and Redux</p>
      <p>Connects to a backend Rails JSON API for data reading and writing.</p>
      <h3>Features</h3>
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
        photo: 'https://tinyimg.io/i/74fQfGQ.png',
        thumbnail: 'https://tinyimg.io/i/74fQfGQ.png',
        caption: 'Login page',
      },
      {
        photo: 'https://tinyimg.io/i/mRSiOCF.png',
        thumbnail: 'https://tinyimg.io/i/mRSiOCF.png',
        caption: 'Sign up page',
      },
      {
        photo: 'https://tinyimg.io/i/hyFbvnR.png',
        thumbnail: 'https://tinyimg.io/i/hyFbvnR.png',
        caption: 'Collection page',
      },
      {
        photo: 'https://tinyimg.io/i/ALEFczR.png',
        thumbnail: 'https://tinyimg.io/i/ALEFczR.png',
        caption: 'Updating currently read page',
      },
      {
        photo: 'https://tinyimg.io/i/LJqjq64.png',
        thumbnail: 'https://tinyimg.io/i/LJqjq64.png',
        caption: 'User management page for admins',
      },
      {
        photo: 'https://tinyimg.io/i/7aFNdnF.png',
        thumbnail: 'https://tinyimg.io/i/7aFNdnF.png',
        caption: 'Book search results page',
      },
    ],
  },
  {
    id: 3,
    title: 'Battleship',
    subtitle: 'Classic Strategy Board Game recreated using plain vanilla JavaScript',
    repository: 'httpss://github.com/rvvergara/battleship',
    demoLink: 'httpss://ryto-battleship-game.netlify.com/',
    technologies: ['javascript', 'jest', 'webpack'],
    description: `
    <p>This project utilizes the factory and module architecture pattern. This is also the first project where I showcase my Jest skills.</p>
    <h3>Features:</h3>
    <ol>
      <li>User plays against an artificial intelligence</li>
      <li>User can drag and drop his/her ships to desired position and orientation.</li>
      <li>Enemy ships are set in random positions.</li>
    </ol>
    `,
    screenshots: [
      {
        photo: 'https://tinyimg.io/i/hG4YbJt.png',
        thumbnail: 'https://tinyimg.io/i/hG4YbJt.png',
        caption: 'Left side is user board, right side is the AI board',
      },
      {
        photo: 'https://tinyimg.io/i/kMSSWI7.png',
        thumbnail: 'https://tinyimg.io/i/kMSSWI7.png',
        caption: 'Ships turn red when hit',
      },
      {
        photo: 'https://tinyimg.io/i/PgMdbp9.png',
        thumbnail: 'https://tinyimg.io/i/PgMdbp9.png',
        caption: 'Computer beats you',
      },
    ],
  },
  {
    id: 4,
    title: 'Flight Booker',
    subtitle: 'A simple app to book flights built with Rails',
    technologies: ['ruby', 'ruby on rails', 'postgresql', 'bootstrap', 'rspec'],
    repository: 'httpss://github.com/rvvergara/flight-booker',
    demoLink: 'httpss://flight-booker-121618.herokuapp.com/',
    description: `
      <p>This rails app is a simple showcase of utilizing the power of Rails forms.</p>
      <h3>Features:</h3>
      <ol>
        <li>Users can search flights based on departure and arrival airports and flight dates.</li>
        <li>Users can select flights based on search results.</li>
        <li>Users can fill out a booking form.</li>
        <li>Users can edit booking form for flights.</li>
      </ol>
    `,
    screenshots: [
      {
        photo: 'https://tinyimg.io/i/PUwQpsC.png',
        thumbnail: 'https://tinyimg.io/i/PUwQpsC.png',
        caption: 'Homepage',
      },
      {
        photo: 'https://tinyimg.io/i/GfvCbSq.png',
        thumbnail: 'https://tinyimg.io/i/GfvCbSq.png',
        caption: 'User can select which flight to book',
      },
      {
        photo: 'https://tinyimg.io/i/ZAe05RN.png',
        thumbnail: 'https://tinyimg.io/i/ZAe05RN.png',
        caption: 'User then fills out his/her details in the booking form',
      },
      {
        photo: 'https://tinyimg.io/i/7cvVxWb.png',
        thumbnail: 'https://tinyimg.io/i/7cvVxWb.png',
        caption: 'User gets confirmation receipt for the booking',
      },
    ],
  },
  {
    id: 5,
    title: 'React Calculator',
    subtitle: 'A simple calculator app built with React',
    technologies: ['react', 'sass', 'javascript', 'flexbox'],
    repository: 'httpss://github.com/rvvergara/react-calculator',
    demoLink: 'httpss://ryto-react-calculator.netlify.com/',
    description: `
    <p>In this react app, I showcased basic usage of React hooks as well as fundamental mathematical logic building.</p>
    <h3>Features</h3>
    <ol>
      <li>All basic arithmetic operations</li>
      <li>Error message when division by zero is attempted</li>
      <li>Highly responsive design</li>
    </ol>
    `,
    screenshots: [
      {
        photo: 'https://tinyimg.io/i/fwhA9L1.png',
        thumbnail: 'https://tinyimg.io/i/fwhA9L1.png',
        caption: 'Clean design',
      },
      {
        photo: 'https://tinyimg.io/i/NCqT9bX.png',
        thumbnail: 'https://tinyimg.io/i/NCqT9bX.png',
        caption: 'Screen shows what operation is happening',
      },
      {
        photo: 'https://tinyimg.io/i/Eksfa9n.png',
        thumbnail: 'https://tinyimg.io/i/Eksfa9n.png',
        caption: 'Shows an error message on screen when division by zero is attempted',
      },
    ],
  },
];
