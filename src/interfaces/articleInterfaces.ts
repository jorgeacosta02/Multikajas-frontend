

// Interface for save article in db
export interface IArticleData {
    name: string;
    brand: string;
    group1: string;
    group2: string;
}


// Interface article from db
export interface IArticleFormDB {
    id: any;
    name: string;
    brand: string;
    group1: string;
    group2: string;
}