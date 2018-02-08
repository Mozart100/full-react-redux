import { AppStoreState } from './index';
import { Map } from 'immutable';
import UserModel from '../../Model/UserModel';

export  interface UserState {
    user:UserModel;
}

function defaultState (): AppStoreState {
    let initialData =  {id: 0 ,userName : 'no-xxone'};

    return Map ({user : Map(initialData)});
}

export default function userReducer(state:AppStoreState = defaultState(), action:any) {

    switch (action.type) {

        case 'CREATE_NEW_USER_ID':
            return {
                // username: user.username,
                // id: action.id
            };


        default:
            return state;
    }
}