export async function getComments(url){

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP ERROR: ${response.status}`);
        }
        const data = response.json();
        return data;
    }catch(e){
        console.log(e);
        return null;
    }

}