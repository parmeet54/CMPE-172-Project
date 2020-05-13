import React, { Component } from 'react';
import AppNav from './AppNav';
import './App.css';
import {Table, Form, Container, FormGroup, Input, Button, Label, NavLink } from 'reactstrap';
import { Link} from 'react-router-dom';


class Book extends Component {


  /*  {
        "id": 10,
        "name": "mcemckm",
        "author": "Shiv Kumar Batalvi",
        "count": 89
    } */


    constructor(props) {
        super(props);

        this.emptyItem = {
            name: '',
            author: '',
            count: 89
        }
        
        this.state = {
            isLoading : true,
            bookName: "",
            authorName:"",
            count:"",
            Books: [],
            item: this.emptyItem

        }

    
    }


    handleSubmit=async (event)=> {
        event.preventDefault();
        const createItem = this.emptyItem;
        createItem.author = this.state.authorName;
        createItem.name= this.state.bookName;
        createItem.count =  Number(this.state.count); 
        const url = 'http://dockerspringboot-dev.us-west-1.elasticbeanstalk.com/api/add';
        const proxyurl = 'https://cors-anywhere.herokuapp.com/';
        console.log(createItem);
    try {
        let xhr = new XMLHttpRequest();
        await xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify(createItem));
        xhr.addEventListener("readystatechange", () => {
            if (xhr.readyState === 4) {
                const bookDetails = JSON.parse(xhr.responseText);
                console.log(bookDetails);
            }

        });
    } catch (error) {
        console.log('error getting data', error);
    }
        
        
    }


    handleBookNameChange=(event)=>{
        const value = event.target.value
        this.setState({bookName:value});
        console.log(this.state);
    }

    handleAuthorNameChange=(event)=>{
        const value = event.target.value
        this.setState({authorName:value});
        console.log(this.state);
    }

    handleCount=(event)=>{
        const value = event.target.value
        this.setState({count:value},()=>{
            console.log(this.state);
        });
     
    }
    
    async componentDidMount(){

    }

 
    
     render() { 

        const title = <h3>Add a new Book</h3>
        
        return ( 

                <div>
                    <AppNav/>
                    <Container>
                        {title}
                        <Form>
                            <FormGroup>
                                <label for="bookname">Book Name </label>
                                <br></br>
                                
                                <input type="text" name="bookname" id="bookname" onChange={this.handleBookNameChange}></input>
                            </FormGroup>

                            <FormGroup>
                                <label for="authorname">Author Name </label>
                                <br></br>
                                <input type="text" name="authorname" id="authorname" onChange={this.handleAuthorNameChange}></input>
                            </FormGroup>

                            <FormGroup>
                                <label for="count">Number of Copies </label>
                                <br></br>
                                <input type="text" name="count" id="count" onChange={this.handleCount}></input>
                            </FormGroup>
                                            
                            <FormGroup>
                                <Button onClick={(e)=>this.handleSubmit(e)} color={"primary"} type="submit">Add
                                </Button>{' '}
                            </FormGroup>


                        </Form>

                    </Container>

                    
                </div>
         );
    }
}
 
export default Book;