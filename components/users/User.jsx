import React, {Component} from 'react';
import UserCard from './UserCard.jsx';

class User extends Component{
    onClick(e){
        e.preventDefault();
        const {updateUserId, user} = this.props;
        updateUserId(user);
    }
    render(){
    const {user, activeUser, userIdToShow} = this.props;
    const active = user === activeUser ? 'active' : '';

    return(
        <li className={active} role='presentation'>
            <a onClick={() => this.props.updateUserId(this.props.users.Id)}>
                {this.props.users.Name}
            </a>
            {userIdToShow === this.props.users.Id ? <UserCard 
                active={active}
                key={this.props.users.Id}
                user={this.props.People[userIdToShow-1]}/> : null}
        </li>
    )
    }
}

export default User;