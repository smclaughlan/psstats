import React from 'react';
import { Form, TextInput, Paragraph, Main, Box, Button, Select } from 'grommet';
import { backEndURL } from '../config';

const SearchPage = () => {
  const [value, setValue] = React.useState('');
  const [results, setResults] = React.useState(null);
  const [selectValue, setSelectValue] = React.useState('Character');

  const performSearch = async (e) => {
    try {
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
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Main>
      <Box className="basic" animation="fadeIn">
        <Paragraph className="paragraph">Search by character or by outfit</Paragraph>
        {results && "errorCode" in results ?
          <Paragraph className="paragraph">Error! {results.errorMessage}</Paragraph>
          :
          <></>
        }
        <div className="searchInputs">
          <Form className="searchInputs" onSubmit={performSearch}>
            <TextInput
              placeholder="Enter search term here"
              value={value}
              onChange={event => setValue(event.target.value)}
            />
            <Button className="basicButton" type="submit" label="Search" />
          </Form>
        </div>
        <div className="searchInputs">
          <Select
            options={['Character', 'Outfit']}
            value={selectValue}
            onChange={({ option }) => setSelectValue(option)}
          />
        </div>
        {results ?
          <div className="searchResContainer">
            <Box className="invisible" direction="row" justify="evenly" alignContent="center" wrap={true} animation="fadeIn">
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
          :
          <></>
        }
      </Box>
    </Main>
  )
}



export default SearchPage;
