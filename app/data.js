// WORLD

export const BOOKS = [
  'The War-Torn Kingdom',
  'Cities of Gold and Glory',
  'Over the Blood-Dark Sea',
  'The Plains of Howling Darkness',
  'The Court of Hidden Faces',
  'Lords of the Rising Sun',
  'The Serpent King\'s Domain',
];

export const GODS = [
  'None', 'Alvir and Valmir', 'Amanushi', 'Eleuia', 'Elnir', 'Juntoku', 'Ko',
  'Lacuna', 'Maka', 'Molhern', 'Nagil', 'Nai', 'Nisoderu', 'Quetzil', 'Sig',
  'Tambu', 'The Three Fortunes', 'Tyrnai', 'Vinti', 'Zaos',
];


// CHARACTER

export const PROFESSIONS = [
  'Wayfarer', 'Warrior', 'Mage', 'Rogue', 'Priest', 'Troubadour',
];

// TODO add gender options
export const RANKS = {
  1: 'Outcast',
  2: 'Commoner',
  3: 'Guildmember',
  4: 'Master', // Mistress
  5: 'Gentleman', // Lady
  6: 'Baron', // Baroness
  7: 'Count', // Countess
  8: 'Earl', // Viscountess
  9: 'Marquis', // Marchioness
  10: 'Duke', // Duchess
  11: 'Hero',
};

export const ABILITIES = [
  'charisma', 'combat', 'magic', 'sanctity', 'scouting', 'thievery'
];

export const ASSETS = ['titles', 'blessings', 'resurrection'];


// POSSESSIONS

export const ITEM_SKILLS = [
  'charisma', 'combat', 'defence', 'magic', 'sanctity', 'scouting', 'thievery'
];


// SHIPS

export const SHIP_TYPES = [{
  type: 'Barque',
  capacity: 1,
}, {
  type: 'Brigantine',
  capacity: 2,
}, {
  type: 'Galleon',
  capacity: 3,
}];

export const CARGO_TYPES = [
  'None', 'Furs', 'Grain', 'Metals', 'Minerals', 'Spices', 'Textiles', 'Timber',
];

export const CREW_QUALITIES = ['Poor', 'Average', 'Good', 'Excellent'];


// PROGRESS

export const CODEWORDS = [
  'Acid', 'Afraid', 'Ague', 'Aid', 'Aklar', 'Alissia', 'Almanac', 'Aloft',
  'Altitude', 'Altruist', 'Ambuscade', 'Amcha', 'Amends', 'Anchor', 'Anger',
  'Animal', 'Anthem', 'Anvil', 'Apache', 'Appease', 'Apple', 'Ark', 'Armour',
  'Artefact', 'Artery', 'Ashen', 'Aspen', 'Assassin', 'Assault', 'Assist',
  'Attar', 'Auric', 'Avenge', 'Avert', 'Axe', 'Azure',

  'Bait', 'Baluster', 'Barnacle', 'Bashful', 'Bastion', 'Beach', 'Beltane',
  'Bilge', 'Bisect', 'Blemish', 'Bobbin', 'Bones', 'Bookworm', 'Bosky', 'Bounty',
  'Boysen', 'Bridoon', 'Brisket', 'Brush', 'Bullion', 'Bullseye', 'Bumble',
  'Bunting', 'Buzz',

  'Cacogast', 'Calcium', 'Callid', 'Cancel', 'Catalyst', 'Cenotaph', 'Certain',
  'Cerumen', 'Chance', 'Cheese', 'Cheops', 'Chill', 'Church', 'Cithara', 'Citrus',
  'Civil', 'Clanger', 'Clutch', 'Colour', 'Coracle', 'Cosy', 'Covet', 'Crag',
  'Crocus', 'Cruel', 'Cull', 'Curdle', 'Cushat', 'Cutlass', 'Cyclops', 'Cynosure',

  'Dangle', 'Dare', 'Dark', 'Dawn', 'Dead', 'Deathless', 'Deep', 'Defend',
  'Deliver', 'Diamond', 'Dim', 'Dirk', 'Dirty', 'Discover', 'Dismal', 'Dispel',
  'Divest', 'Dog', 'Dotage', 'Double', 'Dove', 'Dragon', 'Drake', 'Drape', 'Draw',
  'Dread', 'Dregs', 'Drifter', 'Drink', 'Drizzle', 'Drop', 'Duress', 'Dwarf',

  'Earth', 'East', 'Ebb', 'Ebony', 'Echo', 'Eclipse', 'Ectoplasm', 'Ecumenical',
  'Edifice', 'Edify', 'Eerie', 'Efreet', 'Egret', 'Elan', 'Eldritch', 'Elegant',
  'Element', 'Elephant', 'Elite', 'Elk', 'Elude', 'Ember', 'Emerald', 'Enamel',
  'Endless', 'Energy', 'Enigma', 'Entropy', 'Envoy', 'Epicure', 'Epistle',
  'Erebus', 'Errant', 'Eternal', 'Ethereal', 'Evade', 'Evergreen', 'Evict', 'Evil',
  'Exorcise', 'Expunge', 'Extinguish', 'Exultant',

  'Face', 'Faded', 'Farm', 'Feral', 'Fern', 'Fire', 'Fist', 'Flag', 'Fleet',
  'Flimsy', 'Flood', 'Flux', 'Foment', 'Fog', 'Fortress', 'Fossil', 'Fracas',
  'Frame', 'Fresco', 'Fright', 'Friz', 'Frog', 'Fruit', 'Fuligin', 'Fuchsia',
  'Fusty', 'Future',

  'Gaggle', 'Gain', 'Gale', 'Gallivant', 'Gamble', 'Game', 'Gander', 'Gannet',
  'Gargoyle', 'Garland', 'Gather', 'Gauche', 'Gauntles', 'Gazelle', 'Genius',
  'Gentle', 'Genuflect', 'Geode', 'Geyser', 'Ghastly', 'Giant', 'Gibbet',
  'Giggle', 'Gin', 'Glacier', 'Gladden', 'Glade', 'Glass', 'Glide', 'Glimmer',
  'Glimpse', 'Glitter', 'Gloat', 'Gloom', 'Glory', 'Glove', 'Glutton', 'Gnash',
  'Gnat', 'Gnome', 'Gnu', 'Goblet', 'Golem', 'Gone', 'Goose', 'Gore', 'Gosling',
  'Gossamoer', 'Gourd', 'Govern', 'Grace', 'Graft', 'Grain', 'Granite',
  'Granule', 'Grape', 'Grapple', 'Grateful', 'Grebe', 'Green', 'Grief',
  'Grimace', 'Grime', 'Grind', 'Grog', 'Grotto', 'Grove', 'Growl', 'Grub',
  'Guard', 'Guilt', 'Guise', 'Gulf', 'Gully', 'Gush',
];
