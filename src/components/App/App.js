import React, { Component } from 'react';
import './App.css';

 
class App extends Component {

  state= {
    students:[
      { 
        id: 1, 
        name: 'John',
        surname: 'Doe',
        phone: '123-456-789',
        isFavorite: false
      },
      {
        id: 2, 
        name: 'Steve',
        surname: 'Stevens',
        phone: '987-654-321',
        isFavorite: true
      }
    ],
    
    name: '',
    surname: '',
    number: ''
  
}

AddFavourite = studentId => {

  this.setState({
    students: this.state.students.map(student =>
      student.id !== studentId
        ? student
        : {
            ...student,
            isFavorite: !student.isFavorite,
          }
    ),
  });
    
  
};

handleSubmit = (event) => {
  event.preventDefault();
  this.setState({
    students: this.state.students.concat(
      {
        id: Date.now(),
        name: this.state.name,
        surname: this.state.surname,
        phone: this.state.number,
        isFavorite: false
      }
    )  
  })

}

handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

deleteMan = studentId => {
  this.setState({
    students: this.state.students.filter(student => student.id !== studentId)
  })
}


 
  render() {
   
    
    return (
     <div className='App'>
        <form onSubmit={this.handleSubmit}>
          <input type='textarea' value={this.state.name} name='name' placeholder='Name' onChange={this.handleChange}></input>
          <input type='textarea' value={this.state.surname} name='surname' placeholder='Surname' onChange={this.handleChange}></input>
          <input type='textarea' value={this.state.number} name='number' placeholder='Number' onChange={this.handleChange}></input>
          <button type='submit'>Add</button>
        </form>
       
        <table style={{marginTop: 50}}>
        <thead>
          <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Phone</th>
          <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.students.map(student => 
            <tr style={student.isFavorite ? {color: 'yellow'} : {color: 'black'}}>
            <td>
              {student.name}
            </td>
            <td>{student.surname}</td>
            <td>{student.phone}</td>
            <td><button onClick={() => this.AddFavourite(student.id)}>Favourite</button>
            <button onClick={() => this.deleteMan(student.id)}>Delete</button>
            </td>
           </tr>
            
            )}
          
        </tbody>
        </table>
        

      </div>
    );
  }
}

export default App;
