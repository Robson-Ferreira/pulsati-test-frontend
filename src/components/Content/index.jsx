
import PropTypes from 'prop-types';

import { ContentWrapper } from './styles';

export const Content = ({ children }) => {
  return (
    <ContentWrapper>
      {children}
    </ContentWrapper>
  );
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
};
