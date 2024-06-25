 const Tag = ({children, color}) => (
    <span 
    style={{backgroundColor:color,
        borderRadius:'4px',
        color:'#fff',
        padding:'0.2rem 0.5rem',
        fontWeight:'bold'
    }}>{children}</span>
)
export default Tag;