//Kiem tra xem 1 object co rong hay khong 
export const isEmtyObject = (obj) => {
    for (const key in obj) {
        if(obj.hasOwnProperty(key)) {
            return false;
        }
        //hasOwnProperty: Kiem tra xem object ton tai key hay khong
    }
    return true;
}