import React from "react";

const column = ({
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
        flexDirection: 'column',
        width,
        height,
        position:'relative',
        alignItems: alignHorizontal,
        justifyContent: alignVertically,
        ...styles
    }} className={className}>
        {children}
    </div>
)

export default column