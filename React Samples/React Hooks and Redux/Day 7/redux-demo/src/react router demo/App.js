import React from 'react'
import {Route, Switch,Redirect, Link, useHistory} from 'react-router-dom';
import NavigationComponent from './NavigationComponent';
const HomeComponent = (props)=>{

    console.log(props);
    return (
    <div>{props.greet}, Home Page</div>
    )
}

const AboutComponent = () =>{
    return (
        <div>About Us Page</div>
    )
}

const ContactComponent = () =>{
    return (
        <div>Contact Us Page</div>
    )
}

const ErrorComponent = () =>{
    return (
        <div>Error : Page Not Found !!</div>
    )
}

const users = [{
    id:'123',
    name:'James'
},{
    id:'456',
    name:'John'
},{
    id:'789',
    name:'Mark'
},
{
    id:'007',
    name:'James Bond'
}];

const UsersComponent = () =>{
    return(
        <div>
            {users.map(user => (
               <Link to={`/user/${user.id}`} key={user.id}> {user.id} <br></br></Link>))
            }
        </div>
    )
}


const UserComponent = (props) =>{

    console.log(props);
    const userId = props.match.params.userId;
    //console.log(userId)
    //const user = (users.filter(user => user.id === userId));
    //console.log(user[0].name);
    return (
        
        <div>
            <h5> Name : {users.filter(user => user.id === userId)
                       .map(user => user.name)} </h5>
        </div>
    )
}


const App = () => {
    const id = 456;

    let history = useHistory();

    function clickHandler(){
        console.log('Clicked...',history);
        history.push('/');
    }


    return (
        <div>
            <h1>Routing Demo</h1>
            <NavigationComponent/>
            <Switch>
            <Redirect  exact path="/" to="/home"/>
            <Route path="/home"  component={
                    (props) => <HomeComponent {...props}  
                    greet="Good Morning"/> } />
            <Route path="/about"  component={AboutComponent}/>
            <Route path="/contact"  component={ContactComponent}/>
            <Route path="/users" component={UsersComponent}/>
            <Route path="/user/:userId" component={UserComponent}/>
            <Route component={ErrorComponent}/>
            </Switch>
            <button onClick={clickHandler}>Go To Home</button>
        </div>
    )
}
export default App
