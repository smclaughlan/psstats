import React from 'react';
import { Box } from 'grommet';
import { imgURL } from '../config';
import Loading from './Loading';

const ClassDetail = ({ profile }) => {

  const createDesc = profileName => { //from planetside 2 wiki, creative commons attribution
    if (profileName === "Infiltrator") {
      return `The completion of Nanite Systems’ stealth technology in the mid-29th century had
      a profound effect on combat and from this technology, the Infiltrator was born.
      Designated marksmen and scouts quickly integrated the new tech into their armor and
       rapidly developed new battlefield strategies that only their active camouflage allowed
       them to carry out. The most recent iterations of infiltration suits allow the use of
       various cloak configurations, allowing Infiltrators to customize their camouflage's
       strength and power consumption based on their preferences and needs. Though suits
       constructed of stealth-compatible materials provide little protection, many veteran
       Infiltrators claim the tactical advantages provided by being
       undetectable allow for just as much time on the field as heavy armor. `
    } else if (profileName === "Light Assault") {
      return `The Light Assault is a combat class that thrives when flanking, using their
      signature Jump Jets to easily reach unexpected locations, gaining the element of
      surprise while using a height advantage to quickly dispatch enemies. However, they
      do lack the personal shielding of the Heavy Assault, preventing them from directly
      engaging opponents effectively. Urban terrain is the Light Assault's playing field,
      although enclosed areas and open fields can pose a great threat to the trooper.`
    } else if (profileName === "Combat Medic") {
      return `The Combat Medic’s handheld medical applicator provides them with the
      primary means to make a squad of wounded soldiers fit to fight again. Using a
      concentrated beam of nanites programmed to mend flesh and dispense coagulation
      agents, the medical applicator can repair even the most grievous of wounds in
      seconds. The latest models are even equipped with experimental Field Rebirth
      technology, allowing the recently dead to be brought back to life.`
    } else if (profileName === "Engineer") {
      return `The Engineer is one of the most versatile team members of a squad
      and extremely valuable in both Offensive and Defensive encounters. With the
      ever growing number of vehicles and aircraft filling the roadways and skies,
      the Engineers repair ability becomes extremely helpful in keeping their empire's
      squads at full health.`
    } else if (profileName === "Heavy Assault") {
      return `The development of the Heavy Assault soldier was a relatively recent
      innovation on Auraxis. Designed to combat the surge of instant nanite-assembled
      vehicles, their presence on the battlefield poses a serious threat to tanks and
      infantry alike. Their custom Reinforced Exosuit armor configuration is responsible
      for their ability to take hits that would kill other soldiers, while their heavy
      weaponry allows them to punch holes in enemy tanks or lay down sustained fire.`
    } else if (profileName === "MAX") {
      return `Prototypes of the MAX suit used on Auraxis today were created after the
      New Conglomerate began modifying powered exoskeletons intended for mining
      operations, wielding shotguns and homemade composite armor to them for use in combat.
      After their potential for both saving and taking lives was realized, revisions to
      the initial design were quickly adopted on by all three factions. The end result is
      a lumbering juggernaut capable of adapting their flexible weapons systems to a variety
      of situations while absorbing immense amounts of fire.`
    } else {
      return `Incorrect profile name`
    }
  }


  const getImagePath = profileName => { //images also from planetside 2 wiki, creative commons attribution
    let profileFormatted = profileName.split(' ').join('').toLowerCase();
    return `/images/${profileFormatted}.png`;
  }


  return (
    <Box className="basic-emphasis" align="center" margin="large" pad="large" animation="fadeIn">
      {profile ?
        <>
          <h2>{profile.name.en}</h2>
          <img alt={profile.name.en} src={`${imgURL}${profile.image_path}`} />
          <img alt={profile.name.en} src={getImagePath(profile.name.en)} />
          <h3>{createDesc(profile.name.en)}</h3>
        </>
        :
        <Loading />}
    </Box >
  )
}

export default ClassDetail;
