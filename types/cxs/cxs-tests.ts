import * as React from 'react';
import cxsComponent = require('cxs/component');
import cxs = require('cxs');

/**
 * Standard calls to cxs to generate classNames
 */
cxs({
    color: 'red',
    ':hover': {
        color: 'green',
    },

    // @ts-expect-error
    borderWidth: () => {},
});

cxsComponent('div')({
    fontSize: 24,

    // @ts-expect-error
    content: {},
});

/** React component composition */
const ComponentA = () => React.createElement('div');

cxsComponent(ComponentA)({
    fontSize: 72,
});

// @ts-expect-error
cxsComponent(ComponentA)(true);

/** React composition with props callback */
type Props = {
    isActive: boolean;
};

const ComponentB = (props: Props) => React.createElement('div');

cxsComponent(ComponentB)((props: Props) => ({
    color: props.isActive ? 'blue' : 'purple',
}));
