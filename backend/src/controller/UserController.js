class UserController{

    index(req,res){
        return res.json({message: 'All users'});
    }

    show(req,res){
        return res.json({message: 'Show user'});
    }
    store(req,res){
        return res.json({message: 'User created'});
    }

    update(req,res){
        return res.json({message: 'User updated'});
    }

    delete(req,res){
        return res.json({message: 'User deleted'});
    }
}

export default UserController;