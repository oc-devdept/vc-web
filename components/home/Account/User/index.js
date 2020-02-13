import React, { Component, useState, useEffect } from 'react';
import Api from 'Api'
import { useSelector, useDispatch } from "react-redux";
import UserProfile from './components/profile'
import { updateUserProfile} from "Ducks/user/UserActions"


const Index = ({}) => {


    const [Profile, setProfile] = useState();
    const reduxProfile = useSelector(state => state.UserState.profile);
    useEffect(() => {setProfile(() => (reduxProfile))}, [reduxProfile]);

    // call redux api for profile
    // const userId = useSelector(state => state.UserState.user);
    // useEffect(() => {dispatch(retrieveUserProfile(userId))}, []);
    
    // update incoming profile to local state
    const dispatch = useDispatch();
    const _SaveUserDetails  = (UserDetail) => {
        dispatch(updateUserProfile({UserDetail, id:Profile.customer.id}))
    }


    return (
        <div className="d-flex" style={{flex:1}}>
            <UserProfile
                Profile={Profile}
                _SaveUserDetails={_SaveUserDetails}
            />
        </div>
    )
    
}
  
export default Index