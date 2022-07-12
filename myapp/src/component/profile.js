import React, {Component} from 'react'


class Profile  extends Component {
constructor(){
    super()
    this.state ={
    Bio:'I am currently a student at GO My Code Academy,Architecte is looking for a new opportunity as a software Developper.',
    Profession:'FullName="Dridi Syrine" Age="25 years old" Gender="Female" Interests="Learning'
    }
}
render() { 
    let Bio = this.state.Bio
    let Profession = this.state.Profession

    return (
    <div className="App">
        <img src="https://i.pinimg.com/474x/b2/fc/f7/b2fcf7e224c95da3197b308de719bd46.jpg" className="mr-3" alt="Biophoto"  style={{width:"280px"}}/>
        <h3>{Bio}</h3>
        <h4>{Profession}</h4>

        </div>
    );
}
}

export default Profile ;

