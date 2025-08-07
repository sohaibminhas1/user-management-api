const express = require ("express");

const router = express.Router();

const {handleGetAllUsers , handleGetUserById, handleUpdateUserById,handleDeleteUserById, handleCreateNewUser} = require('../controllers/user')

router.route("/")
.get(handleGetAllUsers)
.post(handleCreateNewUser)

router.route("/:id")
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById);

module.exports = router;












/*
router.get("/users", async (req,res) =>{
    const allDBUsers = await User.find({});
    const html = `
    <ul>
    ${allDBUsers.map((user) => `<li>${user.firstName} - ${user.email}<li>`).join("")    }
    </ul>
    `;
    res.send(html);
})
*/
