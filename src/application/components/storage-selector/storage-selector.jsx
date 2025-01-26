import React from 'react';

const StorageSelector = ({ options }) => {
    return (
        <a-box color="#F3F3F3"
               width="0.5"
               height="0.2"
               depth="0.01"
               position="0.5 1.6 -0.7"
               rotation="0 0 0"
               scale="1 1 1"
               opacity="0"
        >
            {options.map(({ID, NAME}, index) => {
                const yOffset = index * -0.15;
                return (
                    <a-box  id={ID}
                            color="#F3F3F3"
                            width="4.5"
                            height="2"
                            depth="0.01"
                            position={`-0.1 ${yOffset} 0`}
                            side="double"
                            scale="0.05 0.05 0.05"
                            key={NAME}
                            event-set__select={`_event: click; _target: #${ID}; color: blue;`}
                            event-set__update={`_event: click; _target: #${ID}-text; color: white;`}
                    >
                        <a-text
                            id={`${ID}-text`}
                            scale="3 3 3"
                            position="0.1 0 0.1"
                            value={NAME}
                            text="align: center; color: #000000;"
                        />
                    </a-box>
                );
            })}
        </a-box>
    )
};

export default StorageSelector;