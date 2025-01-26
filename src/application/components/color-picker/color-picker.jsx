import React from 'react';

const ColorPicker = ({ colors }) => {
    return (
        <a-box color="#F3F3F3"
               width="0.5"
               height="0.2"
               depth="0.01"
               position="0.5 1.9 -0.7"
               rotation="0 0 0"
               scale="1 1 1"
               opacity="0"
        >
            {colors.map(({ID, targetId, CODE, NAME, LABEL_CODE}, index) => {
                const xOffset = index * -0.15;
                return (
                    <a-circle id={ID}
                              color={CODE}
                              position={`${xOffset} 0 0.01`}
                              opacity="0.7"
                              side="double"
                              scale="0.05 0.05 0.05"
                              key={CODE}
                              event-set__enter={`_event: mouseenter; _target: #${ID}; material.opacity: 1;`}
                              event-set__update_text={`_event: click; _target: #${ID}-text; color: blue;`}
                    >
                        <a-text
                            id={`${ID}-text`}
                            scale="1.5 1.5 1.5"
                            value={NAME}
                            text={`align: center; color: ${LABEL_CODE}`}
                        />
                    </a-circle>
                );
            })}
        </a-box>
    )
};

export default ColorPicker;