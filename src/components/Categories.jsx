import {useState} from "react";

export default function Categories() {
    const [activeCategory, setActiveCategory] = useState(0)
    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ]
    const onClickCategory = (index) => {
      setActiveCategory(index)
    }
    return (
        <div className="categories">
            <ul>
                {
                    categories.map((value, i) => (
                        <li
                            key={i}
                            className={activeCategory === i ? 'active' : ''}
                            onClick={() => onClickCategory(i)}
                        >
                            {value}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
