// import React from 'react';
// import ReactDOM from 'react-dom';

// function App(){
//   return <h1>Hello, React!</h1>;
// }

// ReactDOM.render(<App />, document.getElementById('root'));

// export default App


// date 18.10.2024________________
//import necessary react componenets


// import React from 'react';
// import ClickerCounter from './ClickerCounter';

// const App = () => {
//   return(
//     <div>
//       <ClickerCounter />
//     </div>
//   );
// };
// export default App;




// import React from 'react';
// import ClickerCounter1 from './clickercounter1'; // Ensure the import matches the component file name
// import './clickercounter1.css';

// const App = () => {
//   return (
//     <div>
//       <ClickerCounter1 /> {/* Correctly using the component with uppercase */}
//     </div>
//   );
// };

// export default App;




import React from 'react';
import ReactDOM from 'react-dom';
import DigitalClock from './digitalclock'; // Adjust the path as necessary
import './digitalclock.css'; 

const App = () => {
  return (
    <div>
      <DigitalClock />
    </div>
  );
};

export default App;