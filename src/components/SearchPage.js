import React from 'react';
import { TextInput, Heading, Paragraph, Main, Box } from 'grommet';

const SearchPage = () => {
  const [value, setValue] = React.useState('');
  const [results, setResults] = React.useState(null);

  const performSearch = (e) => {
    if (e.keyCode === 13) {
      window.location.href = `http://localhost:3000/search/char/${value}`;
    }
  }

  if (!results) {
    return (
      <Main>
        <Box>
          <Heading>Search</Heading>
          <Paragraph>By character or by outfit</Paragraph>
          <TextInput
            placeholder="type here"
            value={value}
            onChange={event => setValue(event.target.value)}
            onKeyDown={performSearch}
          />
        </Box>
      </Main>
    )
  }

  return (
    <TextInput
      placeholder="type here"
      value={value}
      onChange={event => setValue(event.target.value)}
      onKeyUp={performSearch}
    />
  );
}


export default SearchPage;
