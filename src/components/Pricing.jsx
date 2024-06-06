import React from 'react';
import  './Pricing.css';
import { PricingTableData} from './PricingTableData';

function Pricing() {
  return (
    <>
    <table className="table">
  <tbody>
    <tr>
      <th className="table__heading">Charges</th>
      <th className="table__heading">#</th>
      <th className="table__heading">#</th>
      <th className="table__heading">Timeline</th>
    </tr>
    {PricingTableData.map ((item, index) => {
        return (
            <tr className="table__row">
                <td className="table__content" data-heading="Paper">
                    {item.name}
                </td>
                <td className="table__content">
                    {item.basic}
                </td>
                <td className="table__content">
                    {item.advance}
                </td>
                <td className="table__content" data-heading="Timeline">
                    {item.timeline}
                </td>
            </tr>
        )
    })}    
  </tbody>
</table>
    </>
    
  )
}

export default Pricing;