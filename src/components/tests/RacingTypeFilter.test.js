import React from 'react';
import { RaceTypeFilter } from 'components/RacingTypeFilter';
import { shallow } from 'enzyme';
let wrappered;
const props = {
  updateRacingType: jest.fn(),
  pageStatus: {
    filter: 'R',
  },
};
describe('Location', () => {
  beforeEach(() => {
    wrappered = shallow(<RaceTypeFilter {...props} />);
  });
  it('render 3 buttons and find class = clicked on tab1', () => {
    expect(wrappered).toMatchSnapshot();
    expect(wrappered.find('button').length).toBe(3);
    expect(
      wrappered
        .find('button')
        .at(0)
        .hasClass('clicked')
    ).toBeTruthy();
  });

  it('click Greyhounds tab to send the action', () => {
    wrappered
      .find('button')
      .at(1)
      .simulate('click');
    wrappered.update();
    expect(props.updateRacingType).toBeCalledWith({
      racingType: 'G',
    });
  });
});
