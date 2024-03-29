const router = require("express").Router();
const { User, UserFavourites } = require("../../models");

// CREATE new user
router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = dbUserData.id;
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = dbUserData.id;

      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//user add to favorites
// localhost//api/users/favourite
router.post("/favourite", async (req, res) => {
  try {
    const userId = parseInt(req.session.userId);
    console.log(userId);
    const newFav = await UserFavourites.create({
      user_id: userId,
      figurine_id: req.body.figurine_id,
    });
    res.status(200).json(newFav);
  } catch (err) {
    res.status(400).json(err);
  }
});

//delete favourite
//
router.delete("/delete/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const favData = await UserFavourites.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(favData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
