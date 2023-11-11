import GifImage from "../shared/types/gif.interface";

export const STORAGE_NAME = 'cssGame';

export const SpinnerConfiguration = {
  zIndex: 1100,
  size: 'medium',
  type: 'ball-clip-rotate',
  loadingText: 'Cargando...',
  processingText: 'Procesando...',
  verifyingText: 'Verificando...'
};

export const LevelsURL = [
  {level: 1, url: '/levels/lesson-S1'},
  {level: 2, url: '/levels/lesson-D1'}
];

export const GhostImages: GifImage[] = [
  {type: 'normal', image: 'assets/images/ghost-normal.gif'},
  {type: 'scarf', image: 'assets/images/ghost-scarf.gif'},
  {type: 'gorro', image: 'assets/images/ghost-gorro.gif'},
  {type: 'crown', image: 'assets/images/ghost-crown.gif'},
  {type: 'astro', image: 'assets/images/ghost-astro.gif'},
  {type: 'witch', image: 'assets/images/ghost-witch.gif'}
];

export const CauldronImages: GifImage[] = [
  {type: 'purple', image: 'assets/images/witch-cauldron/cauldron-purple.gif'},
  {type: 'blue', image: 'assets/images/witch-cauldron/cauldron-blue.gif'}
];
