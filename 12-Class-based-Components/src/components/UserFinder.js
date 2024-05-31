import { Fragment, Component } from 'react';
import UserContext from '../store/users-context';
import Users from './Users';
import classes from './UserFinder.module.css';
import ErrorBoundary from './ErrotBoundary';

class UserFinder extends Component {
  static contextType = UserContext;
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    }
  }
  componentDidMount() {
    // Send http request...
    this.setState({ filteredUsers: this.context.users });

  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.searchTerm !== this.state.searchTerm){
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
            user.name.includes(this.state.searchTerm)),
      });

    }

  }

  searchChangeHandler(event){
    this.setState({
      searchTerm: event.target.value
    });
  }
  render() {
    return (
        <Fragment>

          <div className={classes.finder}>
            <input type='search' onChange={this.searchChangeHandler.bind(this)} />
          </div>
          <ErrorBoundary>
            <Users users={this.state.filteredUsers} />

          </ErrorBoundary>
        </Fragment>
    );
  }

}


export default UserFinder;
