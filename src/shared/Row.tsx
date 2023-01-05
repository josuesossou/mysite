import React from "react";

const row = ({
    alignVertically = 'center',
    alignHorizontal = 'center',
    width='100%',
    height='auto',
    styles,
    className,
    children
}: any) => (
    <div style={{
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: alignVertically,
        width,
        height,
        position:'relative',
        justifyContent: alignHorizontal,
        ...styles
    }} className={className}>
        {children}
    </div>
)

export default row