import React from 'react';
import RacingListItem from 'components/RacingListItem';
import { shallow } from 'enzyme';
let wrappered;
const props = {
  currentTime:"2019-01-16T03:28:00.000Z",
  raceItem:{
    raceStartTime:"2019-01-16T03:29:00.000Z",
    raceName: "HATRICK RACE 15",
    raceNumbe: 5,
    meeting:{
      meetingName: "NEW ZEALAND",
      location: "NZL",
      meetingDate: "2019-01-16"
    }
  }
}
describe('RacingListItem', () => {
  
  it('render UI ', () => {
    wrappered = shallow(<RacingListItem {...props} />);
    expect(wrappered).toMatchSnapshot();
  });
});
