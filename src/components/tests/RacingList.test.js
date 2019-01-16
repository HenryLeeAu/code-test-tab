import React from 'react';
import { RacingList } from 'components/RacingList';
import RacingListItem from 'components/RacingListItem';
import { shallow } from 'enzyme';
let wrappered;

describe('RacingList', () => {
 
  it('render 2 items', () => {
    const props = {
      fetchRacingList:jest.fn(),
      pageStatus:{
        filter:'G',
        sorted_data:[{
          raceStartTime:"2019-01-16T03:29:00.000Z",
          raceNumbe: 5,
          raceName: "HATRICK RACE 15",
          meeting:{
            raceType: "G",
            meetingName: "NEW ZEALAND",
            location: "NZL",
            meetingDate: "2019-01-16"
          }
        },
        {
          raceStartTime:"2019-01-16T03:30:00.000Z",
          raceNumbe: 5,
          raceName: "HATRICK RACE 15",
          meeting:{
            raceType: "G",
            meetingName: "Australia",
            location: "NZL",
            meetingDate: "2019-01-16"
          }
        }]
      }
    };
    
    wrappered = shallow(<RacingList {...props}  />);
    //setup a fake currentTime in case tests keep getting new time to rerender the snapshots 
    wrappered.setState({ currentTime: '1547616206953' });
    wrappered.update();
    expect(wrappered).toMatchSnapshot();
    expect(wrappered.find(RacingListItem).length).toBe(2);
  });

  it('render noresult', () => {
    const props = {
      fetchRacingList:jest.fn(),
      pageStatus:{
        filter:'G',
        sorted_data:[]
      }
    };
    
    wrappered = shallow(<RacingList {...props}  />);
    wrappered.update();
    expect(wrappered).toMatchSnapshot();
    expect(wrappered.find(RacingListItem).length).toBe(0);
  });
  
 
});
