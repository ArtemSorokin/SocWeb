import react, {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

type FriendsProfilePropsType = {


}


export const FriendsProfile = (props:FriendsProfilePropsType)=> {
let {userId} = useParams()

    return <div>
        <div>
        Friends Profile
        </div>
        <div>
            {userId}
        </div>


    </div>

}