interface SanityBody {
    _createdAt:string,
    _id:string,
    _rev:string,
    _updatedAt:string,

}
interface Image {
    _type : "image";
    asset :{
        _ref:string;
        _type : "reference";

    }
}



export interface  Post extends SanityBody {
    _type : "Post";
    name : string;
    role : string;
    image : image;
    bginfo : string;
    email:string;
    profilpic : image;
    phone : string;
    adress : string;
    socails : Socails [];

  

}
export interface  Skills extends SanityBody {
    _type : "skills";
    prograss : number;
    image:image;

}
export interface  Socails extends SanityBody {
    _type : "socail";
    title : string;
    url:string;

}
export interface  Project extends SanityBody {
    _type : "Project";
    title : string;
    summary:string;
    Linkbuild:string;
    tech:Skills [];
   

}

export interface  Experience extends SanityBody {
    _type : "experience";
    jobtitle : string;
    company : string;
    companyimage : image;
    datestart : date;
    dateend : date;
    currentwork : string;
    tech : Skills [];
    points : string[]
  

}