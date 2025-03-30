import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GameDataObject = { [key: string]: any };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RoundTo3 = (number: number): number => +(Math.round(Number(number + 'e+3')) + 'e-3');
// eslint-disable-next-line @typescript-eslint/no-unused-vars, prefer-const
let cDd: GameDataObject = {};

const statNames = [
  'HP',
  'Walk speed',
  'Dash dx',
  'Dash f',
  'Dash cd',
  'Jump dy 1',
  'Jump dy 2',
] as const;

const statKeys = statNames.map((statName) => statName.toLowerCase().replaceAll(' ', ''));

const getStatValueAsString = (key: string, data: GameDataObject) => {
  if (key in data) {
    const statValue: number = parseFloat(data[key]);
    const statValueAsString = statValue.toFixed(
      ['hp', 'm2hp', 'dashf', 'm2dashf', 'dashcd', 'm2dashcd'].includes(key) ? 0 : 3,
    );
    if (['dashf', 'm2dashf', 'dashcd', 'm2dashcd'].includes(key)) {
      const statValueInSecondsAsString = (statValue / 60).toFixed(2);
      return statValueAsString + ' (' + statValueInSecondsAsString + 's)';
    }
    return statValueAsString;
  } else {
    return '';
  }
};

export default async function CharacterStats() {
  const mapDatas: GameDataObject = {};
  const classDatas: GameDataObject = {};
  const rows: { [key: string]: string }[] = [];

  const gameFetch = await fetch('https://bandit.rip/dist/game.js');
  const gameData = await gameFetch.text();

  eval(
    gameData.slice(
      gameData.indexOf('mapDatas["default"]='),
      gameData.indexOf(';', gameData.indexOf('mapDatas["default"]=')),
    ),
  );
  eval(
    gameData.slice(
      gameData.indexOf('classDatas["default"]'),
      gameData.indexOf('window["spritesDatas"]'),
    ),
  );

  const gravity = mapDatas.default.gravity;
  const maxFallDy = mapDatas.default.maxfalldy;

  for (const key in classDatas) {
    const data: GameDataObject = classDatas[key];

    const charData: { [key: string]: string } = { name: (data.name ?? key).replace('L t.', '') };
    for (const statKey of statKeys) {
      charData[statKey] = getStatValueAsString(statKey, data);
    }
    rows.push(charData);

    if ('m2walkspeed' in data) {
      const charAltData: { [key: string]: string } = { name: charData.name + ' (2)' };
      for (const statKey of statKeys) {
        charAltData[statKey] = getStatValueAsString('m2' + statKey, data);
      }
      rows.push(charAltData);
    }
  }

  return (
    <article>
      <h1>Character Stats</h1>

      <section className="mb-6">
        <p>
          For a character with name &ldquo;Name&rdquo; and an alternate form, the corresponding entry
          for the alternate form is denoted as &ldquo;Name (2)&rdquo;.
        </p>
        <p>
          To help contextualize the numbers, note that the game uses a gravity value of {gravity} and a max fall dy of {maxFallDy}.
        </p>
      </section>

      <TableContainer component={Paper}>
        <Table size="small" aria-label="character stats table">
          <TableHead sx={{ backgroundColor: '#999999' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
              {statNames.map((statName) => (
                <TableCell key={statName} sx={{ fontWeight: 'bold' }}>
                  {statName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  backgroundColor: index % 2 === 0 ? '#cccccc' : '#bfbfbf',
                }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                {Object.keys(row).map((statName) =>
                  statName === 'name' ? undefined : (
                    <TableCell key={statName}>{row[statName]}</TableCell>
                  ),
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </article>
  );
}
