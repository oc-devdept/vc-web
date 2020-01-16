import React, { Component } from 'react';
import Navbar from 'Components/Layout/Navbar';
import Breadcrumb from 'Components/Common/Breadcrumb';



import { connect } from "react-redux"
import { handleAccountLogout} from "Ducks/user/UserActions"



class Index extends Component {

    

    _HandleLogout = () => {  
        this.props.handleAccountLogout()
    }

    render() {

       
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="User Homepage" />
                <section className="about-area pb-60" style={{border:'1px solid black'}}>
                    <div className="container" style={{border:'1px solid black'}}>
                        
                        <div className="row align-items-center">
                            User home page
                        </div>
                        

                        <button onClick={this._HandleLogout} className="return-store">Click here to logout</button>


                    </div>
                </section>
            </React.Fragment>
        );
    }
}


const mapStateToProps = state => {
    const { UserState } = state
    const { user } = UserState
    return {  user }
}
  
export default connect(
  mapStateToProps,
  {
    handleAccountLogout,
  }
)(Index)