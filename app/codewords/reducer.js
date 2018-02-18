import { initialState } from '../reducer';

import {
  ADD_CODEWORD,
  REMOVE_CODEWORD,
} from '../actions';

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

export default function codewords(state = initialState.codewords, action) {
  switch (action.type) {

    case ADD_CODEWORD:
      return [...state, action.codeword];

    case REMOVE_CODEWORD:
      return state.filter(w => w !== action.codeword);

    default:
      return state;
  }
}
