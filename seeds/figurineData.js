const { Figurine } = require('../models');

const figurineData = [
  {
    product_name: "Space Marine Scouts",
    price: 35,
    edition: 10,
    filename: "10thscouts.jpg",
    faction: "Space Marines",
    store_link: "",
  },
  {
    //removed null from price
    product_name: "Terminator Captain",
    price: 0,
    edition: 10,
    filename: "10thtermiecapt.jpg",
    faction: "Space Marines",
    store_link: "",
  },
  {
    //removed null from price
    product_name: "Titus",
    price: 0,
    edition: 10,
    filename: "titus.jpg",
    faction: "Space Marines",
    store_link: "",
  },
  {
    product_name: "company heroes",
    price: 65,
    edition: 10,
    filename: "coheroes.jpg",
    faction: "Space Marines",
    store_link: "",
  },
  {
    product_name: "terminator squad",
    price: 65,
    edition: 10,
    filename: "termies.jpg",
    faction: "Space Marines",
    store_link: "",
  },
  {
    product_name: "terminator assault squad",
    price: 60,
    edition: 10,
    filename: "termieassault.jpg",
    faction: "Space Marines",
    store_link: "",
  },
  {
    product_name: "sterngaurd veterans",
    price: 60,
    edition: 10,
    filename: "sterngaurdvet.jpg",
    faction: "Space Marines",
    store_link: "",
  },
  {
    product_name: "jump pack intercessors",
    price: 60,
    edition: 10,
    filename: "jumpyinters.jpg",
    faction: "Space Marines",
    store_link: "",
  },
  {
    product_name: "jump pack captain",
    price: 40,
    edition: 10,
    filename: "packcapt.jpg",
    faction: "Space Marines",
    store_link: "",
  },
  {
    product_name: "terminator chaplain",
    price: 42,
    edition: 10,
    filename: "termiechap.jpg",
    faction: "Space Marines",
    store_link: "",
  },
  {
    product_name: "morvenn vahl",
    price: 60,
    edition: 9,
    filename: "morvenn.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "palatine",
    price: 35,
    edition: 9,
    filename: "palatine.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "aestred thurag",
    price: 40,
    edition: 9,
    filename: "aestred.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "sister dogmata",
    price: 35,
    edition: 9,
    filename: "dogmata.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "celestian sacrestants",
    price: 60,
    edition: 9,
    filename: "sacrestants.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "paragon warsuits",
    price: 75,
    edition: 9,
    filename: "pgwarsuit.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "castigator battle tank",
    price: 90,
    edition: 9,
    filename: "castigator.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "kill team novitiates",
    price: 60,
    edition: 9,
    filename: "novitiates.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "blade champion",
    price: 40,
    edition: 9,
    filename: "bladechamp.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "sydonian skatros",
    price: 38,
    edition: 10,
    filename: "skatros.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "skitarii marshall",
    price: 35,
    edition: 9,
    filename: "skitmarsh.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "commisar",
    price: 35,
    edition: 9,
    filename: "commisar.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "minka lesk",
    price: 21,
    edition: 9,
    filename: "minka.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "kasrkin kill team",
    price: 60,
    edition: 9,
    filename: "kasrkin.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "cadian command squad",
    price: 45,
    edition: 9,
    filename: "cadiancommsq.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "cadian shock troops",
    price: 50,
    edition: 9,
    filename: "cadianshock.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "armored sentinel",
    price: 45,
    edition: 9,
    filename: "armsent.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "scout sentinel",
    price: 45,
    edition: 9,
    filename: "scoutsent.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "ursula creed",
    price: 45,
    edition: 9,
    filename: "ursula.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "heavy weapons squad",
    price: 50,
    edition: 9,
    filename: "heavywepsq.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "cadian castellan",
    price: 35,
    edition: 9,
    filename: "castellan.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "attilan rough riders",
    price: 60,
    edition: 9,
    filename: "attilanriders.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "rogal dorn battle tank",
    price: 100,
    edition: 9,
    filename: "rogdortank.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "lord solar leontus",
    price: 60,
    edition: 9,
    filename: "leontus.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "vindicare assassin",
    price: 40,
    edition: 9,
    filename: "vindicare.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "imperial navy breachers",
    price: 60,
    edition: 9,
    filename: "navbreach.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "extraction squad",
    price: 60,
    edition: 9,
    filename: "extrsq.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "inquisitorial agents",
    price: 55,
    edition: 9,
    filename: "inqagent.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "armiger warglaives",
    price: 90,
    edition: 8,
    filename: "warglaive.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "armiger helverins",
    price: 90,
    edition: 8,
    filename: "helverin.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "knight castellan",
    price: 185,
    edition: 8,
    filename: "knightcastellan.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "knight valiant",
    price: 185,
    edition: 8,
    filename: "knightvaliant.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "knight preceptor",
    price: 170,
    edition: 8,
    filename: "knightpreceptor.jpg",
    faction: "imperium armies",
    store_link: "",
  },
  {
    product_name: "kill team: legionaries",
    price: 70,
    edition: 9,
    filename: "legionaries.jpg",
    faction: "chaos marines",
    store_link: "",
  },
  {
    product_name: "chaos chosen",
    price: 60,
    edition: 9,
    filename: "chaoschosen.jpg",
    faction: "chaos marines",
    store_link: "",
  },
  {
    product_name: "warpsmith",
    price: 40,
    edition: 9,
    filename: "warpsmith.jpg",
    faction: "chaos marines",
    store_link: "",
  },
  {
    product_name: "daemon prince",
    price: 80,
    edition: 9,
    filename: "deamonprince.jpg",
    faction: "chaos marines",
    store_link: "",
  },
  {
    product_name: "possessed",
    price: 60,
    edition: 9,
    filename: "possessed.jpg",
    faction: "chaos marines",
    store_link: "",
  },
  {
    product_name: "chaos cultists",
    price: 50,
    edition: 9,
    filename: "chaoscult.jpg",
    faction: "chaos marines",
    store_link: "",
  },
  {
    product_name: "dark commune",
    price: 55,
    edition: 9,
    filename: "dkcomm.jpg",
    faction: "chaos marines",
    store_link: "",
  },
  {
    product_name: "accursed cultists",
    price: 55,
    edition: 9,
    filename: "acccult.jpg",
    faction: "chaos marines",
    store_link: "",
  },
  {
    product_name: "blooded kill team",
    price: 60,
    edition: 9,
    filename: "bloodkillteam.jpg",
    faction: "chaos marines",
    store_link: "",
  },
  {
    product_name: "lord of virulence",
    price: 40,
    edition: 9,
    filename: "lordvirulence.jpg",
    faction: "chaos marines",
    store_link: "",
  },
  {
    product_name: "plague marines",
    price: 60,
    edition: 9,
    filename: "plaguemar.jpg",
    faction: "chaos marines",
    store_link: "",
  },
  {
    product_name: "lord felthius and the tainted cohort",
    price: 45,
    edition: 9,
    filename: "lordfelthius.jpg",
    faction: "chaos marines",
    store_link: "",
  },
  {
    product_name: "infernal master",
    price: 40,
    edition: 9,
    filename: "infernalmas.jpg",
    faction: "chaos marines",
    store_link: "",
  },
  {
    product_name: "azrakh the annihilator",
    price: 38,
    edition: 9,
    filename: "azrakh.jpg",
    faction: "chaos marines",
    store_link: "",
  },
  {
    product_name: "angron daemon primarch",
    price: 170,
    edition: 9,
    filename: "angron.jpg",
    faction: "chaos marines",
    store_link: "",
  },
  {
    product_name: "khorne berzerkers",
    price: 65,
    edition: 9,
    filename: "kbzerk.jpg",
    faction: "chaos marines",
    store_link: "",
  },
  {
    product_name: "lord invocatus",
    price: 65,
    edition: 9,
    filename: "invocatus.jpg",
    faction: "chaos marines",
    store_link: "",
  },
  {
    product_name: "chaos lord on daemonic mount",
    price: 60,
    edition: 9,
    filename: "chaosmount.jpg",
    faction: "chaos marines",
    store_link: "",
  },
  {
    product_name: "eightbounds",
    price: 60,
    edition: 9,
    filename: "eightbound.jpg",
    faction: "chaos marines",
    store_link: "",
  },
  {
    product_name: "exalted eightbounds",
    price: 60,
    edition: 9,
    filename: "exeightbound.jpg",
    faction: "chaos marines",
    store_link: "",
  },
  {
    product_name: "jakhals",
    price: 55,
    edition: 9,
    filename: "jakhals.jpg",
    faction: "chaos marines",
    store_link: "",
  },
  {
    product_name: "be'lakor, the dark master",
    price: 160,
    edition: 9,
    filename: "belakor.jpg",
    faction: "chaos marines",
    store_link: "",
  },
  {
    product_name: "vashtorr the arkifane",
    price: 100,
    edition: 9,
    filename: "vashtorr.jpg",
    faction: "chaos marines",
    store_link: "",
  },
  {
    product_name: "knight abominant",
    price: 185,
    edition: 9,
    filename: "knightabominant.jpg",
    faction: "chaos marines",
    store_link: "",
  },
  {
    product_name: "war dog karnivores",
    price: 90,
    edition: 9,
    filename: "wardogkarn.jpg",
    faction: "chaos marines",
    store_link: "",
  },
  {
    product_name: "war dog stalkers",
    price: 90,
    edition: 9,
    filename: "wardogstalk.jpg",
    faction: "chaos marines",
    store_link: "",
  },
  {
    product_name: "war dog brigands",
    price: 90,
    edition: 9,
    filename: "wardogbrig.jpg",
    faction: "chaos marines",
    store_link: "",
  },
  {
    product_name: "striking scorpions",
    price: 50,
    edition: 10,
    filename: "strikscorp.jpg",
    faction: "aeldari",
    store_link: "",
  },
  {
    product_name: "lelith hesperax",
    price: 45,
    edition: 9,
    filename: "lelith.jpg",
    faction: "aeldari",
    store_link: "",
  },
  {
    product_name: "harlequin troupe",
    price: 45,
    edition: 7,
    filename: "harletroup.jpg",
    faction: "aeldari",
    store_link: "",
  },
  {
    product_name: "harlequin solitaire",
    price: 32,
    edition: 7,
    filename: "harlsol.jpg",
    faction: "aeldari",
    store_link: "",
  },
  {
    product_name: "skyweavers",
    price: 55,
    edition: 7,
    filename: "skyweavers.jpg",
    faction: "aeldari",
    store_link: "",
  },
  {
    product_name: "starweavers",
    price: 45,
    edition: 7,
    filename: "starweavers.jpg",
    faction: "aeldari",
    store_link: "",
  },
  {
    product_name: "voidweavers",
    price: 45,
    edition: 7,
    filename: "voidweavers.jpg",
    faction: "aeldari",
    store_link: "",
  },
  {
    product_name: "death jester",
    price: 33.5,
    edition: 7,
    filename: "deathjester.jpg",
    faction: "aeldari",
    store_link: "",
  },
  {
    product_name: "shadowseer",
    price: 33.5,
    edition: 7,
    filename: "shadowseer.jpg",
    faction: "aeldari",
    store_link: "",
  },
  {
    product_name: "reductus saboteur",
    price: 35,
    edition: 9,
    filename: "reductus.jpg",
    faction: "xenos",
    store_link: "",
  },
  {
    product_name: "einhyr champion",
    price: 40,
    edition: 10,
    filename: "einhyr.jpg",
    faction: "xenos",
    store_link: "",
  },
  {
    product_name: "emotekh the stormlord",
    price: 45,
    edition: 10,
    filename: "emotekh.jpg",
    faction: "necron",
    store_link: "",
  },
  {
    product_name: "overlord with translocation shroud",
    price: 38,
    edition: 10,
    filename: "transoverlord.jpg",
    faction: "necron",
    store_link: "",
  },
  {
    product_name: "orikan the diviner",
    price: 45,
    edition: 10,
    filename: "orikan.jpg",
    faction: "necron",
    store_link: "",
  },
  {
    product_name: "flayed ones",
    price: 55,
    edition: 9,
    filename: "flayedone.jpg",
    faction: "necron",
    store_link: "",
  },
  {
    product_name: "chronomancer",
    price: 40,
    edition: 9,
    filename: "chrono.jpg",
    faction: "necron",
    store_link: "",
  },
  {
    product_name: "szarekh, the silent king",
    price: 170,
    edition: 9,
    filename: "szarek.jpg",
    faction: "necron",
    store_link: "",
  },
  {
    product_name: "c'tan shard of the void dragon",
    price: 125,
    edition: 9,
    filename: "voidshard.jpg",
    faction: "necron",
    store_link: "",
  },
  {
    product_name: "monolith",
    price: 185,
    edition: 9,
    filename: "monolith.jpg",
    faction: "necron",
    store_link: "",
  },
  {
    product_name: "canoptek doomstalker",
    price: 50,
    edition: 9,
    filename: "doomstalker.jpg",
    faction: "necron",
    store_link: "",
  },
  {
    product_name: "hexmark destoryer",
    price: 35,
    edition: 9,
    filename: "hexmark.jpg",
    faction: "necron",
    store_link: "",
  },
  {
    product_name: "ophidian destroyers",
    price: 60,
    edition: 9,
    filename: "ophidian.jpg",
    faction: "necron",
    store_link: "",
  },
  {
    product_name: "psychomancer",
    price: 35,
    edition: 9,
    filename: "psychomancer.jpg",
    faction: "necron",
    store_link: "",
  },
  {
    product_name: "lokhust heavy destroyer",
    price: 35,
    edition: 9,
    filename: "lokhust.jpg",
    faction: "necron",
    store_link: "",
  },
  {
    product_name: "boss snikrot",
    price: 40,
    edition: 9,
    filename: "snikrot.jpg",
    faction: "xenos",
    store_link: "",
  },
  {
    product_name: "ethereal",
    price: 35,
    edition: 9,
    filename: "ethereal.jpg",
    faction: "xenos",
    store_link: "",
  },
  {
    product_name: "pathfinders kill team",
    price: 60,
    edition: 9,
    filename: "pathfinders.jpg",
    faction: "xenos",
    store_link: "",
  },
  {
    product_name: "farstalker kinband",
    price: 60,
    edition: 9,
    filename: "farstalker.jpg",
    faction: "xenos",
    store_link: "",
  },
  {
    product_name: "hormagaunts",
    price: 50,
    edition: 10,
    filename: "horma.jpg",
    faction: "xenos",
    store_link: "",
  },
  {
    product_name: "genestealers",
    price: 55,
    edition: 10,
    filename: "gene.jpg",
    faction: "xenos",
    store_link: "",
  },
  {
    product_name: "lictor",
    price: 50,
    edition: 10,
    filename: "lictor.jpg",
    faction: "xenos",
    store_link: "",
  },
  {
    product_name: "nuerolictor",
    price: 40,
    edition: 10,
    filename: "nuelic.jpg",
    faction: "xenos",
    store_link: "",
  },
  {
    product_name: "deathleaper",
    price: 60,
    edition: 10,
    filename: "deathleap.jpg",
    faction: "xenos",
    store_link: "",
  },
  {
    product_name: "biovore",
    price: 50,
    edition: 10,
    filename: "biovore.jpg",
    faction: "xenos",
    store_link: "",
  },
  {
    product_name: "pyrovore",
    price: 50,
    edition: 10,
    filename: "pyrovore.jpg",
    faction: "xenos",
    store_link: "",
  },
  {
    product_name: "norn emissary",
    price: 115,
    edition: 10,
    filename: "nornem.jpg",
    faction: "xenos",
    store_link: "",
  },
  {
    product_name: "norn assimilator",
    price: 115,
    edition: 10,
    filename: "nornas.jpg",
    faction: "xenos",
    store_link: "",
  },
  {
    product_name: "termagaunts",
    price: 45,
    edition: 10,
    filename: "termagaunts.jpg",
    faction: "xenos",
    store_link: "",
  },
];

const seedFigurines = () => Figurine.bulkCreate(figurineData);

module.exports = seedFigurines;
