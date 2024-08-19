type Props = {
    title: string,
    list: string[]
}

function FooterItem({ title, list }: Props) {
    return (
        <div className="flex-1">
            <h1 className="mb-8  font-bold text-textMainColor text-xl">{title}</h1>
            <ul className=" space-y-5">
                {
                    list.map((item) => <li><a href="#" className="hover:text-textSecondryColor">{item}</a></li>)
                }
            </ul>
        </div>
    )
}

export default FooterItem