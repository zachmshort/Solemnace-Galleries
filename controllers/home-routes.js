const router = require("express").Router();
const { User, Figurine, UserFavourites } = require("../models");

// GET all galleries for homepage
router.get("/", async (req, res) => {
  try {
    console.log(req.session.userId);
    res.render("homepage", {
      loggedIn: req.session.loggedIn,
      userId: req.session.userId,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get("/gallery", async (req, res) => {
  try {
    res.render("gallery", {
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
    const figurinesData = await catData.map((figurine) =>
      figurine.get({ plain: true })
    );
    //filter out all data of users that is not of the id passed into userID
    const filtered = await figurinesData.filter(
      (data) => data.user_id === userId
    );
    console.log(filtered);
    res.render("favorites", {
      filtered,
      loggedIn: req.session.loggedIn,
      userId: req.session.userId,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/all", async (req, res) => {
  try {
    const catData = await Figurine.findAll({});
    const figurines = catData.map((figurine) => figurine.get({ plain: true }));
    console.log(figurines);
    res.render("all", {
      figurines,
      loggedIn: req.session.loggedIn,
      userId: req.session.userId,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/necron", async (req, res) => {
  try {
    const catData = await Figurine.findAll({
      where: { faction: "Necron" },
    });
    const figurines = catData.map((figurine) => figurine.get({ plain: true }));
    console.log(figurines);
    res.render("necron", {
      figurines,
      loggedIn: req.session.loggedIn,
      userId: req.session.userId,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/Xenos", async (req, res) => {
  try {
    const catData = await Figurine.findAll({
      where: { faction: "Xenos" },
    });
    const figurines = catData.map((figurine) => figurine.get({ plain: true }));
    console.log(figurines);
    res.render("xenos", {
      figurines,
      loggedIn: req.session.loggedIn,
      userId: req.session.userId,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/Chaos", async (req, res) => {
  try {
    const catData = await Figurine.findAll({
      where: { faction: "Chaos" },
    });
    const figurines = catData.map((figurine) => figurine.get({ plain: true }));
    console.log(figurines);
    res.render("chaos", {
      figurines,
      loggedIn: req.session.loggedIn,
      userId: req.session.userId,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/space-marines", async (req, res) => {
  try {
    const catData = await Figurine.findAll({
      where: { faction: "Space Marines" },
    });
    const figurines = catData.map((figurine) => figurine.get({ plain: true }));
    console.log(figurines);
    res.render("spacemarines", {
      figurines,
      loggedIn: req.session.loggedIn,
      userId: req.session.userId,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/imperial-armies", async (req, res) => {
  try {
    const catData = await Figurine.findAll({
      where: { faction: "Imperium Armies" },
    });
    const figurines = catData.map((figurine) => figurine.get({ plain: true }));
    console.log(figurines);
    res.render("imperialarmies", {
      figurines,
      loggedIn: req.session.loggedIn,
      userId: req.session.userId,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/aeldari", async (req, res) => {
  try {
    const catData = await Figurine.findAll({
      where: { faction: "Aeldari" },
    });
    const figurines = catData.map((figurine) => figurine.get({ plain: true }));
    console.log(figurines);
    res.render("aeldari", {
      figurines,
      loggedIn: req.session.loggedIn,
      userId: req.session.userId,
    });
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
