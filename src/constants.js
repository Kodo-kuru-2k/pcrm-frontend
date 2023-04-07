export const baseUrl='http://localhost:3000/api'
export let headers = {
    headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': `${baseUrl}`,
        'Authorization': window.sessionStorage.getItem("Authorization")
    }
    
}
export let user_type ={
    'type':window.sessionStorage.getItem("type")
};