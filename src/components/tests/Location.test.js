import React from 'react';
import { Location } from 'components/Location';
import { shallow } from 'enzyme';
let wrappered;
const props = {
  updateLocation:jest.fn(),
  pageStatus: {
    location: 'NSW',
  },
};
describe('Location', () => {
  beforeEach(() => {
    wrappered = shallow(<Location {...props} />);
  });
  it('render 2 buttons ', () => {
    expect(wrappered).toMatchSnapshot();
    expect(wrappered.find('button').length).toBe(2);
  });
  
  
  it('click NSW to send the action', () => {
    wrappered
      .find('button')
      .at(0)
      .simulate('click');
    wrappered.update();
    expect(props.updateLocation).toBeCalledWith({
      'location':'NSW'
    });

  })
});
