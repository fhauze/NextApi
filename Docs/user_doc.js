const users = [
    {
        id:1,
        name:'Ahmad'
    }
];
const listUser = {
    tags: ["User"],
    description:"For User",
    responses:{
        200:{
            description:'ok',
            content:{
                "application/json" :{
                    schema:{
                        type:"object",
                        example:{
                            count:1,
                            user:users
                        }
                    }
                }
            }
        }
    }
}
export const user_docs = {
    "/users" : 
    {
        get:listUser,
    }
}