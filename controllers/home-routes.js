const router = require("express").Router();
const { Gallery, Figurine } = require("../models");

// GET all galleries for homepage
router.get("/", async (req, res) => {
  try {
    res.render("homepage", {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
//http://localhost:3001/gallery
router.get("/gallery/:id", async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    // If the user is logged in, allow them to view the gallery
    try {
      const dbGalleryData = await Gallery.findByPk(req.params.id, {
        include: [
          {
            model: Figurine,
            attributes: [
              "id",
              "title",
              "creation_date",
              "filename",
              "description",
            ],
          },
        ],
      });
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
    const figurines = catData.map((figurine)=>figurine.get({plain:true}));
    console.log(figurines);
    res.render('all', {figurines});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/Necron", async (req, res) => {
  try {
    const catData = await Figurine.findAll({
      where: { faction: "Necron" },
    });
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/Xenos", async (req, res) => {
  try {
    const catData = await Figurine.findAll({
      where: { faction: "Xenos" },
    });
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/Chaos", async (req, res) => {
  try {
    const catData = await Figurine.findAll({
      where: { faction: "Chaos" },
    });
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
