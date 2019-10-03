export default [
  {
    id: 1,
    title: 'FacialBook',
    subtitle: 'A Facebook Clone Written on Rails',
    repository: 'https://github.com/rvvergara/facialbook',
    demoLink: 'https://facials.herokuapp.com/',
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
        photo: 'http://tinyimg.io/i/lej8jW1.png',
        thumbnail: 'http://tinyimg.io/i/lej8jW1.png',
        caption: 'Homepage for visitors',
      },
      {
        photo: 'http://tinyimg.io/i/ejAbYVz.png',
        thumbnail: 'http://tinyimg.io/i/ejAbYVz.png',
        caption: 'Sign up page',
      },
      {
        photo: 'http://tinyimg.io/i/1JpQqAQ.png',
        thumbnail: 'http://tinyimg.io/i/1JpQqAQ.png',
        caption: 'User newsfeed',
      },
      {
        photo: 'http://tinyimg.io/i/vasZvJJ.png',
        thumbnail: 'http://tinyimg.io/i/vasZvJJ.png',
        caption: 'User making a post',
      },
      {
        photo: 'http://tinyimg.io/i/YhQUQdL.png',
        thumbnail: 'http://tinyimg.io/i/YhQUQdL.png',
        caption: 'User profile page',
      },
      {
        photo: 'http://tinyimg.io/i/iUsuM4i.png',
        thumbnail: 'http://tinyimg.io/i/iUsuM4i.png',
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
        photo: 'http://tinyimg.io/i/74fQfGQ.png',
        thumbnail: 'http://tinyimg.io/i/74fQfGQ.png',
        caption: 'Login page',
      },
      {
        photo: 'http://tinyimg.io/i/mRSiOCF.png',
        thumbnail: 'http://tinyimg.io/i/mRSiOCF.png',
        caption: 'Sign up page',
      },
      {
        photo: 'http://tinyimg.io/i/hyFbvnR.png',
        thumbnail: 'http://tinyimg.io/i/hyFbvnR.png',
        caption: 'Collection page',
      },
      {
        photo: 'http://tinyimg.io/i/ALEFczR.png',
        thumbnail: 'http://tinyimg.io/i/ALEFczR.png',
        caption: 'Updating currently read page',
      },
      {
        photo: 'http://tinyimg.io/i/LJqjq64.png',
        thumbnail: 'http://tinyimg.io/i/LJqjq64.png',
        caption: 'User management page for admins',
      },
      {
        photo: 'http://tinyimg.io/i/7aFNdnF.png',
        thumbnail: 'http://tinyimg.io/i/7aFNdnF.png',
        caption: 'Book search results page',
      },
    ],
  },
];
