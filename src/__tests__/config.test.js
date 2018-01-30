import config, { BASE_CONF, DIMENSION_NAMES } from '../config';

it('exports config', () => {
  expect(config).toMatchSnapshot();
});

it('exports BASE_CONF', () => {
  expect(BASE_CONF).toMatchSnapshot();
});

it('exports DIMENSION_NAMES', () => {
  expect(DIMENSION_NAMES).toMatchSnapshot();
});
