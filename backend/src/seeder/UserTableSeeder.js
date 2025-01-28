import Users from "../models/Users.js";

class UserTableSeeder{

   static run(){
        let usersData=[
            {
                name:'admin',
                email:'admin@gmail.com',
                password:'admin002',
                gender:'male',
                role:'admin',
                image:''
            },
            {
                name:'user',
                email:'user@gmail.com',
                password:'user002',
                gender:'male',
                role:'user',
                image:''
            }
        ];

        usersData.forEach(async (user) => {
               let  total = await Users.countDocuments({email:user.email});
               if(total==0){
                   await Users.create(user);
               }
        });

    }

}

export default UserTableSeeder;