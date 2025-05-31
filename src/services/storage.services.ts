import { supabase } from "../supabase-config";


const retrieveStorageData = async () => {
    const { data, error } = await supabase  
    .storage  
    .from('content')  
    .list('images', {    
        limit: 100,    
        offset: 0,    
        sortBy: { column: 'name', order: 'asc' },  
    });

    if (data) {
        return data;
    } else {
        throw new Error(`Error retrieving storage data: ${error.message}`);
    }
};

export { retrieveStorageData };