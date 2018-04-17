import React, {Component} from "react";

class Card extends Component {
    obj={
        firstName:this.props.firstName,
        lastName:this.props.lastName,
        image:this.props.picture,
        zip:this.props.zip
    }
    render(){
        return(
            <div className="card" onClick={ () => this.props.randomize()} >
            <img className="card-img-top"
            src={this.props.picture}
            alt={this.props.firstName}
            />
            name :{this.props.firstName + " "+ this.props.lastName}
            <br />
            location: {this.props.zip}
            <button className="btn btn-warning" onClick={() => this.props.handleClick(this.obj)}>keep </button>
            {/* <button className="btn btn-danger" onClick={()=> console.log("props", this.props)}>log </button> */}
            
            </div>
        )
    }
}
export default Card
