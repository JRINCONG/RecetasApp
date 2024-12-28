import cookies from 'js-cookie'
export const BearerToken = () =>{


    const token = cookies.get('Recetas')
    console.log(token)
    return{
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    
    }