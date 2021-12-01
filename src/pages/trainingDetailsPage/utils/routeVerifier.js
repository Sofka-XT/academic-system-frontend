import { COACH, APPRENTICE } from "../../../constants/constant"

export const roleVerifier = ( userRole, id ) =>{

    if( userRole === COACH  ){
        return `/dashboard/traininglist/trainingdetail/${id}`
    }

    if(userRole === APPRENTICE){
        return `/dashboard/apprentice/traininglist/trainingdetail/${id}`
    }
}