export const updateObject = (oldValue,updatedValues) =>{
    return {
        ...oldValue,
        ...updatedValues
    };
};