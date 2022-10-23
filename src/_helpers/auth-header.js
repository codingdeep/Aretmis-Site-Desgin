export function authHeader() {
    // return authorization header with token
if (localStorage.getItem("user") != null) {
  let user = JSON.parse(localStorage.getItem('user'));
 
    if (user && user.token) {
        return { 'X-Auth-Token': user.token, 'X-Xsrf-Token':user.csrfToken, 'Content-Type': 'application/json' };
    } else {
        return {};
    }
} 
else{
  return {}
}   

}