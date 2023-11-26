const NavbarCategory = (props: {
    name: string,
    categories: {
        name: string,
        url: string
    }[]
}) => {
    const { name } = props;

    return <label>{name}</label>
}

export default NavbarCategory;