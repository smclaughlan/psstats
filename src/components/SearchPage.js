import React, { useEffect } from 'react';
import { TextInput, Heading, Paragraph, Main, Box } from 'grommet';
import { NavLink } from 'react-router-dom';

const SearchPage = () => {
  const [value, setValue] = React.useState('');
  const [results, setResults] = React.useState(null);

  useEffect(() => {

  }, [results])

  const performSearch = async (e) => {
    if (e.keyCode === 13) {
      const res = await fetch(`http://census.daybreakgames.com/s:sm579/get/ps2:v2/character_name/?name.first_lower=^${value}&c:limit=10&c:show=name.first&c:sort=name.first_lower`);
      if (res.ok) {
        const resJson = await res.json();
        setResults(resJson);
        console.log(results);
      }
    }
  }

  if (!results) {
    return (
      <Main>
        <Box>
          <Heading>Search</Heading>
          <Paragraph>By character or by outfit</Paragraph>
          <TextInput
            placeholder="Enter search term here"
            value={value}
            onChange={event => setValue(event.target.value)}
            onKeyDown={performSearch}
          />
        </Box>
      </Main>
    )
  }

  return (
    <Main>
      <Box>
        <Heading>Search</Heading>
        <Paragraph>By character or by outfit</Paragraph>
        <TextInput
          placeholder="Enter search term here"
          value={value}
          onChange={event => setValue(event.target.value)}
          onKeyDown={performSearch}
        />
        {results.character_name_list.map(character => {
          return (
            <NavLink key={character.name.first} to={`/char/${character.name.first}`} > {character.name.first}</NavLink>
          )
        })}
      </Box>
    </Main >
  );
}


export default SearchPage;
