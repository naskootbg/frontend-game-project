import axiosUrl from "@/config/axiosApp";
import { logger } from "@/utils/logger";

export async function doLogin({email, password}){
    try{
const res = await axiosUrl.post('login',{
    email,
    password
},{
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        
      },
});
if(res.status = 200){
    location.reload()
    return res.data.accessToken;
    
}

return "";
    }
    catch (e){
logger.error(e);
return[];
    }
}

export async function getCurrentUser(accessToken) {
    try{
        const res = await axiosUrl.get(`manage/info`,{

            headers: {
                Authorization: `Bearer ${accessToken}`,
              },
        } );
       
        return res.data;
            }
            catch (e){
        logger.error(e);
        return[];
            }
            
  }

  export async function doLogout(accessToken) {
    try{
        const res = await axiosUrl.post('logout',{},{
            headers: {
                'accept': '*/*',               
              },
        });
        
        
            }
            catch (e){
        logger.error(e);
        return[];
            }
        }