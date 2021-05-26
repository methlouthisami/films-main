import React, { Component } from 'react'
import axios from 'axios'
import {Card} from 'react-bootstrap'
import UpdateMovies from './UpdateMovies'



 


class PostForm extends Component {


    state = {

        title: '',
        rating: '',
        genre:'',
        inpuut: []

    }






    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = e => {
        e.preventDefault()
        console.log("hhhh", this.state)
        axios.post(' http://localhost:3004/posts', this.state)
            .then(response => {
                console.log(response)

            })
            .catch(error => {
                console.log(error)
            })
    }

    getData = () => {
        axios.get('http://localhost:3004/posts')
            .then((response) => {
console.log("axios.get")
                this.setState({ inpuut: response.data })
            })
            .catch((err) => console.log('erreurrr', this.inpuut))
    }
    componentDidMount() {
        this.getData()
    }
  //delete movies
  deleteMovie=(id)=> {
    axios.delete(`http://localhost:3004/posts/${id}`)
    .then(response => {
        console.log("response",response);
      })
    .catch(err=> 
      console.log(err)
    );
  }

    //delete movies
  render() {
        const { title, genre,rating } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler} >

                    <div><input type="text" name="title" value={this.title} onChange={this.changeHandler} placeholder="title" /></div>
                    <div><input type="text" name="genre" value={this.genre} onChange={this.changeHandler} placeholder="genre"/></div>
                    <div><input type="text" name="rating" value={this.rating} onChange={this.changeHandler}placeholder="rating" /></div>
                  

                </form>
                <button type="submit" onClick={this.submitHandler}>submit</button>

                <div className='d-flex justify-content-around flex-wrap'>
                {this.state.inpuut.map(el => (
                    <div >       <Card style={{ width: "15rem" }} onSubmit={this.submitHandler}>
                        <Card.Img variant="top" src={el.image} />
                        <Card.Body>
                            <Card.Title>{el.title}</Card.Title>
                            <Card.Text>
                                <div className="mr-auto">
                                    {el.rating}
                                    <img src="/favoris.png" className="favoris" />
                                </div>
                                <h6>{el.genre}/</h6>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                        <button className="az"  onClick={() =>this.deleteMovie(el.id)}>remove</button> 
                        <UpdateMovies el={el}/>
                         </div>
                       

                ))}
                </div>
            </div>
        )
    }
}
export default PostForm;                   