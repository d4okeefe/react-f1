import React from 'react';

class Fetch extends React.Component {
  componentDidMount() {
    const apiUrl = 'https://api.github.com/users/d4okeefe/repos';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  }
  render() {
    return (
      <div>my Component has Mounted, Check the browser 'console' </div>
      );
  }
}

export default Fetch;





// export default function Fetch() {
//   return (
//     <>
//       <div>Fetch item</div>
//     </>
//   );
// }
