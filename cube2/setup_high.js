
Module['loadingMusic'] = new Audio();
Module['loadingMusic'].src = 'OutThere_0.ogg';
Module['loadingMusic'].play();
// Will be stopped once the first frame of the game runs

Module['setPlayerModels'] = function() {
  var setPlayerModelInfo = Module['cwrap']('_ZN4game18setplayermodelinfoEPKcS1_S1_S1_S1_S1_S1_S1_S1_S1_S1_S1_b', null,
    ['string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'number']);

  setPlayerModelInfo("snoutx10k", "snoutx10k", "snoutx10k", "snoutx10k/hudguns", 0, 0, 0, 0, 0, "snoutx10k", "snoutx10k", "snoutx10k", true);
}
