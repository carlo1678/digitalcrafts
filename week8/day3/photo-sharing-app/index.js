const express = require("express");
// const cors = require("cors");
const app = express();
const Sequelize = require('sequelize');
const { User, Photo } = require('./models');
const port = process.env.PORT || 3070;

app.use(express.json());
// app.use(cors());

// Creating a New User
// Use .create() and pass it key-value pairs for the column names and values for the new row.
app.post('/users', async (req, res) => {
    const { firstName, lastName, email } = req.body;
    const newUser = await User.create({
        firstName,
        lastName,
        email
    });
    
    res.json({
        id: newUser.id
    });
})

// Retrieving all users by getting all rows. Using .findAll() 
app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

// Providing an attributes option to specify column names by "lastname". 
app.get('/users/by-last-name', async (req, res) => {
    const users = await User.findAll({
        attributes: ['lastName']
    });
    res.json(users);
});

// Retrieving a row by the id (Primary Key). Also adding some error handling.
app.get('/users/:id', async (req, res) => {
    try{
        const oneUser = await User.findByPk(req.params.id);
        res.json(oneUser);
    } catch (e) {
        console.log(e);
        res.status(404).json({
            message: 'User not found'
        });
    }
});

// Doing a text search using the 'where' option.
app.post('/users/search', async (req, res) => {
    const users = await User.findAll({
        where: {
            [Sequelize.Op.or]: [
                { 
                    firstName: req.body.term,
                    lastName: req.body.term
                }
            ]
        },
        include: [{
            model: Photo
        }]
    });
    res.json(users);
});

// Same thing right here but it's a search on multiple fields. Specifying a special key inside the 'where' Object.
// The square brackets around Sequelize.Op.or tells JavaScript to use the value of Sequelize.Op.or as the key (as opposed to using the literal String "Sequelize.Op.or" as the key).
// app.post('/users/search', async (req, res) => {
//    const users = await User.findAll({
//        where: {
//            [Sequelize.Op.or]: [
//                { 
//                    firstName: req.body.term,
//                    lastName: req.body.term
//                }
//            ]
//        }
//    });
//    res.json(users);
 //});

 // Updating Existing Users
 // '.update()' accepts the key-value pairs to update. it is best to use a where options so that you don't update all rows.
 app.post('/users/:id', async (req, res) => {
    const { id } = req.params;
    
    // Assuming that `req.body` is limited to
    // the keys firstName, lastName, and email
    const updatedUser = await User.update(req.body, {
      where: {
        id
      }
    });
    
    res.json(updatedUser);
});

// Deleting a user using the 'destroy()' method.
app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    const deletedUser = await User.destroy({
        where: {
            id
        }
    });
    res.json(deletedUser);
});

// Getting all users with their Photos.
app.get('/users/photos', async (req, res) => {
    const users = await User.findAll({
        include: [{
            model: Photo
        }]
    });
    res.json(users);
});

// Get all Photos including the User Object with each Photo.
app.get('/photos/users', async (req, res) => {
    const photos = await Photos.findAll({
        include: [{
            model: User
        }]
    });
    res.json(photos);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });


