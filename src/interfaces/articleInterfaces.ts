

// Interface for save article in db
export interface IArticleData {
    type:'',
    brand:'',
    model:'',
    year:'',
    contition:'',
    description:'',
    image:'',
    price:'',
}


// Interface article from db
export interface IArticleFormDB {
    id: any;
    type:'',
    brand:'',
    model:'',
    year:'',
    contition:'',
    description:'',
    image:'',
    price:'',
}