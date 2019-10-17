import React from 'react';
import NewComponent from './NewComponent'
import FuntionalComponent from './FunctionalComponent'
import TopAppBar from './components/TopAppBar'
import ListItemsPhotos from './containers/ListItemsPhotos'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction';
import LabelBottomNavigation from './components/LabelBottomNavigation'
import FormEvent from './containers/FormEvent';




//class
class App extends React.Component{

  // constructor(props){
  //   super(props)
  //   //
  //   this.state = {
  //     nama: 'Ardhika Rafi',
  //     umur: 21
  //   };
  // }

  // ---LEBIH RUMIT---
  // constructor(){
  //   this.kurang = bind(this.kurang)
  // }

  //Ringkas
  state = {
    nama: 'Ardhika Rafi P',
    umur: 20,
    counter:0
  };

  functionTambah = () => {
    this.setState({
      // counter: 1
      counter: this.state.counter +1
    });
  }
  // functionKurang = () => {
  //   this.setState({
  //     // counter: -1
  //     counter: this.state.counter -1
  //   });    
  // }
  functionKurang = () => {
    if(this.state.counter > 0){
      this.setState({
        // counter: -1
        counter: this.state.counter -1
      });
    }
      
  }

  
  render(){
    // if(this.state.counter <0){
    //   alert('Sudah kurang 0');
    // }
    return (
      // <div className="kelasku" align="center">
      //   <h1>Belajar React JS</h1>
      //   {this.state.counter}<br/>
      //   <button onClick={this.functionTambah}>+</button>
      //   <button onClick={this.functionKurang}>-</button>
      //   <NewComponent/>
      //     {/* // {this.state.nama}
      //     // {this.state.umur}
      //     // <FuntionalComponent/>
      //     // <FuntionalComponent/> */}
      // </div>
      <div>
        <TopAppBar/>
        <ListItemsPhotos/>
        <h2 align="center">Form</h2>
        <FormEvent/>
      </div>
    );
  }
}

// class App extends React.Component {
//   render(){
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React JS Ardhika Rafi P
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React JS Ardhika Rafi
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
