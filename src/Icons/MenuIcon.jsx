

const MenuIcon = ({width, height, fill, stroke, className, onClick}) => {
    return (
        <svg  
            onClick={ () => { onClick() } }
            xmlns="http://www.w3.org/2000/svg"  
            width={width}  
            height={height}  
            viewBox="0 0 24 24"  
            fill={fill}  
            stroke={stroke}
            className={className}  
            strokeWidth="2"  
            strokeLinecap="round"  
            strokeLinejoin="round"  
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8l16 0" /><path d="M4 16l16 0" />
        </svg>
    )
}

export default MenuIcon;