import { globalScene } from "#app/global-scene";
import { Phase } from "#app/phase";
import { BattlePhase } from "./battle-phase";

/**
 * Provides EXP to the player's party *without* doing any Pokemon defeated checks or queueing extraneous post-battle phases
 * Intended to be used as a more 1-off phase to provide exp to the party (such as during MEs), rather than cleanup a battle entirely
 */
export class PartyExpPhase extends Phase {
  expValue: number;
  useWaveIndexMultiplier?: boolean;
  pokemonParticipantIds?: Set<number>;

  constructor(expValue: number, useWaveIndexMultiplier?: boolean, pokemonParticipantIds?: Set<number>) {
    super();

    this.expValue = expValue;
    this.useWaveIndexMultiplier = useWaveIndexMultiplier;
    this.pokemonParticipantIds = pokemonParticipantIds;
  }

  /**
   * Gives EXP to the party
   */
  start() {
    super.start();

    globalScene.applyPartyExp(this.expValue, false, this.useWaveIndexMultiplier, this.pokemonParticipantIds);
    pokemon.hp = pokemon.hp + (pokemon.getMaxHp()/4);
    this.end();
  }
}
