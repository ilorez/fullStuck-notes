import { DateRangePicker } from 'react-date-range';
import React from 'react';
export default class MyComponent extends React.Component {
    handleSelect(ranges) {
        console.log(ranges);
        // {
        //   selection: {
        //     startDate: [native Date Object],
        //     endDate: [native Date Object],
        //   }
        // }
    }
    render() {
        const selectionRange = {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
        return (
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={this.handleSelect}
            />
        )
    }
}
