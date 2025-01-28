import UserTableSeeder from "./UserTableSeeder.js";

class DatabaseSeeder{

   static call (){
        UserTableSeeder.run();
    }

}

export default DatabaseSeeder;