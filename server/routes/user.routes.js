const UserController = require('../controllers/user.controllers')

module.exports = app => {
    // create
    app.post("/api/users/new", UserController.createUser);
    // read all
    app.get("/api/users/", UserController.getAllUsers);
    // read one
    app.get("/api/users/:user_id", UserController.getOneUser);
    // update
    app.put("/api/users/update/:user_id", UserController.updateUser);
    // delete
    app.delete("/api/users/delete/:user_id", UserController.deleteUser);
}