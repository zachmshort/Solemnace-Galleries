const router = require("express").Router();
const { User, Figurine, UserFavourites } = require("../models");

// GET all galleries for homepage
router.get("/", async (req, res) => {
  try {
    console.log(req.session);
    res.render("homepage", {
      loggedIn: req.session.loggedIn,
      userId: req.session.userId,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/my-favorites/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const catData = await UserFavourites.findAll({
      include: [{ model: Figurine }, { model: User }],
    });
    const figurines = await catData.map((figurine) =>
      figurine.get({ plain: true })
    );
    //filter out all data of users that is not of the id passed into userID
    const filtered = await figurines.filter((data) => data.user_id === userId);
    // const figurines = catData.map((figurine)=>figurine.get({plain:true}));
    // console.log(figurines);
    // res.render('all', {figurines});
    res.status(200).json(filtered);
  } catch (err) {
    res.status(500).json(err);
  }
});

// example for later
//http://localhost:3001/gallery
router.get("/gallery/:id", async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    // If the user is logged in, allow them to view the gallery
    try {
      const gallery = dbGalleryData.get({ plain: true });
      res.render("gallery", { gallery, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.get("/all", async (req, res) => {
  try {
    const catData = await Figurine.findAll({});
    const figurines = catData.map((figurine) => figurine.get({ plain: true }));
    console.log(figurines);
    res.render("all", { figurines });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/necron", async (req, res) => {
  try {
    const catData = await Figurine.findAll({
      where: { faction: "Necron" },
    });
    const figurines = catData.map((figurine)=>figurine.get({plain:true}));
    res.render('all', {figurines});
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/xenos", async (req, res) => {
  try {
    const catData = await Figurine.findAll({
      where: { faction: "xenos" },
    });
    const figurines = catData.map((figurine)=>figurine.get({plain:true}));
    console.log(figurines);
    res.render('xenos', {figurines});
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/chaos", async (req, res) => {
  try {
    const catData = await Figurine.findAll({
      where: { faction: "chaos" },
    });
    const figurines = catData.map((figurine)=>figurine.get({plain:true}));
    console.log(figurines);
    res.render('chaos', {figurines});
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/space-marines", async (req, res) => {
  try {
    const catData = await Figurine.findAll({
      where: { faction: "Space Marines" },
    });
    const figurines = catData.map((figurine)=>figurine.get({plain:true}));
    console.log(figurines);
    res.render('spacemarines', {figurines});
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/imperial-armies", async (req, res) => {
  try {
    const catData = await Figurine.findAll({
      where: { faction: "Imperium Armies" },
    });
    const figurines = catData.map((figurine)=>figurine.get({plain:true}));
    console.log(figurines);
    res.render('imperialarmies', {figurines});
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/aeldari", async (req, res) => {
  try {
    const catData = await Figurine.findAll({
      where: { faction: "Aeldari" },
    });
    const figurines = catData.map((figurine)=>figurine.get({plain:true}));
    console.log(figurines);
    res.render('aeldari', {figurines});
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
