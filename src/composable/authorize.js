import {ref} from "vue";

const authStatus = ref(false);

const customerInfo = ref("");

const customerInfoFromDB = [{fullname: "", username: "", phonenumber: "", enterdate : "", apptime : "", barbers : "", comments : ""}];

const authorize = () => {
    const signin = (fullname, username, phonenumber, enterdate, apptime, barbers, comments) =>
    {
        const customersInfoFromDB = customerInfoFromDB.find(
            (customerInfo) => customerInfo.fullname === fullname && customerInfo.username === username && customerInfo.phonenumber === phonenumber && customerInfo.enterdate === enterdate && customerInfo.apptime === apptime && customerInfo.barbers === barbers && customerInfo.comments === comments 
        )
        if(customersInfoFromDB)
    {
        authStatus.value = true;
        customerInfo.value = customersInfoFromDB.fullname;
    }
    };
    
    const signout = () => {
        authStatus.value = false;
        customerInfo.value ="";
    };
    return {authStatus, signin, signout}
};

export default authorize;

