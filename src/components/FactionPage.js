import React from 'react';
import { Box, Tabs, Tab } from 'grommet';
import { backEndURL, imgURL } from '../config';
import Loading from './Loading';
import ReactPlayer from 'react-player';
import Attribution from './Attribution';

const FactionPage = () => {
  const [factionData, setFactionData] = React.useState(null);

  const getFactionData = async () => {
    try {
      const result = await fetch(`${backEndURL}/factions/`);
      if (result.ok) {
        const resJson = await result.json();
        setFactionData(resJson);
      }
    } catch (err) {
      console.error(err);
    }
  }

  React.useEffect(() => {
    getFactionData();
  }, []);

  const getFactionDesc = factionName => { //Creative commons text from the wiki, since the API has no description text
    if (factionName === "Vanu Sovereignty") {
      return `Due to their extreme philosophy, the Vanu are viewed by many as zealots.
      Calm even in the heat of battle, and often considered by their enemies to be passionless,
      they are indifferent to the chaos of war, viewing it a necessary evil to ensure the
      advancement of humankind. The Vanu have adopted a condescending, yet oddly parental view
      of those who would actively oppose their cause, referring to them as their 'lost brothers
      and sisters.' Ranking themselves the harbingers of true freedom through enlightenment,
      the Vanu will take whatever means necessary to freely develop their technologies.`;
    } else if (factionName === "New Conglomerate") {
      return `The New Conglomerate (NC) split from the Terran Republic due to its
      totalitarian oppression and is now determined to write a new history free of the
      overbearing and draconian Republic. Now an empire in their own right they are in
      total open war with both the Terran Republic and the Vanu Sovereignty, seeking to
      free humanity from the tyrannical grip of the former, and defend them from the fanatical
      alien influence of the latter. `;
    } else if (factionName === "Terran Republic") {
      return `The Terran Republic is built around order and the rule of law, with the
      central tenet that no individual is above the rules. Loyalty and fealty are core
      to the Terran Republic ethos and from that grows a spirit of total camaraderie and
      brotherhood amongst its proud and mighty warriors. More so than any other empire, the
      TR are a professional military. They are the most synergistic of the teams and benefit
      the most from numbers and coordination. A well-drilled squad of Terran Republic troops is
      one of the most fearsome and deadly forces you’ll ever meet on the battlefields of Auraxis.`;
    } else if (factionName === "NS Operatives") {
      return `NS Ops are not a faction in the typical sense; they are a robotic unit made by Nanite Systems,
       and contracted out to the other three factions, the Terran Republic, New Conglomerate, and Vanu Sovereignty.`;
    }
    return `Error in getFactionDesc`;
  }

  const getFactionVid = factionName => {
    if (factionName === "Vanu Sovereignty") {
      return `https://www.youtube.com/watch?v=JkTnvST9Teg`;
    } else if (factionName === "New Conglomerate") {
      return `https://www.youtube.com/watch?v=ErA4jNfVSIM`;
    } else if (factionName === "Terran Republic") {
      return `https://www.youtube.com/watch?v=CHN9CdBqSYM`;
    } else if (factionName === "NS Operatives") {
      return `https://www.youtube.com/watch?v=Y0ZlJX7n3cA`;
    }
  }

  return (
    <Box className="factionbasic" animation="fadeIn">
      <h1>Factions</h1>
      <h3>Below are descriptions of the playable factions within the game</h3>
      {factionData ? factionData.faction_list.map(faction => {
        if (Number.parseInt(faction.faction_id) === 0) return null;
        return (
          <div key={faction.faction_id}>
            <Box className="basic-emphasis" align="center" animation="fadeIn">
              {faction.image_path ? <img width="100" alt={faction.name.en} src={`${imgURL}${faction.image_path}`} /> : null}
              <h1>{faction.name.en} ({faction.code_tag})</h1>
            </Box>
            <Tabs>
              <Tab title="Description">
                <Box className="basic-emphasis" animation="fadeIn">
                  <p>{getFactionDesc(faction.name.en)}</p>
                </Box>
              </Tab>
              <Tab title="Video">
                <ReactPlayer className="factionVideo basic-emphasis" url={getFactionVid(faction.name.en)} controls={true} playing volume={0.1} />
              </Tab>
            </Tabs>
          </div>
        )
      })
        :
        <Loading />}
      <Attribution />
    </Box >
  )
}

export default FactionPage;
