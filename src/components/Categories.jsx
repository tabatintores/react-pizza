export default function Categories({value, onClickCategory}) {
    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ]
    return (
        <div className="categories">
            <ul>
                {
                    categories.map((val, i) => (
                        <li
                            key={i}
                            className={value === i ? 'active' : ''}
                            onClick={() => onClickCategory(i)}
                        >
                            {val}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
