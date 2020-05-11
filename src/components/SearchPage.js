import React, { useEffect } from 'react';
import { TextInput, Heading, Paragraph, Main, Box, Button, Select } from 'grommet';
import { NavLink } from 'react-router-dom';

const SearchPage = () => {
  const [value, setValue] = React.useState('');
  const [results, setResults] = React.useState(null);
  const [selectValue, setSelectValue] = React.useState('Character');

  useEffect(() => {

  }, [results])

  const performSearch = async (e) => {
    if (e.keyCode === 13) {
      if (selectValue === 'Character') {
        const res = await fetch(`http://census.daybreakgames.com/s:sm579/get/ps2:v2/character_name/?name.first_lower=^${value.toLowerCase()}&c:limit=10&c:show=name.first&c:sort=name.first_lower`);
        if (res.ok) {
          const resJson = await res.json();
          setResults(resJson);
          console.log(results);
        }
      }
      if (selectValue === 'Outfit') {
        const res = await fetch(`http://census.daybreakgames.com/s:sm579/get/ps2:v2/outfit/?name=^${value}&c:limit=10&c:sort=member_count:-1`);
        if (res.ok) {
          const resJson = await res.json();
          setResults(resJson);
          console.log(results);
        }
      }
    }
  }

  if (!results) {
    return (
      <Main>
        <Box>
          <Heading>Search</Heading>
          <Paragraph>By character or by outfit</Paragraph>
          <div className="searchInputs">
            <TextInput
              placeholder="Enter search term here"
              value={value}
              onChange={event => setValue(event.target.value)}
              onKeyDown={performSearch}
            />
            <Select
              options={['Character', 'Outfit']}
              value={selectValue}
              onChange={({ option }) => setSelectValue(option)}
            />
          </div>
        </Box>
      </Main>
    )
  }

  if ("errorCode" in results) {
    return (
      <Main>
        <Box>
          <Heading>Search</Heading>
          <Paragraph>By character or by outfit</Paragraph>
          <Paragraph>Error! {results.errorMessage}</Paragraph>
          <div className="searchInputs">
            <TextInput
              placeholder="Enter search term here"
              value={value}
              onChange={event => setValue(event.target.value)}
              onKeyDown={performSearch}
            />
            <Select
              options={['Character', 'Outfit']}
              value={selectValue}
              onChange={({ option }) => setSelectValue(option)}
            />
          </div>
        </Box>
      </Main>
    )
  }

  return (
    <Main>
      <Box>
        <Heading>Search</Heading>
        <Paragraph>By character or by outfit</Paragraph>
        <div className="searchInputs">
          <TextInput
            placeholder="Enter search term here"
            value={value}
            onChange={event => setValue(event.target.value)}
            onKeyDown={performSearch}
          />
          <Select
            options={['Character', 'Outfit']}
            value={selectValue}
            onChange={({ option }) => setSelectValue(option)}
          />
        </div>
        {"character_name_list" in results ?
          results.character_name_list.map(character => {
            return (
              <Button className="searchRes" key={character.name.first} href={`/char/${character.name.first}`} margin="medium" label={character.name.first} size="medium" />
            )
          }) : null}
        {"outfit_list" in results ?
          results.outfit_list.map(outfit => {
            return (
              <Button className="searchRes" key={outfit.outfit_id} href={`/outfit/${outfit.alias}`} margin="medium" label={`[${outfit.alias}] ${outfit.name} (Created ${outfit.time_created_date} with ${outfit.member_count} current members)`} size="medium" />
            )
          }) : null}
      </Box>
    </Main >
  );
}


export default SearchPage;
