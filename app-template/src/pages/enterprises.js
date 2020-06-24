import React, { Component } from 'react';
import axios from 'axios';

export default class enterprises extends Component {

    constructor() {
        super();
        this.createEmpresa = this.createEmpresa.bind(this);
        this.writeState = this.writeState.bind(this);

     this.state = {
            empresas:[],
            id:'',
            name:''
        };
      }

      async getEmpresas() {
        try {
          const res = await axios.get('http://localhost/Api_PHP/obtenerEmpresas.php');
          console.log(res.data)
              this.setState({
                  empresas:res.data
                })
              
           } catch (error) {
             console.error(error);
           }
          }

          componentDidMount() {
            this.getEmpresas();
         }


         async createEmpresa() {
            try {
              const {name} = this.state;
              const obj1 = {name:name};
              console.log("obj1");
              await axios.post('http://localhost/Api_PHP/crearEmpresa.php',obj1);
                
                 } catch (error) {
                  console.error(error);
                }
               this.setState({
                  id:'',
                  name:''
               })
               this.getEmpresas();
              }

              writeState(e) {
                const {name , value} = e.target;
                this.setState({
                 [name]:value
                  });
                }

    render() {
        return (
            <div className="container p-4">
            <nav className="navbar navbar-dark bg-dark mb-2">
                <hr/>
        <span className="navbar-brand mb-0 h1">Agregar empresa</span>
            </nav>
            <form onSubmit={this.createEmpresa}>
              <div className="form-group">
              <label>Nombre</label>
              <input className="form-control" type="text"  name="name"   onChange={this.writeState} 
              value={this.state.name} placeholder="Nombre de la compania"/>
              </div>
              
              <input type="submit" className="btn btn-success" value="Submit" />
            </form>   
            <hr/>
            <br/>
             <div className="row p-3">
                 
                  {
                   this.state.empresas.map(item=>{
                     return (
                      
                       <div className="card p-2 m-2" key={item.id}>
                        <img  width="60" src="logo192.png" alt="img"></img>
                         <div className="card-body">
                          <h6>{item.id}</h6>
                          <h6>{item.name}</h6>
                       </div>
                       </div>
                     )
                  })
                  }
                    </div>
                </div>
        )
    }
}
