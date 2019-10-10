import React from 'react';
import PropTypes from 'prop-types';
import localeString from '../../utils/localeString';
import DetailSection from './DetailSection';

const FirearmDetail = ({item}) => {
  const data = [
    {
      title: 'Properties',
      rows: [
        {key: 'Class', value: localeString(item.class)},
        {key: 'Caliber', value: item.caliber},
        {
          key: 'Fold/Retract',
          value: item.foldRectractable ? 'Yes' : 'No',
          hideChevron: true
        }
      ]
    },
    {
      title: 'Performance',
      rows: [
        {
          key: 'Fire Modes',
          value: item.modes.join(', '),
          hideChevron: true
        },
        {key: 'Fire Rate', value: `${item.rof}rpm`, hideChevron: true},
        {
          key: 'Effective Range',
          value: `${item.effectiveDist}m`,
          hideChevron: true
        },
        {key: 'Compare Performance'}
      ]
    }
  ];

  return data.map((d) => <DetailSection key={d.title} section={d} />);
};

FirearmDetail.propTypes = {
  item: PropTypes.object.isRequired
};

export default FirearmDetail;
