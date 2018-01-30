import React, { Fragment } from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { BASE_CONF, Grid, Row, Col } from '..';

it('exports BASE_CONF', () => {
  expect(BASE_CONF).toMatchSnapshot();
});

it('exports <Grid />', () => {
  const tree = renderer.create(<Grid />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('exports <Row />', () => {
  const tree = renderer.create(<Row />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('exports <Col />', () => {
  const tree = renderer.create(<Col />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('is responsive', () => {
  const tree = renderer
    .create(
      <Fragment>
        <Row>
          <Col xs="12" sm="3" md="2" lg="1" />
          <Col xs="6" sm="6" md="8" lg="10" />
          <Col xs="6" sm="3" md="2" lg="1" />
        </Row>
        <Row>
          <Col xs="12" sm="3" md="2" lg="1" />
          <Col xs="12" sm="9" md="10" lg="11" />
        </Row>
        <Row>
          <Col xs="10" sm="6" md="8" lg="10" />
          <Col xs="2" sm="6" md="4" lg="2" />
        </Row>
      </Fragment>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('offsets', () => {
  const tree = renderer
    .create(
      <Row>
        <Col xsOffset="11" xs="1" />
        <Col xsOffset="10" xs="2" />
        <Col xsOffset="9" xs="3" />
        <Col xsOffset="8" xs="4" />
        <Col xsOffset="7" xs="5" />
        <Col xsOffset="6" xs="6" />
        <Col xsOffset="5" xs="7" />
        <Col xsOffset="4" xs="8" />
        <Col xsOffset="3" xs="9" />
        <Col xsOffset="2" xs="10" />
        <Col xsOffset="1" xs="11" />
      </Row>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('auto adjusts', () => {
  const tree = renderer
    .create(
      <Row>
        <Col xs />
        <Col xs />
        <Col xs />
      </Row>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('aligns', () => {
  const tree = renderer
    .create(
      <Fragment>
        <Row>
          <Col xs={12}>
            <Row start="xs">
              <Col xs={6} />
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Row center="xs">
              <Col xs={6} />
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Row end="xs">
              <Col xs={6} />
            </Row>
          </Col>
        </Row>
        <Row top="xs">
          <Col xs={6} />
          <Col xs={6} />
        </Row>
        <Row middle="xs">
          <Col xs={6} />
          <Col xs={6} />
        </Row>
        <Row bottom="xs">
          <Col xs={6} />
          <Col xs={6} />
        </Row>
      </Fragment>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('distributes', () => {
  const tree = renderer
    .create(
      <Fragment>
        <Row around="xs">
          <Col xs={2} />
          <Col xs={2} />
          <Col xs={2} />
        </Row>
        <Row between="xs">
          <Col xs={2} />
          <Col xs={2} />
          <Col xs={2} />
        </Row>
      </Fragment>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('hides', () => {
  const tree = renderer
    .create(
      <Row>
        <Col xs={12} md={6} />
        <Col xs={false} md={6} />
      </Row>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
