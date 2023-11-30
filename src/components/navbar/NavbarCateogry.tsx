const NavbarCategory = (props: {
    name: string,
    categories: {
        name: string,
        url: string
    }[]
}) => {
    const { name } = props;

    return <label style={{
        fontWeight: '700',
        fontSize: '1.05rem'
    }}>{name}</label>
}

export default NavbarCategory;