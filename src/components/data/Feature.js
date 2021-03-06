import React from 'react'
import {translateFeatureType} from '../../utils/dict'
import * as moment from 'moment'

const Feature = (props) => {
  const {featureType, additionalValue, additionalInfo, additionalInfoUri} = props.feature
  return (
    <li>
      <div>
        {translateFeatureType(featureType)}
        {featureType === 'OTHER' && <span> - {additionalInfo}</span>}
        {
          ( featureType === 'CARD_ACCESS' ||
            featureType === 'FREE_TXNS' ||
            featureType === 'LOYALTY_PROGRAM' ||
            featureType === 'INSURANCE' ||
            featureType === 'DIGITAL_WALLET' ||
            featureType === 'COMPLEMENTARY_PRODUCT_DISCOUNTS' ||
            featureType === 'NOTIFICATIONS' ||
            featureType === 'BONUS_REWARDS' ) &&
          <span> - {additionalValue}</span>
        }
        {
          ( featureType === 'ADDITIONAL_CARDS' ||
            featureType === 'UNLIMITED_TXNS' ||
            featureType === 'OFFSET' ||
            featureType === 'OVERDRAFT' ||
            featureType === 'REDRAW' ||
            featureType === 'BALANCE_TRANSFERS' ||
            featureType === 'DIGITAL_BANKING' ||
            featureType === 'NPP_PAYID' ||
            featureType === 'NPP_ENABLED' ||
            featureType === 'DONATE_INTEREST' ||
            featureType === 'BILL_PAYMENT') && !!additionalValue &&
          <span> - {additionalValue}</span>
        }
        {
          ( featureType === 'ADDITIONAL_CARDS' ||
            featureType === 'UNLIMITED_TXNS' ||
            featureType === 'OFFSET' ||
            featureType === 'OVERDRAFT' ||
            featureType === 'REDRAW' ||
            featureType === 'BALANCE_TRANSFERS' ||
            featureType === 'DIGITAL_BANKING' ||
            featureType === 'NPP_PAYID' ||
            featureType === 'NPP_ENABLED' ||
            featureType === 'DONATE_INTEREST' ||
            featureType === 'BILL_PAYMENT') && !!additionalInfo &&
          <div>{additionalInfo}</div>
        }
        {
          (featureType === 'INTEREST_FREE' || featureType === 'INTEREST_FREE_TRANSFERS') &&
          <span> - {moment.duration(additionalValue).humanize().replace('a ', 'every ')}</span>
        }
        {featureType === 'FREE_TXNS_ALLOWANCE' && <span> - ${additionalValue}</span>}
      </div>
      {!!additionalInfoUri && <div><a href={additionalInfoUri} target='_blank' rel='noopener noreferrer'>More info</a></div>}
    </li>
  )
}

export default Feature
