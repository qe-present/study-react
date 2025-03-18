export function getDuration(){
    const storeExpiresIn=localStorage.getItem("expiration");
    const expiresIn=new Date(storeExpiresIn).getTime();
    const now=new Date().getTime()
    const duration=expiresIn-now;
    return duration;
}
export function getAuthToken() {
    const token=localStorage.getItem("token");
    if(!token){
        return;
    }
    const duration=getDuration();
    if(duration<=0){
        return 'EXPIRED';
    }
    return token;
}
