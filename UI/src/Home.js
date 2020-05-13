import React, { Component } from 'react';
import AppNav from './AppNav';
import {Table, Form, Container, FormGroup, Input, Button, Label } from 'reactstrap';
import Book from './Book';




class Home extends Component {
    emptyItem = {
        id: 10,
        name: '',
        author: '',
        count: 89
    }


    constructor(props) {
        super(props)
        this.state = {
            isLoading : true,
            Books: [],
            item: this.emptyItem

        }
    }


    async remove(id) {
        console.log(id);
        const url = "/api/delete/" + id ;
        await fetch( url , {
            method: 'DELETE' , 
            headers : {
                'Accept': 'application/json',
                'Content-Type' : 'applicarion/json'
            }
        }).then( () => {
            let updatedBooks = [...this.state.Books].filter(i => i.id !== id);
            this.setState({Books : updatedBooks});
        }).catch((e)=>{
            console.log(e);
        })
    }

    async componentDidMount(){
        try{
        const response=await fetch('http://dockerspringboot-dev.us-west-1.elasticbeanstalk.com/api/books');
        console.log(response);
        const body = await response.json();
        this.setState({Books : body, isLoading: false});
        }
        catch(e){
            console.log(e);
        }
    }

        
    state = {  }
    render() { 
        const {Books , isLoading} = this.state;
         if(isLoading) {
            return (<div>Loading....</div>); 

         }


        let rows = 
            Books.map(
                Book =>
                <tr>
                    <td>{Book.name}</td>
                    <td>{Book.author}</td>
                    <td>{Book.count}</td>
                    <td><Button size = "sm" color = "danger" onClick = { () => this.remove(Book.id)}>Delete</Button></td>

                </tr>
            )


        return ( 
            <div>
                 <AppNav/>
                 <h2 style = {{display: 'flex', justifyContent: 'center', alignItems:'center', height: '10vh'}}>
                     Welcome To MLK Library!
                 </h2>

                 <Container>
                     <h3>Book List</h3>
                     <Table className="mt-4">
                         <thead>
                             <tr>
                                 <th width = "30%">Book Name</th>
                                 <th width = "30%">Author Name</th>
                                 <th width = "30%">Count</th>
                                 <th width = "10%">Action</th>

                             </tr>
                         </thead>
                         <tbody>
                             {rows}
                         </tbody>

                     </Table>
                 </Container>

            </div>
         );
    }
}
 
export default Home;