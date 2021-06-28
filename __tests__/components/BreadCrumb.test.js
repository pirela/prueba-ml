
import { shallow } from 'enzyme';

import { categories } from '__mocks__';
import Breadcrumb from 'components/Breadcrumb/Breadcrumb';

describe('Breadcrumb', () => {
  it('should render correctly', () => {
    const component = shallow(
      <Breadcrumb
        categories={categories}
      />);
  
    expect(component).toMatchSnapshot();
  });
  it('should render categories', () => {
    const component = shallow(
      <Breadcrumb
        categories={categories}
      />);
      const length = component.find('.category').length;
      expect(length).toEqual(categories.length);
  });
});
