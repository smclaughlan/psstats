import React, { useEffect } from 'react';
import { TextInput, Heading, Paragraph, Main, Box, Button, Select } from 'grommet';
import { backEndURL } from '../config';

const SearchPage = () => {
  const [value, setValue] = React.useState('');
  const [results, setResults] = React.useState(null);
  const [selectValue, setSelectValue] = React.useState('Character');

  const performSearch = async (e) => {
    try {
      if (e.keyCode === 13) {
        if (selectValue === 'Character') {
          const res = await fetch(`${backEndURL}/chars/${value.toLowerCase()}`);
          if (res.ok) {
            const resJson = await res.json();
            setResults(resJson);
          }
        }
        if (selectValue === 'Outfit') {
          const res = await fetch(`${backEndURL}/outfits/${value}`);
          if (res.ok) {
            const resJson = await res.json();
            setResults(resJson);
          }
        }
      }
    } catch (err) {
      console.error(err);
    }
  }

  if (!results) {
    return (
      <Main>
        <Box className="basic" animation="fadeIn">
          <Heading>Search</Heading>
          <Paragraph>By character or by outfit</Paragraph>
        </Box>
        <Box className="basic" animation="fadeIn">
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
        <Box className="basic" animation="fadeIn">
          <Heading>Search</Heading>
          <Paragraph>By character or by outfit</Paragraph>
        </Box>
        <Box className="basic" animation="fadeIn">
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
      <Box className="basic" animation="fadeIn">
        <Heading>Search</Heading>
        <Paragraph>By character or by outfit</Paragraph>
      </Box>
      <Box className="basic" animation="fadeIn">
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
        <div className="searchResContainer">
          <Box className="basic" direction="row" justify="evenly" alignContent="center" wrap={true} animation="fadeIn">
            {"character_name_list" in results ?
              results.character_name_list.map(character => {
                return (
                  <Button className="searchRes" key={character.name.first} href={`/char/${character.name.first}`} margin="medium" label={character.name.first} size="medium" />
                )
              }) : null}
            {"outfit_list" in results ?
              results.outfit_list.map(outfit => {
                if (outfit.alias.length < 1) {
                  return null;
                }
                return (
                  <Box key={outfit.outfit_id} className="outfitBox">
                    <Button className="searchRes" href={`/outfit/${outfit.outfit_id}`} margin="medium" size="medium" label={`${outfit.alias}`} />
                    <Paragraph>{outfit.name}</Paragraph>
                    <Paragraph>{`Created ${outfit.time_created_date.split(' ')[0]} with ${outfit.member_count} current members`}</Paragraph>
                  </Box>
                )
              }) : null}
          </Box>
        </div>
      </Box>
    </Main >
  );
}


export default SearchPage;
