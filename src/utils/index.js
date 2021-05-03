const KEY = "email";
export const login = (user) => {
  if(user.email==='test@test.com' && user.password==='test'){
    localStorage.setItem(KEY, user.email);
    return true;
  }
    
    return false;
}

export const logout = () => {
    localStorage.removeItem(KEY);
}

export const isLogin = () => {
    if (localStorage.getItem(KEY)) {
        return true;
    }

    return false;
}